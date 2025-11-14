import { useState } from 'react'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold tracking-wide">
      {children}
    </span>
  )
}

function ProjectCard({ title, subtitle, description, tags }) {
  return (
    <div className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
      <p className="mt-3 text-gray-700 leading-relaxed">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags?.map((t) => (
          <span key={t} className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-700">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

function SectionTitle({ kicker, title }) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">{kicker}</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
    </div>
  )
}

function App() {
  const [year] = useState(new Date().getFullYear())

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      {/* Navbar */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#home" className="text-lg font-bold tracking-tight text-gray-900">
            Ujwal Kashyap
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-gray-900 transition-colors">Skills</a>
            <a href="#goals" className="hover:text-gray-900 transition-colors">Goals</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-700">
              <span>First-Year Engineering (FE)</span>
              <span className="text-blue-400">•</span>
              <span>Data Science • Python • AI</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge>Motivated</Badge>
                <Badge>Self-Taught</Badge>
                <Badge>Curious</Badge>
                <Badge>Builder</Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
                Hey, I’m Ujwal Kashyap — future Data Scientist & Software Engineer
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                I’m an FE student sprinting into Data Science, Python, AI, and real-world problem solving. I learn fast, build small, and iterate until it clicks. This is where I share what I’m making and how I’m leveling up.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a href="#projects" className="rounded-lg bg-blue-600 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-blue-700 transition-colors">See my projects</a>
                <a href="#contact" className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">Let’s connect</a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-blue-200/60 to-purple-200/60 rounded-[2rem] blur-2xl" />
              <div className="aspect-square rounded-2xl bg-white shadow-xl border border-gray-100 flex items-center justify-center">
                <div className="p-8 text-center">
                  <p className="text-6xl">🧠</p>
                  <p className="mt-4 text-sm text-gray-600">Learning daily. Shipping small. Aiming big.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle kicker="About" title="Who I am" />
        <div className="mt-6 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 text-gray-700 leading-relaxed">
            <p>
              I’m building a solid technical foundation early so I can grow into a high-level data scientist and software engineer. I don’t wait for perfect conditions — I prototype, break things, and learn by doing.
            </p>
            <p className="mt-4">
              Education so far: I completed my HSC at <span className="font-semibold text-gray-900">Bombay Suburban Grain Dealers (BSGD) College</span> and my SSC at <span className="font-semibold text-gray-900">St. Anne’s High School</span>. Now in FE, I’m turning curiosity into skills and skills into projects.
            </p>
            <p className="mt-4">
              My approach is simple: stay curious, stay consistent, and stack wins. From Python mini-apps to electronics basics, I’m connecting software and hardware to understand systems end-to-end.
            </p>
          </div>
          <div className="space-y-3">
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <p className="text-sm text-gray-600">Mindset</p>
              <p className="font-semibold text-gray-900">Motivated, self-taught, and always experimenting.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <p className="text-sm text-gray-600">Focus</p>
              <p className="font-semibold text-gray-900">Data Science, Python, AI, and real-world problem solving.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <p className="text-sm text-gray-600">Goal</p>
              <p className="font-semibold text-gray-900">Build strong fundamentals now to go far later.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gradient-to-br from-white to-blue-50/50 border-y border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle kicker="Projects" title="Small builds, big learning" />
          <p className="mt-3 text-gray-700">I ship small, focused projects to learn fast and stack skills.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Laser Security System"
              subtitle="Electronics + Sensors"
              description="Built a simple laser tripwire using basic components, exploring light detection, circuit reliability, and alert logic."
              tags={["Laser", "LDR", "Circuits", "Prototyping"]}
            />
            <ProjectCard
              title="Arduino Basics"
              subtitle="Microcontrollers"
              description="Learning GPIO, PWM, and sensor input. Writing clean sketches, testing modules, and understanding hardware timing."
              tags={["Arduino", "C/C++", "Sensors", "PWM"]}
            />
            <ProjectCard
              title="Python Mini-Apps"
              subtitle="Core Programming"
              description="Small tools that do one thing well — CLI utilities, data parsing, and simple visualizations to practice fundamentals."
              tags={["Python", "CLI", "Pandas", "Matplotlib"]}
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle kicker="Skills" title="What I’m actively learning" />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-gray-900">Python</h3>
            <p className="mt-2 text-sm text-gray-600">Writing clean scripts, problem solving, data handling, and automation.</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-gray-900">Data Science</h3>
            <p className="mt-2 text-sm text-gray-600">Pandas, basic EDA, plotting, and learning how to ask good questions with data.</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-gray-900">AI Basics</h3>
            <p className="mt-2 text-sm text-gray-600">Understanding ML intuition, model types, and where AI adds value.</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-gray-900">Hardware</h3>
            <p className="mt-2 text-sm text-gray-600">Arduino, sensors, and connecting software logic with the physical world.</p>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section id="goals" className="bg-gradient-to-tr from-purple-50 to-white border-y border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle kicker="Path" title="Where I’m headed" />
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Short term</p>
              <h3 className="mt-1 font-semibold text-gray-900">Master fundamentals</h3>
              <p className="mt-2 text-gray-700">Lock in Python, DS patterns, and clean coding habits. Ship more small projects.</p>
            </div>
            <div className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Mid term</p>
              <h3 className="mt-1 font-semibold text-gray-900">Build portfolio depth</h3>
              <p className="mt-2 text-gray-700">Tackle bigger problems — data pipelines, APIs, and real datasets.</p>
            </div>
            <div className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Long term</p>
              <h3 className="mt-1 font-semibold text-gray-900">High-level contributor</h3>
              <p className="mt-2 text-gray-700">Become a strong data scientist and software engineer who ships impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle kicker="Contact" title="Let’s build something" />
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700">
              I’m always open to mentorship, collaboration, and ideas. If you’re into data, AI, or cool build projects, I’d love to connect.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="mailto:ujwalkashyap@example.com" className="rounded-lg bg-blue-600 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-blue-700">Email me</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">GitHub</a>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-600">Quick note</p>
            <p className="mt-2 text-gray-800">I respond fast, and I’m always happy to learn from people ahead of me. If you have a challenge that needs energy and curiosity — I’m in.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between">
          <p>© {year} Ujwal Kashyap • Built with curiosity and consistency.</p>
          <div className="mt-3 sm:mt-0 flex items-center gap-4">
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#skills" className="hover:text-gray-900">Skills</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
