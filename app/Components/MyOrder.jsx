import Image from 'next/image';
import Image1 from '../assets/productimage1.png';

export default function MyOrder({onClick}) {
  return (
    <div 
      onClick={onClick}
      className="w-full bg-white mx-auto font-sans my-4 sm:my-8 border border-gray-300 rounded-lg">
      <div className="rounded-lg">
        {/* Order Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-4 sm:mb-6 bg-gray-100 border-b border-gray-300 rounded-lg p-3 sm:p-4">
          <div className="mb-4 sm:mb-0">
            <div className="text-xs sm:text-sm text-gray-600">ORDER PLACED</div>
            <div className="text-sm sm:text-base font-semibold">30 September 2024</div>
          </div>
          <div className="mb-4 sm:mb-0">
            <div className="text-xs sm:text-sm text-gray-600">TOTAL</div>
            <div className="text-sm sm:text-base font-semibold">₹47579</div>
          </div>
          <div className="mb-4 sm:mb-0">
            <div className="text-xs sm:text-sm text-gray-600">SHIP TO</div>
            <div className="text-sm sm:text-base font-semibold text-secondary cursor-pointer">Jaydeep Das ▼</div>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-xs sm:text-sm text-gray-600">ORDER # 171-9789752-6782475</div>
            <div className="flex flex-col sm:flex-row sm:space-x-2">
              <span className="text-xs sm:text-sm text-onPrimary cursor-pointer">View order details</span>
              <span className="text-xs sm:text-sm text-onPrimary cursor-pointer">Invoice ▼</span>
            </div>
          </div>
        </div>
        <div className='p-3 sm:p-4 sm:px-6'> 
        {/* Order Status */}
        <div className="mb-3 sm:mb-4">
          <div className="text-base sm:text-lg font-semibold text-green-600">Arriving Thu, 10 Oct</div>
          <div className="text-xs sm:text-sm text-gray-600">Preparing for Dispatch</div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-4">
          <Image
            src={Image1.src}
            alt="Pihtara Jewels Himalayan"
            width={80}
            height={80}
            className="rounded-md w-20 h-20 sm:w-24 sm:h-24 object-cover"
          />
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-onPrimary">Pihtara Jewels Himalayan from veliciae woman collection</h3>
            <p className="text-xs sm:text-sm text-gray-600">Pihtara Jewels Himalayan offers a stunning collection of handcrafted jewelry inspired by the majestic Himalayas.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
          <button className="bg-secondary text-onSurface px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm hover:bg-accent transition duration-300">
            Track package
          </button>
          <button className="border border-gray-300 text-gray-700 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition duration-300">
            View or edit order
          </button>
        </div>
        <div className="h-[1px] w-full mt-4 sm:mt-5 bg-gray-300"></div>
        {/* Archive Order */}
        <div className="mt-2 text-sm text-onPrimary cursor-pointer">
          Archive Order
        </div>
        </div>
      </div>
    </div>
  );
}
