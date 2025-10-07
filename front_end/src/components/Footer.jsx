import React, { useState } from 'react';
import { Mail, Linkedin, Instagram, ArrowRight, Loader2 } from 'lucide-react'; // Added Loader2 icon

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false); // NEW: loading state

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const response = await fetch('http://localhost:5000/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('Thank you for subscribing!');
        setEmail('');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to send subscription. Check your server.');
    } finally {
      setLoading(false); // Stop loading after response
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Newsletter Section */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
          <p className="text-gray-400 mb-4 text-sm max-w-md mx-auto">
            Subscribe to our newsletter for tech insights, trends, and updates.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex text-sm">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:border-blue-500 transition-colors duration-200 text-sm"
            />
            <button
              type="submit"
              disabled={loading} // disable while loading
              className={`px-4 py-2 rounded-r-md flex items-center justify-center space-x-1 transition-colors duration-200 ${
                loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" /> // Spinner animation
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
            </button>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-8 text-sm">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-3">
              TECH NEW <span className="text-blue-400">SOFTWARES</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Empowering businesses with innovative technology solutions. Transforming ideas into digital reality 
              through software development, AI analytics, and cloud services.
            </p>

            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/in/nssathish" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/kabilan_d11" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="mailto:technew16754@gmail.com" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Services</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Software Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">AI & Data Analytics</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cloud Solutions</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">IT Consulting</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4 flex justify-center items-center h-12 text-sm">
          <p className="text-gray-400 text-center">
            © 2025 Tech New Softwares. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
