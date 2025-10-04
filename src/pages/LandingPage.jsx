export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/HERO PAGE4.jpg"  // ✅ Use public/ file path
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>


      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
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
    </div>
  );
}
