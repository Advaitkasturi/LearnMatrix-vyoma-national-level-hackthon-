import React from 'react';

export default function Matrices() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-400 mb-4">🧮 Matrices</h1>

        <p className="text-lg text-gray-300 mb-6">
          Matrices are two-dimensional arrays of numbers that are fundamental to machine learning, linear algebra, and data science. They are used to represent datasets, perform transformations, and model complex relationships.
        </p>

        {/* Definition */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6 shadow-md">
          <h2 className="text-2xl font-semibold text-blue-400 mb-2">📐 What is a Matrix?</h2>
          <p className="text-gray-300">
            A matrix is an m × n array of numbers, where m is the number of rows and n is the number of columns. Each number is called an element of the matrix.
          </p>
          <p className="text-center text-xl text-yellow-300 my-4 font-mono">
            A = [a₁₁ a₁₂ … a₁n<br />  a₂₁ a₂₂ … a₂n<br />  …  …  …<br />  am₁ am₂ … amn]
          </p>
        </div>

        {/* Matrix Operations */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6 shadow-md">
          <h2 className="text-2xl font-semibold text-pink-400 mb-2">🔄 Common Operations</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Matrix addition & subtraction</li>
            <li>Scalar and matrix multiplication</li>
            <li>Transpose</li>
            <li>Inverse (if it exists)</li>
            <li>Determinant</li>
          </ul>
        </div>

        {/* Applications in ML */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6 shadow-md">
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">🧠 Applications in Machine Learning</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Representing datasets (rows as samples, columns as features)</li>
            <li>Linear transformations and projections</li>
            <li>Gradient computation and optimization</li>
            <li>Deep learning (weights and activations in neural networks)</li>
          </ul>
        </div>

        {/* Visualization */}
        <div className="mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Matrix_multiplication_diagram_2.svg/512px-Matrix_multiplication_diagram_2.svg.png"
            alt="Matrix multiplication"
            className="rounded-lg shadow-md border border-green-500"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">Example of matrix multiplication</p>
        </div>

        {/* Concept Check */}
        <div className="bg-gray-900 border border-blue-600 p-4 rounded-lg shadow-lg mb-10">
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">✅ Quick Concept Check</h3>
          <p className="text-gray-300 mb-2">
            What is the result of multiplying a 2×3 matrix with a 3×1 matrix?
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>1×1 scalar</li>
            <li><strong>2×1 matrix</strong></li>
            <li>3×3 matrix</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
