import React from "react";

export default function Vectors() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-400 mb-4">📐 Vectors in Machine Learning</h1>
        
        <p className="text-lg text-gray-300 mb-6">
          Vectors are fundamental building blocks in machine learning and data science. They represent data, model parameters, and transformations. A vector is a quantity that has both magnitude and direction and is commonly represented as an ordered list of numbers.
        </p>

        {/* Basic Visual Representation */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6 shadow-md">
          <h2 className="text-2xl font-semibold text-pink-400 mb-2">🔢 Example</h2>
          <p className="text-gray-300 mb-2">A 2D vector: <code className="bg-gray-700 px-2 py-1 rounded">v = [3, 4]</code></p>
          <p className="text-gray-400">This vector represents a point 3 units right and 4 units up from the origin.</p>
        </div>

        {/* Illustration */}
        <div className="mb-6">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Vector_example.svg/640px-Vector_example.svg.png" 
            alt="Vector illustration"
            className="rounded-lg shadow-md border border-purple-500"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">Illustration of a vector in 2D space</p>
        </div>

        {/* Applications in ML */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6 shadow-md">
          <h2 className="text-2xl font-semibold text-blue-400 mb-2">🤖 Applications in ML</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Feature representation of input data (e.g., images, text, tabular data)</li>
            <li>Word embeddings in NLP (e.g., Word2Vec, GloVe)</li>
            <li>Weights in neural networks</li>
            <li>Distance calculations for clustering (e.g., Euclidean, cosine similarity)</li>
          </ul>
        </div>

        {/* Concept Check */}
        <div className="bg-gray-900 border border-purple-600 p-4 rounded-lg shadow-lg mb-10">
          <h3 className="text-xl font-semibold text-green-400 mb-2">✅ Quick Concept Check</h3>
          <p className="text-gray-300 mb-2">Which of the following best describes a vector?</p>
          <ul className="list-disc list-inside text-gray-400">
            <li>A single number with magnitude only</li>
            <li><strong>A quantity that has both magnitude and direction</strong></li>
            <li>A matrix with multiple rows and columns</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
