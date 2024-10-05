
export default function DeliveryAddress() {
    return (
        <>
            {/* Delivery Address */}
            <div className="mt-6">
                <h3 className=" text-onSurface font-medium mb-2">Deliver to</h3>
                <div className="bg-gray-200 border rounded-lg p-4 flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-onSurface text-sm">
                        Major Arterial Road, Action Area II, Newtown,<br />
                        Kadampukur, West Bengal 700135
                    </p>
                </div>
                <button className="text-onPrimary text-sm mt-2 hover:translate-x-2 transition-all duration-300">
                    Other Addresses
                </button>
            </div>

        </>
    )
}

