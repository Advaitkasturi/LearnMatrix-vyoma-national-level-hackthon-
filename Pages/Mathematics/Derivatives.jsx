import React from 'react';

export default function Derivatives() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-400 mb-4">📈 Derivatives</h1>

        <p className="text-lg text-gray-300 mb-6">
          Derivatives are fundamental in calculus and play a critical role in optimizing machine learning models. They describe how a function changes with respect to its inputs — the concept of a "rate of change."
        </p>

        {/* What is a Derivative */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6 shadow-md">
          <h2 className="text-2xl font-semibold text-green-400 mb-2">🧮 What is a Derivative?</h2>
          <p className="text-gray-300">
            The derivative of a function at a point tells us the slope of the tangent to the function at that point. In simple terms, it measures how one quantity changes in response to changes in another.
          </p>
          <p className="text-center text-xl text-yellow-300 my-4 font-mono">
            f′(x) = lim(h→0) [f(x + h) - f(x)] / h
          </p>
        </div>

        {/* Applications in ML */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6 shadow-md">
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">⚙️ Applications in Machine Learning</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Training models using gradient descent</li>
            <li>Calculating loss gradients</li>
            <li>Backpropagation in neural networks</li>
            <li>Understanding convexity and optimization</li>
          </ul>
        </div>

        {/* Visualization */}
        <div className="mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Tangent_function_derivative_animation.gif/500px-Tangent_function_derivative_animation.gif"
            alt="Derivative animation"
            className="rounded-lg shadow-md border border-purple-600 mx-auto"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">Graph showing the concept of derivative as slope</p>
        </div>

        {/* Concept Check */}
        <div className="bg-gray-900 border border-orange-500 p-4 rounded-lg shadow-lg mb-10">
          <h3 className="text-xl font-semibold text-orange-300 mb-2">✅ Quick Concept Check</h3>
          <p className="text-gray-300 mb-2">
            What is the derivative of f(x) = x²?
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>2x</li>
            <li>1</li>
            <li>x²</li>
            <li><strong>Correct: 2x</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
