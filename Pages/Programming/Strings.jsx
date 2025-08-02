import React from 'react';

export default function Strings() {
  const Card = ({ title, children }) => (
    <div className="bg-gray-900 bg-opacity-60 backdrop-blur-md rounded-xl p-5 shadow-lg border border-gray-800">
      <h2 className="text-2xl font-semibold text-pink-400 mb-3">{title}</h2>
      <div className="text-gray-300">{children}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-4 py-8 md:px-16 space-y-10">
      <h1 className="text-4xl font-bold text-purple-400">🔤 Strings</h1>

      <p className="text-lg text-gray-300 max-w-3xl">
        A string is a sequence of characters enclosed in quotes. Strings are commonly used to represent text in programming.
      </p>

      <Card title="✍️ Creating Strings">
        <pre className="bg-gray-800 rounded-lg p-4 text-green-300 text-sm overflow-x-auto">
{`name = "Advait"
message = 'Hello, MLQuest!'
multiline = """This is
a multiline string."""`}
        </pre>
      </Card>

      <Card title="🛠️ Common Operations">
        <ul className="list-disc list-inside space-y-1">
          <li><code>len(s)</code> – Length of the string</li>
          <li><code>s.lower()</code>, <code>s.upper()</code> – Case conversion</li>
          <li><code>s.strip()</code> – Removes whitespace</li>
          <li><code>s.replace("old", "new")</code> – Replace text</li>
          <li><code>s.split()</code> – Split string into list</li>
          <li><code>"substring" in s</code> – Check if substring exists</li>
        </ul>
      </Card>

      <Card title="🔍 Indexing & Slicing">
        <pre className="bg-gray-800 rounded-lg p-4 text-green-300 text-sm overflow-x-auto">
{`s = "MLQuest"
print(s[0])     # 'M'
print(s[-1])    # 't'
print(s[1:4])   # 'LQu'`}
        </pre>
      </Card>

      <Card title="🧩 String Formatting">
        <pre className="bg-gray-800 rounded-lg p-4 text-green-300 text-sm overflow-x-auto">
{`name = "Advait"
age = 20
print(f"My name is {name} and I am {age} years old.")`}
        </pre>
      </Card>

      <Card title="🚀 Why Strings Matter?">
        <p>
          Strings are essential for displaying information, storing user input, handling files, and managing textual data in programs.
        </p>
      </Card>

      <Card title="🎥 Learn with YouTube">
        <div className="grid md:grid-cols-2 gap-6">
          <iframe
            className="w-full aspect-video rounded-xl shadow-md"
            src="https://www.youtube.com/embed/qU8X2tFNo7k"
            title="Python Strings - CodeWithHarry"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            className="w-full aspect-video rounded-xl shadow-md"
            src="https://www.youtube.com/embed/1n_V2jCaV1M"
            title="Python Strings Tutorial - Telusko"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Card>

      <Card title="💻 Practice on LeetCode">
        <ul className="list-disc list-inside text-blue-300 underline space-y-2">
          <li>
            <a href="https://leetcode.com/problems/valid-palindrome/" target="_blank" rel="noopener noreferrer">
              Valid Palindrome
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/problems/reverse-words-in-a-string/" target="_blank" rel="noopener noreferrer">
              Reverse Words in a String
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/problems/longest-common-prefix/" target="_blank" rel="noopener noreferrer">
              Longest Common Prefix
            </a>
          </li>
        </ul>
      </Card>
    </div>
  );
}
