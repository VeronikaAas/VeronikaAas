import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 relative">
      <h1 className="text-3xl sm:text-4xl md:text-5xl neon-text mb-10 animate-pulse">
        CHOOSE YOUR VIBE
      </h1>

      <div className="flex flex-col sm:flex-row gap-6 mb-12">
        <button
          onClick={() => navigate("/one?theme=cute")}
          className="px-6 py-4 bg-pink-400 text-white rounded-md shadow-[0_0_15px_#f472b6] hover:bg-pink-600 transition-all duration-300 cursor-pointer"
        >
          🌸 Cutesy Mode
        </button>
        <button
          onClick={() => navigate("/two?theme=dark")}
          className="px-6 py-4 bg-gray-800 text-white rounded-md shadow-[0_0_15px_#0f172a] hover:bg-black transition-all duration-300 cursor-pointer"
        >
          🕶️ Dark Mode
        </button>
      </div>

      <p className="text-sm blink">PRESS START</p>
    </div>
  );
}
