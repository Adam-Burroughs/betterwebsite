import { Gamepad2, Users, Briefcase, Sparkles, ArrowRight, Mail, ChevronDown } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Brand Experience Hub",
      client: "Global Fashion Brand",
      description: "Immersive virtual runway and shopping experience",
      stats: { players: "2M+", rating: "4.9/5", engagement: "18min avg" }
    },
    {
      title: "Corporate Training World",
      client: "Tech Corporation",
      description: "Interactive employee onboarding and team building",
      stats: { players: "500K+", rating: "4.8/5", engagement: "25min avg" }
    },
    {
      title: "Product Launch Event",
      client: "Automotive Company",
      description: "Virtual car reveal and test drive experience",
      stats: { players: "1.5M+", rating: "4.9/5", engagement: "22min avg" }
    }
  ];

  const services = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Brand Activations",
      description: "Create unforgettable branded experiences that resonate with your target audience in the metaverse."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Corporate Solutions",
      description: "Training programs, team building events, and virtual offices tailored for modern businesses."
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Custom Game Development",
      description: "Full-stack Roblox development from concept to launch, optimized for engagement and retention."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Agency Partnerships",
      description: "White-label solutions and collaborative development for creative and marketing agencies."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/e.png" alt="Studio Logo" className="w-10 h-10" />
            <span className="text-xl font-bold">EXPERIENCE STUDIOS</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#work" className="hover:text-blue-400 transition-colors">Our Work</a>
            <a href="#process" className="hover:text-blue-400 transition-colors">Process</a>
            <a href="#contact" className="px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors font-medium">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full mb-6">
              <span className="text-blue-400 text-sm font-medium">🎮 Premium Roblox Development Studio</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              We Build
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Experiences </span>
              That Matter
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Partner with the leading Roblox development studio trusted by global brands,
              corporations, and agencies to create immersive experiences that drive engagement and results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="px-8 py-4 bg-blue-600 rounded-full hover:bg-blue-700 transition-all hover:scale-105 font-medium flex items-center gap-2">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#work" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors font-medium">
                View Our Work
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "10M+", label: "Total Players" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "99%", label: "Client Satisfaction" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 animate-bounce">
          <ChevronDown className="w-6 h-6 mx-auto text-gray-600" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              End-to-end Roblox development services designed for brands, companies, and agencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg">Success stories from our portfolio</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {projects.map((project, i) => (
              <button
                key={i}
                onClick={() => setActiveProject(i)}
                className={`p-6 rounded-xl text-left transition-all ${
                  activeProject === i
                    ? 'bg-blue-600 scale-105'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm opacity-80">{project.client}</p>
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm text-blue-400 font-medium mb-2">CASE STUDY</div>
                <h3 className="text-3xl font-bold mb-4">{projects[activeProject].title}</h3>
                <p className="text-gray-300 mb-6 text-lg">{projects[activeProject].description}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-blue-400">{projects[activeProject].stats.players}</div>
                    <div className="text-sm text-gray-400">Total Players</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-blue-400">{projects[activeProject].stats.rating}</div>
                    <div className="text-sm text-gray-400">User Rating</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-blue-400">{projects[activeProject].stats.engagement}</div>
                    <div className="text-sm text-gray-400">Session Length</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl h-64 flex items-center justify-center border border-white/10">
                <Gamepad2 className="w-24 h-24 text-blue-400/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-400 text-lg">From concept to launch in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Discovery", desc: "Understanding your brand, goals, and target audience" },
              { num: "02", title: "Design", desc: "Creating immersive experiences and game mechanics" },
              { num: "03", title: "Development", desc: "Building and testing your Roblox experience" },
              { num: "04", title: "Launch & Support", desc: "Deployment, marketing, and ongoing optimization" }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-blue-600/20 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-gray-400 text-lg mb-12">
            Let's discuss how we can bring your vision to life on Roblox.
            We work with brands of all sizes—from startups to Fortune 500 companies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@experiencestudios.com"
              className="px-8 py-4 bg-blue-600 rounded-full hover:bg-blue-700 transition-all hover:scale-105 font-medium flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
            <a
              href="#work"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors font-medium"
            >
              See More Work
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/e.png" alt="Studio Logo" className="w-8 h-8" />
                <span className="font-bold">EXPERIENCE STUDIOS</span>
              </div>
              <p className="text-gray-400 text-sm">
                Premium Roblox development for brands, companies, and agencies.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Brand Activations</div>
                <div>Corporate Solutions</div>
                <div>Game Development</div>
                <div>Agency Partnerships</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>About Us</div>
                <div>Our Work</div>
                <div>Careers</div>
                <div>Blog</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>hello@experiencestudios.com</div>
                <div>Twitter</div>
                <div>LinkedIn</div>
                <div>Discord</div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
            © 2025 Experience Studios. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
