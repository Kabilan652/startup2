import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, LinkedinIcon, Heart, Users, Trophy, Gamepad2, Globe, UserCheck, Inspect as Respect, BookOpen, Zap, TrendingUp } from 'lucide-react';

const LifeAtTechNew: React.FC = () => {
  const [currentFounder, setCurrentFounder] = useState(0);

  const founders = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      image: "https://images.pexels.com/photos/3779448/pexels-photo-3779448.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#"
    },
    {
      name: "Emily Rodriguez",
      role: "COO & Co-Founder",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#"
    },
    {
      name: "David Kumar",
      role: "CPO & Co-Founder",
      image: "https://images.pexels.com/photos/3779425/pexels-photo-3779425.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#"
    }
  ];

  const timeline = [
    { year: '2019', event: 'Company Founded', description: 'Started with a vision to transform businesses through technology' },
    { year: '2020', event: 'First Major Client', description: 'Secured our first enterprise client and expanded team to 15 members' },
    { year: '2022', event: 'AI Division Launch', description: 'Launched dedicated AI and Data Analytics division' },
    { year: '2023', event: 'Global Expansion', description: 'Opened offices in 3 new countries' },
    { year: '2024', event: 'Innovation Award', description: 'Recognized as "Tech Innovator of the Year"' },
    { year: '2025', event: 'Present Day', description: '500+ projects delivered, 50+ happy clients worldwide' }
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

  const nextFounder = () => {
    setCurrentFounder((prev) => (prev + 1) % founders.length);
  };

  const prevFounder = () => {
    setCurrentFounder((prev) => (prev - 1 + founders.length) % founders.length);
  };

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

        {/* Company Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{item.event}</div>
                    <div className="text-gray-600">{item.description}</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Meet Our Founders */}
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
              <a
                href={founders[currentFounder].linkedin}
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <LinkedinIcon className="w-5 h-5" />
                <span>Connect on LinkedIn</span>
              </a>
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

        {/* Life in Pictures */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Life in Pictures</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/3184428/pexels-photo-3184428.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/3182790/pexels-photo-3182790.jpeg?auto=compress&cs=tinysrgb&w=400'
            ].map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Life at TechNew ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeAtTechNew;