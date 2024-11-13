import { calculateDaysBetween } from './calendar';

type BookingDetails = {
  checkIn: Date;
  checkOut: Date;
  price: number;
};

export const calculateTotals = ({ checkIn, checkOut, price }: BookingDetails) => {
  const totalNights = calculateDaysBetween({ checkIn, checkOut });
  const subTotal = totalNights * price;
  const cleaning = 25;
  const service = 40;
  const tax = subTotal * 0.07;
  const orderTotal = subTotal + cleaning + service + tax;
  return {
    totalNights,
    subTotal,
    cleaning,
    service,
    tax,
    orderTotal,
  };
};
