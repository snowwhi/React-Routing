import React from 'react';
import L1 from '../assets/L1.jpg'
import L2 from '../assets/L2.jpg'
import L3 from '../assets/L3.jpg'
import L4 from '../assets/L4.jpg'
import L5 from '../assets/L5.jpg'
function PartnerLogos() {
  const partners = [
    { name: 'X', logo:L1 },
    { name: 'Y', logo:L2 },
    { name: 'Z', logo:L3 },
    { name: 'ACRA', logo: L4},
    { name: 'ACTHAC', logo:L5 },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2">
          ORGANIZATIONS
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
          We've Partnered With:
        </h3>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
        {partners.map((partner, index) => (
          <div 
            key={index}
            className=" duration-300 opacity-70 hover:opacity-100"
          >
            <img 
              src={partner.logo} 
              alt={partner.name}
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default PartnerLogos;