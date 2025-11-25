export default function Home() {
  // --- Global Styling Variables (SKY BLUE & BLACK) ---
  const ACCENT_COLOR_TEXT = "text-sky-400"; // Light, vibrant blue for accents
  const ACCENT_COLOR_BG = "bg-sky-500"; // Darker sky blue for solid buttons
  const BG_COLOR_MAIN = "bg-gray-950"; // Deep black background (Used for Hero, Projects, Footer)
  const BG_COLOR_ALT = "bg-gray-900"; // Slightly lighter dark gray (Used for About, Skills, Contact)
  const TEXT_COLOR = "text-gray-100"; // Off-white for main text

  // --- Skill Data (NEW) ---
  const skillsData = [
    { name: 'Mobile App', description: 'Cross-platform development with React Native and Expo.', icon: '📱' },
    { name: 'Web Dev', description: 'Full-stack experience using Next.js, Node.js, and serverless functions.', icon: '💻' },
    { name: 'Web Design', description: 'Focus on UI/UX principles, prototyping, and accessibility.', icon: '🎨' },
    { name: 'React/Next.js', description: 'Expertise in modern component architecture and performance optimization.', icon: '⚛️' },
  ];

  // --- HEADER COMPONENT (Sticky Navigation) ---
  const Header = () => {
    const navLinks = [
      { name: 'Home', href: '#' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
    ];

    return (
      <header className={`sticky top-0 z-50 w-full ${BG_COLOR_ALT} bg-opacity-95 shadow-lg backdrop-blur-sm border-b border-gray-800`}>
        <div className="flex items-center justify-between px-8 sm:px-16 lg:px-24 py-4">
          
          {/* Logo/Name */}
          <a href="#" className={`text-xl font-bold tracking-wider text-white hover:${ACCENT_COLOR_TEXT} transition duration-300`}>
            J.M. ECHECHE
          </a>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white font-medium transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Right Side Group: Contact Button and Profile Picture */}
          <div className="flex items-center space-x-4">
            {/* Contact Button (Accent Style) - Added responsive class to hide on small screens */}
            <a 
              href="#contact"
              className={`hidden sm:inline-block px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white ${ACCENT_COLOR_BG} rounded hover:bg-sky-400 transition duration-300 shadow-lg`}
            >
              CONTACT ME
            </a>
          </div>
          
        </div>
      </header>
    );
  };
  // ---------------------------------------------------------------------

  return (
    <main className={`${BG_COLOR_MAIN} ${TEXT_COLOR} font-sans`}>
      
      {/* 🟢 NAVIGATION BAR 🟢 */}
      <Header/>

      {/* --- HERO SECTION (BG_COLOR_MAIN: Deep Black) --- */}
      <section 
        id="hero"
        className={`min-h-screen flex items-center px-8 sm:px-16 lg:px-24 relative overflow-hidden ${BG_COLOR_MAIN}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full relative z-10">

            {/* Left Column: Text Content (Now takes 6/12 columns) */}
            <div className="lg:col-span-6 flex flex-col justify-center min-h-[50vh] lg:min-h-0">
                <p className={`uppercase tracking-widest text-sm ${ACCENT_COLOR_TEXT} mb-2`}>
                    Software Developer
                </p>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold max-w-4xl leading-tight">
                    DEVELOPING <span className={ACCENT_COLOR_TEXT}>CLEAN</span> & MODERN SOFTWARE
                </h1>
                
                {/* VIEW PROJECTS BUTTON */}
                <a 
                    href="#projects" 
                    className={`mt-8 px-6 py-3 font-semibold text-lg max-w-fit ${BG_COLOR_MAIN} ${TEXT_COLOR} ${ACCENT_COLOR_TEXT} border border-sky-400 hover:bg-sky-400 hover:text-gray-950 transition duration-300 shadow-md`}
                >
                    VIEW PROJECTS
                </a>
            </div>

            {/* Right Column: Profile Image Container (Now takes 6/12 columns) */}
            <div className="lg:col-span-6 flex justify-end items-end relative hidden lg:block overflow-hidden">
                {/* Image Wrapper for Slant Effect */}
                <div className="relative h-[110vh] w-full max-w-xl -mb-16 transform skew-y-3 origin-bottom-right">
                    <img 
                        src="/prof2.jpeg" 
                        alt="Jonathan Echeche - Hero Profile"
                        // WIDER IMAGE: Increased max-w-lg to max-w-xl
                        // Added inverse skew to maintain image content orientation
                        className="absolute inset-0 h-full w-full object-cover object-center filter grayscale transform -skew-y-3"
                    />
                </div>
            </div>
        </div>
            
      </section>

      {/* --- ABOUT SECTION (BG_COLOR_ALT: Lighter Dark Gray) --- */}
      <section id="about" className={`py-24 px-8 sm:px-16 lg:px-24 max-w-6xl mx-auto ${BG_COLOR_ALT}`}>
        <h2 className={`text-5xl font-extrabold mb-16 text-white text-center`}>
            ABOUT <span className={ACCENT_COLOR_TEXT}>ME</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
            
            {/* Profile Card */}
            <div className={`lg:col-span-1 flex flex-col items-center p-6 ${BG_COLOR_MAIN} rounded-xl shadow-xl border border-gray-800`}>
                <img 
                    src="/prof.png" 
                    alt="Jonathan Echeche - Profile"
                    className={`w-48 h-48 object-cover rounded-full ring-4 ring-sky-500 shadow-2xl mb-6`} 
                />
                <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-2">Jonathan Marl S. Echeche</h3>
                    <p className={`text-xl font-medium ${ACCENT_COLOR_TEXT}`}>Software Developer</p>
                    <div className="mt-6 space-y-2 text-gray-300">
                        <p className="flex items-center justify-center text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            Iloilo City, Philippines
                        </p>
                        <p className="flex items-center justify-center text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            jonathan.dev@email.com
                        </p>
                    </div>
                </div>
            </div>

            {/* About Text */}
            <div className={`md:col-span-1 lg:col-span-2 p-6 ${BG_COLOR_MAIN} rounded-xl shadow-xl border border-gray-800`}>
                <h3 className={`text-3xl font-bold mb-6 ${ACCENT_COLOR_TEXT}`}>My Journey & Philosophy</h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                    Hello! I'm Jonathan, a dedicated Software Developer focused on building robust, scalable, and high-performance applications across the modern web stack. I specialize in delivering comprehensive technical solutions, from pixel-perfect React interfaces to efficient back-end architecture.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                    My work is driven by a commitment to clean code, exceptional user experience (UX), and optimized performance. I prioritize development workflows that ensure maintainability and readability, allowing projects to scale gracefully over time. I am always exploring new tools and best practices to ensure every product I deliver is future-proof and reliable. I thrive on challenges and continuous learning to push the boundaries of what's possible in digital experiences.
                </p>
                <a 
                    href="#contact" 
                    className={`mt-8 inline-flex items-center px-6 py-3 font-semibold text-lg text-white ${ACCENT_COLOR_BG} rounded-lg hover:bg-sky-400 transition duration-300 shadow-md`}
                >
                    Let's work together 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
            </div>

        </div>
      </section>

      {/* --- SKILLS SECTION (ENHANCED - BG_COLOR_MAIN: Deep Black) --- */}
      <section id="skills" className={`py-24 px-8 sm:px-16 lg:px-24 ${BG_COLOR_MAIN}`}>
        <h2 className={`text-4xl font-bold mb-16 text-center text-white`}>
            CORE <span className={ACCENT_COLOR_TEXT}>COMPETENCIES</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillsData.map((skill) => (
            // Skill Card - uses BG_COLOR_ALT for visual contrast against BG_COLOR_MAIN
            <div 
                key={skill.name}
                className={`p-6 ${BG_COLOR_ALT} rounded-xl shadow-2xl text-left border border-gray-800 transition duration-300 ease-in-out transform hover:scale-[1.03] hover:border-sky-400`}
            >
                <p className={`text-4xl mb-4 ${ACCENT_COLOR_TEXT}`}>{skill.icon}</p>
                <h3 className={`text-xl font-bold mb-2 text-white`}>{skill.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                    {skill.description}
                </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION (BG_COLOR_ALT: Lighter Dark Gray) --- */}
      <section id="projects" className={`py-24 px-8 sm:px-16 lg:px-24 max-w-6xl mx-auto ${BG_COLOR_ALT}`}>
        <h2 className="text-4xl font-bold mb-12 text-center">Featured <span className={ACCENT_COLOR_TEXT}>Projects</span></h2>
        
        <div className="grid md:grid-cols-2 gap-10">
            
            {/* Project Card #1 */}
            <div className={`rounded-xl shadow-2xl border border-gray-800 hover:border-sky-400 transition duration-300 overflow-hidden ${BG_COLOR_MAIN}`}>
                <img 
                    src="proj1.jpeg"
                    alt="Design Portfolio Screenshot"
                    className="w-full h-[28rem] object-cover" 
                />
                <div className="p-6">
                    <h3 className={`text-2xl font-bold mb-2 ${ACCENT_COLOR_TEXT}`}>Design Portfolio</h3>
                    <p className="mt-2 text-gray-300">
                        A minimalist, high-speed portfolio showcasing various UI/UX case studies and animations. Built with plain React and Framer Motion.
                    </p> 
                    <button className={`mt-4 text-sm font-semibold ${ACCENT_COLOR_TEXT} hover:underline`}>
                      View Details →
                    </button>
                </div>
            </div>

            {/* Project Card #2 */}
            <div className={`rounded-xl shadow-2xl border border-gray-800 hover:border-sky-400 transition duration-300 overflow-hidden ${BG_COLOR_MAIN}`}>
                <img 
                    src="proj2.jpeg"
                    alt="Dynamic AI Image Generator Screenshot"
                    className="w-full h-[28rem] object-cover"
                />
                <div className="p-6">
                    <h3 className={`text-2xl font-bold mb-2 ${ACCENT_COLOR_TEXT}`}>Dynamic AI Image Generator</h3>
                    <p className="mt-2 text-gray-300">
                        The app uses the imagen-4.0-generate-001 model to create and display a new image.
                    </p> 
                    <button className={`mt-4 text-sm font-semibold ${ACCENT_COLOR_TEXT} hover:underline`}>
                      View Details →
                    </button>
                </div>
            </div>

            {/* Project Card #3 */}
            <div className={`rounded-xl shadow-2xl border border-gray-800 hover:border-sky-400 transition duration-300 overflow-hidden ${BG_COLOR_MAIN} md:col-span-2`}>
                <img 
                    src="proj3.jpeg"
                    alt="Data Dashboard Screenshot"
                    className="w-full h-[28rem] object-cover" 
                />
                <div className="p-6">
                    <h3 className={`text-2xl font-bold mb-2 ${ACCENT_COLOR_TEXT}`}>Data Dashboard</h3>
                    <p className="mt-2 text-gray-300">
                        An interactive analytics dashboard using React and D3.js for complex data visualization and real-time updates.
                    </p> 
                    <button className={`mt-4 text-sm font-semibold ${ACCENT_COLOR_TEXT} hover:underline`}>
                      View Details →
                    </button>
                </div>
            </div>
            
        </div>
      </section>

      {/* --- CONTACT SECTION */}
<section id="contact" className={`py-24 px-8 sm:px-16 lg:px-24 ${BG_COLOR_MAIN} text-center`}>
    <h2 className="text-4xl font-bold mb-10">Start Your <span className={ACCENT_COLOR_TEXT}>Project</span></h2>
    
    <div className={`max-w-4xl mx-auto p-8 md:p-12 ${BG_COLOR_ALT} rounded-xl shadow-2xl border border-gray-800`}>
        
        <h3 className={`text-3xl font-bold mb-4 ${ACCENT_COLOR_TEXT} text-center`}>
            Send an Inquiry
        </h3>
        <p className="text-gray-400 mb-8 text-center">
            Let's discuss your project details. Please fill out the form below.
        </p>

        {/* NOTE: This form is styled to match the image but requires a component or state handler (like the previous full code) to be fully functional. */}
        <form className="space-y-6">
            
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="text-sm font-medium text-gray-400 mb-2 block">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        // Assuming inputStyle is defined: w-full p-3 BG_COLOR_MAIN TEXT_COLOR border border-gray-800 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 outline-none transition duration-200
                        className={`w-full p-3 ${BG_COLOR_MAIN} ${TEXT_COLOR} border border-gray-800 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 outline-none transition duration-200`}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-400 mb-2 block">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className={`w-full p-3 ${BG_COLOR_MAIN} ${TEXT_COLOR} border border-gray-800 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 outline-none transition duration-200`}
                        required
                    />
                </div>
            </div>

            {/* Row 2: Subject and Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="subject" className="text-sm font-medium text-gray-400 mb-2 block">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        className={`w-full p-3 ${BG_COLOR_MAIN} ${TEXT_COLOR} border border-gray-800 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 outline-none transition duration-200`}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="budget" className="text-sm font-medium text-gray-400 mb-2 block">Budget</label>
                    <div className="relative">
                        <input
                            type="text"
                            id="budget"
                            name="budget"
                            placeholder="$"
                            className={`w-full p-3 ${BG_COLOR_MAIN} ${TEXT_COLOR} border border-gray-800 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 outline-none transition duration-200`}
                        />
                        {/* Dropdown Indicator for Visual Match */}
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </span>
                    </div>
                </div>
            </div>

            {/* Row 3: Comment (Textarea) */}
            <div>
                <label htmlFor="comment" className="text-sm font-medium text-gray-400 mb-2 block">Comment</label>
                <textarea
                    id="comment"
                    name="comment"
                    rows="5"
                    placeholder="Type details about your inquiry"
                    className={`w-full p-3 ${BG_COLOR_MAIN} ${TEXT_COLOR} border border-gray-800 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 outline-none transition duration-200 resize-none`}
                    required
                />
            </div>

            {/* Send Message Button (using ACCENT_COLOR_BG) */}
            <button type="submit" className={`w-full flex items-center justify-center space-x-2 px-6 py-4 text-lg font-semibold text-white ${ACCENT_COLOR_BG} rounded hover:bg-sky-400 transition duration-300 shadow-lg`}>
                <span>Send Message</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
        </form>
    </div>
</section>

      {/* --- FOOTER (BG_COLOR_MAIN: Deep Black) --- */}
      <footer className={`py-8 text-center ${BG_COLOR_MAIN} text-gray-400 border-t border-gray-800`}>
        © 2025 Jonathan Echeche. Designed and Developed in <span className={ACCENT_COLOR_TEXT}>React</span>.
      </footer>

    </main>
  );
}
