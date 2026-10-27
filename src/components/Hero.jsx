import { Mail, Github, Linkedin, ArrowRight, ChevronDown, Download } from "lucide-react";

// TODO: replace with your real numbers and links
const stats = [
  { value: "3+", label: "Years coding" },
  { value: "10+", label: "Projects built" },
  { value: "5+", label: "Technologies" },
];

const socials = [
  { icon: Github, href: "https://github.com/mwangaza12", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/joseph-mwangaza", label: "LinkedIn" },
  { icon: Mail, href: "mailto:you@josephmwangaza1@.gmail.com", label: "Email" },
];

// TODO: edit these to match what you actually offer
const focus = [
  "Clean, maintainable architecture",
  "Fast, reliable web applications",
  "Logic-first problem solving",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 bg-gray-900 overflow-hidden"
    >
      {/* Background (theme unchanged) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900"></div>
        <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Centered container: rail column + content column side by side */}
      <div className="relative mx-auto max-w-6xl w-full py-32 md:py-24 z-10">
        <div className="flex gap-8 items-stretch">
          {/* Side rail (large screens): name at top, socials at bottom */}
          <aside className="hidden lg:flex w-16 shrink-0 flex-col items-center pt-2">
            <span
              className="text-xs text-gray-500 tracking-wide"
              style={{ writingMode: "vertical-rl" }}
            >
              Joseph Mwangaza
            </span>
            <div className="flex-1 w-px bg-gray-700 my-5"></div>
            <div className="flex flex-col items-center gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0 grid lg:grid-cols-[1fr_300px] gap-12 items-center">
            <div>
              <p className="text-base sm:text-lg text-gray-300 mb-3">
                Hi, I'm <span className="font-semibold text-white">Joseph Mwangaza</span> —
              </p>

              <h1 className="font-extrabold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
                <span className="block text-blue-400">Software</span>
                <span className="block text-white">Developer.</span>
              </h1>

              <p className="mt-6 text-gray-300 max-w-lg text-base lg:text-lg">
                I create reliable, fast, and maintainable solutions through logic,
                structure, and intent.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-full font-medium transition-colors"
                >
                  Get in touch <ArrowRight size={18} />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center border border-gray-600 text-white hover:border-blue-400 hover:text-blue-400 px-7 py-3 rounded-full font-medium transition-colors"
                >
                  View my work
                </a>
              </div>

              <div className="mt-10 flex gap-8">
                {stats.map((s, i) => (
                  <div key={s.label} className={i > 0 ? "pl-8 border-l border-gray-700" : ""}>
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <div className="text-sm text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Socials on small screens, since the rail is hidden there */}
              <div className="mt-8 flex gap-5 lg:hidden">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>

            {/* Tilted info card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative rotate-2 lg:rotate-3 hover:rotate-0 transition-transform duration-300 w-full max-w-xs">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/30 via-purple-500/20 to-teal-500/30 rounded-3xl blur-2xl"></div>
                <div className="relative rounded-2xl border border-gray-700 bg-gray-800/60 backdrop-blur p-6 shadow-2xl">
                  <div className="text-sm text-gray-400">Software Developer</div>
                  <h2 className="mt-2 text-2xl font-bold text-white leading-tight">
                    What I bring<span className="text-blue-400">.</span>
                  </h2>
                  <ul className="mt-5 space-y-3 text-sm">
                    {focus.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="my-5 h-px bg-gray-700"></div>
                  <a
                    href="/cv.pdf"
                    className="flex items-center justify-center gap-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
                  >
                    <Download size={16} /> Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white" aria-label="Scroll to about">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
}