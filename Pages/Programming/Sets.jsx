import React from 'react';

export default function Sets() {
  const Card = ({ title, children }) => (
    <div className="bg-gray-900 bg-opacity-60 backdrop-blur-md rounded-xl p-5 shadow-lg border border-gray-800">
      <h2 className="text-2xl font-semibold text-pink-400 mb-3">{title}</h2>
      <div className="text-gray-300">{children}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-4 py-8 md:px-16 space-y-10">
      <h1 className="text-4xl font-bold text-purple-400">🧮 Sets</h1>

      <p className="text-lg text-gray-300 max-w-3xl">
        A set is an unordered collection of unique elements. Sets are useful when you want to store non-duplicate values and perform mathematical set operations.
      </p>

      <Card title="📌 Creating a Set">
        <pre className="bg-gray-800 rounded-lg p-4 text-green-300 text-sm overflow-x-auto">
{`fruits = {"apple", "banana", "cherry"}
print(fruits)  # Output: {'banana', 'apple', 'cherry'}`}
        </pre>
      </Card>

      <Card title="🔍 Characteristics">
        <ul className="list-disc list-inside space-y-1">
          <li>Unordered – no index</li>
          <li>Mutable – can be changed</li>
          <li>No duplicate values allowed</li>
        </ul>
      </Card>

      <Card title="🛠️ Common Operations">
        <ul className="list-disc list-inside space-y-1">
          <li><code>set.add(x)</code> – Adds an element</li>
          <li><code>set.remove(x)</code> – Removes an element</li>
          <li><code>set.union(set2)</code> – Combines elements</li>
          <li><code>set.intersection(set2)</code> – Common elements</li>
          <li><code>set.difference(set2)</code> – Elements in one but not the other</li>
          <li><code>set.clear()</code> – Empties the set</li>
        </ul>
      </Card>

      <Card title="✅ Example">
        <pre className="bg-gray-800 rounded-lg p-4 text-green-300 text-sm overflow-x-auto">
{`a = {1, 2, 3}
b = {3, 4, 5}
print(a.union(b))        # {1, 2, 3, 4, 5}
print(a.intersection(b)) # {3}`}
        </pre>
      </Card>

      <Card title="🚀 Why Sets Matter?">
        <p>
          Sets are ideal when working with distinct items, removing duplicates from data, and performing fast membership tests or mathematical operations.
        </p>
      </Card>

      <Card title="🎥 Learn with YouTube">
        <div className="grid md:grid-cols-2 gap-6">
          <iframe
            className="w-full aspect-video rounded-xl shadow-md"
            src="https://www.youtube.com/embed/TLto4kSlkxk"
            title="Python Sets - CodeWithHarry"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            className="w-full aspect-video rounded-xl shadow-md"
            src="https://www.youtube.com/embed/d-cmsVYhZ1g"
            title="Sets in Python - Telusko"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Card>

      <Card title="💻 Practice on LeetCode">
        <ul className="list-disc list-inside text-blue-300 underline space-y-2">
          <li>
            <a href="https://leetcode.com/problems/intersection-of-two-arrays/" target="_blank" rel="noopener noreferrer">
              Intersection of Two Arrays
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/problems/find-the-difference/" target="_blank" rel="noopener noreferrer">
              Find the Difference
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/problems/unique-email-addresses/" target="_blank" rel="noopener noreferrer">
              Unique Email Addresses
            </a>
          </li>
        </ul>
      </Card>
    </div>
  );
}
