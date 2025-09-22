import React, { useState } from 'react';
import { Code, Brain, Cloud, Users, X } from 'lucide-react';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs',
      color: 'from-blue-500 to-blue-600',
      details: {
        overview: 'We specialize in creating custom software applications that are scalable, secure, and user-friendly. Our development process follows industry best practices and agile methodologies.',
        features: [
          'Web Application Development',
          'Mobile App Development (iOS & Android)',
          'Desktop Applications',
          'API Development & Integration',
          'Database Design & Optimization',
          'Quality Assurance & Testing'
        ],
        technologies: ['React', 'Node.js', 'Python', 'Java', 'Swift', 'Kotlin', 'PostgreSQL', 'MongoDB'],
        timeline: '2-6 months depending on complexity'
      }
    },
    {
      icon: Brain,
      title: 'AI & Data Analytics',
      description: 'Harness the power of artificial intelligence and data insights',
      color: 'from-purple-500 to-purple-600',
      details: {
        overview: 'Transform your business with intelligent automation and data-driven insights. We build AI solutions that learn, adapt, and improve your operations.',
        features: [
          'Machine Learning Models',
          'Predictive Analytics',
          'Natural Language Processing',
          'Computer Vision Solutions',
          'Data Visualization Dashboards',
          'Business Intelligence Systems'
        ],
        technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Tableau', 'Power BI', 'Apache Spark'],
        timeline: '3-8 months depending on data complexity'
      }
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure services',
      color: 'from-green-500 to-green-600',
      details: {
        overview: 'Migrate to the cloud with confidence. We provide comprehensive cloud solutions that ensure scalability, security, and cost-effectiveness.',
        features: [
          'Cloud Migration Services',
          'Infrastructure as Code',
          'DevOps & CI/CD Pipelines',
          'Cloud Security Implementation',
          'Performance Monitoring',
          '24/7 Support & Maintenance'
        ],
        technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
        timeline: '1-4 months depending on infrastructure size'
      }
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic technology guidance for digital transformation',
      color: 'from-orange-500 to-orange-600',
      details: {
        overview: 'Our expert consultants help you navigate digital transformation challenges and make informed technology decisions that drive business growth.',
        features: [
          'Technology Strategy Development',
          'Digital Transformation Planning',
          'System Architecture Review',
          'Security Audits & Compliance',
          'Process Optimization',
          'Technology Training & Support'
        ],
        technologies: ['Enterprise Architecture', 'TOGAF', 'ITIL', 'Agile', 'Scrum', 'Lean Six Sigma'],
        timeline: '2-12 weeks for initial assessment'
      }
    }
  ];

  const openModal = (index: number) => {
    setSelectedService(index);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
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

        {/* Service Modal */}
        {selectedService !== null && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${services[selectedService].color} flex items-center justify-center`}>
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

                  <div className="flex space-x-4 pt-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200">
                      Get Quote
                    </button>
                    <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-full font-semibold transition-colors duration-200">
                      Schedule Consultation
                    </button>
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

export default Services;