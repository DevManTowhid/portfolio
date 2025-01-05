import React from "react";

interface Language {
  name: string;
  icon: string;
  link: string;
  color: string;
}

interface NavbarLanguagesProps {
  languages: Language[];
}

const NavbarLanguages: React.FC<NavbarLanguagesProps> = ({ languages }) => {
  return (
    <nav className="bg-gray-900 p-4 w-full shadow-lg">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/devicons/2.14.0/css/devicons.min.css"
        rel="stylesheet"
      />
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-white text-2xl font-bold tracking-widest uppercase">
          Programming Languages
        </div>

        {/* Programming Language Links */}
        <ul className="flex space-x-8">
          {languages.map((language, index) => (
            <li key={index} className="language-icon">
              <a
                href={language.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white hover:text-${language.color} transition-colors duration-300`}
              >
                <i className={`devicon-${language.icon}-plain`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Styling */}
      <style jsx>{`
        .language-icon {
          font-size: 2rem; /* Icon size */
          transition: transform 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
        }

        .language-icon:hover {
          transform: translateY(-5px) scale(1.2); /* 3D lift effect */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Shadow for 3D effect */
        }
      `}</style>
    </nav>
  );
};

export default NavbarLanguages;
