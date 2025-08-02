import React from 'react';

export default function Statistics() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">📈 Statistics</h1>

        <p className="text-lg text-gray-300 mb-6">
          Statistics provides the foundation for understanding and analyzing data. It's essential in Machine Learning for model evaluation, hypothesis testing, and data exploration.
        </p>

        {/* Descriptive Stats */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6 shadow-md">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-2">📊 Descriptive Statistics</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Mean, Median, Mode</li>
            <li>Standard Deviation & Variance</li>
            <li>Skewness & Kurtosis</li>
          </ul>
        </div>

        {/* Inferential Stats */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6 shadow-md">
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">🧪 Inferential Statistics</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Sampling & Estimation</li>
            <li>Confidence Intervals</li>
            <li>Hypothesis Testing</li>
            <li>p-values and Significance</li>
          </ul>
        </div>

        {/* ML Use-Cases */}
        <div className="bg-gray-900 border border-cyan-700 p-4 rounded-lg shadow-lg mb-10">
          <h3 className="text-xl font-semibold text-cyan-300 mb-2">🤖 Machine Learning Connections</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Evaluating Model Performance (accuracy, precision, recall)</li>
            <li>Understanding Distributions (normal, binomial, etc.)</li>
            <li>Visualizing data (histograms, boxplots, etc.)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
