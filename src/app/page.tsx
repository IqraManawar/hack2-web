"use client"

import React, { useState } from 'react';
import CarCard from "./component/carcard";
import RentalSummary from "./component/rentalsumm";
import BillingInfo from "./component/billinginfo";
import PaymentMethod from "./component/paymethod";
import ConfirmationCode from "./component/confirmation";

const Home = () => {
  const [rental] = useState(null);
  const [billingInfo] = useState(null);
  const [paymentMethod] = useState(null);
  const [confirmationCode] = useState(null);

  // const cars = [
  //   { name: 'Car A', description: 'Description A', price: 100, image: '/car-a.jpg' },
  //   { name: 'Car B', description: 'Description B', price: 150, image: '/car-b.jpg' },
  // ];

  // const handleRental = (car) => {
  //   setRental({ carName: car.name, duration: 3, totalPrice: car.price * 3 });
  // };

  // const handleBillingInfoSubmit = (info) => {
  //   setBillingInfo(info);
  // };

  // const handlePaymentSubmit = (method) => {
  //   setPaymentMethod(method);
  //   setConfirmationCode('ABC123');
  // };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Car Rental Website</h1>
      <div className="car-list grid grid-cols-1 md:grid-cols-2 gap-4">
    
          <div>
            <CarCard />
          </div>
      
      </div>
      {rental && <RentalSummary />}
      {rental && !billingInfo && <BillingInfo  />}
      {billingInfo && !paymentMethod && <PaymentMethod  />}
      {confirmationCode && <ConfirmationCode  />}
    </div>
  );
};

export default Home;