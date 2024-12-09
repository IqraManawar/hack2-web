import React from 'react'; 
import Image from 'next/image';
const CarCard = ( ) => (
  <div className="car-card border rounded-lg p-4 shadow-md">
    <Image src="./Car.png" alt="image" className="w-50 h-48 object-cover rounded-md" />
    <h2 className="text-xl font-bold mt-2"></h2>
    <p className="text-gray-600"></p>
    <p className="text-lg font-semibold mt-2">Price: $80:00/day</p>
  </div>
);

export default CarCard;
