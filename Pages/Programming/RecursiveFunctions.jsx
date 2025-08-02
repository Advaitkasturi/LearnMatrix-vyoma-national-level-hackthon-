import React from 'react';


export default function RecursiveFunctions() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-purple-400 mb-2">🔁 Recursive Functions</h1>
        <p className="text-lg text-gray-300 mb-6">
          A recursive function is a function that calls itself to solve smaller subproblems. It consists of a base case and a recursive case.
        </p>

        {/* How Recursion Works */}
        <section className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 p-6 rounded-2xl shadow-lg backdrop-blur">
          <h2 className="text-2xl font-semibold text-pink-400 mb-3">🧩 How Recursion Works?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li><strong>Base Case:</strong> Terminates recursion.</li>
            <li><strong>Recursive Case:</strong> Calls itself with smaller input.</li>
          </ul>
        </section>

        {/* Example */}
        <section className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 p-6 rounded-2xl shadow-lg backdrop-blur">
          <h2 className="text-2xl font-semibold text-pink-400 mb-3">📌 Example: Factorial</h2>
          <pre className="bg-gray-900 p-4 rounded-xl text-green-300 text-sm font-mono shadow-md overflow-x-auto">
{`def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))  # Output: 120`}
          </pre>
        </section>

        {/* Common Uses */}
        <section className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 p-6 rounded-2xl shadow-lg backdrop-blur">
          <h2 className="text-2xl font-semibold text-pink-400 mb-3">🔄 Common Uses of Recursion</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Factorial, Fibonacci numbers</li>
            <li>Mathematical puzzles (e.g. Tower of Hanoi)</li>
            <li>Sorting algorithms (e.g. quicksort, mergesort)</li>
            <li>Tree and graph traversals</li>
          </ul>
        </section>

        {/* When Not to Use */}
        <section className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 p-6 rounded-2xl shadow-lg backdrop-blur">
          <h2 className="text-2xl font-semibold text-pink-400 mb-3">⚠️ When Not to Use Recursion</h2>
          <p className="text-gray-300">
            Avoid recursion when it may lead to stack overflow or when an iterative approach is more memory-efficient.
          </p>
        </section>

        {/* Why Recursion Matters */}
        <section className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 p-6 rounded-2xl shadow-lg backdrop-blur">
          <h2 className="text-2xl font-semibold text-pink-400 mb-3">📘 Why Recursion Matters?</h2>
          <p className="text-gray-300">
            Recursion enables elegant solutions for problems with repeating patterns or hierarchical structures. It's a key skill in algorithm design.
          </p>
        </section>

        {/* YouTube Section */}
        <section className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 p-6 rounded-2xl shadow-lg backdrop-blur">
          <h2 className="text-2xl font-bold text-pink-400 mb-6">🎥 Learn with YouTube</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <iframe
              className="w-full aspect-video rounded-xl shadow-md"
              src="https://www.youtube.com/embed/K4lDZr5pC1E"
              title="Recursion - CodeWithHarry"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-full aspect-video rounded-xl shadow-md"
              src="https://www.youtube.com/embed/uyMTSQSRKUI"
              title="Recursion in Python | Telusko"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* LeetCode Problems */}
        <section className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 p-6 rounded-2xl shadow-lg backdrop-blur">
          <h2 className="text-2xl font-bold text-pink-400 mb-4">💻 Practice Problems</h2>
          <ul className="list-disc list-inside text-blue-400 space-y-2">
            <li>
              <a
                href="https://leetcode.com/problems/fibonacci-number/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LeetCode: Fibonacci Number
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/problems/powx-n/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LeetCode: Power (xⁿ)
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/problems/merge-two-sorted-lists/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LeetCode: Merge Two Sorted Lists
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
