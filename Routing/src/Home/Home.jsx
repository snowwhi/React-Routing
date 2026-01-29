import React, { useState } from 'react';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.avif';
import s3 from '../assets/s3.avif'
import 'remixicon/fonts/remixicon.css'
function Home() {
  const images = [s3, s2,s1];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div className="w-full h-[88.6%]">
      <img 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex}`} 
        className="w-full  h-full grow object-cover transition-opacity duration-500"
      />
 <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 mt-10 flex flex-col items-start justify-center text-white px-4 text-center">
        <p className="text-lg md:text-xl max-w-2xl drop-shadow-md uppercase">
          CMS Technology Partners
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg sm:text-2xl">
            &nbsp;AI Camera Vision &<br/>Thread Detection
        </h1>
        <p className="text-lg md:text-xl max-w-2xl drop-shadow-md text-left hidden lg:block">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non repudiandae quibusdam, vero hic quam doloribus. Doloremque eos esse facilis expedita alias harum numquam non, excepturi consequatur architecto, repellendus dicta.
        </p>
        <button className="  mt-4 ml-5 lg:mt-8 lg:ml-18 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ">
           Get started
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 w-max">
        <button 
          onClick={prevSlide}
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-sm px-3 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        >
          <i className="ri-arrow-left-line"></i>
        </button>
        <button 
          onClick={nextSlide}
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-sm px-3 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        >
         <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  );
}

export default Home;