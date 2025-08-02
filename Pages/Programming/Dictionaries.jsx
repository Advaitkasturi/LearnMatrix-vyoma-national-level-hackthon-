import React from "react";

export default function Dictionaries() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          🧾 Dictionaries
        </h1>

        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
          A dictionary is an unordered collection of key-value pairs. It allows
          you to store, retrieve, and manage data efficiently using unique keys.
        </p>

        <div className="grid gap-10">
          <Card title="🔹 Creating a Dictionary">
            <p className="mb-2">
              Use curly braces <code>{`{}`}</code> with key-value pairs separated
              by colons.
            </p>
            <pre className="bg-black/30 rounded-lg p-4 text-green-300 text-sm overflow-x-auto backdrop-blur-md">
{`person = {
  "name": "Advait",
  "age": 20,
  "city": "Hyderabad"
}`}
            </pre>
          </Card>

          <Card title="🔸 Accessing & Modifying">
            <p className="mb-2">
              You can access values using keys and modify or add new pairs.
            </p>
            <pre className="bg-black/30 rounded-lg p-4 text-green-300 text-sm overflow-x-auto backdrop-blur-md">
{`print(person["name"])  # Output: Advait
person["age"] = 21
person["country"] = "India"`}
            </pre>
          </Card>

          <Card title="🛠️ Useful Methods">
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong>.get(key):</strong> Returns value for key, or None</li>
              <li><strong>.keys():</strong> Returns all keys</li>
              <li><strong>.values():</strong> Returns all values</li>
              <li><strong>.items():</strong> Returns key-value pairs</li>
              <li><strong>.update({`{obj}`}):</strong> Updates dictionary</li>
              <li><strong>.pop(key):</strong> Removes a key</li>
            </ul>
          </Card>

          <Card title="📦 Nested Dictionaries">
            <p className="mb-2">
              Dictionaries can contain other dictionaries to represent structured
              data.
            </p>
            <pre className="bg-black/30 rounded-lg p-4 text-green-300 text-sm overflow-x-auto backdrop-blur-md">
{`students = {
  "001": {"name": "Aarav", "grade": "A"},
  "002": {"name": "Diya", "grade": "B"}
}`}
            </pre>
          </Card>

          <Card title="📘 Why Dictionaries Matter?">
            Dictionaries are powerful when working with structured, labeled data.
            They are used extensively in APIs, databases, and JSON-based applications.
          </Card>

          <Card title="🎥 Learn with YouTube">
            <div className="grid md:grid-cols-2 gap-6">
              <iframe
                className="w-full aspect-video rounded-xl shadow-md"
                src="https://www.youtube.com/embed/daefaLgNkw0?si=lAGP0p_vknNSw3V_"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="w-full aspect-video rounded-xl shadow-md"
                src="https://www.youtube.com/embed/BLOtLNVxq3I?si=GnTkZKw0wAqjmwSg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Card>
        </div>

        <div className="text-center pt-10">
          <a
            href="https://leetcode.com/problems/lru-cache/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Solve LeetCode →
          </a>
        </div>
      </div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-pink-500/20 transition-shadow">
      <h2 className="text-2xl font-semibold text-pink-400 mb-3">{title}</h2>
      <div className="text-gray-300 text-base">{children}</div>
    </div>
  );
}
