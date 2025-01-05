'use client';

import { useState } from 'react';
import Navbar3D from '@/components/Navbar3D';
import NavbarLanguages from "@/components/NavbarLanguages";

const languages = [
  {
    name: "Python",
    icon: "python",
    link: "https://www.python.org/",
    color: "blue-500",
  },
  {
    name: "Java",
    icon: "java",
    link: "https://www.java.com/",
    color: "red-600",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    link: "https://www.javascript.com/",
    color: "yellow-500",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    link: "https://www.typescriptlang.org/",
    color: "blue-400",
  },
  {
    name: "PHP",
    icon: "php",
    link: "https://www.php.net/",
    color: "purple-500",
  },
  {
    name: "C++",
    icon: "cplusplus",
    link: "https://www.cplusplus.com/",
    color: "blue-700",
  },
  {
    name: "Go",
    icon: "go",
    link: "https://golang.org/",
    color: "teal-400",
  },
];

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl p-8 bg-white shadow-xl rounded-lg w-full">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Welcome to My Portfolio</h1>
          <p className="text-xl text-gray-600">A showcase of my projects and skills</p>
        </header>

        {/* Profile Section */}
        <section className="flex justify-center mb-12">
          <div className="flex flex-col items-center bg-gray-50 p-6 shadow-lg w-80 md:w-96 rounded-lg">
            <div className="w-32 h-32 mb-4">
              <img
                src="https://raw.githubusercontent.com/DevManTowhid/portfolio/main/src/images/my%20pic2.jpg"
                alt="Md Towhidul Alam"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Md Towhidul Alam</h2>
            <p className="text-center text-gray-600 mt-2">
              I am a passionate Machine Learning Enthusiast interested in Python and Machine Learning.
            </p>
          </div>
        </section>

        {/* Programming Languages Section */}
        <section className="mb-12">
          <NavbarLanguages languages={languages} />
        </section>

        {/* About Me Section */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">My Skills</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Python</li>
              <li>HTML / CSS</li>
              <li>JavaScript</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          {/* Projects Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Project 1: Portfolio Website</h3>
                <p className="text-gray-700">Built this portfolio using Next.js, TypeScript, and Tailwind CSS to showcase my work.</p>
                <a
                  href="https://github.com/DevManTowhid/portfolio"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
              <div className="p-4 border rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Project 2: Doctor Appointment Management</h3>
                <p className="text-gray-700">
                  A doctor appointment booking and management app with various functionalities using PHP, MySQL, and HTML/CSS/JS.
                </p>
                <a
                  href="https://github.com/DevManTowhid/doctor-appointment-project"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
              {showMore && (
                <div className="p-4 border rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900">Project 3: Machine Learning Model</h3>
                  <p className="text-gray-700">
                    A machine learning model developed using Python to predict data trends.
                  </p>
                  <a
                    href="https://github.com/DevManTowhid/ml-project"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              )}
            </div>

            {/* Show More Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </section>

        {/* 3D Navbar and Contact Section */}
        <section className="mt-12">
          <Navbar3D />
          <div className="mt-8">
            <a
              href="https://www.upwork.com/"
              className="text-xl bg-green-500 py-3 px-6 rounded-xl text-white hover:bg-green-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Me on Upwork
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
