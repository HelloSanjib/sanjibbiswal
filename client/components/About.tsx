export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Me
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a passionate computer science student with hands-on experience
              building full-stack applications using the MERN stack. Currently
              pursuing my B.Tech in Computer Science & Engineering, I combine
              academic knowledge with practical project experience.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              My journey has taken me through various technologies and
              methodologies. I'm particularly skilled in building scalable web
              applications and have a growing interest in DevOps practices and
              cloud deployment. I believe in writing clean, maintainable code
              and continuously learning new technologies.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Beyond coding, I'm a strong problem-solver with excellent
              communication skills. I love collaborating with teams, sharing
              knowledge, and working on projects that make a real impact. Every
              challenge is an opportunity to learn and grow.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-lg bg-background border border-border">
                <div className="text-2xl font-bold text-primary mb-1">9.46</div>
                <p className="text-sm text-foreground/60">Current CGPA</p>
              </div>
              <div className="p-4 rounded-lg bg-background border border-border">
                <div className="text-2xl font-bold text-secondary mb-1">3</div>
                <p className="text-sm text-foreground/60">Projects Built</p>
              </div>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Focus Areas
            </h3>

            <div className="space-y-4">
              <div className="group">
                <h4 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                  Full-Stack Development
                </h4>
                <p className="text-foreground/70">
                  Building complete web applications from frontend to backend
                  using React, Node.js, and Express
                </p>
              </div>

              <div className="group">
                <h4 className="text-lg font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">
                  DevOps & Cloud
                </h4>
                <p className="text-foreground/70">
                  Experience with Docker, Kubernetes, CI/CD pipelines, and
                  deployment on AWS and GCP
                </p>
              </div>

              <div className="group">
                <h4 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                  AI Integration
                </h4>
                <p className="text-foreground/70">
                  Integrating generative AI APIs and building intelligent
                  features into applications
                </p>
              </div>

              <div className="group">
                <h4 className="text-lg font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">
                  Problem Solving
                </h4>
                <p className="text-foreground/70">
                  Analytical approach to breaking down complex problems and
                  implementing scalable solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
