'use client';

import { useState } from 'react';

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl p-8 bg-white shadow-xl rounded-lg">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Welcome to My Portfolio</h1>
          <p className="text-xl text-gray-600">A showcase of my projects and skills</p>
        </header>

        {/* Card Section */}
        <section className="flex justify-center mb-12">
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-lg w-80">
            {/* Profile Image */}
            <div className="w-32 h-32 mb-4">
              <img
                src="../images/my pic2.jpg" // Replace with your image path
                alt="Your Name"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {/* Intro Text */}
            <h2 className="text-2xl font-semibold text-gray-800">Your Name</h2>
            <p className="text-center text-gray-600 mt-2">
              I am a passionate web developer with experience in building responsive, user-friendly websites and applications. My focus is on front-end development using React, Next.js, and Tailwind CSS.
            </p>
          </div>
        </section>

        {/* About Me Section */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">My Skills</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML / CSS</li>
              <li>Node.js</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Project 1: Portfolio Website</h3>
                <p className="text-gray-700">Built this portfolio using Next.js, TypeScript, and Tailwind CSS to showcase my work.</p>
                <a href="#" className="text-blue-500">View Project</a>
              </div>
              <div className="p-4 border rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Project 2: E-commerce App</h3>
                <p className="text-gray-700">An e-commerce app built with React and Redux to manage state and shopping cart functionality.</p>
                <a href="#" className="text-blue-500">View Project</a>
              </div>
            </div>
            {showMore && (
              <div className="space-y-4 mt-4">
                <div className="p-4 border rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900">Project 3: Blog Application</h3>
                  <p className="text-gray-700">A simple blog app built with Next.js and Markdown for creating posts and comments.</p>
                  <a href="#" className="text-blue-500">View Project</a>
                </div>
              </div>
            )}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
