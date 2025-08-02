import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import logo from "../assets/ll.jpg";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed top-0 w-full z-50 bg-[#0f172a] border-b border-gray-700">
      <div className="flex items-center justify-between px-4 py-3 md:px-10 md:h-20 mr-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="MLQuest"
              className="h-12 w-auto rounded-xl cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-slate-200 font-medium items-center relative">
          <ScrollLink
            to="progress"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            Road Maps
          </ScrollLink>

          <ScrollLink
            to="MINDMAP"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            StartLearning
          </ScrollLink>

          <ScrollLink
            to="team"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            Projects
          </ScrollLink>

          <Link to="/tracklearning" className="cursor-pointer">
            TrackLearning
          </Link>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            Contact
          </ScrollLink>

          <a
            href="https://cdn.botpress.cloud/webchat/v3.1/shareable.html?configUrl=https://files.bpcontent.cloud/2025/07/29/23/20250729233820-7UFL85N7.json"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            Chatbot
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center text-white">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] px-4 pb-4 text-slate-200 space-y-4 text-base font-medium">
          <ScrollLink
            to="progress"
            smooth={true}
            duration={500}
            offset={-80}
            className="block cursor-pointer"
            onClick={closeMenu}
          >
            Road Maps
          </ScrollLink>

          <ScrollLink
            to="startlearning"
            smooth={true}
            duration={500}
            offset={-80}
            className="block cursor-pointer"
            onClick={closeMenu}
          >
            StartLearning
          </ScrollLink>

          <ScrollLink
            to="team"
            smooth={true}
            duration={500}
            offset={-80}
            className="block cursor-pointer"
            onClick={closeMenu}
          >
            Projects
          </ScrollLink>

          <Link
            to="/tracklearning"
            className="block cursor-pointer"
            onClick={closeMenu}
          >
            TrackLearning
          </Link>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="block cursor-pointer"
            onClick={closeMenu}
          >
            Contact
          </ScrollLink>

          <a
            href="https://cdn.botpress.cloud/webchat/v3.1/shareable.html?configUrl=https://files.bpcontent.cloud/2025/07/29/23/20250729233820-7UFL85N7.json"
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer"
            onClick={closeMenu}
          >
            Chatbot
          </a>
        </div>
      )}
    </div>
  );
}
