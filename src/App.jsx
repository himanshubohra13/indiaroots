import React, { useState, useEffect } from 'react';
import { Heart, Shield, Clock, Users, Phone, CheckCircle, Menu, X, ArrowRight, Star, Mail, MapPin, Send, Award, ChevronDown, Play } from 'lucide-react';

export default function ElderCareLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const services = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Emergency Support",
      description: "Round-the-clock care coordination with rapid response times for any emergency situation.",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=300&fit=crop"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health Monitoring",
      description: "Regular health check-ups, medication management, and doctor appointment coordination.",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=300&fit=crop"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Companionship Care",
      description: "Trained caregivers providing emotional support, social engagement, and daily assistance.",
      image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=400&h=300&fit=crop"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety & Security",
      description: "Background-verified caregivers with continuous monitoring and family updates.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop"
    }
  ];

  const successStories = [
    {
      name: "Mrs. Lakshmi Iyer",
      age: 78,
      location: "Chennai",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop",
      story: "After my husband passed, I felt lost and alone. The companionship care program brought joy back into my life. My caregiver, Priya, isn't just help - she's family now.",
      duration: "2 years with us"
    },
    {
      name: "Mr. Ramesh Patel",
      age: 82,
      location: "Ahmedabad",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      story: "Living with diabetes and mobility issues was challenging. The health monitoring service ensures I never miss medications, and the emergency support saved my life during a cardiac episode.",
      duration: "3 years with us"
    },
    {
      name: "Mrs. Anjali Singh",
      age: 75,
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      story: "My daughter lives in the US and worried constantly. Now she can check on me through the app, and I have someone to help with daily tasks. It's given both of us peace of mind.",
      duration: "18 months with us"
    }
  ];

  const faqs = [
    {
      question: "How quickly can care services start?",
      answer: "We can arrange initial consultation within 24 hours and start care services within 2-3 days after assessment. For urgent cases, we offer same-day emergency support."
    },
    {
      question: "Are your caregivers trained and verified?",
      answer: "Yes, all caregivers undergo rigorous background verification, professional training, and regular skill assessments. They're trained in elderly care, first aid, and emergency response protocols."
    },
    {
      question: "Can I monitor my parent's care remotely?",
      answer: "Absolutely! Our mobile app provides real-time updates, health reports, medication logs, and direct communication with caregivers. Perfect for families living abroad or in different cities."
    },
    {
      question: "What happens during emergencies?",
      answer: "Our 24/7 emergency response team can be reached instantly. We coordinate with nearby hospitals, arrange ambulance services, notify family members, and ensure a caregiver accompanies your loved one."
    },
    {
      question: "Can I customize the care plan?",
      answer: "Yes! Every care plan is personalized based on individual needs, health conditions, preferences, and budget. You can adjust services as requirements change."
    },
    {
      question: "What areas do you serve?",
      answer: "We currently operate in 200+ cities across India including all major metros and tier-2 cities. Contact us to check availability in your area."
    }
  ];

  const pricingPlans = [
    {
      name: "Essential Care",
      price: "₹15,999",
      period: "/month",
      description: "Perfect for independent seniors who need occasional support",
      features: [
        "Daily wellness check-ins",
        "Emergency response system",
        "Medication reminders",
        "Monthly health reports",
        "Phone support (9 AM - 6 PM)",
        "Caregiver visits (2x/week)"
      ],
      popular: false
    },
    {
      name: "Comprehensive Care",
      price: "₹29,999",
      period: "/month",
      description: "Ideal for seniors requiring regular assistance and monitoring",
      features: [
        "24/7 emergency support",
        "Daily caregiver visits",
        "Health monitoring & vitals tracking",
        "Doctor appointment coordination",
        "Medication management",
        "Weekly family updates",
        "Companionship activities",
        "Hospital accompaniment"
      ],
      popular: true
    },
    {
      name: "Premium Care",
      price: "₹49,999",
      period: "/month",
      description: "Complete care solution with dedicated 24/7 support",
      features: [
        "24/7 live-in caregiver",
        "Personalized care plan",
        "Daily health monitoring",
        "Physiotherapy sessions",
        "Nutritionist consultation",
        "Real-time family app access",
        "Priority emergency response",
        "Monthly doctor home visits",
        "Specialized dementia care"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Families" },
    { number: "200+", label: "Cities Covered" },
    { number: "24/7", label: "Support Available" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">ElderCare</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
              <a href="#stories" className="text-gray-700 hover:text-blue-600 transition">Stories</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</a>
              <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition transform hover:scale-105">
                Get Started
              </a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-gray-700 hover:text-blue-600">Services</a>
              <a href="#pricing" className="block text-gray-700 hover:text-blue-600">Pricing</a>
              <a href="#stories" className="block text-gray-700 hover:text-blue-600">Stories</a>
              <a href="#faq" className="block text-gray-700 hover:text-blue-600">FAQ</a>
              <a href="#contact" className="block bg-blue-600 text-white px-6 py-2 rounded-full text-center">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-teal-900/90 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1576765607924-3f7b8410a787?w=1920&h=1080&fit=crop"
            alt="Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white" style={{
              opacity: Math.max(1 - scrollY / 500, 0),
              transform: `translateY(${scrollY * 0.3}px)`
            }}>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in">
                Caring for Your Loved Ones Like Family
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Professional elderly care services combining modern technology with traditional compassion. Available 24/7 across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition transform hover:scale-105 flex items-center justify-center shadow-lg">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="tel:+919876543210" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition transform hover:scale-105 flex items-center justify-center">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              {/* <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1559839914-17aae19cec71?w=600&h=600&fit=crop" 
                  alt="Caregiver with elderly person"
                  className="rounded-3xl shadow-2xl w-full transform hover:scale-105 transition duration-500"
                />
              </div> */}
              {/* <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl z-20 animate-float">
                <div className="flex items-center space-x-3">
                  <Award className="w-12 h-12 text-blue-600" />
                  <div>
                    <p className="font-bold text-gray-900 text-lg">ISO Certified</p>
                    <p className="text-sm text-gray-600">Quality Care Standards</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition duration-300">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Care Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive elderly care solutions tailored to your family's unique needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 bg-white w-16 h-16 rounded-full flex items-center justify-center text-blue-600 shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get started with professional care</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Free Consultation", 
                desc: "Share your requirements and care needs with our compassionate team",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop"
              },
              { 
                step: "02", 
                title: "Personalized Plan", 
                desc: "We create a customized care plan with verified, trained caregivers",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
              },
              { 
                step: "03", 
                title: "24/7 Care & Support", 
                desc: "Enjoy peace of mind with round-the-clock monitoring and family updates",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop"
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="stories" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real families, real transformations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white font-semibold text-lg">{story.name}, {story.age}</p>
                    <p className="text-blue-200 text-sm">{story.location}</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-4 italic">"{story.story}"</p>
                  <div className="flex items-center text-sm text-blue-600 font-semibold">
                    <Clock className="w-4 h-4 mr-2" />
                    {story.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Choose Your Care Plan</h2>
            <p className="text-xl text-gray-600">Flexible pricing options to match your family's needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-3xl shadow-lg border-2 p-8 ${
                  plan.popular ? 'border-blue-600 transform scale-105' : 'border-gray-100'
                } hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                  <div className="flex items-end justify-center">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2 mb-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact"
                  className={`block text-center py-4 px-6 rounded-full font-semibold transition transform hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600">
              Need a custom plan? <a href="#contact" className="text-blue-600 font-semibold hover:underline">Contact us</a> for personalized pricing
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our services</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900 text-lg pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                      activeAccordion === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    activeAccordion === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-600 mb-8">
                Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start group">
                  <div className="bg-blue-100 p-4 rounded-2xl mr-4 group-hover:bg-blue-600 transition">
                    <Phone className="w-6 h-6 text-blue-600 group-hover:text-white transition" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600 text-lg">+91 98765 43210</p>
                    <p className="text-sm text-gray-500">Available 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-blue-100 p-4 rounded-2xl mr-4 group-hover:bg-blue-600 transition">
                    <Mail className="w-6 h-6 text-blue-600 group-hover:text-white transition" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600 text-lg">care@eldercare.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-blue-100 p-4 rounded-2xl mr-4 group-hover:bg-blue-600 transition">
                    <MapPin className="w-6 h-6 text-blue-600 group-hover:text-white transition" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600 text-lg">32 sector Chandigarh, 160030</p>
                    <p className="text-sm text-gray-500">Mon - Sat, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl text-white">
                <h3 className="font-bold text-2xl mb-3">Emergency Support</h3>
                <p className="mb-4 text-blue-100">For immediate assistance, call our 24/7 emergency helpline</p>
                <a href="tel:+911800123456" className="text-white font-bold text-2xl hover:underline inline-flex items-center">
                  <Phone className="w-6 h-6 mr-2" />
                  1800-123-456 (Toll Free)
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              {formSubmitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600">We've received your message and will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interest *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    >
                      <option value="">Select a service</option>
                      <option value="essential">Essential Care</option>
                      <option value="comprehensive">Comprehensive Care</option>
                      <option value="premium">Premium Care</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                      placeholder="Tell us about your care needs..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition flex items-center justify-center transform hover:scale-105 shadow-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-8 h-8 text-blue-500" />
                <span className="text-2xl font-bold">ElderCare</span>
              </div>
              <p className="text-gray-400">Compassionate care for your loved ones, 24/7.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition cursor-pointer">24/7 Emergency Support</li>
                <li className="hover:text-white transition cursor-pointer">Health Monitoring</li>
                <li className="hover:text-white transition cursor-pointer">Companionship</li>
                <li className="hover:text-white transition cursor-pointer">Medical Coordination</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition cursor-pointer">About Us</li>
                <li className="hover:text-white transition cursor-pointer">Careers</li>
                <li className="hover:text-white transition cursor-pointer">Contact</li>
                <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+91 98765 43210</li>
                <li>care@eldercare.com</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 ElderCare. All rights reserved. Made with ❤️ for caring families.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}