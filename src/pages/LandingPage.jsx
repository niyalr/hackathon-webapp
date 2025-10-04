import React from 'react';
// useNavigate hook ni jarur nathi, karan ke hu direct window location use kariશ
// import { useNavigate } from "react-router-dom"; 

export default function LandingPage() {
  // const navigate = useNavigate(); // Aa line remove karvani chhe

  const handleNavigation = () => {
    // Direct window location change no upyog karo
    window.location.href = '/dashboard';
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* VIDEO ELEMENT for seamless background */}
        <video
          autoPlay
          loop
          muted
          playsInline // Important for mobile performance
          className="w-full h-full object-cover"
          // --- IMPORTANT: REPLACE THIS SRC WITH YOUR VIDEO PATH ---
          src="/web page video.mp4" 
          // --- Fallback image (if video fails to load) ---
          poster="/HERO PAGE4.jpg" 
        >
          {/* Fallback source for older browsers */}
          <source src="/your-cosmic-video.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay (Maintained for text legibility) */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Section Content (Relative Z-index ensures content is above video) */}
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
          onClick={handleNavigation} // Function call ne badlavyo chhe
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
