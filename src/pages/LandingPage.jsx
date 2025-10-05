import React from 'react';
// Note: We don't need useNavigate as we are using window.location.href

export default function LandingPage() {
  const handleNavigation = () => {
    // Direct window location change no upyog karo
    window.location.href = '/dashboard';
  };

  // Content for the second container, formatted for easy reading
  const content = {
    title: "Unveiling the Universe's Hidden Worlds",
    body: (
      <>
        For millennia, humanity only knew the eight planets of our Solar System. Today, the census of the cosmos has exploded, with <span className="text-pink-300 font-semibold">over 5,000 confirmed exoplanets</span>—worlds orbiting stars other than our Sun. These celestial bodies have revealed a dizzying diversity far beyond our expectations. Astronomers have found <span className="text-cyan-400 font-semibold">"Hot Jupiters"</span> (massive gas giants hugging their stars), <span className="text-pink-300 font-semibold">"Super-Earths"</span> and <span className="text-pink-300 font-semibold">"Mini-Neptunes"</span> (sizes absent from our own neighborhood), and <span className="text-cyan-400 font-semibold">"Terrestrial"</span> rocky worlds.
      </>
    ),
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Video Container - Stays Fixed on Top */}
      <div className="fixed inset-0 w-full h-full -z-10">
        {/* VIDEO ELEMENT for seamless background */}
        <video
          autoPlay
          loop
          muted
          playsInline // Important for mobile performance
          className="w-full h-full object-cover"
          src="/web3.mp4"
        >
          {/* Fallback source for older browsers */}
          <source src="/web3.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay (Maintained for text legibility) */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* -------------------- Container 1: Hero Section Content -------------------- */}
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

      {/* -------------------- Container 2: Unveiling Worlds (Styled like the image) -------------------- */}
      {/* Changed items-start to items-center to vertically center the content */}
      <div className="relative z-10 flex items-center justify-center pt-10 pb-40 px-4 text-white min-h-[50vh] md:min-h-screen">
        
        {/* Content box with glassmorphism, glowing border, and rounded corners */}
        <div
          className="relative z-20 max-w-5xl mx-auto p-8 md:p-16 rounded-[4rem] text-center"
          style={{
            // Glassmorphism effect: dark background with blur
            backgroundColor: 'rgba(5, 5, 20, 0.7)', 
            backdropFilter: 'blur(10px)',
            // Custom glowing border effect (similar to the image)
            border: '2px solid rgba(187, 110, 251, 0.5)',
            boxShadow: '0 0 40px rgba(187, 110, 251, 0.2), inset 0 0 20px rgba(187, 110, 251, 0.1)',
          }}
        >
          <h2
            className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-6 text-white"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            {content.title}
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed text-gray-200 text-left md:px-12">
            {content.body}
          </p>
        </div>
      </div>
    </div>
  );
}
