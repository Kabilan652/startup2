import React from 'react';
import { Lightbulb, Users, Shield, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Cutting-edge solutions that drive digital transformation and business growth.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Expertise',
      description: 'Skilled professionals with deep knowledge in modern technologies and methodologies.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Trusted partnership with consistent delivery and unwavering commitment to quality.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Transforming Ideas into 
              <span className="text-blue-600"> Digital Reality</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Tech New Softwares, we are passionate about creating innovative software solutions 
              that empower businesses to thrive in the digital age. Our team of dedicated professionals 
              combines technical expertise with creative vision to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since our founding, we have been committed to excellence, continuously evolving our 
              services to meet the changing needs of our clients and the dynamic technology landscape.
            </p>
            <div className="flex items-center space-x-4">
              <Award className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 font-semibold">ISO 9001:2015 Certified</span>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">2025</div>
              <div className="text-sm opacity-90">Founded</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring together innovation, expertise, and reliability to deliver exceptional software solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Workspace</h3>
            <p className="text-lg text-gray-600">
              Take a glimpse into our modern office environment and collaborative workspace.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;