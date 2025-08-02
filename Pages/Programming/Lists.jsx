import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Lists() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-4 py-8 md:px-10 space-y-10">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-400">📋 Lists</h1>
      <p className="text-lg text-gray-300 max-w-4xl">
        Lists are one of the most versatile and commonly used data structures in Python. They are used to store multiple items in a single variable.
      </p>

      <Card title="🛠️ Creating a List">
        <p className="text-gray-300 mb-2">
          Lists are created using square brackets <code className="text-green-300">[]</code>.
        </p>
        <pre className="bg-gray-800 rounded-lg p-4 text-green-300 text-sm overflow-x-auto">
{`fruits = ["apple", "banana", "cherry"]`}
        </pre>
      </Card>

      <Card title="📌 Accessing Items">
        <p className="text-gray-300 mb-2">
          You can access list items by their index.
        </p>
        <pre className="bg-gray-800 rounded-lg p-4 text-green-300 text-sm overflow-x-auto">
{`print(fruits[0])  # Output: apple`}
        </pre>
      </Card>

      <Card title="✏️ Modifying a List">
        <p className="text-gray-300 mb-2">
          Lists are mutable—you can change items after the list has been created.
        </p>
        <pre className="bg-gray-800 rounded-lg p-4 text-green-300 text-sm overflow-x-auto">
{`fruits[1] = "orange"`}
        </pre>
      </Card>

      <Card title="🧰 Useful List Methods">
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li><code>append()</code> – Adds an item to the end</li>
          <li><code>insert()</code> – Inserts item at a specific position</li>
          <li><code>remove()</code> – Removes a specified item</li>
          <li><code>pop()</code> – Removes the last item</li>
          <li><code>sort()</code> – Sorts the list</li>
          <li><code>reverse()</code> – Reverses the list</li>
        </ul>
      </Card>

      <Card title="🔁 Looping Through a List">
        <pre className="bg-gray-800 rounded-lg p-4 text-green-300 text-sm overflow-x-auto">
{`for fruit in fruits:
    print(fruit)`}
        </pre>
      </Card>

      <Card title="📘 Why Use Lists?">
        <p className="text-gray-300">
          Lists allow you to work with multiple pieces of data efficiently. They are essential for handling sequences, storing data collections, and performing iterations.
        </p>
      </Card>

      <Card title="🎥 Learn with YouTube">
        <div className="grid md:grid-cols-2 gap-6">
          <iframe
            className="w-full aspect-video rounded-xl shadow-md"
            src="https://www.youtube.com/embed/W8KRzm-HUcc"
            title="Python Lists Tutorial – Programming with Mosh"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            className="w-full aspect-video rounded-xl shadow-md"
            src="https://www.youtube.com/embed/R-HLU9Fl5ug"
            title="Python Lists Explained – Corey Schafer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Card>

      <div className="text-center">
        <a
          href="https://leetcode.com/tag/array/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-lg rounded-xl shadow-xl">
            Practice List Problems on LeetCode <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </a>
      </div>
    </div>
  );
}
