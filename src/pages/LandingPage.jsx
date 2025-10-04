export default function LandingPage() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Container 1 - Hero Section (UNCHANGED) */}
      <section className="h-screen snap-start relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/container11.png"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1
            className="text-6xl md:text-7xl font-black uppercase text-white mb-8 tracking-wider"
            style={{
              fontFamily: 'Oswald, sans-serif',
              letterSpacing: '3px',
              textShadow:
                '0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(187, 110, 251, 0.3)',
            }}
          >
            THE UNKNOWN
          </h1>

          <button
            className="px-8 py-4 text-lg font-bold text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #BB6EFB 0%, #FF8EDF 100%)',
              fontFamily: 'Montserrat, sans-serif',
              boxShadow:
                '0 0 30px rgba(187, 110, 251, 0.4), 0 0 60px rgba(255, 142, 223, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow =
                '0 0 40px rgba(187, 110, 251, 0.6), 0 0 80px rgba(255, 142, 223, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow =
                '0 0 30px rgba(187, 110, 251, 0.4), 0 0 60px rgba(255, 142, 223, 0.2)';
            }}
          >
            Start Prediction Now
          </button>
        </div>
      </section>

      {/* Container 2 - Mission / AI Story (MODIFIED) */}
      <section className="h-screen snap-start relative overflow-hidden">
        {/* Background Image for Container 2 */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/container22.png" // **Replace this with your image path**
            alt="Mission Background"
            className="w-full h-full object-cover"
          />
          {/* Optional: Add a dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 h-full flex items-center px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Mission Content */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Harnessing the power of NASA's revolutionary space telescopes - Kepler, K2, and TESS - 
                we've developed cutting-edge AI models to classify and discover exoplanets in the vast cosmos.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our advanced machine learning algorithms analyze light curve data to identify planetary 
                transits, helping us unlock the mysteries of distant worlds and expand our understanding 
                of the universe.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30">
                  Kepler Mission
                </span>
                <span className="px-4 py-2 bg-pink-600/20 text-pink-300 rounded-full border border-pink-500/30">
                  K2 Mission
                </span>
                <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30">
                  TESS Mission
                </span>
              </div>
            </div>

            {/* Right Column - This column is now empty */}
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
}