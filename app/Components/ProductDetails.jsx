import Image from 'next/image';
import DeliveryAddress from './DeliveryAddress';
import Image1 from '../assets/productimage1.png';

export default function ProductDetails() {
    return (
       <>
       {/* Left side - Product details */}
       <div className="w-full  bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/3 bg-gray-100 rounded-lg mb-4 sm:mb-0 sm:mr-4">
              <Image
                src={Image1.src}
                alt="Pihtara Jewels Himalayan"
                width={300}
                height={300}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="w-full sm:w-2/3">
              <h2 className="text-2xl font-semibold text-onPrimary">Pihtara Jewels Himalayan</h2>
              <p className="text-gray-500 mb-2">From Veliciae Woman collection</p>
              <p className="text-2xl font-bold text-onPrimary mb-1">Rs 47,579</p>
              <p className="text-sm text-gray-500">Includes all taxes</p>
              
              <div className="mt-4 text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Metal</span>
                  <span className='text-gray-700'>18Kt White Gold, 7.91 gram</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Stone</span>
                  <span className='text-gray-700 '> 26 Diamond, 0.5200 Carat, SI IJ</span>
                </div>
                
              </div>
            </div>
          </div>
          <DeliveryAddress />
        </div>
      </>
    )
}

