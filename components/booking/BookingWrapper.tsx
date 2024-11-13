'use client';

import { useProperty } from '@/utils/store';
import { Booking } from '@/utils/types';
import BookingCalendar from './BookingCalendar';
import BookingContainer from './BookingContainer';
import { useEffect } from 'react';

type BookingWrapperProps = {
  propertyId: string;
  price: number;
  bookings: Booking[];
};

// This wrapper component will be used on prop detail page
// all other components will meet here
const BookingWrapper = ({ propertyId, price, bookings }: BookingWrapperProps) => {
  useEffect(() => {
    // set state with props
    useProperty.setState({
      propertyId,
      price,
      bookings,
    });
  }, []);

  // const setProperty = useProperty((state) => state.setProperty);

  return (
    <>
      <BookingCalendar />
      <BookingContainer />
    </>
  );
};
export default BookingWrapper;
