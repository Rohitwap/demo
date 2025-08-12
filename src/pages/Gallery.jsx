import React, { useState, useEffect } from 'react';
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";
import img9 from "../assets/9.jpeg";




// Images for the Samaura Academy Campus Selection Page
const images = [
  { id: 1, src: img1, alt: 'Student receiving a congratulatory bouquet from a faculty member.' },
  { id: 2, src: img2, alt: 'Student posing with a faculty member after a successful campus selection.' },
  { id: 3, src: img3, alt: 'Students working diligently in the computer lab.' },
  { id: 4, src: img4, alt: 'A group of students and faculty at a campus event welcoming a new partner.' },
  { id: 5, src: img5, alt: 'A student receiving a gift from a faculty member during a selection event.' },
  { id: 6, src: img6, alt: 'A student presenting a topic during a lecture in the classroom.' },
  { id: 7, src: img7, alt: 'Students listening attentively to a lecture in a classroom.' },
  { id: 8, src: img9, alt: 'Faculty members conducting an interview with a student during campus selection.' },
];

function Gallery() {
  const [loading, setLoading] = useState(true);

  // Simulate a loading state for better user experience
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Header Section */}
      <header className="py-12 bg-gray-800 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 animate-pulse">
          Samaura Academy Campus Selection
        </h1>
        <p className="mt-4 text-xl text-gray-400">
          Celebrating student achievements and campus life.
        </p>
      </header>

      {/* Main Gallery Content */}
      <main className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {images.map((image) => (
              <div key={image.id} className="relative w-full h-96 group">
                {/* Beautiful Card Design */}
                <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden">
                  {/* Gradient Background Layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-pink-600"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-pink-600 blur-xl opacity-70"></div>
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-1 bg-black bg-opacity-60 z-10 rounded-xl"></div>
                  
                  {/* Image */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute z-20 w-full h-full object-cover opacity-30 group-hover:opacity-90 transition-all duration-500 scale-90 group-hover:scale-75 group-hover:-translate-y-16"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/600x400/374151/E5E7EB?text=Image+Error';
                    }}
                  />
                  
                  {/* Content (appears on hover) */}
                  <div className="absolute z-30 bottom-0 w-full flex flex-col items-center transform scale-0 group-hover:scale-100 transition-transform duration-500 group-hover:bottom-8">
                    <p className="text-white font-medium uppercase text-center text-sm tracking-wider mb-2">
                      Samaura Academy<br />
                      <span className="font-light text-xs">Campus Selection</span>
                    </p>
                    
                   
                  </div>
                  
                  {/* Image Description (appears on hover) */}
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm bg-black bg-opacity-50 p-2 rounded">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-800 text-center text-gray-400">
        <p>© 2024 Samaura Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Gallery;