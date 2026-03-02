import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  codeUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "CareerSathi AI",
    description:
      "An AI-driven mock interview platform built with MERN stack. Features dynamic questioning powered by generative AI, resume parsing with PDFjs, and Razorpay integration for premium subscriptions. Includes an interactive reporting dashboard with Recharts and automated downloadable interview evaluations.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Gemini API",
      "Razorpay",
    ],
    codeUrl: "https://github.com/HelloSanjib/CareerSathi-AI/tree/main/code.md",
    liveUrl: "https://careersathi-ai.vercel.app/",
  },
  {
    title: "Ship UI",
    description:
      "A React/Node.js AI component generator that integrates the Gemini API to build UIs across 8 different frameworks. Features an in-browser IDE with Monaco Editor, live iframes, and one-click code export. Includes a secure Express/MongoDB backend with Google OAuth and guest storage history.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini API",
      "Monaco Editor",
      "Google OAuth",
    ],
    codeUrl: "https://github.com/HelloSanjib/ship-ui-frontend/tree/main/code.md",
    liveUrl: "https://ship-ui.vercel.app/",
  },
  {
    title: "Calculator - Client-Server Architecture",
    description:
      "A terminal-based calculator demonstrating client-server communication and networking concepts. Implemented robust multithreading to manage end-to-end client connections and achieved up to 80% performance improvement with fast server response times.",
    technologies: ["Java", "Networking", "Multithreading", "Client-Server"],
    codeUrl: "https://github.com/HelloSanjib/server-client-architecture.git",
    liveUrl: "https://github.com/HelloSanjib/server-client-architecture/tree/main/live.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Showcasing some of my recent work building full-stack applications
            and solving complex problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2 flex flex-col"
            >
              {/* Project Header */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/70 text-sm mb-4 flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-border/50">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-muted/50 text-foreground hover:bg-primary/20 hover:text-primary transition-all"
                >
                  <Github size={18} />
                  <span className="text-sm font-medium">Code</span>
                </a>
                {project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-all"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Live</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
