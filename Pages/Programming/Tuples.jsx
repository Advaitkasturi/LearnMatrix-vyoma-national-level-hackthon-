import React from "react";

export default function Tuples() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          🧩 Tuples
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
          Tuples are immutable sequences in Python. Unlike lists, their values cannot be changed after creation.
        </p>

        <div className="grid gap-10">
          {/* What is a Tuple */}
          <Card title="🔹 What is a Tuple?">
            A tuple is an ordered, immutable collection used to group related data. Tuples are defined using parentheses <code>()</code>.
          </Card>

          {/* Example */}
          <Card title="📌 Example">
            <p className="mb-2">Example of tuple creation in Python:</p>
            <pre className="bg-black/30 rounded-lg p-4 text-green-300 text-sm overflow-x-auto backdrop-blur-md">
{`my_tuple = (10, 20, 30)
print(my_tuple[0])   # Output: 10

single = (5,)        # Single element tuple
empty = ()           # Empty tuple`}
            </pre>
          </Card>

          {/* Operations */}
          <Card title="⚙️ Common Operations">
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong>Access:</strong> <code>t[1]</code></li>
              <li><strong>Slicing:</strong> <code>t[1:3]</code></li>
              <li><strong>Length:</strong> <code>len(t)</code></li>
              <li><strong>Count:</strong> <code>t.count(x)</code></li>
              <li><strong>Index:</strong> <code>t.index(x)</code></li>
            </ul>
          </Card>

          {/* Use Cases */}
          <Card title="🚀 Use Cases">
            Tuples are ideal for storing fixed sets of values like coordinates, RGB values, days of the week, and database records. They can also be used as dictionary keys.
          </Card>

          {/* YouTube Section */}
          <Card title="🎥 Learn with YouTube">
            <div className="grid md:grid-cols-2 gap-6">
              <iframe
                className="w-full aspect-video rounded-xl shadow-md"
                src="https://www.youtube.com/embed/W8KRzm-HUcc"
                title="Tuples in Python - CodeWithHarry"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="w-full aspect-video rounded-xl shadow-md"
                src="https://www.youtube.com/embed/niZ8A4o_pRE"
                title="Python Tuples Explained"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Card>
        </div>

        {/* LeetCode CTA */}
        <div className="text-center pt-10">
          <a
            href="https://leetcode.com/problems/tuple-with-same-product/"
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

// Reusable Card component
function Card({ title, children }) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-pink-500/20 transition-shadow">
      <h2 className="text-2xl font-semibold text-pink-400 mb-3">{title}</h2>
      <div className="text-gray-300 text-base">{children}</div>
    </div>
  );
}
