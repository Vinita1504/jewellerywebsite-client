'use client'
import React from 'react'

const AddressGrid = ({addresses, setIsAdding}) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {addresses.map((address, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 relative">
            <h3 className="font-bold text-lg mb-2">{address.name}</h3>
            <p className="text-sm mb-1">{address.flatNumber}, {address.streetLocality}</p>
            <p className="text-sm mb-1">{address.area}</p>
            <p className="text-sm mb-1">{address.city}, {address.state} {address.pincode}</p>
            <p className="text-sm mb-2">Phone number: {address.phone}</p>
            <div className="flex justify-between items-center text-sm text-blue-600">
              <button className="text-onPrimary">Edit</button>
              <div className="w-px h-4 bg-accent mx-2"></div>
              <button className="text-onPrimary">Remove</button>
              <div className="w-px h-4 bg-accent mx-2"></div>
              <button className="text-onPrimary">Set as Default</button>
            </div>
            {index === 0 && (
              <div className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                Default
              </div>
            )}
          </div>
        ))}
        <div 
          onClick={()=> setIsAdding(true)}
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors duration-200">
          <div className="text-4xl text-gray-300 mb-2">+</div>
          <p className="text-gray-500">Add address</p>
        </div>
      </div>
      
    </div>
  )
}

export default AddressGrid
