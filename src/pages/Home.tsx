import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300 opacity-30 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 opacity-20 rounded-full blur-2xl z-0" />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-200 opacity-30 rounded-full blur-2xl z-0 -translate-x-1/2 -translate-y-1/2" />
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-12">
        <h1 className="text-6xl md:text-7xl font-extrabold text-blue-700 mb-6 drop-shadow-lg tracking-tight animate-fade-in">
          ShopTop
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 mb-10 font-medium animate-fade-in delay-200">
          Your one-stop shop for everything you love.
        </p>
        <Link
          to="/store"
          className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full text-xl font-bold shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 animate-fade-in delay-400"
        >
          Enter Store
        </Link>
      </div>
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-32 z-0"
        viewBox="0 0 1440 320"
        fill="none"
        preserveAspectRatio="none"
      >
        <path fill="#3B82F6" fillOpacity="0.15">
          <animate
            attributeName="d"
            dur="5s"
            repeatCount="indefinite"
            values="
              M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,197.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,240L48,218.7C96,197,192,155,288,160C384,165,480,219,576,213.3C672,208,768,144,864,144C960,144,1056,208,1152,213.3C1248,219,1344,165,1392,138.7L1440,112L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,197.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
            "
          />
        </path>
      </svg>
      <style>{`
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }
        .animate-fade-in.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fade-in.delay-400 {
          animation-delay: 0.4s;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </main>
  );
}
