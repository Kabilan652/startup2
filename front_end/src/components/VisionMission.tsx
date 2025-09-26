import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const VisionMission: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description:
        'We strive for excellence in every project, delivering solutions that exceed expectations.',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Target,
      title: 'Innovation',
      description:
        'We embrace emerging technologies to create solutions that push boundaries.',
      color: 'from-orange-400 to-orange-600',
    },
    {
      icon: Eye,
      title: 'Integrity',
      description:
        'We build trust through transparency, honesty, and ethical business practices.',
      color: 'from-pink-400 to-pink-600',
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Driven by purpose, guided by innovation, committed to excellence.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div
                className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center mr-4"
                aria-hidden="true"
              >
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be a global leader in technology innovation, transforming businesses and lives through cutting-edge software solutions that drive digital transformation and create lasting value for our clients, partners, and communities worldwide.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div
                className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center mr-4"
                aria-hidden="true"
              >
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses with innovative IT services and solutions that drive growth, efficiency, and digital excellence. We are committed to delivering exceptional quality, fostering long-term partnerships, and creating technology that makes a meaningful impact on the world.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VisionMission;
