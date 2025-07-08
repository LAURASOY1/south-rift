import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Users, 
  Zap, 
  Globe, 
  Code, 
  Rocket, 
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Monitor,
  Volume2,
  Coffee
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const stats = [
  //   { number: '200+', label: 'Startups Supported' },
  //   { number: '15K+', label: 'Community Members' },
  //   { number: '50+', label: 'Mentors & Experts' },
  //   { number: '10M+', label: 'Funding Facilitated' }
  // ];

  const facilities = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Public Area',
      description: 'Open collaborative space with public services, networking areas, and community resources.',
      bookable: false
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: 'Silent Room',
      description: 'Quiet study space perfect for exams, focused work, and individual learning sessions.',
      bookable: true
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Computer Lab Hall',
      description: 'Fully equipped computer laboratory with high-speed internet and latest software.',
      bookable: true
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Conference Room',
      description: 'Professional meeting space with presentation equipment and video conferencing capabilities.',
      bookable: true
    }
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Innovation Labs',
      description: 'State-of-the-art development spaces fostering creativity and technological advancement.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Network',
      description: 'Connect with entrepreneurs, developers, and industry leaders in the South Rift region.'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Startup Incubation',
      description: 'Comprehensive support from idea validation to market launch and scaling.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Skills Development',
      description: 'Training programs in emerging technologies, entrepreneurship and digital literacy.'
    }
  ];

  const handleBooking = (roomName) => {
    setSelectedRoom(roomName);
    setShowBookingForm(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission here
    alert(`Booking request submitted for ${selectedRoom}!`);
    setShowBookingForm(false);
    setSelectedRoom('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                South Rift Digital&Innovation Hub
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Services</a>
              <a href="#facilities" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Facilities</a>
              <a href="#community" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Community</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Contact</a>
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium">
                Join Hub
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-green-600">Home</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-green-600">Services</a>
              <a href="#facilities" className="block py-2 text-gray-700 hover:text-green-600">Facilities</a>
              <a href="#community" className="block py-2 text-gray-700 hover:text-green-600">Community</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-green-600">Contact</a>
              <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 rounded-full mt-2">
                Join Hub
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
       <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/background_img.png')`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              South Rift Digital
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                &Innovation Hub
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering innovation and entrepreneurship in the South Rift region. 
              Where ideas transform into impactful solutions for our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group flex items-center text-white hover:text-green-400 transition-colors">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center mr-3 group-hover:shadow-xl transition-shadow">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                Explore Our Hub
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-yellow-200 rounded-full opacity-20 animate-float-slow"></div>
      </section>

{/*       stats section
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-green-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Empowering
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support and world-class resources to help innovators 
              and entrepreneurs in the South Rift region thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-6">
                  <button className="text-green-600 font-semibold flex items-center group-hover:text-blue-600 transition-colors">
                    Learn More
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              World-Class
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Facilities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern spaces designed to foster collaboration, learning, and innovation 
              in a conducive environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="group bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{facility.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{facility.description}</p>
                {facility.bookable && (
                  <button 
                    onClick={() => handleBooking(facility.title)}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Book {selectedRoom}</h3>
              <button 
                onClick={() => setShowBookingForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  required 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  required 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input 
                  type="date" 
                  required 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                  <input 
                    type="time" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
                  <input 
                    type="time" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
                <textarea 
                  rows="3" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Brief description of your booking purpose"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
              >
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Community Section */}
      <section id="community" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Join Our Thriving
                <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Innovation Community
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with entrepreneurs, developers, students and industry leaders who are 
                driving technological advancement and economic growth in the South Rift region.
              </p>
              <div className="space-y-4">
                {[
                  'Weekly innovation workshops and training',
                  'Mentorship from successful entrepreneurs',
                  'Access to funding and investment opportunities',
                  'Networking events and community gatherings',
                  'Collaborative project opportunities',
                  'Skills development programs'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Innovate?</h3>
                <p className="mb-6">Join South Rift Digital&Innovation Hub today and be part of the region's most dynamic tech community.</p>
                <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow">
                  Apply for Membership
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Build the Future Together
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Ready to join our innovation community? Get in touch and let's discuss how we can help accelerate your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
              <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-green-100">South Rift Digital&Innovation Hub<br />Bomet County, Kenya</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
              <Mail className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-green-100">info@southriftinnovation.com<br />partnerships@southriftinnovation.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
              <Phone className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-green-100">+254 700 123 456<br />+254 700 789 012</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">South Rift Digital&Innovation Hub</span>
              </div>
              <p className="text-gray-400">Empowering innovation and entrepreneurship in the South Rift region.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Innovation Labs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Incubation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentorship</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Facilities</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Public Area</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Silent Room</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Computer Lab</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Conference Room</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 South Rift Digital & Innovation Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
