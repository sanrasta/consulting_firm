export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder's Background */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
          <div className="prose prose-lg">
            <p className="text-xl text-gray-600 mb-8">
              Founded by a Wharton and Penn graduate with experience at Google, we bring elite credentials and a global perspective to every engagement.
            </p>
            <blockquote className="border-l-4 border-blue-600 pl-4 my-8 italic text-gray-700">
              &quot;There are no secret mountains of knowledge—just experience, hard work, and perseverance.&quot;
            </blockquote>
          </div>
        </section>

        {/* Strengths */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Our Strengths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Quick Adaptability</h3>
              <p className="text-gray-600">We excel at navigating diverse industries and adapting to unique challenges.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Global Network</h3>
              <p className="text-gray-600">Strong connections across South & Southeast Asia and beyond.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Elite Credentials</h3>
              <p className="text-gray-600">Top-tier education and professional experience.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Expert Access</h3>
              <p className="text-gray-600">On-demand access to specialized experts for each project.</p>
            </div>
          </div>
        </section>

        {/* Work Style */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Our Approach</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Straight Shooter</h3>
            <p className="text-gray-600 text-lg">
              We believe in simple, fair, and clear communication. No jargon, no fluff—just straightforward solutions that work.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 