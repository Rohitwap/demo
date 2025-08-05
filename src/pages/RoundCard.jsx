import React from "react";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";
import img9 from "../assets/9.jpeg";

const CardCarousel = () => {
  // Correct way to create the image array
  const images = [img1, img2, img3, img4, img5, img6, img7,  img9];

  // Card colors
  const cardColors = [
    "border-cyan-200",
    "border-teal-200",
    "border-green-200",
    "border-lime-200",
    "border-yellow-200",
    "border-amber-200",
    "border-red-200",
    "border-pink-200",
    "border-purple-200",
    "border-blue-200",
  ];

  return (
    <>
    <div
      className="text-center text-black border-2 border-indigo-400 rounded-xl px-8 py-4 mb-10 mx-auto w-fit transition-all duration-500 hover:border-pink-400 hover:shadow-lg hover:scale-105 animate-pulse"
      style={{
        boxShadow: "0 0 20px 0 rgba(99,102,241,0.2)",
        transition: "border-color 0.5s, box-shadow 0.5s, transform 0.5s"
      }}
    >
      <span className="font-bold text-2xl tracking-wide">Our Proud Moments</span>
      <div className="mt-2 text-base opacity-80">Hover to feel the energy!</div>
    </div>
    <div className="w-full h-screen relative flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute w-[200px] h-[250px] top-1/4 left-1/2 -translate-x-1/2 z-10 transform-style-preserve-3d perspective-[1000px] animate-rotating">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute border-2 rounded-xl overflow-hidden inset-0 ${cardColors[index]}`}
            style={{
              transform: `rotateY(${(360 / images.length) * index}deg) translateZ(350px)`,
            }}
          >
            <img
              src={image}
              alt={`Card ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300x200";
              }}
            />
          </div>
        ))}
      </div>

      {/* Custom animation definition */}
      <style jsx global>{`
        @keyframes rotating {
          from {
            transform: perspective(1000px) rotateX(-15deg) rotateY(0);
          }
          to {
            transform: perspective(1000px) rotateX(-15deg) rotateY(360deg);
          }
        }
        .animate-rotating {
          animation: rotating 20s linear infinite;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
    </>
  );
};

export default CardCarousel;