import BookingCar from '@/Components/pages/User/BookingCars'
import React from 'react'
export const metadata = {
  title: "Booking",
  description: "Booking Page",
};
const BookingPage = () => {
  return (
    <main>
      
      <BookingCar />
{/* 
      <div>
        <BookingVendor />
      </div> */}
    </main>
  )
}

export default BookingPage