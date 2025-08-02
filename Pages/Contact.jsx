import React from "react";
import {
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoGithub,
  IoLogoWhatsapp,
} from "react-icons/io";
import { FaDiscord } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Contact() {
  return (
    <div
      id="contact"
      className="bg-[#0f172a] text-white py-12 px-6 md:px-20 -skew-y-3"
    >
      <div className="skew-y-3 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">

          {/* About LearnMatrix */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About LearnMatrix</h3>
            <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
              <li>
                LearnMatrix is a centralized platform that simplifies Machine Learning education through curated roadmaps, real-world projects, and personalized tracking.
              </li>
              <li>
                Built by learners, for learners.
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
              <li>
                General Queries:{" "}
                <a href="mailto:info@learnmatrix.tech" className="underline">
                  info@learnmatrix.tech
                </a>
              </li>
              <li>
                Learning Help:{" "}
                <a href="mailto:support@learnmatrix.tech" className="underline">
                  support@learnmatrix.tech
                </a>
              </li>
              <li>
                Report an Issue:{" "}
                <a href="mailto:bugs@learnmatrix.tech" className="underline">
                  bugs@learnmatrix.tech
                </a>
              </li>
            </ul>
          </div>

          {/* Collaborate With Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Collaborate With Us</h3>
            <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
              <li>
                Content Partnerships:{" "}
                <a href="mailto:content@learnmatrix.tech" className="underline">
                  content@learnmatrix.tech
                </a>
              </li>
              <li>
                Tech Collaborations:{" "}
                <a href="mailto:dev@learnmatrix.tech" className="underline">
                  dev@learnmatrix.tech
                </a>
              </li>
              <li>
                Campus Ambassadors:{" "}
                <a href="mailto:ambassadors@learnmatrix.tech" className="underline">
                  ambassadors@learnmatrix.tech
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-3xl text-gray-400">
              <a href="https://linkedin.com/company/learnmatrix" target="_blank" rel="noreferrer">
                <IoLogoLinkedin className="hover:text-blue-400" />
              </a>
              <a href="https://www.youtube.com/@learnmatrix" target="_blank" rel="noreferrer">
                <IoLogoYoutube className="hover:text-red-500" />
              </a>
              <a href="https://www.instagram.com/learnmatrix/" target="_blank" rel="noreferrer">
                <FaInstagramSquare className="hover:text-pink-400" />
              </a>
              <a href="https://twitter.com/learnmatrix" target="_blank" rel="noreferrer">
                <FaSquareXTwitter className="hover:text-gray-300" />
              </a>
              <a href="https://www.reddit.com/r/learnmatrix/" target="_blank" rel="noreferrer">
                <FaReddit className="hover:text-orange-500" />
              </a>
              <a href="https://wa.me/918008243308" target="_blank" rel="noreferrer">
                <IoLogoWhatsapp className="hover:text-green-500" />
              </a>
              <a href="https://github.com/learnmatrix" target="_blank" rel="noreferrer">
                <IoLogoGithub className="hover:text-gray-300" />
              </a>
              <a href="https://discord.gg/learnmatrix" target="_blank" rel="noreferrer">
                <FaDiscord className="hover:text-indigo-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} LearnMatrix — Built by Code Warriors
        </div>
      </div>
    </div>
  );
}

export default Contact;
