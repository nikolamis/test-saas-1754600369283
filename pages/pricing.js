import PricingCard from '../components/PricingCard';

export default function Pricing() {
  const plans = {
  "free": {
    "name": "Free",
    "price": 0,
    "requests": 100
  }
};

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {Object.entries(plans).map(([key, plan]) => (
            <PricingCard 
              key={key}
              plan={plan}
              isPopular={key === 'pro'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}