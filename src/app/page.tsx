import HeroSection from "@/components/HeroSection";
import Reviews from "@/components/Reviews";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-24 px-8 sm:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="fadeUp">
            <p className="text-[#7f7cff] text-sm uppercase tracking-wider mb-4" style={{ fontFamily: "'Expose', sans-serif" }}>
              About Me
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeUp" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8">
              <AnimatedText animation="slideUp" type="words" delay={0.2}>
                A LITTLE BIT ABOUT MYSELF
              </AnimatedText>
            </h2>
          </AnimateOnScroll>
          
          <div className="space-y-6 text-white/70 text-lg leading-relaxed" style={{ fontFamily: "'Plein', sans-serif" }}>
            <AnimateOnScroll animation="fadeUp" delay={0.3}>
              <p>
                Hey! I'm <span className="text-white">Sweven</span>, a freelance full-stack developer and UI designer based in the <span className="text-white">Philippines</span>.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeUp" delay={0.4}>
              <p>
                I build websites and web applications that not only look great but actually work. My focus is on creating clean, intuitive user experiences with solid code underneath.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeUp" delay={0.5}>
              <p>
                When I'm not pushing pixels or writing code, you'll probably find me watching movies or vibing to music.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Tech Stack */}
          <div className="mt-12">
            <AnimateOnScroll animation="fadeUp" delay={0.6}>
              <p className="text-white/50 text-sm uppercase tracking-wider mb-6" style={{ fontFamily: "'Expose', sans-serif" }}>
                Tech I Work With
              </p>
            </AnimateOnScroll>
            <StaggerContainer className="flex flex-wrap gap-3" staggerDelay={0.08} delay={0.7}>
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Figma"].map((tech) => (
                <StaggerItem key={tech} animation="scale">
                  <span
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white/80 text-sm inline-block hover:border-[#7f7cff]/50 hover:bg-[#7f7cff]/10 transition-all duration-300 cursor-default"
                    style={{ fontFamily: "'Expose', sans-serif" }}
                  >
                    {tech}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 sm:px-16 lg:px-32">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll animation="fadeUp">
            <p className="text-[#7f7cff] text-sm uppercase tracking-wider mb-4" style={{ fontFamily: "'Expose', sans-serif" }}>
              Get In Touch
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeUp" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              <AnimatedText animation="slideUp" type="words" delay={0.2}>
                LET'S WORK TOGETHER
              </AnimatedText>
            </h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeUp" delay={0.2}>
            <p className="text-white/60 mb-12" style={{ fontFamily: "'Plein', sans-serif" }}>
              Have a project in mind? Let's talk about it.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={0.3}>
            <form 
              action="https://formspree.io/f/mlgjdrzp" 
              method="POST"
              className="space-y-6"
            >
              <div className="group">
                <label htmlFor="name" className="block text-white/70 text-sm mb-2 group-focus-within:text-[#7f7cff] transition-colors" style={{ fontFamily: "'Expose', sans-serif" }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-white/30 focus:outline-none focus:border-[#7f7cff] focus:bg-[#7f7cff]/5 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-white/70 text-sm mb-2 group-focus-within:text-[#7f7cff] transition-colors" style={{ fontFamily: "'Expose', sans-serif" }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-white/30 focus:outline-none focus:border-[#7f7cff] focus:bg-[#7f7cff]/5 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-white/70 text-sm mb-2 group-focus-within:text-[#7f7cff] transition-colors" style={{ fontFamily: "'Expose', sans-serif" }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-white/30 focus:outline-none focus:border-[#7f7cff] focus:bg-[#7f7cff]/5 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-[#7f7cff] text-white rounded hover:bg-[#6e6cd6] hover:shadow-[0_0_30px_rgba(127,124,255,0.4)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ fontFamily: "'Expose', sans-serif" }}
              >
                Send Message
              </button>
            </form>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
