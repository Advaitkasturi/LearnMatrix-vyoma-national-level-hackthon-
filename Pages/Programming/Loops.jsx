import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export default function Loops() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400">🔁 Loops</h1>

        <Card title="🧠 What are Loops?">
          <p className="text-gray-300 text-lg">
            Loops are used to repeat a block of code multiple times. They help automate repetitive tasks efficiently.
          </p>
        </Card>

        <Card title="🛠️ For Loop">
          <p className="text-gray-300 mb-4">
            The <code className="text-green-300">for</code> loop is used to iterate over a sequence like a list, tuple, or string.
          </p>
          <pre className="bg-gray-800 rounded-xl p-4 text-green-300 text-sm overflow-x-auto">
{`fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)`}
          </pre>
        </Card>

        <Card title="⏳ While Loop">
          <p className="text-gray-300 mb-4">
            The <code className="text-green-300">while</code> loop continues to execute as long as the given condition is true.
          </p>
          <pre className="bg-gray-800 rounded-xl p-4 text-green-300 text-sm overflow-x-auto">
{`count = 0
while count < 5:
    print(count)
    count += 1`}
          </pre>
        </Card>

        <Card title="🧭 Loop Control Statements">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><strong>break:</strong> Exits the loop early</li>
            <li><strong>continue:</strong> Skips the current iteration and continues</li>
            <li><strong>pass:</strong> Does nothing, acts as a placeholder</li>
          </ul>
          <pre className="bg-gray-800 rounded-xl p-4 text-green-300 text-sm overflow-x-auto mt-2">
{`for num in range(5):
    if num == 3:
        continue
    print(num)`}
          </pre>
        </Card>

        <Card title="🌀 Nested Loops">
          <p className="text-gray-300 mb-4">
            Loops inside loops allow iteration over complex structures like 2D arrays.
          </p>
          <pre className="bg-gray-800 rounded-xl p-4 text-green-300 text-sm overflow-x-auto">
{`for i in range(3):
    for j in range(2):
        print(i, j)`}
          </pre>
        </Card>

        <Card title="💡 Why Loops Matter">
          <p className="text-gray-300">
            Loops reduce code duplication and improve readability. They are fundamental in programming for performing repetitive operations.
          </p>
        </Card>

        <Card title="🎥 Learn with YouTube">
          <div className="grid md:grid-cols-2 gap-6">
            <iframe
              className="w-full aspect-video rounded-xl shadow-md"
              src="https://www.youtube.com/embed/KtQZ9m1-538"
              title="Python Loops Explained - Telusko"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <iframe
              className="w-full aspect-video rounded-xl shadow-md"
              src="https://www.youtube.com/embed/T5pRlIbr6gg"
              title="Loops in Python - CodeWithHarry"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Card>

        <Card title="💻 Practice Problems">
          <ul className="list-disc list-inside text-blue-400 space-y-2">
            <li>
              <a
                href="https://leetcode.com/problems/n-ary-tree-preorder-traversal/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LeetCode: N-ary Tree Preorder Traversal
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/problems/pascals-triangle/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LeetCode: Pascal's Triangle
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
