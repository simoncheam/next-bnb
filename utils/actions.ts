'use server';

import { revalidatePath } from 'next/cache';
import db from './db';
import { createReviewSchema, imageSchema, profileSchema, propertySchema, validateWithZodSchema } from './schemas';
//! gets info from user - server env
import { clerkClient, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { uploadImage } from './supabase';

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) throw new Error('You must be logged in to access this route');

  if (!user.privateMetadata.hasProfile) redirect('/profile/create');
  return user;
};

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return { message: error instanceof Error ? error.message : 'there was an error' };
};

export const createProfileAction = async (prevState: any, formData: FormData) => {
  // const firstName = formData.get('firstName') as string;
  // console.log(firstName);
  // return { message: 'Profile created' };

  try {
    // get current user
    const user = await currentUser();

    if (!user) throw new Error('Please login to create new user');

    console.log(user);

    //takes all fields and sets up in object
    const rawData = Object.fromEntries(formData);
    const validatedFields = await validateWithZodSchema(profileSchema, rawData);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? '',
        ...validatedFields,
      },
    });

    // updates clerk metadata - for future authorization
    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
  } catch (error) {
    console.log(error);
    return renderError(error);
    // return { message: error instanceof Error ? error.message : 'there was an error' };
  }

  redirect('/');
};

export const fetchProfileImage = async () => {
  const user = await currentUser();
  if (!user) return null;

  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
    select: {
      profileImage: true,
    },
  });

  return profile?.profileImage;
};

export const fetchProfile = async () => {
  const user = await getAuthUser();

  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
  });

  if (!profile) {
    redirect('/profile/create');
  }
  return profile;
};

export const updateProfileAction = async (prevState: any, formData: FormData): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    // create helper function for error handling

    const validatedFields = await validateWithZodSchema(profileSchema, rawData);

    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: validatedFields,
    });
    revalidatePath('/profile');
    return { message: 'Update Profile action' };
  } catch (error) {
    return renderError(error);
  }
};

export const updateProfileImageAction = async (prevState: any, formData: FormData): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    //get file from input field
    const image = formData.get('image') as File;
    //validate image
    const validatedFields = validateWithZodSchema(imageSchema, { image });
    console.log(validatedFields);

    const fullPath = await uploadImage(validatedFields.image);

    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: {
        profileImage: fullPath,
      },
    });
    revalidatePath('/profile');
    return { message: 'Profile image updated successfully' };
  } catch (error) {
    return renderError(error);
  }
};

export const createPropertyAction = async (prevState: any, formData: FormData): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    //get raw data from input field
    const rawData = Object.fromEntries(formData);
    const file = formData.get('image') as File;

    //! compares propertySchema with rawData
    const validatedFields = validateWithZodSchema(propertySchema, rawData);
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });

    const fullPath = await uploadImage(validatedFile.image);

    await db.property.create({
      data: {
        ...validatedFields,
        image: fullPath,
        profileId: user.id,
      },
    });
  } catch (error) {
    return renderError(error);
  }
  // redirect to homepage
  redirect('/');
};

export const fetchProperties = async ({ search = '', category }: { search?: string; category?: string }) => {
  const properties = await db.property.findMany({
    where: {
      category,
      OR: [{ name: { contains: search, mode: 'insensitive' } }, { tagline: { contains: search, mode: 'insensitive' } }],
    },
    select: {
      id: true,
      name: true,
      tagline: true,
      image: true,
      price: true,
      country: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return properties;
};

export const fetchFavoriteId = async ({ propertyId }: { propertyId: string }) => {
  const user = await getAuthUser();
  const favorite = await db.favorite.findFirst({
    where: {
      propertyId,
      profileId: user.id,
    },

    select: {
      id: true,
    },
  });
  return favorite?.id || null;
};

export const toggleFavoriteAction = async (prevState: {
  propertyId: string;
  favoriteId: string | null;
  pathname: string;
}) => {
  const user = await getAuthUser();

  const { propertyId, favoriteId, pathname } = prevState;

  try {
    // if favoriteId -> already in favorites, delete it

    if (favoriteId) {
      await db.favorite.delete({
        where: {
          id: favoriteId,
        },
      });
    } else {
      await db.favorite.create({
        data: {
          propertyId,
          profileId: user.id,
        },
      });
    }
    revalidatePath(pathname);
    return { message: favoriteId ? 'Removed from favorites' : 'Added to favorites' };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchFavorites = async () => {
  const user = await getAuthUser();

  const favorites = await db.favorite.findMany({
    where: {
      profileId: user.id,
    },

    select: {
      property: {
        select: {
          id: true,
          name: true,
          tagline: true,
          image: true,
          price: true,
          country: true,
        },
      },
    },
  });
  return favorites.map((favorite) => favorite.property);
};

export const fetchPropertyDetails = (id: string) => {
  return db.property.findUnique({
    where: {
      id,
    },
    include: {
      profile: true,
    },
  });
};

export const createReviewAction = async (prevState: any, formData: FormData) => {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);

    const validatedFields = validateWithZodSchema(createReviewSchema, rawData);

    await db.review.create({
      data: {
        ...validatedFields,
        profileId: user.id,
      },
    });
    revalidatePath(`/properties/${validatedFields.propertyId}`);

    return { message: 'Review submitted successfully' };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchPropertyReviews = async () => {
  return { message: 'fetch reviews' };
};

export const fetchPropertyReviewsByUser = async () => {
  return { message: 'fetch user reviews' };
};

export const deleteReviewAction = async () => {
  return { message: 'delete  reviews' };
};
