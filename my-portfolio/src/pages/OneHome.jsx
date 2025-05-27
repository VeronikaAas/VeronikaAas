import { useState } from "react";

const characters = [
  {
    name: "Book nerd",
    img: "/characters/char_book.png",
    description: "Dreamy spellcaster with a love for stars and coding spells.",
  },
  {
    name: "Dog lover",
    img: "/characters/char_dogs.png",
    description: "Tiny tech fairy that builds magical websites with glitter.",
  },
  {
    name: "Explorer",
    img: "/characters/char_trav.png",
    description: "A cuddly cat-hacker who speaks fluent JavaScript and meows.",
  },
  {
    name: "Workout junkie",
    img: "/characters/char_work.png",
    description: "Bouncy bunny who deploys cuteness-powered web apps.",
  },
];

export default function Home1() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % characters.length);
  const prev = () => setIndex((index - 1 + characters.length) % characters.length);

  return (
    <div className="bg-pink-50 min-h-screen p-6 font-sans text-gray-800 space-y-16">
      {/* Character Carousel */}
      <section className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-pink-500 mb-4">
          ✨ Choose Your Character ✨
        </h2>
        <div className="flex items-center justify-center gap-4">
          <button onClick={prev} className="text-3xl hover:scale-110 transition cursor-pointer">&#8592;</button>
          <div className="bg-white rounded-xl shadow-xl p-6 w-72">
            <img
              src={characters[index].img}
              alt={characters[index].name}
              className="w-32 mx-auto mb-2 object-contain aspect-square"
            />
            <h3 className="text-xl font-bold text-purple-500">{characters[index].name}</h3>
            <p className="text-sm text-gray-600 mt-2">{characters[index].description}</p>
          </div>
          <button onClick={next} className="text-3xl hover:scale-110 transition cursor-pointer">&#8594;</button>
        </div>
      </section>

      {/* Projects */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-blue-400 mb-6">🧩 My Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg p-4 shadow-md border border-pink-100">
              <h3 className="text-pink-600 font-semibold mb-2">Project {i}</h3>
              <p className="text-sm">Short description of what this project does and why it's magical.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">🧠 Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js"].map((skill) => (
            <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full shadow">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-green-400 mb-2">📬 Contact</h2>
        <p className="mb-4">Send me a magical message:</p>
        <form className="max-w-md mx-auto space-y-3">
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-2 border rounded-lg"
          />
          <textarea
            placeholder="Your message"
            className="w-full p-2 border rounded-lg h-24"
          ></textarea>
          <button type="submit" className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500 transition">
            Send 💌
          </button>
        </form>
      </section>
    </div>
  );
}
