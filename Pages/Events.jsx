import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TreeNode = ({ label, to, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = React.Children.count(children) > 0;

  const content = (
    <div
      className={`cursor-pointer px-4 py-2 rounded-xl shadow-sm transition-all duration-300 text-center 
        ${hasChildren
          ? isOpen
            ? 'bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-md scale-105'
            : 'bg-gray-800 text-gray-100 hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-500 hover:text-white hover:scale-105'
          : 'bg-gray-700 text-gray-200 hover:bg-purple-600 hover:text-white hover:scale-105'
        }`}
      onClick={() => !to && hasChildren && setIsOpen(!isOpen)}
    >
      {label}
    </div>
  );

  return (
    <div className="mt-2 text-center transition-all duration-300">
      {to ? <Link to={to}>{content}</Link> : content}
      {hasChildren && isOpen && (
        <div className="ml-6 mt-2 border-l-4 border-purple-500 pl-4 text-left space-y-2">
          {children}
        </div>
      )}
    </div>
  );
};

const MindMap = () => (
  <div id="mindmap" className="p-8 bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen text-white font-sans">
    <h2 className="text-4xl font-extrabold mb-8 text-pink-400 drop-shadow-md text-center">
      🧠 Learning Roadmap
    </h2>

    <div className="max-w-4xl mx-auto">
      <TreeNode label="📘 Mathematics 📐">
        <TreeNode label="🟦 Vectors" to="/vectors" />
        <TreeNode label="🟨 Matrices" to="/matrices" />
        <TreeNode label="🟫 Single Value Decomposition" to="/svd" />
        <TreeNode label="🔁 Derivatives" to="/derivatives" />
        <TreeNode label="✅ Provability" to="/provability" />
        <TreeNode label="📊 Statistics" to="/statistics" />
      </TreeNode>

      <TreeNode label="💻 Programming 🚀">
        <TreeNode label="🔹 Basics">
          <TreeNode label="📌 Datatypes" to="/datatypes" />
          <TreeNode label="➕ Operators" to="/operators" />
          <TreeNode label="🔄 Control Statements" to="/control-statements" />
          <TreeNode label="🔁 Loops" to="/loops" />
        </TreeNode>

        <TreeNode label="🔸 DSA (Data Structures)">
          <TreeNode label="📦 Arrays" to="/arrays" />
          <TreeNode label="🧵 Strings" to="/strings" />
          <TreeNode label="📋 Lists" to="/lists" />
          <TreeNode label="📐 Tuples" to="/tuples" />
          <TreeNode label="📓 Dictionaries" to="/dictionaries" />
          <TreeNode label="🧮 Sets" to="/sets" />
        </TreeNode>

        <TreeNode label="🛠️ Functions & Libraries">
          <TreeNode label="🔧 Functions" to="/functions" />
          <TreeNode label="♻️ Recursive Functions" to="/recursive-functions" />
          <TreeNode label="📚 Libraries" to="/libraries" />
        </TreeNode>
      </TreeNode>
    </div>
  </div>
);

export default MindMap;
