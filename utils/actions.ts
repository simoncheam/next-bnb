'use server';

import { profileSchema } from './schemas';
import db from './db';
//! gets info from user - server env
import { auth, clerkClient, currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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

    const validatedFields = profileSchema.parse(rawData);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? '',
        ...validatedFields,
      },
    });

    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });

    return { message: 'profile created' };
  } catch (error) {
    console.log(error);
    return { message: error instanceof Error ? error.message : 'there was an error' };
  }
};
