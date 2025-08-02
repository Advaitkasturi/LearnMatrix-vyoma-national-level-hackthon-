import React from "react";


export default function Functions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          🧮 Functions
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
          Functions are reusable blocks of code designed to perform a specific task.
          They help make programs modular, readable, and efficient.
        </p>

        <div className="grid gap-10">
          <Card title="🔧 Defining a Function">
            <p className="mb-3">
              Functions are defined using the <code className="text-green-300">def</code> keyword in Python.
            </p>
            <pre className="bg-gray-800 rounded-lg p-4 text-green-300 text-sm overflow-x-auto">
{`def greet(name):
  print("Hello, " + name + "!")`}
            </pre>
          </Card>

          <Card title="📞 Calling a Function">
            <p className="mb-3">
              Use the function name followed by parentheses and arguments to call it.
            </p>
            <pre className="bg-gray-800 rounded-lg p-4 text-green-300 text-sm overflow-x-auto">
{`greet("Advait")  # Output: Hello, Advait!`}
            </pre>
          </Card>

          <Card title="🔁 Return Values">
            <p className="mb-3">
              Functions can return results using the <code className="text-green-300">return</code> statement.
            </p>
            <pre className="bg-gray-800 rounded-lg p-4 text-green-300 text-sm overflow-x-auto">
{`def add(a, b):
  return a + b

result = add(3, 4)
print(result)  # Output: 7`}
            </pre>
          </Card>

          <Card title="📌 Parameters vs Arguments">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Parameter:</strong> Variable in the function definition</li>
              <li><strong>Argument:</strong> Actual value passed to the function</li>
            </ul>
          </Card>

          <Card title="📘 Why Functions Matter?">
            Functions allow for code reuse, modularity, and cleaner architecture.
            They are fundamental building blocks in all programming languages.
          </Card>

          <Card title="🎥 Learn with YouTube">
            <div className="grid md:grid-cols-2 gap-6">
              <iframe
                className="w-full aspect-video rounded-xl shadow-md"
                src="https://www.youtube.com/embed/89cGQjB5R4M"
                title="Functions in Python - CodeWithHarry"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="w-full aspect-video rounded-xl shadow-md"
                src="https://www.youtube.com/embed/VchuKL44s6E"
                title="Python Functions Explained"
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
            href="https://leetcode.com/tag/functions/"
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
