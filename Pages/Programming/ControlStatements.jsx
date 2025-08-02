import React from "react";


export default function ControlStatements() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          🔄 Control Statements
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
          Control statements manage the flow of your program by making decisions and handling conditions — enabling branching and looping in logic.
        </p>

        <div className="grid gap-10">
          <Card title="🔹 if-else Statement">
            Used to execute code blocks based on conditions.
            <pre className="bg-black/30 rounded-lg p-4 text-green-300 text-sm mt-4 overflow-x-auto backdrop-blur-md">
{`x = 10
if x > 5:
    print("Greater than 5")
else:
    print("Less than or equal to 5")`}
            </pre>
          </Card>

          <Card title="🔸 elif Statement">
            Use <code>elif</code> when you have multiple conditions to check.
            <pre className="bg-black/30 rounded-lg p-4 text-green-300 text-sm mt-4 overflow-x-auto backdrop-blur-md">
{`score = 75
if score >= 90:
    print("A Grade")
elif score >= 75:
    print("B Grade")
else:
    print("C Grade")`}
            </pre>
          </Card>

          <Card title="📦 Nested if">
            You can place one <code>if</code> inside another <code>if</code>.
            <pre className="bg-black/30 rounded-lg p-4 text-green-300 text-sm mt-4 overflow-x-auto backdrop-blur-md">
{`num = 20
if num > 10:
    if num < 30:
        print("Between 10 and 30")`}
            </pre>
          </Card>

          <Card title="🎯 match-case (Python 3.10+)">
            Python’s alternative to switch-case statements.
            <pre className="bg-black/30 rounded-lg p-4 text-green-300 text-sm mt-4 overflow-x-auto backdrop-blur-md">
{`value = 2
match value:
    case 1:
        print("One")
    case 2:
        print("Two")
    case _:
        print("Other")`}
            </pre>
          </Card>

          <Card title="📘 Why Control Statements Matter?">
            Without control statements, code executes linearly without conditions. These structures bring logic, flexibility, and intelligence to your programs.
          </Card>

          <Card title="🎥 Learn with YouTube">
            <div className="grid md:grid-cols-2 gap-6">
              <iframe
                className="w-full aspect-video rounded-xl shadow-md"
                src="https://www.youtube.com/embed/jTq3gR3rFU4?si=W3slCgXxkTQQeyug"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="w-full aspect-video rounded-xl shadow-md"
                src="https://www.youtube.com/embed/hEgO047GxaQ?si=zDfhsoM-EUnOzWDy"
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
            href="https://leetcode.com/tag/if-statement/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Practice on LeetCode →
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
