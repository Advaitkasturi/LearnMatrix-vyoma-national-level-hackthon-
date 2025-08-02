import React from 'react';


export default function Operators() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-purple-400 mb-2">🧮 Operators</h1>
        <p className="text-lg text-gray-300 mb-6">
          Operators are special symbols or keywords that perform operations on variables and values in programming.
        </p>

        {/* Arithmetic Operators */}
        <section className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 p-6 rounded-2xl shadow-lg backdrop-blur">
          <h2 className="text-2xl font-bold text-pink-400 mb-3">➕ Arithmetic Operators</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li><strong>+</strong> Addition</li>
            <li><strong>-</strong> Subtraction</li>
            <li><strong>*</strong> Multiplication</li>
            <li><strong>/</strong> Division</li>
            <li><strong>%</strong> Modulus (Remainder)</li>
            <li><strong>**</strong> Exponentiation</li>
            <li><strong>//</strong> Floor Division</li>
          </ul>
          <div className="mt-4 bg-gray-900 p-4 rounded-xl text-green-300 text-sm font-mono shadow-md">
            {`a = 10\nb = 3\nprint(a + b)  # 13\nprint(a % b)  # 1`}
          </div>
        </section>

        {/* Comparison Operators */}
        <section className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 p-6 rounded-2xl shadow-lg backdrop-blur">
          <h2 className="text-2xl font-bold text-pink-400 mb-3">🔍 Comparison Operators</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li><strong>==</strong> Equal to</li>
            <li><strong>!=</strong> Not equal to</li>
            <li><strong>&gt;</strong> Greater than</li>
            <li><strong>&lt;</strong> Less than</li>
            <li><strong>&gt;=</strong> Greater than or equal to</li>
            <li><strong>&lt;=</strong> Less than or equal to</li>
          </ul>
        </section>

        {/* Logical Operators */}
        <section className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 p-6 rounded-2xl shadow-lg backdrop-blur">
          <h2 className="text-2xl font-bold text-pink-400 mb-3">🧠 Logical Operators</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li><strong>and</strong> Returns True if both statements are true</li>
            <li><strong>or</strong> Returns True if one of the statements is true</li>
            <li><strong>not</strong> Reverses the result</li>
          </ul>
          <div className="mt-4 bg-gray-900 p-4 rounded-xl text-green-300 text-sm font-mono shadow-md">
            {`x = 5\nprint(x > 2 and x < 10)  # True`}
          </div>
        </section>

        {/* Assignment Operators */}
        <section className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 p-6 rounded-2xl shadow-lg backdrop-blur">
          <h2 className="text-2xl font-bold text-pink-400 mb-3">📦 Assignment Operators</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li><strong>=</strong> Assigns value</li>
            <li><strong>+=</strong> Adds and assigns</li>
            <li><strong>-=</strong> Subtracts and assigns</li>
            <li><strong>*=</strong> Multiplies and assigns</li>
            <li><strong>/=</strong> Divides and assigns</li>
          </ul>
        </section>

        {/* Why Operators Matter */}
        <section className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 p-6 rounded-2xl shadow-lg backdrop-blur">
          <h2 className="text-2xl font-bold text-pink-400 mb-3">📘 Why Operators Matter</h2>
          <p className="text-gray-300 text-base">
            Operators are essential for performing calculations, making comparisons, and implementing logic. They are the foundation of writing any functional code.
          </p>
        </section>

        {/* YouTube Section */}
        <section className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 p-6 rounded-2xl shadow-lg backdrop-blur">
          <h2 className="text-2xl font-bold text-pink-400 mb-6">🎥 Learn with YouTube</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <iframe
              className="w-full aspect-video rounded-xl shadow-md"
              src="https://www.youtube.com/embed/B9RJ5dl9agY"
              title="Python Operators - Telusko"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-full aspect-video rounded-xl shadow-md"
              src="https://www.youtube.com/embed/D0Vj2eYBBaU"
              title="Python Operators - CodeWithHarry"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* LeetCode Practice Problems */}
        <section className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 p-6 rounded-2xl shadow-lg backdrop-blur">
          <h2 className="text-2xl font-bold text-pink-400 mb-4">💻 Practice Problems</h2>
          <ul className="list-disc list-inside text-blue-400 space-y-2">
            <li>
              <a
                href="https://leetcode.com/problems/add-two-integers/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LeetCode: Add Two Integers
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/problems/divide-two-integers/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LeetCode: Divide Two Integers
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
