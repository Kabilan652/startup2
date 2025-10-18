import React, { useState } from 'react';
import {  Heart, Users, Trophy, Gamepad2, Globe, UserCheck, Inspect as Respect, BookOpen, Zap, TrendingUp } from 'lucide-react';

import sathishImg from "/images/sathish.jpg"

const LifeAtTechNew: React.FC = () => {
  const [ setCurrentFounder] = useState(0);

  const founders = [
    {
      name: "Sathish",
      role: "CEO & Co-Founder",
      image: sathishImg,
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      image: "",
      linkedin: "#"
    },
    {
      name: "Emily Rodriguez",
      role: "COO & Co-Founder",
      image: "",
      linkedin: "#"
    },
    {
      name: "David Kumar",
      role: "CPO & Co-Founder",
      image: "",
      linkedin: "#"
    }
  ];

  

  const cultureValues = [
    { icon: Heart, title: 'Innovation', description: 'Fostering creativity and breakthrough thinking' },
    { icon: Users, title: 'Collaboration', description: 'Working together to achieve extraordinary results' },
    { icon: TrendingUp, title: 'Growth', description: 'Continuous learning and professional development' },
    { icon: Gamepad2, title: 'Fun at Work', description: 'Maintaining joy and enthusiasm in everything we do' }
  ];

  const diversityValues = [
    { icon: Globe, title: 'Global Mindset', description: 'Embracing diverse perspectives from around the world' },
    { icon: UserCheck, title: 'Equal Opportunity', description: 'Fair treatment and opportunities for everyone' },
    { icon: Respect, title: 'Respect', description: 'Valuing each individual and their unique contributions' }
  ];

  const learningPrograms = [
    { icon: BookOpen, title: 'Training Programs', description: 'Comprehensive skill development courses' },
    { icon: Zap, title: 'Mentorship', description: 'One-on-one guidance from industry experts' },
    { icon: Trophy, title: 'Career Growth', description: 'Clear pathways for professional advancement' }
  ];



  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Culture Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Life at Tech New</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe that great technology comes from great people. Our culture is built on innovation, 
            collaboration, and the shared vision of transforming the digital landscape.
          </p>
        </div>

      

        
        {/* Culture & Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Culture & Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <div key={index} className="group bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Diversity & Inclusion */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Diversity & Inclusion</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diversityValues.map((value, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning & Development */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Learning & Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPrograms.map((program, index) => (
              <div key={index} className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h4>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeAtTechNew;
