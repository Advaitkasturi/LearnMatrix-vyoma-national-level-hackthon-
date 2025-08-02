import React from "react";

export default function Arrays() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          📦 Arrays
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
          Arrays are one of the most commonly used data structures. They store
          elements in an ordered sequence — be it integers, strings, or any other type.
        </p>

        <div className="grid gap-10">
          {/* What is an Array */}
          <Card title="🔹 What is an Array?">
            An array is a container that holds a fixed number of values.
            Each value in an array is identified by an index. Indexing starts at 0.
          </Card>

          {/* Example */}
          <Card title="📌 Example">
            <p className="mb-2">Consider the following array in Python:</p>
            <pre className="bg-black/30 rounded-lg p-4 text-green-300 text-sm overflow-x-auto backdrop-blur-md">
              {`numbers = [10, 20, 30, 40, 50]`}
            </pre>
            <p>
              <code>numbers[0]</code> returns <code>10</code>, and{" "}
              <code>numbers[4]</code> returns <code>50</code>.
            </p>
          </Card>

          {/* Operations */}
          <Card title="⚙️ Common Operations">
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong>Access:</strong> <code>arr[2]</code></li>
              <li><strong>Update:</strong> <code>arr[1] = 25</code></li>
              <li><strong>Insert:</strong> <code>arr.append(60)</code></li>
              <li><strong>Delete:</strong> <code>del arr[3]</code></li>
              <li><strong>Loop:</strong> <code>for item in arr:</code></li>
            </ul>
          </Card>

          {/* Use Cases */}
          <Card title="🚀 Use Cases">
            Arrays are used to store lists of data such as student scores,
            sensor readings, image pixels, or time series. They are fundamental
            in algorithms and memory-efficient data handling.
          </Card>

          {/* YouTube Videos */}
          <Card title="🎥 Learn with YouTube">
            <div className="grid md:grid-cols-2 gap-6">
              <iframe
                className="w-full aspect-video rounded-xl shadow-md"
                src="https://www.youtube.com/embed/0OK-kbu9Cwo?si=nfjZ3Y-n2k7Lx4yP"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="w-full aspect-video rounded-xl shadow-md"
                src="https://www.youtube.com/embed/yQ1fz8LY354?si=lVO4wTlPJcvP_C6e"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Card>
        </div>

        {/* Next Button */}
        <div className="text-center pt-10">
          <a
            href="https://leetcode.com/tag/array/"
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
