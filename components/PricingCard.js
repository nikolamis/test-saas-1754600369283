export default function PricingCard({ plan, isPopular = false }) {
  return (
    <div className={`relative bg-white rounded-lg shadow-lg p-8 ${isPopular ? 'ring-2 ring-blue-500' : ''}`}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
          <span className="text-gray-600">/month</span>
        </div>
        
        <ul className="space-y-4 mb-8">
          <li className="flex items-center justify-center">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {plan.requests} requests per month
          </li>
          <li className="flex items-center justify-center">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            24/7 support
          </li>
          <li className="flex items-center justify-center">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            API access
          </li>
        </ul>
        
        <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
          isPopular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}>
          Get Started
        </button>
      </div>
    </div>
  );
}