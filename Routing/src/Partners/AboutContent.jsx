import React from 'react';
import P1 from '../assets/P1.jpg'
import P2 from '../assets/p2.jpg'
function AboutContent() {
  return (
    <div className="max-w-7xl mx-auto mb-16">
      <div className="text-start mb-12">
        <p className=" text-blue-400 text-md font-semibold uppercase mb-2">
          WHO WE ARE AND HOW WE WORK
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          CMS Technology Partners
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 text-sm leading-relaxed">
              CMS Technology Partners is committed to providing the same high level of 
              personal service and customer satisfaction that it has done for the past two 
              decades. Our team has decades of experience in the security industry with 
              many years of experience that can bring you the best solutions in this rapidly 
              changing, high technology world for your telephone systems, networks, 
              computer systems, and more. Our services include complete system design, 
              implementation, maintenance, and security.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg group ">
            <img 
              src={P2} 
              alt="Security monitoring on tablet"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-lg overflow-hidden shadow-lg h-64 lg:h-96 group  ">
            <img 
              src={P1} 
              alt="Security control room"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              CMS has created a comprehensive team of communications and technology 
              specialists that represent experts in areas of hardware, software, wireless 
              technologies and are able to integrate existing equipment in a rapidly evolving 
              industry. Through strategic partnerships CMS brings to market its enhanced 
              support for Motorola as well as other, budding projects.
            </p>
            <button className="mt-4 ml-5 lg:mt-8 lg:ml-18 text-white bg-green-700 hover:bg-green-800 focus:ring-4  font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ">
                About us <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutContent;