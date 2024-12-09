"use client"

import React, { useState } from 'react';

const PaymentMethod = () => {
  const [] = useState('');

//   const handleChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onPaymentSubmit(paymentMethod);
//   };

  return (
    <form className="payment-method border rounded-lg p-4 shadow-md mt-4">
      <h2 className="text-xl font-bold">Payment Method</h2>
      <select  className="input-field mt-2">
        <option value="">Select Payment Method</option>
        <option value="credit-card">Credit Card</option>
        <option value="paypal">PayPal</option>
      </select>
      <button type="submit" className="btn mt-4">Submit</button>
    </form>
  );
};

export default PaymentMethod;