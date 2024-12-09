"use client"
import React, { useState } from 'react';

const BillingInfo = () => {
  const [billingInfo] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
  });

  // const handleChange = () => {
  //   const { name, value } = this.props;
  //   setBillingInfo((prev) => ({ ...prev, [name]: value }));
  // };

  const handleSubmit = () => {
    if (Object.values(billingInfo).some((field) => field.trim() === '')) {
      alert('All fields are required.');
      return;
    }
  
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="billing-info border rounded-lg p-4 shadow-md mt-4"
    >
      <h2 className="text-xl font-bold mb-4">Billing Information</h2>

      <div className="form-group mb-3">
        <label htmlFor="name" className="block font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={billingInfo.name}
          placeholder="Enter your name"
          className="input-field w-full mt-1 p-2 border rounded"
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="address" className="block font-medium">
          Address
        </label>
        <input
          id="address"
          type="text"
          name="address"
          value={billingInfo.address}
          placeholder="Enter your address"
          className="input-field w-full mt-1 p-2 border rounded"
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="city" className="block font-medium">
          City
        </label>
        <input
          id="city"
          type="text"
          name="city"
          value={billingInfo.city}
          placeholder="Enter your city"
          className="input-field w-full mt-1 p-2 border rounded"
          required
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="zip" className="block font-medium">
          ZIP Code
        </label>
        <input
          id="zip"
          type="text"
          name="zip"
          value={billingInfo.zip}
          placeholder="Enter your ZIP code"
          className="input-field w-full mt-1 p-2 border rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default BillingInfo;
