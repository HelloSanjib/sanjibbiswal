interface EducationItem {
  degree: string;
  school: string;
  period: string;
  score: string;
  details?: string;
}

const educationItems: EducationItem[] = [
  {
    degree: "B.Tech - Computer Science & Engineering",
    school: "Siksha 'O' Anusandhan University",
    period: "Sep 2023 - June 2027",
    score: "CGPA: 9.46/10.0",
    details: "Pursuing degree with focus on full-stack development and DevOps",
  },
  {
    degree: "Class 12",
    school: "UPENDRA NATH H S SCHOOL",
    period: "2021 - 2023",
    score: "Grade: 7.9/10",
  },
  {
    degree: "Class 10",
    school: "Saraswati Sishu Vidyamandir",
    period: "2012 - 2021",
    score: "Grade: 9.15/10",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Education
          </h2>
          <p className="text-foreground/60 text-lg">
            Academic background and continuous learning journey
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-12 pb-8 border-l-2 border-primary/30 last:pb-0 last:border-l-transparent"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3.5 md:-left-4 top-2 w-7 h-7 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>

              {/* Content */}
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {item.degree}
                    </h3>
                    <p className="text-foreground/70 font-medium mt-1">
                      {item.school}
                    </p>
                  </div>
                  <div className="mt-3 md:mt-0 md:text-right">
                    <p className="text-primary font-semibold">{item.period}</p>
                    <p className="text-secondary font-semibold text-sm">
                      {item.score}
                    </p>
                  </div>
                </div>
                {item.details && (
                  <p className="text-foreground/60 mt-3">{item.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
