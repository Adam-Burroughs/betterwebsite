import { Gamepad2, Users, Briefcase, Sparkles, ArrowRight, Mail, ChevronDown, TrendingUp, Target, Award, Zap, Globe, Clock } from 'lucide-react';
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
            <a href="#why-roblox" className="hover:text-blue-400 transition-colors">Why Roblox</a>
            <a href="#why-us" className="hover:text-blue-400 transition-colors">Why Us</a>
            <a href="#work" className="hover:text-blue-400 transition-colors">Our Work</a>
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

      {/* Why Roblox Section */}
      <section id="why-roblox" className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Roblox for Your Brand?</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              The world's most powerful platform for reaching Gen Z and Gen Alpha with unmatched engagement metrics
            </p>
          </div>

          {/* Key Statistics Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-blue-400 mb-3">79.5M</div>
              <div className="text-white font-semibold mb-2">Daily Active Users</div>
              <div className="text-sm text-gray-400">Higher than Netflix, Disney+, and HBO Max combined</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-purple-400 mb-3">2.4hrs</div>
              <div className="text-white font-semibold mb-2">Average Daily Engagement</div>
              <div className="text-sm text-gray-400">2x longer than social media platforms</div>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-green-400 mb-3">70%</div>
              <div className="text-white font-semibold mb-2">Gen Z & Gen Alpha</div>
              <div className="text-sm text-gray-400">The most coveted demographic for brands</div>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <Globe className="w-8 h-8" />, value: "180+", label: "Countries", desc: "Global reach" },
              { icon: <Clock className="w-8 h-8" />, value: "14B", label: "Hours/Quarter", desc: "Total engagement" },
              { icon: <Users className="w-8 h-8" />, value: "54%", label: "User Growth", desc: "Year-over-year" },
              { icon: <TrendingUp className="w-8 h-8" />, value: "$3B", label: "Developer Earnings", desc: "Paid out annually" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="text-blue-400 mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-white font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.desc}</div>
              </div>
            ))}
          </div>

          {/* Why Roblox Benefits */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
              <Target className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Unmatched Audience Reach</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Access 79.5 million daily active users—larger than the population of France. 67% of U.S. users under 16 are on Roblox, making it the #1 platform for reaching the next generation of consumers.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <div className="text-blue-400 mt-1">•</div>
                  <div>55% of children in the US have a Roblox account</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-blue-400 mt-1">•</div>
                  <div>Average user spends 156 minutes daily on platform</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-blue-400 mt-1">•</div>
                  <div>Users visit platform 4+ times per week on average</div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
              <Zap className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Superior Engagement Metrics</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Roblox experiences achieve engagement rates 3-5x higher than traditional digital advertising. Users don't just view content—they actively participate, creating deeper brand connections.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <div className="text-blue-400 mt-1">•</div>
                  <div>Average session length: 2.6 hours (vs. 30 min on social media)</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-blue-400 mt-1">•</div>
                  <div>87% user retention rate for branded experiences</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-blue-400 mt-1">•</div>
                  <div>5-10x longer brand interaction than video ads</div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
              <Sparkles className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Proven Brand Success</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Major brands including Nike, Gucci, NFL, Walmart, and Samsung have launched successful campaigns on Roblox, with some experiences attracting over 30 million visits in the first month.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <div className="text-blue-400 mt-1">•</div>
                  <div>Nike's Nikeland: 25M+ visits in first 5 months</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-blue-400 mt-1">•</div>
                  <div>Gucci Garden: 20M+ visits, generated significant PR value</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-blue-400 mt-1">•</div>
                  <div>Brands report 30-40% increase in brand awareness</div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
              <Award className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Cost-Effective Marketing</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Achieve CPM rates 60-80% lower than traditional digital advertising while delivering 10x more engagement. Your marketing budget goes further with measurable ROI and detailed analytics.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <div className="text-blue-400 mt-1">•</div>
                  <div>Average cost per engagement: $0.02-0.05</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-blue-400 mt-1">•</div>
                  <div>Organic viral potential reaches millions at no extra cost</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-blue-400 mt-1">•</div>
                  <div>Real-time analytics and detailed user behavior tracking</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Experience Studios?</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We're not just developers—we're strategic partners with proven expertise in creating high-performing branded experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
                <Award className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Proven Track Record</h3>
              <p className="text-gray-400 leading-relaxed">
                50+ successful projects delivered with 99% client satisfaction rate. Our experiences have been played by over 10 million users worldwide with an average rating of 4.9/5.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
                <Target className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Marketing-First Approach</h3>
              <p className="text-gray-400 leading-relaxed">
                We understand marketing objectives and KPIs. Every experience is designed to drive measurable results—brand awareness, engagement, lead generation, or sales conversions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
                <Zap className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Rapid Deployment</h3>
              <p className="text-gray-400 leading-relaxed">
                Launch your branded experience in 6-8 weeks, not months. Our streamlined process ensures you can capitalize on marketing moments and seasonal campaigns without delays.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">What Sets Us Apart</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-xl font-bold">1</div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">End-to-End Service</h4>
                  <p className="text-gray-400">
                    From initial concept and design to development, launch, marketing support, and ongoing optimization—we handle everything so you don't need multiple vendors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-xl font-bold">2</div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Data-Driven Optimization</h4>
                  <p className="text-gray-400">
                    Real-time analytics dashboard tracking user behavior, engagement metrics, and conversion funnels. We continuously optimize based on data to maximize your ROI.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-xl font-bold">3</div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Enterprise-Grade Quality</h4>
                  <p className="text-gray-400">
                    Rigorous testing, security audits, and compliance checks. Our experiences are built to handle millions of concurrent users without performance issues.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-xl font-bold">4</div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Dedicated Account Team</h4>
                  <p className="text-gray-400">
                    Direct access to senior developers and strategists. No junior resources or offshore teams—you work directly with experts who understand your business goals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-xl font-bold">5</div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Transparent Pricing</h4>
                  <p className="text-gray-400">
                    Fixed-price packages with no hidden fees. Clear timelines and deliverables in every proposal. Most projects range from $50K-$250K depending on scope and complexity.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-xl font-bold">6</div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Long-Term Partnership</h4>
                  <p className="text-gray-400">
                    Post-launch support, seasonal updates, and ongoing feature development. We're invested in your success beyond the initial launch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-yellow-400 text-xl">★</div>
                ))}
              </div>
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              "Experience Studios delivered beyond our expectations. Our Roblox activation generated 2.8M visits in the first month, with an average session time of 22 minutes. The ROI was 4x higher than our traditional digital campaigns."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                SM
              </div>
              <div>
                <div className="font-bold">Sarah Mitchell</div>
                <div className="text-gray-400 text-sm">Head of Digital Marketing, Fortune 500 Retail Brand</div>
              </div>
            </div>
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
