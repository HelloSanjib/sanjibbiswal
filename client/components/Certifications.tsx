import { Award } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  description?: string;
}

const certifications: Certification[] = [
  {
    title: "Hack Odisha 5",
    issuer: "Hack Odisha",
    description: "Designed and implemented a Plant Disease Prediction System in a 3 member team",
  },
  {
    title: "Infosys Frontend Web Developer",
    issuer: "Infosys",
  },
  {
    title: "Infosys Networking",
    issuer: "Infosys",
  },
  {
    title: "Sheriyans Backend Developer",
    issuer: "Sheriyans",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 md:px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Certifications & Achievements
          </h2>
          <p className="text-foreground/60 text-lg">
            Recognition of skills and expertise from industry leaders
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="flex gap-4 items-start">
                {/* Icon */}
                <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Award size={24} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-foreground/70 text-sm font-medium mt-1">
                    {cert.issuer}
                  </p>
                  {cert.description && (
                    <p className="text-foreground/60 text-sm mt-2">
                      {cert.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              4+
            </div>
            <p className="text-foreground/60 text-sm">Certifications</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
              3
            </div>
            <p className="text-foreground/60 text-sm">Projects</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              9.46
            </div>
            <p className="text-foreground/60 text-sm">CGPA</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
              5+
            </div>
            <p className="text-foreground/60 text-sm">Years Exp</p>
          </div>
        </div>
      </div>
    </section>
  );
}
