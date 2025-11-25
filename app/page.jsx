"use client";

import React, { useState, useCallback, useEffect } from 'react';
import { Sun, Moon, Zap, User, Code, Mail, Send, Check } from 'lucide-react';

// -------------------- Data & Types --------------------
const USER_DATA = {
  name: 'Jonathan Marl',
  tagline:
    'I build clean, modern, and interactive websites using React, Next.js, TypeScript, TailwindCSS, and more.',
  bio: "I'm an IT student and front-end developer specializing in modern, minimal, and user-friendly web interfaces. I enjoy designing beautiful UI and smooth UX experiences. My focus is on performance, accessibility, and delivering pixel-perfect designs.",
  skills: [
    'HTML5 / CSS3',
    'JavaScript (ES6+)',
    'React',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'REST APIs',
    'Git/GitHub',
  ],
  projects: [
    {
      title: 'Project Alpha',
      description:
        'A complex web application showcasing state management with Redux and robust authentication.',
      href: '#',
    },
    {
      title: 'Project Beta',
      description:
        'A minimal landing page built with Next.js and server-side rendering for fast performance.',
      href: '#',
    },
    {
      title: 'Project Gamma',
      description:
        'An interactive data visualization tool built with D3.js to analyze social trends.',
      href: '#',
    },
  ],
};

// -------------------- Utility Components --------------------

const Toast = ({ message, type, onClose }) => {
  const typeClasses = {
    success: 'bg-green-500 text-green-100',
    error: 'bg-red-600 text-red-100',
    info: 'bg-blue-600 text-blue-100',
  };

  const IconComponent = {
    success: Check,
    error: Zap,
    info: Mail,
  }[type] || Check;

  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  // Use fixed positioning and transition for a smooth entrance/exit
  return (
    <div 
      className={`fixed bottom-6 right-6 z-[100] p-4 rounded-xl shadow-2xl transition-all duration-300 transform translate-y-0 opacity-100 flex items-center space-x-2 ${typeClasses[type]}`}
    >
      <IconComponent size={20} />
      <span>{message}</span>
    </div>
  );
};

// -------------------- Header Component --------------------

const Header = ({ darkMode, toggleDarkMode }) => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-tighter text-blue-600 dark:text-blue-400">
          Jonathan<span className='text-gray-800 dark:text-gray-100'>.dev</span>
        </h1>
        <nav className="flex items-center space-x-4 md:space-x-6">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200 hidden sm:block"
            >
              {item.name}
            </a>
          ))}

          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

// -------------------- Contact Section --------------------

