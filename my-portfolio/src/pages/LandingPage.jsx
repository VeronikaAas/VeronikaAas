import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl neon-text mb-10 animate-pulse">
        SELECT YOUR PLAYER
      </h1>

      <div className="flex flex-col sm:flex-row gap-6 mb-12">
        <button
          onClick={() => navigate("/one")}
          className="px-6 py-4 bg-pink-500 text-white rounded-md shadow-[0_0_15px_#a855f7] hover:bg-pink-800 transition-all duration-300 cursor-pointer"
        >
          PLAYER ONE
        </button>
        <button
          onClick={() => navigate("/two")}
          className="px-6 py-4 bg-green-500 text-white rounded-md shadow-[0_0_15px_#22c55e] hover:bg-green-800 transition-all duration-300 cursor-pointer"
        >
          PLAYER TWO
        </button>
      </div>

      <p className="text-sm blink">PRESS START</p>
    </div>
  );
}
