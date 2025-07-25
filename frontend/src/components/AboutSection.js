import React from 'react';
import { Download, Calendar, MapPin, Phone, Mail, Award, Code, Coffee } from 'lucide-react';

const AboutSection = ({ about, currentColor }) => {
  return (
    <div className="min-h-screen py-8 px-8 lg:px-16 flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header - Aligned with Introduce */}
        <div className="text-left mb-8">
          {/* About Me Text - Same alignment as Introduce */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-sm">👤</span>
            </div>
            <span className="text-gray-400 text-sm uppercase tracking-wider">ABOUT ME</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get to know more about <span style={{ color: currentColor }}>me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            What I am, what I do, and what inspires me
          </p>
        </div>

        {/* Main Content - Center Aligned */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 text-center">{about.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center">
                {about.description}
              </p>
              <p className="text-gray-400 leading-relaxed text-center">
                {about.details}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                className="flex items-center gap-3 px-6 py-3 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg"
                style={{ backgroundColor: currentColor }}
              >
                <Download size={20} />
                Download CV
              </button>
              
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-3 px-6 py-3 bg-transparent border-2 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
                style={{ borderColor: currentColor, color: currentColor }}
              >
                <Coffee size={20} />
                Let's Talk
              </button>
            </div>
          </div>
        </div>

        {/* Info Cards - Center Aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {about.info.map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: currentColor }}>
                  <item.icon size={20} className="text-white" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{item.label}</h4>
              <p className="text-gray-300">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;