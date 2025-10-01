import React, { useState } from 'react';
import { Code, Brain, Cloud, Users, X, Share2 } from 'lucide-react';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [pendingService, setPendingService] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs',
      color: 'from-blue-500 to-blue-600',
      details: {
        overview:
          'We specialize in creating custom software applications that are scalable, secure, and user-friendly. Our development process follows industry best practices and agile methodologies.',
        features: [
          'Web Application Development',
          'Mobile App Development (iOS & Android)',
          'Desktop Applications',
          'API Development & Integration',
          'Database Design & Optimization',
          'Quality Assurance & Testing',
        ],
        technologies: [
          'React',
          'Node.js',
          'Python',
          'Java',
          'Swift',
          'Kotlin',
          'PostgreSQL',
          'MongoDB',
        ],
        timeline: '2-6 months depending on complexity',
      },
    },
    {
      icon: Brain,
      title: 'AI & Data Analytics',
      description: 'Harness the power of artificial intelligence and data insights',
      color: 'from-purple-500 to-purple-600',
      details: {
        overview:
          'Transform your business with intelligent automation and data-driven insights. We build AI solutions that learn, adapt, and improve your operations.',
        features: [
          'Machine Learning Models',
          'Predictive Analytics',
          'Natural Language Processing',
          'Computer Vision Solutions',
          'Data Visualization Dashboards',
          'Business Intelligence Systems',
        ],
        technologies: [
          'TensorFlow',
          'PyTorch',
          'Scikit-learn',
          'Tableau',
          'Power BI',
          'Apache Spark',
        ],
        timeline: '3-8 months depending on data complexity',
      },
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure services',
      color: 'from-green-500 to-green-600',
      details: {
        overview:
          'Migrate to the cloud with confidence. We provide comprehensive cloud solutions that ensure scalability, security, and cost-effectiveness.',
        features: [
          'Cloud Migration Services',
          'Infrastructure as Code',
          'DevOps & CI/CD Pipelines',
          'Cloud Security Implementation',
          'Performance Monitoring',
          '24/7 Support & Maintenance',
        ],
        technologies: [
          'AWS',
          'Azure',
          'Google Cloud',
          'Docker',
          'Kubernetes',
          'Terraform',
        ],
        timeline: '1-4 months depending on infrastructure size',
      },
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic technology guidance for digital transformation',
      color: 'from-orange-500 to-orange-600',
      details: {
        overview:
          'Our expert consultants help you navigate digital transformation challenges and make informed technology decisions that drive business growth.',
        features: [
          'Technology Strategy Development',
          'Digital Transformation Planning',
          'System Architecture Review',
          'Security Audits & Compliance',
          'Process Optimization',
          'Technology Training & Support',
        ],
        technologies: [
          'Enterprise Architecture',
          'TOGAF',
          'ITIL',
          'Agile',
          'Scrum',
          'Lean Six Sigma',
        ],
        timeline: '2-12 weeks for initial assessment',
      },
    },
    {
      icon: Share2,
      title: 'Social Media Services',
      description: 'Grow your brand and engagement on social media platforms',
      color: 'from-pink-500 to-pink-600',
      details: {
        overview:
          'We help businesses establish a strong social media presence, create engaging content, and run marketing campaigns to grow followers, engagement, and reach.',
        features: [
          'Account Setup & Branding – Profiles, bios, and visuals (logo, cover, etc.)',
          'Content Creation – Posts, reels, captions, hashtags, and ideas',
          'Marketing & Growth – Strategy for increasing followers, engagement, and reach',
          'Social Media Management – Scheduling, posting, and analytics tracking',
          'Ad Campaigns – Running paid ads on Facebook, Instagram, LinkedIn, etc.',
        ],
        technologies: [
          'Facebook Business Suite',
          'Instagram Insights',
          'LinkedIn Campaign Manager',
          'Canva / Adobe Creative Suite',
          'Hootsuite / Buffer',
          'Google Analytics',
        ],
        timeline: '1-3 months depending on platform and campaign complexity',
      },
    },
    {
      icon: Users,
      title: 'Business Support & Growth',
      description: 'Empowering your company to grow and operate efficiently',
      color: 'from-yellow-500 to-yellow-600',
      details: {
        overview:
          'We provide comprehensive support to help businesses scale, improve operations, and maximize growth opportunities. Our team guides you through strategy, operations, and customer success.',
        features: [
          'Business Strategy & Planning – Roadmaps, KPIs, and goals',
          'Operational Support – Process optimization, workflow management',
          'Financial & Resource Planning – Budgeting, forecasting, cost optimization',
          'Team & HR Support – Recruitment, training, and performance tracking',
          'Customer Success – Support systems, feedback management, retention strategies',
        ],
        technologies: [
          'Trello / Asana',
          'Slack / Microsoft Teams',
          'QuickBooks / Xero',
          'Google Workspace',
          'CRM Tools (HubSpot, Salesforce)',
          'Analytics Tools',
        ],
        timeline: 'Ongoing support with monthly or quarterly assessments',
      },
    },
  ];

  const openModal = (index: number) => setSelectedService(index);
  const closeModal = () => setSelectedService(null);
  const handleLearnMore = (index: number) => {
    setPendingService(index);
    setShowForm(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (pendingService === null) {
    alert("No service selected!");
    return;
  }

  setIsSubmitting(true);

  try {
    const res = await fetch("https://tech-new-softwares.onrender.com/api/service-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        serviceTitle: services[pendingService].title, // ✅ safe now
      }),
    });

    if (!res.ok) throw new Error("Failed to send");

    alert("Details submitted successfully!");
    setShowForm(false);
    setFormData({ name: "", email: "" });

    // open service modal after submission
    openModal(pendingService);
  } catch (err) {
    alert("Error sending details. Please try again.");
    console.error(err);
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business
            thrive in the digital age
          </p>
        </div>

        {/* First 4 services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.slice(0, 4).map((service, index) => (
            <ServiceCard key={index} service={service} onClick={() => handleLearnMore(index)} />
          ))}
        </div>

        {/* Last 2 services centered */}
        <div className="mt-8 flex justify-center gap-8 flex-wrap">
          {services.slice(4).map((service, index) => (
            <div
              key={index + 4}
              onClick={() => handleLearnMore(index + 4)}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 cursor-pointer w-80"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <div className="mt-4 text-blue-600 font-semibold group-hover:underline">
                Learn More →
              </div>
            </div>
          ))}
        </div>

        {/* Popup Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Enter Your Details</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 text-white py-2 rounded-lg font-semibold transition transform hover:scale-105 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit & Continue"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Service Details Modal */}
        {selectedService !== null && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${services[selectedService].color} flex items-center justify-center`}
                    >
                      {(() => {
                        const ServiceIcon = services[selectedService].icon;
                        return <ServiceIcon className="w-6 h-6 text-white" />;
                      })()}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{services[selectedService].title}</h3>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Overview</h4>
                    <p className="text-gray-600 leading-relaxed">{services[selectedService].details.overview}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {services[selectedService].details.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {services[selectedService].details.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Timeline</h4>
                    <p className="text-gray-600">{services[selectedService].details.timeline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ServiceCard: React.FC<{ service: any; onClick: () => void }> = ({ service, onClick }) => (
  <div
    onClick={onClick}
    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 cursor-pointer"
  >
    <div
      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
    >
      <service.icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
      {service.title}
    </h3>
    <p className="text-gray-600 leading-relaxed">{service.description}</p>
    <div className="mt-4 text-blue-600 font-semibold group-hover:underline">Learn More →</div>
  </div>
);

export default Services;
