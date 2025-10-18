import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Lightbulb, Users, Shield, Award, Video, X } from 'lucide-react';

// ✅ Feature Card Component
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

// ✅ Gallery Item Component
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

// ✅ Webinar Card Component
const WebinarCard = ({ cardImage, title, topic, guest, participants, date, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 overflow-hidden"
  >
    <img src={cardImage} alt={title} className="w-full h-48 object-cover" loading="lazy" />
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-3">
        <Video className="w-6 h-6 text-blue-600" />
        <h4 className="text-xl font-semibold text-gray-900">{title}</h4>
      </div>
      <p className="text-sm text-gray-500 mb-1">📅 {date}</p>
      <p className="text-gray-700 font-medium mb-1">🎯 Topic: <span className="font-normal">{topic}</span></p>
      <p className="text-gray-700 font-medium mb-1">👤 Guest: <span className="font-normal">{guest}</span></p>
      <p className="text-gray-700 font-medium mb-4">👥 Participants: <span className="font-normal">{participants}</span></p>
    </div>
  </div>
);

// 🔹 Webinar Popup Component with Certificate Footer
const WebinarPopup = ({ webinar, details, onClose }) => {
  if (!webinar || !details) return null;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 flex-1">
          <img
            src={webinar.popupImage}
            alt={webinar.title}
            className="w-full h-auto max-h-[50vh] object-contain rounded-xl mb-6"
          />
          <h3 className="text-2xl font-bold text-blue-600 mb-2">{webinar.title}</h3>
          <p className="text-gray-500 mb-1">📅 {webinar.date}</p>
          <p className="text-gray-700 mb-2"><strong>🎯 Topic:</strong> {webinar.topic}</p>
          <p className="text-gray-700 mb-2"><strong>👤 Guest:</strong> {webinar.guest}</p>
          <p className="text-gray-700 mb-2"><strong>👥 Participants:</strong> {webinar.participants}</p>

          <hr className="my-4" />

          <h4 className="text-lg font-semibold text-gray-800 mb-2">📝 About the Webinar</h4>
          <p className="text-gray-600 mb-4">{details.about}</p>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">🎓 Key Takeaways</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
            {details.takeaways.map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">👨‍🏫 Speaker Info</h4>
          <p className="text-gray-600 mb-4">{details.speakerInfo}</p>
        </div>

        {/* Sticky Certificate Footer */}
        <div className="bg-gray-50 p-4 border-t border-gray-200 text-center">
          <h4 className="text-lg font-semibold text-gray-800 mb-1">🏅 Certification</h4>
          <p className="text-gray-600">{details.certification}</p>
        </div>
      </div>
    </div>
  );
};

// ✅ About Component
const About = () => {
  const [selectedWebinar, setSelectedWebinar] = useState(null);

  // Lock scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = selectedWebinar ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedWebinar]);

  const features = useMemo(() => [
    { icon: Lightbulb, title: 'Innovation', description: 'Cutting-edge solutions that drive digital transformation and business growth.', color: 'from-blue-500 to-blue-600' },
    { icon: Users, title: 'Expertise', description: 'Skilled professionals with deep knowledge in modern technologies and methodologies.', color: 'from-green-500 to-green-600' },
    { icon: Shield, title: 'Reliability', description: 'Trusted partnership with consistent delivery and unwavering commitment to quality.', color: 'from-purple-500 to-purple-600' }
  ], []);

  const webinars = useMemo(() => [
    {
      id: 1,
      cardImage: '/images/networking_web.jpg',
      popupImage: '/images/networkPopup.jpg',
      title: 'Networking',
      topic: 'Learn How to Build Your Network',
      guest: 'Mr. Senthil Kumar P B (Senior Software Engineer, Cisco, Bangalore)',
      participants: '200+',
      date: 'October 12, 2025',
    }
  ], []);

  const webinarDetails = useMemo(() => ({
    1: {
      about: 'This interactive online session focused on helping students and professionals understand the importance of networking in the tech industry.',
      takeaways: [
        'How to build a professional LinkedIn profile',
        'Tips for connecting with industry experts',
        'Importance of soft skills and communication',
        'Growing your network with purpose and consistency',
        'Maintaining professional relationships online'
      ],
      speakerInfo: 'Mr. Senthil Kumar P B shared real-world insights from his journey at Cisco, including how networking helped him grow professionally and personally.',
      certification: 'All attendees received a verified E-Certificate of Participation.'
    }
  }), []);

  const galleryImages = useMemo(() => [
    '/images/Ws1.jpg', '/images/Ws2.jpg', '/images/Ws3.jpg',
    '/images/Ws4.jpg', '/images/Ws5.jpg', '/images/Ws6.jpg'
  ], []);

  const handleCardClick = useCallback((webinar) => setSelectedWebinar(webinar), []);
  const popupDetails = selectedWebinar ? webinarDetails[selectedWebinar.id] : null;

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Company Intro */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Transforming Ideas into <span className="text-blue-600">Digital Reality</span>
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
            <div className="flex items-center space-x-4 hover:text-blue-600 transition" aria-label="UDYAM Certification">
              <Award className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 font-semibold">UDYAM-TN-11-0109367 Certified</span>
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
            <h3 id="features-heading" className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring together innovation, expertise, and reliability to deliver exceptional software solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => <FeatureCard key={index} {...feature} />)}
          </div>
        </section>

        {/* Past Webinars */}
        <section className="mb-20" aria-labelledby="webinars-heading">
          <div className="text-center mb-12">
            <h3 id="webinars-heading" className="text-3xl font-bold text-gray-900 mb-4">Past Webinars</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A look back at our inspiring sessions where experts and innovators came together to share knowledge.
            </p>
          </div>
          <div className="flex justify-center">
            {webinars.map((webinar) => (
              <div key={webinar.id} className="max-w-md w-full">
                <WebinarCard {...webinar} onClick={() => handleCardClick(webinar)} />
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section aria-labelledby="gallery-heading">
          <div className="text-center mb-12">
            <h3 id="gallery-heading" className="text-3xl font-bold text-gray-900 mb-4">Our Workspace</h3>
            <p className="text-lg text-gray-600">Take a glimpse into our modern office environment and collaborative workspace.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => <GalleryItem key={index} src={image} alt={`Workspace ${index + 1}`} />)}
          </div>
        </section>
      </div>

      {/* Webinar Popup */}
      {selectedWebinar && (
        <WebinarPopup webinar={selectedWebinar} details={popupDetails} onClose={() => setSelectedWebinar(null)} />
      )}
    </div>
  );
};

export default About;
