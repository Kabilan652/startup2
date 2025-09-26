import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, LinkedinIcon, Mail } from 'lucide-react';

import sathishImg from "/images/sathish.jpg"
import harishImg from "/images/harish.jpg"
import SakthiSaravananImg from "/images/SakthiSaravanan.jpg"
import kabilanImg from "/images/kabilan.jpg"

const Lifeabout: React.FC = () => {
  const [currentFounder, setCurrentFounder] = useState(0);

  const founders = [
    {
      name: "Sathish N",
      role: "Founder & CEO",
      image: sathishImg,
      linkedin: "https://www.linkedin.com/in/nssathish",
      email: "nssathish104@gmail.com"
    },
    {
      name: "Harish S",
      role: "CTO & Co-Founder",
      image: harishImg,
      linkedin: "https://www.linkedin.com/in/mrharishraj/",
      email: "harishraj.subburaj@gmail.com"
    },
    {
      name: "Sakthi Saravanan S",
      role: "Co-founder & COO",
      image: SakthiSaravananImg,
      linkedin: "https://www.linkedin.com/sakthi",
      email: "sakthisaravanan3415@gmail.com"
    },
    {
      name: "Kabilan D",
      role: "Co-Founder & CDO",
      image: kabilanImg,
      linkedin: "https://www.linkedin.com/in/kabilan-d-02a036297",
      email: "kabilandina11@gmail.com.com"
    }
  ];

  const nextFounder = () => {
    setCurrentFounder((prev) => (prev + 1) % founders.length);
  };

  const prevFounder = () => {
    setCurrentFounder((prev) => (prev - 1 + founders.length) % founders.length);
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Founders</h3>
          <div className="relative max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <img
                src={founders[currentFounder].image}
                alt={founders[currentFounder].name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{founders[currentFounder].name}</h4>
              <p className="text-blue-600 font-semibold mb-4">{founders[currentFounder].role}</p>
              
              <div className="flex flex-col items-center space-y-2">
                <a
                  href={founders[currentFounder].linkedin}
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="w-5 h-5" />
                  <span>Connect on LinkedIn</span>
                </a>

                <a
                  href={`mailto:${founders[currentFounder].email}`}
                  className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            <button
              onClick={prevFounder}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button
              onClick={nextFounder}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lifeabout;
