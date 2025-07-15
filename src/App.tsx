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
  Coffee,
  BookOpen,
  Award,
  Laptop,
  Smartphone,
  Camera,
  Shield,
  Brain,
  Database,
  Palette,
  TrendingUp,
  Send
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [availableCourses, setAvailableCourses] = useState([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const facilities = [
    {
      title: 'Public Area',
      description: 'Open collaborative space with public services, networking areas, and community resources.',
      bookable: false,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Silent Room',
      description: 'Quiet study space perfect for exams, focused work, and individual learning sessions.',
      bookable: true,
      image: 'https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Computer Lab Hall',
      description: 'Fully equipped computer laboratory with high-speed internet and latest software.',
      bookable: true,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Conference Room',
      description: 'Professional meeting space with presentation equipment and video conferencing capabilities.',
      bookable: true,
      image: 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=800'
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
      description: 'Training programs in emerging technologies, entrepreneurship, and digital literacy.'
    }
  ];

  const courseCategories = {
    'Level 1': {
      'Digital Literacy & Basic Computer Skills': [
        'Introduction to Computers & Operating Systems (Windows, macOS, Linux)',
        'Social Impact in ICT',
        'Email & Communication Tools (Gmail, Outlook)',
        'Microsoft Office Suite (Word, Excel, PowerPoint)',
        'Google Workspace (Docs, Sheets, Slides, Forms)',
        'Intro to Web Development - HTML, CSS, JS, Hosting and Domain',
        'Network and CCTV Installation - Setup, Manage and Troubleshoot',
        'Phone Repairs',
        'Computer Repairs'
      ],
      'Digital Marketing & Entrepreneurship': [
        'Introduction to Social Media',
        'Social Media Marketing (Facebook, Instagram, LinkedIn, TikTok)',
        'Search Engine Optimization (SEO) & Content Marketing',
        'Google Ads & Facebook Ads',
        'Email Marketing (Mailchimp, ConvertKit)',
        'Personal Branding & Online Business Setup',
        'E-commerce (Shopify, WooCommerce)'
      ],
      'Creative Design & Multimedia': [
        'Graphic Design (Canva, Adobe Photoshop, Illustrator)',
        'Video Editing (CapCut, Adobe Premiere Pro, DaVinci Resolve)',
        'Photography & Photo Editing (Lightroom, Snapseed)',
        'UI/UX Design (Figma, Adobe XD)'
      ]
    },
    'Level 2': {
      'Coding & Software Development': [
        'Introduction to Programming (Python, JavaScript, Scratch)',
        'Full-Stack Development (HTML, CSS, JavaScript, WordPress, Python)',
        'Database Management (SQL, Firebase)',
        'Version Control (Git & GitHub)',
        'Frontend Development - React.js',
        'Mobile App Development (Flutter, Kotlin, Swift)',
        'Software Testing & Debugging',
        'Cybersecurity',
        'Intro to Game Development'
      ],
      'Advanced & Emerging Technologies': [
        'Artificial Intelligence (AI) & Machine Learning Basics',
        'Cybersecurity & Data Privacy',
        'Internet of Things (IoT) Basics',
        'Data Analysis & Visualization (Excel, Power BI, Tableau)',
        'Generative AI'
      ]
    },
    'Level 3': {
      'Professional Certifications': [
        'CCNA Certification Program',
        'University Partnership Certification Programs'
      ],
      'Research & Innovation': [
        'Research Methodologies in Computing',
        'Research Tools',
        'Research and Startup Incubation',
        'Partnership Development Programs',
        
      ]
    }
  };

  const getCategoryIcon = (category) => {
    if (category.includes('Digital Literacy') || category.includes('Computer Skills')) return <Laptop className="w-6 h-6" />;
    if (category.includes('Marketing') || category.includes('Entrepreneurship')) return <TrendingUp className="w-6 h-6" />;
    if (category.includes('Creative') || category.includes('Design')) return <Palette className="w-6 h-6" />;
    if (category.includes('Coding') || category.includes('Development')) return <Code className="w-6 h-6" />;
    if (category.includes('Advanced') || category.includes('Technologies')) return <Brain className="w-6 h-6" />;
    if (category.includes('Professional') || category.includes('Certifications')) return <Award className="w-6 h-6" />;
    if (category.includes('Research') || category.includes('Innovation')) return <Rocket className="w-6 h-6" />;
    return <BookOpen className="w-6 h-6" />;
  };

  const handleBooking = (roomName) => {
    setSelectedRoom(roomName);
    setShowBookingForm(true);
  };

  const handleCourseApplication = (course, level) => {
    // Get all courses from the selected category
    const categoryData = courseCategories[level];
    const courses = categoryData ? categoryData[course] || [] : [];
    setAvailableCourses(courses);
    setSelectedLevel(level);
    setSelectedCourse(''); // Reset selected course
    setShowCourseForm(true);
  };

  const toggleCategoryExpansion = (level, category) => {
    const key = `${level}-${category}`;
    setExpandedCategories(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Booking request submitted for ${selectedRoom}!`);
    setShowBookingForm(false);
    setSelectedRoom('');
  };

  const handleCourseSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const applicationData = {
      course: formData.get('course'),
      level: selectedLevel,
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      education: formData.get('education'),
      experience: formData.get('experience')
    };
    
    // Here you would typically send this to your backend or email service
    console.log('Course application:', applicationData);
    alert(`Application submitted for ${applicationData.course}! We'll contact you soon.`);
    setShowCourseForm(false);
    setSelectedLevel('');
    setAvailableCourses([]);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-purple-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                South Rift Innovation Hub
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Home</a>
              <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Services</a>
              <a href="#courses" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Courses</a>
              <a href="#facilities" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Facilities</a>
              <a href="#community" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Community</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Contact</a>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-200 text-sm font-medium">
                Apply for Membership
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-purple-500/20">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 text-gray-300 hover:text-purple-400">Home</a>
              <a href="#services" className="block py-2 text-gray-300 hover:text-purple-400">Services</a>
              <a href="#courses" className="block py-2 text-gray-300 hover:text-purple-400">Courses</a>
              <a href="#facilities" className="block py-2 text-gray-300 hover:text-purple-400">Facilities</a>
              <a href="#community" className="block py-2 text-gray-300 hover:text-purple-400">Community</a>
              <a href="#contact" className="block py-2 text-gray-300 hover:text-purple-400">Contact</a>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-full mt-2 text-sm font-medium">
                Apply for Membership
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/home.png')`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              South Rift
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Innovation Hub
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering innovation and entrepreneurship in the South Rift region. 
              Where ideas transform into impactful solutions for our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group flex items-center text-white hover:text-purple-400 transition-colors">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center mr-3 group-hover:shadow-xl group-hover:shadow-purple-500/25 transition-shadow">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                Explore Our Hub
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/25 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-indigo-500/30 rounded-full animate-float-slow"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-800 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Empowering
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive support and world-class resources to help innovators 
              and entrepreneurs in the South Rift region thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
                <div className="mt-6">
                  <button className="text-purple-400 font-semibold flex items-center group-hover:text-blue-400 transition-colors">
                    Learn More
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gradient-to-b from-purple-900/20 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transform Your
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Digital Skills
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive training programs designed to equip you with cutting-edge skills 
              for the digital economy.
            </p>
          </div>

          {Object.entries(courseCategories).map(([level, categories]) => (
            <div key={level} className="mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-full">
                  <h3 className="text-2xl font-bold text-white">{level}</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(categories).map(([category, courses]) => (
                  <div key={category} className={`bg-gray-800/50 backdrop-blur-md rounded-2xl border border-purple-500/20 hover:border-purple-500/40 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 flex flex-col ${!expandedCategories[`${level}-${category}`] ? 'h-80' : 'self-start'}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white mr-4">
                        {getCategoryIcon(category)}
                      </div>
                      <h4 className="text-lg font-bold text-white">{category}</h4>
                    </div>
                    
                    <div className="space-y-2 mb-6 flex-grow">
                      {!expandedCategories[`${level}-${category}`] ? (
                        <>
                          {courses.slice(0, 3).map((course, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <p className="text-gray-300 text-sm">{course}</p>
                            </div>
                          ))}
                          {courses.length > 3 && (
                            <button 
                              onClick={() => toggleCategoryExpansion(level, category)}
                              className="text-purple-400 text-sm font-medium hover:text-blue-400 transition-colors"
                            >
                              More Courses (+{courses.length - 3})
                            </button>
                          )}
                        </>
                      ) : (
                        <>
                          {courses.map((course, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <p className="text-gray-300 text-sm">{course}</p>
                            </div>
                          ))}
                          <button 
                            onClick={() => toggleCategoryExpansion(level, category)}
                            className="text-purple-400 text-sm font-medium hover:text-blue-400 transition-colors"
                          >
                            Show Less
                          </button>
                        </>
                      )}
                    </div>

                    <button 
                      onClick={() => handleCourseApplication(category, level)}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 flex items-center justify-center mt-auto"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Course Application Form Modal */}
      {showCourseForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-purple-500/20 rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Apply for Course</h3>
              <button 
                onClick={() => setShowCourseForm(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="mb-4 p-4 bg-purple-600/20 rounded-lg border border-purple-500/30">
              <p className="text-purple-300 font-medium">{selectedLevel}</p>
              <p className="text-white font-semibold">Course Application</p>
            </div>

            <form onSubmit={handleCourseSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Select Course *</label>
                <select 
                  name="course"
                  required 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                >
                  <option value="">Choose a course</option>
                  {availableCourses.map((course, index) => (
                    <option key={index} value={course}>{course}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                <input 
                  type="text" 
                  name="name"
                  required 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone *</label>
                <input 
                  type="tel" 
                  name="phone"
                  required 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Education Level</label>
                <select 
                  name="education"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                >
                  <option value="">Select education level</option>
                  <option value="high-school">High School</option>
                  <option value="diploma">Diploma</option>
                  <option value="degree">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Relevant Experience</label>
                <textarea 
                  name="experience"
                  rows="3" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  placeholder="Describe any relevant experience or background"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-gradient-to-b from-gray-900 to-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              World-Class
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Facilities
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern spaces designed to foster collaboration, learning, and innovation 
              in a conducive environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="group bg-gray-900/50 backdrop-blur-md rounded-2xl border border-purple-500/20 hover:border-purple-500/40 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{facility.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{facility.description}</p>
                  {facility.bookable && (
                    <button 
                      onClick={() => handleBooking(facility.title)}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 flex items-center justify-center"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-purple-500/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Book {selectedRoom}</h3>
              <button 
                onClick={() => setShowBookingForm(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  required 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                <input 
                  type="tel" 
                  required 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                <input 
                  type="date" 
                  required 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Start Time</label>
                  <input 
                    type="time" 
                    required 
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">End Time</label>
                  <input 
                    type="time" 
                    required 
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Purpose</label>
                <textarea 
                  rows="3" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  placeholder="Brief description of your booking purpose"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
              >
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Community Section */}
      <section id="community" className="py-20 bg-gradient-to-b from-purple-900/30 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Thriving
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Innovation Community
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Connect with entrepreneurs, developers, students, and industry leaders who are 
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
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Innovate?</h3>
                <p className="mb-6">Join South Rift Innovation Hub today and be part of the region's most dynamic tech community.</p>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-full text-sm font-medium hover:shadow-lg transition-shadow">
                  Apply for Membership
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-purple-700 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Build the Future Together
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Ready to join our innovation community? Get in touch and let's discuss how we can help accelerate your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-purple-100">South Rift Innovation Center<br />Bomet County, Kenya</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <Mail className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-purple-100">info@southriftinnovation.com<br />partnerships@southriftinnovation.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <Phone className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-purple-100">+254 700 123 456<br />+254 700 789 012</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">South Rift Innovation Hub</span>
              </div>
              <p className="text-gray-400">Empowering innovation and entrepreneurship in the South Rift region.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-purple-400">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Innovation Labs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Incubation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentorship</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-purple-400">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Digital Literacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Programming</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Design</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-purple-400">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 South Rift Innovation Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
