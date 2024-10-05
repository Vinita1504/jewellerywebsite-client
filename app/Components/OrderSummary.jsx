
export default function OrderSummary() {
    return (
        <div >
            {/* Right side - Order Summary */}
          <div className="w-full bg-white rounded-lg p-6  shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-onSurface">Order Summary</h2>
          
          <div className="space-y-4 text-onSurface">
            <div className="flex justify-between">
              <span>Subtotal :</span>
              <span className=' text-gray-700'>Rs 47,579</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping :</span>
              <span className=' text-gray-700'>Free</span>
            </div>
            <div className="flex justify-between">
              <span>Tax :</span>
              <span className=' text-gray-700'>Rs 2,421</span>
            </div>
            <div className="border-t border-gray-200 pt-4 flex justify-between font-semibold">
              <span className=' text-lg'>Total :</span>
              <span className=' text-lg'>Rs 50,000</span>
            </div>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="flex">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md bg-surface text-onSurface focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button className="bg-secondary text-onSurface font-semibold px-4 py-2 rounded-r-md hover:bg-accent transition duration-300">
                Apply
              </button>
            </div>
            <button className="w-full bg-primary text-onPrimary font-semibold py-3 rounded-md hover:bg-accent transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Proceed to Payment
            </button>
          </div>
        </div>
        </div>
    )
}

