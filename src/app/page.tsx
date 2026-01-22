import FloatingCodeSyntax from "@/components/FloatingSquares";
import CodeTerminal from "@/components/CodeTerminal";
import Reviews from "@/components/Reviews";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-8 sm:px-16 lg:px-32 pt-24 pb-12 relative overflow-hidden gap-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(127, 124, 255, 0.05), rgba(79, 77, 232, 0.05), transparent)",
        }}
      >
        {/* Floating Code Syntax Background */}
        <FloatingCodeSyntax />
        <div className="max-w-xl">
          {/* Small intro text */}
          <p
            className="text-white/60 text-lg mb-0"
            style={{ fontFamily: "'Expose', sans-serif" }}
          >
            Hey, I'm
          </p>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl leading-tight mb-0">
            SWEVEN
          </h1>

          {/* Tagline */}
          <p className="swevline text-2xl sm:text-3xl text-white/80 mb-1">
            I turn <span className="text-[#7f7cff]">ideas</span> into pixels &
            code
          </p>

          {/* Description */}
          <p
            className="text-white/60 text-lg max-w-xl mb-6"
            style={{ fontFamily: "'Expose', sans-serif" }}
          >
            Freelance developer crafting websites and web apps that look good
            and actually work.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4"
            style={{ fontFamily: "'Expose', sans-serif" }}
          >
            <a
              href="#projects"
              className="flex items-center justify-center px-6 py-3 bg-[#7f7cff] text-white rounded hover:bg-[#6e6cd6] transition-all duration-300"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center px-6 py-3 bg-transparent text-white border border-white/10 rounded hover:border-white/30 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/swevenxu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 bg-transparent text-white border border-white/10 rounded hover:border-white/30 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 bg-transparent text-white border border-white/10 rounded hover:border-white/30 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Code Terminal on the right */}
        <div className="hidden lg:block">
          <CodeTerminal />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8 sm:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <p className="text-[#7f7cff] text-sm uppercase tracking-wider mb-4" style={{ fontFamily: "'Expose', sans-serif" }}>
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8">
              A LITTLE BIT ABOUT MYSELF
            </h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={0.2}>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed" style={{ fontFamily: "'Plein', sans-serif" }}>
              <p>
                Hey! I'm <span className="text-white">Sweven</span>, a freelance full-stack developer and UI designer based in the <span className="text-white">Philippines</span>.
              </p>
              <p>
                I build websites and web applications that not only look great but actually work. My focus is on creating clean, intuitive user experiences with solid code underneath.
              </p>
              <p>
                When I'm not pushing pixels or writing code, you'll probably find me watching movies or vibing to music.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Tech Stack */}
          <div className="mt-12">
            <p className="text-white/50 text-sm uppercase tracking-wider mb-6" style={{ fontFamily: "'Expose', sans-serif" }}>
              Tech I Work With
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Figma"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white/80 text-sm"
                  style={{ fontFamily: "'Expose', sans-serif" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-8 sm:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <p className="text-[#7f7cff] text-sm uppercase tracking-wider mb-4" style={{ fontFamily: "'Expose', sans-serif" }}>
              My Work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-12">
              RECENT PROJECTS
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 - Lumin Hub */}
            <a
              href="https://luminhub-live.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#7f7cff]/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img src="/luminhub.png" alt="Lumin Hub" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2 group-hover:text-[#7f7cff] transition-colors">Lumin Hub</h3>
                <span className="text-xs px-3 py-1 bg-white/10 rounded text-white/70" style={{ fontFamily: "'Expose', sans-serif" }}>
                  Next.js
                </span>
              </div>
            </a>

            {/* Project 2 - The Snoe Project */}
            <a
              href="https://snoehall.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#7f7cff]/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img src="/snoeproject.png" alt="The Snoe Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2 group-hover:text-[#7f7cff] transition-colors">The Snoe Project</h3>
                <span className="text-xs px-3 py-1 bg-white/10 rounded text-white/70" style={{ fontFamily: "'Expose', sans-serif" }}>
                  React
                </span>
              </div>
            </a>

            {/* Project 3 - Ryzen Hub */}
            <a
              href="https://ryzenhubmain.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#7f7cff]/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img src="/ryzen.png" alt="Ryzen Hub" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2 group-hover:text-[#7f7cff] transition-colors">Ryzen Hub</h3>
                <span className="text-xs px-3 py-1 bg-white/10 rounded text-white/70" style={{ fontFamily: "'Expose', sans-serif" }}>
                  Next.js
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 sm:px-16 lg:px-32">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll>
            <p className="text-[#7f7cff] text-sm uppercase tracking-wider mb-4" style={{ fontFamily: "'Expose', sans-serif" }}>
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              LET'S WORK TOGETHER
            </h2>
            <p className="text-white/60 mb-12" style={{ fontFamily: "'Plein', sans-serif" }}>
              Have a project in mind? Let's talk about it.
            </p>
          </AnimateOnScroll>

          <form 
            action="https://formspree.io/f/mlgjdrzp" 
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-white/70 text-sm mb-2" style={{ fontFamily: "'Expose', sans-serif" }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-white/30 focus:outline-none focus:border-[#7f7cff] transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white/70 text-sm mb-2" style={{ fontFamily: "'Expose', sans-serif" }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-white/30 focus:outline-none focus:border-[#7f7cff] transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white/70 text-sm mb-2" style={{ fontFamily: "'Expose', sans-serif" }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-white/30 focus:outline-none focus:border-[#7f7cff] transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-[#7f7cff] text-white rounded hover:bg-[#6e6cd6] transition-all duration-300"
              style={{ fontFamily: "'Expose', sans-serif" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
