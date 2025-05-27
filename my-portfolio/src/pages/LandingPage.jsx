import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Choose player</h1>
      <button
        onClick={() => navigate("/one")}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Player one
      </button>
      <button
        onClick={() => navigate("/two")}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Player two
      </button>
    </div>
  );
}
