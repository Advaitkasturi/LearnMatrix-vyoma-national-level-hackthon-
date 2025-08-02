import React from 'react';

export default function SVD() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-400 mb-4">
          🔍 Singular Value Decomposition (SVD)
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          SVD is a matrix factorization technique that decomposes a matrix into three other matrices. It's widely used in machine learning for dimensionality reduction, noise reduction, and feature extraction.
        </p>

        {/* Mathematical Form */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6 shadow-md">
          <h2 className="text-2xl font-semibold text-pink-400 mb-2">📐 Mathematical Form</h2>
          <p className="text-gray-300">
            Given a matrix <code className="bg-gray-700 px-1 rounded">A</code>, the SVD is:
          </p>
          <p className="text-center text-xl text-yellow-300 my-4 font-mono">
            A = U × Σ × V<sup>T</sup>
          </p>
          <ul className="text-gray-300 list-disc list-inside space-y-1">
            <li><strong>U</strong>: Left singular vectors (orthogonal)</li>
            <li><strong>Σ</strong>: Diagonal matrix of singular values (non-negative)</li>
            <li><strong>V<sup>T</sup></strong>: Right singular vectors (transpose of orthogonal matrix V)</li>
          </ul>
        </div>

        {/* Illustration */}
        <div className="mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Singular_value_decomposition_visualisation.svg/640px-Singular_value_decomposition_visualisation.svg.png"
            alt="SVD Illustration"
            className="rounded-lg shadow-md border border-indigo-500"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">Geometric interpretation of SVD</p>
        </div>

        {/* Applications */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6 shadow-md">
          <h2 className="text-2xl font-semibold text-green-400 mb-2">🧠 Applications in ML</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Dimensionality reduction (e.g., Latent Semantic Analysis)</li>
            <li>Image compression (by keeping only top singular values)</li>
            <li>Collaborative filtering (recommender systems)</li>
            <li>Noise reduction in data</li>
          </ul>
        </div>

        {/* Concept Check */}
        <div className="bg-gray-900 border border-indigo-600 p-4 rounded-lg shadow-lg mb-10">
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">✅ Quick Concept Check</h3>
          <p className="text-gray-300 mb-2">
            What do the singular values in Σ represent?
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>The eigenvalues of the original matrix</li>
            <li><strong>The importance (energy) of each component</strong></li>
            <li>Inverse of the matrix components</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