const ContactSection = ({ setToast }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [draftedResponse, setDraftedResponse] = useState('');
  const [isDraftingResponse, setIsDraftingResponse] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'message') setDraftedResponse(''); // Clear draft if message changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast({ message: `Message sent! Thanks, ${formData.name}.`, type: 'success' });
    setFormData({ name: '', email: '', message: '' });
    setDraftedResponse('');
  };

  // Simulated API call for generating a response draft
  const draftContactResponse = useCallback(() => {
    if (!formData.name || !formData.message) {
      setToast({ message: 'Please fill in your Name and Message to draft a response.', type: 'info' });
      return;
    }
    setIsDraftingResponse(true);
    
    // Simulate LLM/AI response generation
    const userMessageStart = formData.message.length > 30 
        ? `${formData.message.substring(0, 30)}...` 
        : formData.message;
        
    const systemPrompt = `Act as a professional portfolio owner. Draft a short, courteous, and enthusiastic acknowledgment response to a user named ${formData.name} who just submitted a contact form message about: ${userMessageStart}. The response should promise a detailed follow-up within one business day.`;
    
    // NOTE: In a real-world scenario, you would call the Gemini API here.
    // For this single-file demo, we will use a simple setTimeout mock.
    
    setTimeout(() => {
      // eslint-disable-next-line quotes
      const mockResponse = `Hello ${formData.name}, thank you so much for reaching out! I've received your message regarding: "${userMessageStart}". I'm very excited to learn more. I will review your inquiry in detail and get back to you with a comprehensive response within one business day. Talk soon!`;
      setDraftedResponse(mockResponse);
      setIsDraftingResponse(false);
    }, 1200);
  }, [formData.name, formData.message, setToast]);


  return (
    <section id="contact" className="space-y-8 pt-12">
      <h2 className="text-4xl font-extrabold text-center">
        <span className="text-teal-500">C</span>ontact Me
      </h2>
      <form onSubmit={handleSubmit} className="grid gap-6 max-w-xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl ring-1 ring-gray-100 dark:ring-gray-700">
        
        {/* Input fields */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-4 focus:ring-teal-500/50 focus:border-teal-500 transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-4 focus:ring-teal-500/50 focus:border-teal-500 transition-all"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 h-40 resize-none focus:ring-4 focus:ring-teal-500/50 focus:border-teal-500 transition-all"
        />

        {/* Draft Response Button */}
        <button
          type="button"
          onClick={draftContactResponse}
          disabled={isDraftingResponse}
          className="flex items-center justify-center space-x-2 px-6 py-3 bg-indigo-500 text-white font-semibold rounded-xl hover:bg-indigo-600 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-indigo-500/30 active:scale-[0.99]"
        >
          <Mail size={20} />
          <span>{isDraftingResponse ? 'Drafting Response...' : 'Draft Quick Acknowledgment'}</span>
        </button>
        
        {/* Drafted Response Area */}
        {draftedResponse && (
          <div className="relative p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl border border-dashed border-indigo-500 transition-all duration-300">
            <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-2">Drafted AI Response:</p>
            <p className="p-3 bg-white dark:bg-gray-900 rounded-lg text-gray-800 dark:text-gray-200 text-sm font-mono whitespace-pre-wrap shadow-inner">
              {draftedResponse}
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center justify-center space-x-2 px-6 py-4 bg-teal-600 text-white font-bold text-lg rounded-xl hover:bg-teal-700 transition shadow-lg shadow-teal-500/50 transform hover:scale-[1.01] active:scale-[0.98] duration-300 mt-4"
        >
          <Send size={20} />
          <span>Send Message</span>
        </button>
      </form>
    </section>
  );
};


// -------------------- Main App Component --------------------

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [projectIdea, setProjectIdea] = useState('');
  const [isGeneratingIdea, setIsGeneratingIdea] = useState(false);
  const [toast, setToast] = useState({ message: '', type: 'info' });

  // Initial Dark Mode Check
  useEffect(() => {
    // Check local storage or system preference
    const storedTheme = localStorage.getItem('theme');
    const isDark = storedTheme === 'dark' || (storedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
    // Defer setState to avoid cascading synchronous update
    setTimeout(() => {
      setDarkMode(isDark);
    }, 0);
  }, []);

  // Update localStorage and document class on dark mode change
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  // Simulated API call for generating a project idea
  const fetchProjectIdea = useCallback(() => {
    setIsGeneratingIdea(true);
    setProjectIdea('');
    
    // NOTE: In a real-world application, this would call the Gemini API 
    // to generate a creative project idea based on the user's skills.
    
    setTimeout(() => {
      setProjectIdea(
        'Generated Project Idea: Develop an AI-powered personal reading list organizer built with Next.js, Firestore for persistence, and a clean, accessible design, focusing on dynamic list sorting by user-defined tags.'
      );
      setIsGeneratingIdea(false);
    }, 1800);
  }, []);

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 font-sans`}>
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
      />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 space-y-24 md:space-y-36">

        {/* HERO Section */}
        <section id="hero" className="flex flex-col md:flex-row items-center justify-between gap-10 min-h-[50vh] pt-10">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Jonathan Marl</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed font-light">{USER_DATA.tagline}</p>
            <a
              href="#projects"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-xl shadow-blue-500/50 hover:bg-blue-700 transition transform hover:scale-[1.02] active:scale-[0.98] duration-300 text-lg mt-6"
            >
              <Code size={22} />
              <span>Explore My Work</span>
            </a>
          </div>
          {/* Avatar Placeholder */}
          <div className="w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-900 shrink-0">
            <User size={80} className="text-blue-500 dark:text-indigo-400" />
          </div>
        </section>

        {/* ABOUT Section */}
        <section id="about" className="space-y-8 p-6 md:p-12 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl ring-1 ring-blue-100 dark:ring-gray-700">
          <h2 className="text-4xl font-extrabold text-center border-b pb-4 border-blue-200 dark:border-blue-700">
            <span className="text-blue-500">A</span>bout Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-loose text-lg font-serif">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span className="text-3xl text-blue-500 dark:text-blue-400 font-bold mr-1">"</span>
            {USER_DATA.bio}
          <span className="text-3xl text-blue-500 dark:text-blue-400 font-bold ml-1">"</span>
          </p>
        </section>

        {/* SKILLS Section */}
        <section id="skills" className="space-y-8">
          <h2 className="text-4xl font-extrabold text-center">
            <span className="text-indigo-500">S</span>kills & Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {USER_DATA.skills.map(skill => (
              <div 
                key={skill} 
                className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl text-center bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition transform hover:scale-[1.03] duration-300 flex items-center justify-center group"
              >
                <p className="font-semibold text-lg text-gray-800 dark:text-gray-200 group-hover:text-indigo-500 transition-colors">{skill}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS Section */}
        <section id="projects" className="space-y-8">
          <h2 className="text-4xl font-extrabold text-center">
            <span className="text-pink-500">P</span>ortfolio
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {USER_DATA.projects.map((project, i) => (
              <a
                key={i}
                href={project.href}
                className="block bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl ring-2 ring-gray-100 dark:ring-gray-700 hover:ring-pink-500 transition transform hover:-translate-y-1 duration-300 group"
              >
                <h3 className="text-3xl font-bold mb-3 text-pink-600 dark:text-pink-400 group-hover:underline">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
              </a>
            ))}
          </div>
          
          {/* Project Idea Generator Section */}
          <div className="pt-12 mt-12 border-t border-dashed border-gray-300 dark:border-gray-700 space-y-6 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold flex items-center space-x-3 text-gray-800 dark:text-gray-100">
              <Zap size={28} className="text-indigo-500 animate-pulse" />
              <span>Need a Project Kickstart?</span>
            </h3>
            <button
              onClick={fetchProjectIdea}
              disabled={isGeneratingIdea}
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/30 active:scale-[0.99]"
            >
              {isGeneratingIdea ? 'Generating Idea...' : 'Generate New Project Idea'}
            </button>
            {projectIdea && (
              <div className="p-5 bg-gray-100 dark:bg-gray-700 rounded-xl border-l-4 border-indigo-500 shadow-inner transition-all duration-500">
                <p className="font-mono text-sm leading-relaxed">{projectIdea}</p>
              </div>
            )}
          </div>
        </section>

        {/* CONTACT Section (uses the separated component) */}
        <ContactSection setToast={setToast} />

      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Jonathan Marl. Built with React & Tailwind CSS.
        </div>
      </footer>

      <Toast 
        message={toast.message} 
        type={toast.type} 
        onClose={() => setToast({ message: '', type: 'info' })} 
      />
    </div>
  );
};

export default App;