import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaSnapchat,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

export default function FooterSocials() {
  return (
    <div className="">
      <h3 className="text-gray-500 font-bold mb-3">Stay Connected:</h3>
      <ul className="flex gap-2.5">
        <li>
          <a
            href="http://"
            className="text-gray-400 hover:text-blue-500 text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a
            href="http://"
            className="text-gray-400 hover:text-blue-500 text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
        </li>
        <li>
          <a
            href="http://"
            className="text-gray-400 hover:text-blue-500 text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="http://"
            className="text-gray-400 hover:text-blue-500 text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="http://"
            className="text-gray-400 hover:text-blue-500 text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </li>
        <li>
          <a
            href="http://"
            className="text-gray-400 hover:text-blue-500 text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterest />
          </a>
        </li>{' '}
        <li>
          <a
            href="http://"
            className="text-gray-400 hover:text-blue-500 text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSnapchat />
          </a>
        </li>
      </ul>
    </div>
  );
}
