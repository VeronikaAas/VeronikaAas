import { useState } from "react";
import { useLocation } from "react-router-dom";

const characters = [
  {
    name: "Book nerd",
    img: "/characters/dark_book.png",
    description: "Dreamy spellcaster with a love for stars and coding spells.",
  },
  {
    name: "Dog lover",
    img: "/characters/dark_dog.png",
    description: "Tiny tech fairy that builds magical websites with glitter.",
  },
  {
    name: "Explorer",
    img: "/characters/dark_trav.png",
    description: "A cuddly cat-hacker who speaks fluent JavaScript and meows.",
  },
  {
    name: "Workout junkie",
    img: "/characters/dark_work.png",
    description: "Bouncy bunny who deploys cuteness-powered web apps.",
  },
  {
    name: "Bakery girl",
    img: "/characters/dark_cake.png",
    description: "Sprinkles joy and code into every fresh batch of websites.",
  },
  {
    name: "Left IRL for gaming",
    img: "/characters/dark_gaming.png",
    description: "Level 99 gamer-dev with elite code-combo skills.",
  },
];

export default function TwoHome() {
  const [index, setIndex] = useState(0);
  const location = useLocation();
  const theme = new URLSearchParams(location.search).get("theme");

  const next = () => setIndex((index + 1) % characters.length);
  const prev = () => setIndex((index - 1 + characters.length) % characters.length);

  const glowClass =
    theme === "dark"
      ? "shadow-[0_0_20px_#22d3ee,0_0_40px_#06b6d4]" 
      : "";

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 font-mono space-y-16">
      <section className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4">
          🧬 Choose Your Shadow Class 🧬
        </h2>
        <div className="flex items-center justify-center gap-4">
          <button onClick={prev} className="text-3xl text-cyan-300 hover:scale-110 transition cursor-pointer">
            &#8592;
          </button>
          <div className={`bg-gray-800 rounded-xl p-6 w-72 border border-cyan-500 ${glowClass}`}>
            <img
              src={characters[index].img}
              alt={characters[index].name}
              className="w-32 mx-auto mb-2 object-contain aspect-square"
            />
            <h3 className="text-xl font-bold text-cyan-300">{characters[index].name}</h3>
            <p className="text-sm text-gray-300 mt-2">{characters[index].description}</p>
          </div>
          <button onClick={next} className="text-3xl text-cyan-300 hover:scale-110 transition cursor-pointer">
            &#8594;
          </button>
        </div>
      </section>

      {/* Projects */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-purple-400 mb-6">⚙️ Projects from the Darkside</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-lg p-4 shadow-md border border-purple-700"
            >
              <h3 className="text-purple-300 font-semibold mb-2">
                Project {i}
              </h3>
              <p className="text-sm text-gray-300">
                A powerful tool forged in night mode with dark energy and clean code.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-red-400 mb-4">🧠 Core Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {[
            "TypeScript",
            "React",
            "Tailwind",
            "API Design",
            "Auth",
            "Next.js",
            "MongoDB",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-red-900 text-red-300 px-3 py-1 rounded-full shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-green-400 mb-2">📡 Contact</h2>
        <p className="mb-4 text-gray-400">Broadcast your signal through the void:</p>
        <form className="max-w-md mx-auto space-y-3">
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400"
          />
          <textarea
            placeholder="Your encrypted message"
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg h-24 text-white placeholder-gray-400"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Transmit 🛰️
          </button>
        </form>
      </section>
    </div>
  );
}
