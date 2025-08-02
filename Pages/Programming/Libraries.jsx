import React from "react";

export default function Libraries() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          📚 Libraries
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
          Libraries are pre-written collections of code that provide tools and
          functions to simplify and speed up software development.
        </p>

        <div className="grid gap-10">
          <Card title="🔍 What is a Library?">
            A library in Python is a bundle of useful code that you can import
            and use instead of writing from scratch. It helps solve common
            problems and speeds up development.
          </Card>

          <Card title="📦 Importing a Library">
            <p className="mb-3">
              Use the{" "}
              <code className="text-green-300 font-semibold">import</code>{" "}
              statement to bring in libraries.
            </p>
            <pre className="bg-gray-800 rounded-lg p-4 text-green-300 text-sm overflow-x-auto">
{`import math

print(math.sqrt(25))  # Output: 5.0`}
            </pre>
          </Card>

          <Card title="🔥 Popular Python Libraries">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>math:</strong> Mathematical operations
              </li>
              <li>
                <strong>random:</strong> Random number generation
              </li>
              <li>
                <strong>datetime:</strong> Working with dates and times
              </li>
              <li>
                <strong>os:</strong> Interacting with the operating system
              </li>
              <li>
                <strong>requests:</strong> Sending HTTP requests
              </li>
              <li>
                <strong>pandas:</strong> Data manipulation and analysis
              </li>
              <li>
                <strong>matplotlib:</strong> Data visualization
              </li>
            </ul>
          </Card>

          <Card title="⬇️ Installing External Libraries">
            <p className="mb-3">
              Use <code className="text-green-300 font-semibold">pip</code>,
              Python's package manager, to install external libraries.
            </p>
            <pre className="bg-gray-800 rounded-lg p-4 text-green-300 text-sm overflow-x-auto">
{`pip install pandas`}
            </pre>
          </Card>

          <Card title="📘 Why Libraries Matter?">
            Libraries save time and effort, reduce errors, and enable you to
            work on complex tasks with less code. They are essential for
            efficient development.
          </Card>

          <Card title="🎥 Learn with YouTube">
            <div className="grid md:grid-cols-2 gap-6">
              <iframe
                className="w-full aspect-video rounded-xl shadow-md"
                src="https://www.youtube.com/embed/C-gEQdGVXbk"
                title="Top Python Libraries You Should Know"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="w-full aspect-video rounded-xl shadow-md"
                src="https://www.youtube.com/embed/sUg5R4cPpoM"
                title="Python Libraries Explained with Examples"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Card>
        </div>

        {/* LeetCode Button */}
        <div className="text-center pt-10">
          <a
            href="https://leetcode.com/problemset/all/?topicSlugs=python"
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
