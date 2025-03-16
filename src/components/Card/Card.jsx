import React from 'react';

function Card({ name, price, img, content, tag }) {
  return (
    <div className='flex flex-col font-mono bg-white shadow-lg rounded-2xl overflow-hidden w-72 p-6 transition-transform transform hover:scale-105'>
      <div className='w-full h-48 flex justify-center items-center bg-gray-100'>
        <img 
          src={img} 
          alt='Shoes' 
          className='w-40 h-40 object-contain'
        />
      </div>

      <div className='text-left mt-4 px-3'>
        <p className='text-2xl font-bold text-gray-900'>₹{price}</p>
        <p className='text-gray-700 mt-1 text-lg'>{name}</p>
        <p className='text-gray-500 text-sm'>{content}</p>
        <span className='inline-block bg-green-500 text-white text-sm font-semibold px-4 py-1 mt-3 rounded-full'>{tag}</span>
      </div>
    </div>
  );
}

export default Card;
