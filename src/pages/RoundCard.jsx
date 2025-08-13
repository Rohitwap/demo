import React from 'react';
import cardImage1 from '../assets/1.jpeg';
import cardImage2 from '../assets/2.jpeg';
import cardImage3 from '../assets/3.jpeg';
import cardImage4 from '../assets/4.jpeg';
import cardImage5 from '../assets/5.jpeg';
import cardImage6 from '../assets/6.jpeg';
import cardImage7 from '../assets/7.jpeg';
import cardImage8 from '../assets/9.jpeg';

const ThreeDCard = ({ image, title, description, index }) => {
  const colors = [
    'shadow-cyan-500/30 hover:shadow-cyan-500/50',
    'shadow-blue-500/30 hover:shadow-blue-500/50',
    'shadow-indigo-500/30 hover:shadow-indigo-500/50',
    'shadow-violet-500/30 hover:shadow-violet-500/50',
    'shadow-purple-500/30 hover:shadow-purple-500/50',
    'shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50',
    'shadow-pink-500/30 hover:shadow-pink-500/50',
    'shadow-rose-500/30 hover:shadow-rose-500/50',
  ];

  return (
    <div className="group perspective-1000 w-full max-w-sm mx-auto">
      <div className="relative h-80 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] transform-style-preserve-3d group-hover:rotate-y-20 group-hover:rotate-x-10">
        {/* Front of Card */}
        <div className={`absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/10 transition-all duration-700 ${colors[index]}`}>
          {/* Image with parallax effect */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80';
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-6 text-white">
            <span className="text-sm font-medium text-violet-300 mb-1 transition-all duration-500 group-hover:translate-y-1">
            
            </span>
            <h3 className="text-2xl font-bold mb-2 transition-all duration-500 delay-75 group-hover:translate-y-1">
              {title}
            </h3>
            <p className="text-white/80 text-sm mb-4 transition-all duration-500 delay-100 group-hover:translate-y-1">
              {description}
            </p>
            <button className="self-start bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform group-hover:translate-y-1 group-hover:scale-105 shadow-lg hover:shadow-violet-500/30">
              View Details
            </button>
          </div>
        </div>

        {/* Backside reflection effect */}
        <div 
          className="absolute inset-0 bg-white/5 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            transform: 'translateZ(-50px) rotateY(180deg)',
            filter: 'blur(15px)',
          }}
        />
      </div>
    </div>
  );
};

const ThreeDCardGallery = () => {
  const cards = [
    { 
      image: cardImage1, 
      
    },
    { 
      image: cardImage2, 
     
    },
    { 
      image: cardImage3, 
      
    },
    { 
      image: cardImage4, 
      
    },
    { 
      image: cardImage5, 
      
    },
    { 
      image: cardImage6, 
      
    },
    { 
      image: cardImage7, 
     
    },
    { 
      image: cardImage8, 
      
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
          SAMAURA ACADENY BEAUTIFUL MEMORYS
        </h2>
        <p className="text-violet-300 max-w-md mx-auto">
          Beautiful Memories of Samaura Academy

        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <ThreeDCard 
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeDCardGallery;