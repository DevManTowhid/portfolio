import React from "react";

const Navbar3D = () => {
  return (
    <nav className="bg-white p-4 w-full shadow-lg">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        rel="stylesheet"
      />
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-black text-2xl font-bold tracking-widest uppercase">
          My Contacts
        </div>

        {/* Social Media Links */}
        <ul className="flex space-x-8">
          <li className="social-icon">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500 transition-colors duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="social-icon">
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-400 transition-colors duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="social-icon">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-700 transition-colors duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="social-icon">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-pink-500 transition-colors duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          
          <li className="social-icon">
            <a
              href="https://github.com/DevManTowhid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-800 transition-colors duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
         
          
        </ul>
      </div>
      

      {/* 3D Hover Effect Styling */}
      <style jsx>{`
        .social-icon {
            padding:12px;
            border-radius:12px;
            width: 56px;
            height: 72px;
          font-size: 1.8rem; /* Icon size */
          transition: transform 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
        }

        .social-icon:hover {
          transform: translateY(-5px) scale(1.2); /* 3D lift effect */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Shadow for 3D effect */
        }

        .social-icon i {
          transition: transform 0.3s ease;
        }

        .social-icon:hover i {
          transform: rotate(360deg); /* Spin on hover */
        }
      `}</style>
    </nav>
  );
};

export default Navbar3D;
