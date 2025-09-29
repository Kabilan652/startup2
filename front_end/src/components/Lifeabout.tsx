import React from "react";
import { LinkedinIcon, Mail } from "lucide-react";

import sathishImg from "/images/sathish.jpg";
import harishImg from "/images/harish.jpg";
import SakthiSaravananImg from "/images/SakthiSaravanan.jpg";
import kabilanImg from "/images/kabilan.jpg";

const Lifeabout: React.FC = () => {
  const founders = [
    {
      name: "Sathish N",
      role: "Founder & CEO",
      image: sathishImg,
      linkedin: "https://www.linkedin.com/in/nssathish",
      email: "nssathish104@gmail.com",
    },
    {
      name: "Harish S",
      role: "CTO & Co-Founder",
      image: harishImg,
      linkedin: "https://www.linkedin.com/in/mrharishraj/",
      email: "harishraj.subburaj@gmail.com",
    },
    {
      name: "Kabilan D",
      role: "Co-Founder & CDO",
      image: kabilanImg,
      linkedin: "https://www.linkedin.com/in/kabilan-d-02a036297",
      email: "kabilandina11@gmail.com",
    },
    {
      name: "Sakthi Saravanan S",
      role: "Co-founder & COO",
      image: SakthiSaravananImg,
      linkedin: "https://www.linkedin.com/sakthi",
      email: "sakthisaravanan3415@gmail.com",
    },
    
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-16">
          Meet Our Founders
        </h3>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-2xl p-6 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={founder.image}
                alt={founder.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-white"
              />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h4>
              <p className="text-blue-600 font-semibold mb-4">{founder.role}</p>

              <div className="flex flex-col items-center space-y-2">
                <a
                  href={founder.linkedin}
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={`mailto:${founder.email}`}
                  className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lifeabout;
