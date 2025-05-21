export default function Services() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-white mb-6">What We Do Best</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic advisory services designed to help your business thrive in new markets and scale effectively.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="p-8 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">New Market Launches</h3>
            <p className="text-gray-600">
              Comprehensive market entry strategies, including market research, regulatory compliance, and local partnership development.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Go-To-Market Strategy</h3>
            <p className="text-gray-600">
              End-to-end planning and execution support for successful product launches and market penetration.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Business Development</h3>
            <p className="text-gray-600">
              Strategic partnerships, growth initiatives, and expansion planning for sustainable business growth.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Expansion Planning</h3>
            <p className="text-gray-600">
              Detailed roadmaps and execution support for scaling operations across new regions and markets.
            </p>
          </div>
        </div>

        {/* Ethics Section */}
        <section className="bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Ethics & Selectivity</h2>
          <p className="text-xl text-gray-600 mb-8 text-center">
            We are selective about partnerships and committed to ethical business practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-red-500 text-2xl mb-4">❌</div>
              <p className="text-gray-600">No defense-related clients</p>
            </div>
            <div className="text-center">
              <div className="text-red-500 text-2xl mb-4">❌</div>
              <p className="text-gray-600">No intelligence-related work</p>
            </div>
            <div className="text-center">
              <div className="text-red-500 text-2xl mb-4">❌</div>
              <p className="text-gray-600">No exploitative consumer practices</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 