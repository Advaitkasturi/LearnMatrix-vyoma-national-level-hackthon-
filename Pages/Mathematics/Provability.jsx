import React from 'react';

export default function Provability() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">🎲 Probability</h1>

        <p className="text-lg text-gray-300 mb-6">
          Probability is the mathematical framework used to quantify uncertainty. It's a cornerstone of many machine learning models, especially those involving classification, inference, and generative modeling.
        </p>

        {/* Basics */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6 shadow-md">
          <h2 className="text-2xl font-semibold text-green-400 mb-2">🔢 Probability Basics</h2>
          <p className="text-gray-300">
            Probability of an event A is a number between 0 and 1 representing the likelihood of occurrence:
          </p>
          <p className="text-center text-xl text-yellow-300 my-4 font-mono">P(A) = Number of favorable outcomes / Total number of outcomes</p>
        </div>

        {/* ML Applications */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6 shadow-md">
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">📊 Applications in Machine Learning</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Naive Bayes Classification</li>
            <li>Hidden Markov Models</li>
            <li>Bayesian Inference</li>
            <li>Softmax and Probabilistic Outputs</li>
          </ul>
        </div>

        {/* Image or Diagram */}
        <div className="mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Conditional_probability_diagram.svg/600px-Conditional_probability_diagram.svg.png"
            alt="Conditional Probability"
            className="rounded-lg shadow-md border border-yellow-600 mx-auto"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">Visualizing conditional probability</p>
        </div>

        {/* Quick Concept Check */}
        <div className="bg-gray-900 border border-yellow-500 p-4 rounded-lg shadow-lg mb-10">
          <h3 className="text-xl font-semibold text-yellow-300 mb-2">✅ Quick Concept Check</h3>
          <p className="text-gray-300 mb-2">
            If you roll a fair 6-sided die, what is the probability of rolling an even number?
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>1/6</li>
            <li><strong>3/6 = 0.5 (Correct)</strong></li>
            <li>1</li>
            <li>2/3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
