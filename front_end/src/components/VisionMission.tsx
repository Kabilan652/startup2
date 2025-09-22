import React, { useEffect, useRef, useState } from 'react';
import { Target, Eye, Award } from 'lucide-react';

const VisionMission: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Vision & Mission
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Driven by purpose, guided by innovation, committed to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Vision */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 h-full border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center mr-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed">
                To be a global leader in technology innovation, transforming businesses and lives through 
                cutting-edge software solutions that drive digital transformation and create lasting value 
                for our clients, partners, and communities worldwide.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 h-full border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed">
                To empower businesses with innovative IT services and solutions that drive growth, 
                efficiency, and digital excellence. We are committed to delivering exceptional 
                quality, fostering long-term partnerships, and creating technology that makes a 
                meaningful impact on the world.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Core Values</h3>
            <p className="text-gray-200">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Excellence</h4>
              <p className="text-gray-200">
                We strive for excellence in every project, delivering solutions that exceed expectations.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Innovation</h4>
              <p className="text-gray-200">
                We embrace emerging technologies to create solutions that push boundaries.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Integrity</h4>
              <p className="text-gray-200">
                We build trust through transparency, honesty, and ethical business practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;