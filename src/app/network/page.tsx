export default function Network() {
  // This would typically come from a CMS or database
  const experts = [
    {
      name: "Dr. Sarah Chen",
      expertise: "Market Entry Strategy",
      region: "Southeast Asia",
      available: true
    },
    {
      name: "Michael Rodriguez",
      expertise: "Business Development",
      region: "Latin America",
      available: true
    },
    {
      name: "Priya Sharma",
      expertise: "Digital Transformation",
      region: "South Asia",
      available: false
    },
    {
      name: "James Wilson",
      expertise: "Regulatory Compliance",
      region: "Europe",
      available: true
    },
    {
      name: "Aisha Patel",
      expertise: "Consumer Insights",
      region: "Middle East",
      available: true
    },
    {
      name: "David Kim",
      expertise: "Technology Strategy",
      region: "East Asia",
      available: false
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-white mb-6">Our Advisory Network</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When needed, we call on senior experts we trust. Our network spans industries and regions, bringing specialized knowledge to every engagement.
          </p>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{expert.name}</h3>
                  <p className="text-gray-600">{expert.expertise}</p>
                </div>
                {expert.available && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Available
                  </span>
                )}
              </div>
              <div className="flex items-center text-gray-500">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {expert.region}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Expert Support?</h2>
          <p className="text-gray-600 mb-8">
            Our network is ready to help with your specific challenges. Let&apos;s discuss how we can support your goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
} 