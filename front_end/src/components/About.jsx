import React from 'react';
import { Lightbulb, Users, Shield, Award, Video, User } from 'lucide-react';

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, color }) => (
  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2">
    <div
      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
      aria-hidden="true"
    >
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

// Gallery Item Component
const GalleryItem = ({ src, alt }) => (
  <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer transform hover:scale-105 transition-transform duration-300">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors duration-300"></div>
  </div>
);

//  Updated Webinar Card Component
const WebinarCard = ({ image, title, topic, guest, participants, date, description, link }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 overflow-hidden">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-3">
        <Video className="w-6 h-6 text-blue-600" />
        <h4 className="text-xl font-semibold text-gray-900">{title}</h4>
      </div>
      <p className="text-sm text-gray-500 mb-1">📅 {date}</p>
      <p className="text-gray-700 font-medium mb-1">🎯 Topic: <span className="font-normal">{topic}</span></p>
      <p className="text-gray-700 font-medium mb-1">👤 Guest: <span className="font-normal">{guest}</span></p>
      <p className="text-gray-700 font-medium mb-4">👥 Participants: <span className="font-normal">{participants}</span></p>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
    </div>
  </div>
);

const About = () => {
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

  //  Updated Webinars Data
  const webinars = [
    {
      image: '/images/networking_web.jpg',
      title: 'Networking',
      topic: 'Learn How to Build Your Network',
      guest: 'Mr. Senthil Kumar P B (Senior Software Engineer, Cisco, Bangalore)',
      participants: '200+',
      date: 'October 12, 2025',
      description:
        'An online session on how to build and strengthen your professional network effectively, with certification included.',
      link: 'https://example.com/webinar-network'
    }
  ];

  const galleryImages = [
    '/images/Ws1.jpg',
    '/images/Ws2.jpg',
    '/images/Ws3.jpg',
    '/images/Ws4.jpg',
    '/images/Ws5.jpg',
    '/images/Ws6.jpg'
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Company Intro */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Transforming Ideas into{' '}
              <span className="text-blue-600">Digital Reality</span>
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
            <div 
              className="flex items-center space-x-4 hover:text-blue-600 transition"
              aria-label="UDYAM Certification"
            >
              <Award className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 font-semibold">
                UDYAM-TN-11-0109367 Certified
              </span>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaborating in office"
              className="rounded-2xl shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">2025</div>
              <div className="text-sm opacity-90">Founded</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20" aria-labelledby="features-heading">
          <div className="text-center mb-12">
            <h3 id="features-heading" className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring together innovation, expertise, and reliability to deliver exceptional software solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        {/*  Updated Past Webinars Section */}
      <section className="mb-20" aria-labelledby="webinars-heading">
          <div className="text-center mb-12">
            <h3 id="webinars-heading" className="text-3xl font-bold text-gray-900 mb-4">
              Past Webinars
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A look back at our inspiring sessions where experts and innovators came together to share knowledge.
            </p>
          </div>

          {/*  Center webinar card properly */}
          <div className="flex justify-center">
            {webinars.map((webinar, index) => (
              <div key={index} className="max-w-md w-full">
                <WebinarCard {...webinar} />
              </div>
            ))}
          </div>
        </section>



        {/* Gallery Section */}
        <section aria-labelledby="gallery-heading">
          <div className="text-center mb-12">
            <h3 id="gallery-heading" className="text-3xl font-bold text-gray-900 mb-4">
              Our Workspace
            </h3>
            <p className="text-lg text-gray-600">
              Take a glimpse into our modern office environment and collaborative workspace.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <GalleryItem key={index} src={image} alt={`Workspace ${index + 1}`} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
