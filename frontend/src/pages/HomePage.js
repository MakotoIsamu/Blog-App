// src/pages/Homepage.js

import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Koodingu</h1>
          <nav>
            <a href="#home" className="text-white hover:underline mx-2">Home</a>
            <a href="#about" className="text-white hover:underline mx-2">About</a>
            <a href="#contact" className="text-white hover:underline mx-2">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Koodingu</h2>
          <p className="text-xl mb-6">Your go-to place for coding tutorials, tips, and blog posts.</p>
          <a href="#latest-posts" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Read Latest Posts</a>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section id="latest-posts" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Post */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://via.placeholder.com/400" alt="Post Thumbnail" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Understanding React Hooks</h3>
                <p className="text-gray-700 mb-4">A deep dive into React hooks and how they improve component logic management.</p>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
              </div>
            </div>
            {/* Repeat for more posts */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Koodingu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
