"use client"
import Image from 'next/image';
import Image1 from '../assets/productimage1.png';

export default function OrderDetail() {
    return (
      <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8 bg-surface">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
          <p className="text-onPrimary italic text-sm sm:text-base mb-2 sm:mb-0">
            Ordered on <span className="font-semibold">30 September 2024</span><br className="sm:hidden" /> Order# <span className="font-semibold">171-5787672-8744364</span>
          </p>
          <button className="text-onPrimary font-semibold hover:text-accent transition-colors duration-300 hover:underline text-sm sm:text-base">
            Invoice <span className="ml-1">▼</span>
          </button>
        </div>
        
        <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 transition-shadow duration-300 border-2 border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="border-b sm:border-b-0 sm:border-r border-gray-200 pb-4 sm:pb-0 sm:pr-6">
              <h2 className="font-semibold mb-3 text-lg text-gray-800">Shipping Address</h2>
              <p className="text-sm text-gray-600">Joydeep Das</p>
              <p className="text-sm text-gray-600">Amity University, Kolkata, Major</p>
              <p className="text-sm text-gray-600">Arterial Road</p>
              <p className="text-sm text-gray-600">Action Area II, Rajarhat, New Town</p>
              <p className="text-sm text-gray-600">NEW TOWN, WEST BENGAL 700135</p>
              <p className="text-sm text-gray-600">India</p>
            </div>
            <div className="border-b lg:border-b-0 lg:border-r border-gray-200 pb-4 lg:pb-0 lg:pr-6">
              <h2 className="font-semibold mb-3 text-lg text-gray-800">Payment Method</h2>
              <p className="text-sm text-gray-600">Pay on Delivery</p>
            </div>
            <div>
              <h2 className="font-semibold mb-3 text-lg text-gray-800">Order Summary</h2>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Item(s) Subtotal:</span>
                <span>₹45,786</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Shipping:</span>
                <span>₹0</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Cash/Pay on Delivery fee:</span>
                <span>₹0</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Total:</span>
                <span>₹45,786</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Promotion Applied:</span>
                <span>-₹0</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-gray-800 mt-2 pt-2 border-t border-gray-200">
                <span>Grand Total:</span>
                <span>₹45,786</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg p-4 sm:p-6 md:p-8 transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b border-primary pb-4">
            <div className="mb-4 sm:mb-0">
              <h2 className="font-bold text-xl sm:text-2xl text-onPrimary">Your Exquisite Selection</h2>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <button className="bg-secondary text-onSurface font-semibold py-2 px-4 sm:px-6 rounded-full hover:bg-accent transition-all duration-300 hover:shadow-md text-xs sm:text-sm">
                Track your treasure
              </button>
              <button className="border border-primary text-onPrimary font-semibold py-2 px-4 sm:px-6 rounded-full hover:bg-surface transition-all duration-300 hover:shadow-md text-sm sm:text-base">
                View or edit order
              </button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-8 transform hover:scale-105 transition-transform duration-300">
              <Image
                src={Image1.src}
                alt="Pihtora Jewels Himalayan"
                width={600}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-auto"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="font-bold text-xl sm:text-2xl text-onPrimary mb-2">Pihtora Jewels Himalayan</h3>
              <p className="text-gray-500 text-sm mb-2">From the Veliciae Woman collection</p>
              <p className="font-bold text-2xl sm:text-3xl text-onSurface mb-3">₹45,786</p>
              <p className="text-onSurface leading-relaxed text-sm sm:text-base">
                Embrace the ethereal beauty of the Himalayas with this exquisite piece. Handcrafted with love and precision, 
                this stunning jewelry captures the essence of nature's grandeur, adding a touch of elegance to your style.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }