interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "C"],
  },
  {
    title: "Web Development",
    skills: ["React", "Node.js", "Express.js", "TailwindCSS", "WebRTC"],
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB", "Firebase", "ConvexDB"],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "Docker",
      "CI/CD",
      "AWS",
      "GCP",
      "Kubernetes",
      "Jenkins",
      "Grafana",
      "Container Orchestration",
    ],
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Analytical Thinking", "Problem Solving"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            A diverse toolkit developed through hands-on experience and
            continuous learning
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-background border border-border hover:border-primary/50 text-foreground font-medium transition-all hover:shadow-lg hover:shadow-primary/10 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all">
            <div className="text-3xl font-bold text-primary mb-2">MERN</div>
            <p className="text-foreground/70">
              Full-stack expertise in building scalable applications
            </p>
          </div>
          <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all">
            <div className="text-3xl font-bold text-secondary mb-2">DevOps</div>
            <p className="text-foreground/70">
              Experience with containerization and cloud deployment
            </p>
          </div>
          <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all">
            <div className="text-3xl font-bold text-primary mb-2">AI/APIs</div>
            <p className="text-foreground/70">
              Integration of generative AI and third-party APIs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
