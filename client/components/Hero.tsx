import { Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const handleDownloadCV = () => {
    const element = document.createElement("a");
    element.href = "/resume.pdf";
    element.download = "Sanjib_Biswal_Resume.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-6 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in">
        {/* Left side - Text content */}
        <div className="text-center md:text-left">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">Hi, I'm </span>
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Sanjib Biswal
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl">
            Computer Science student building modern full-stack applications with
            <span className="text-primary font-semibold"> MERN Stack </span>
            and exploring
            <span className="text-secondary font-semibold"> DevOps </span>
            technologies
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-foreground/60 mb-12 max-w-2xl leading-relaxed">
            I'm passionate about creating beautiful, performant web applications
            and solving complex problems with clean code. Currently focused on
            full-stack development with a strong foundation in cloud deployment
            and modern development practices.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-105 active:scale-95"
            >
              View My Work
            </button>
            <button
              onClick={handleDownloadCV}
              className="px-8 py-4 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-start gap-6">
            <a
              href="https://github.com/HelloSanjib"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-muted/50 hover:bg-primary/20 text-foreground hover:text-primary transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/sanjib-biswal-b67127329"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-muted/50 hover:bg-primary/20 text-foreground hover:text-primary transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sanjibbiswal689@gmail.com"
              className="p-3 rounded-lg bg-muted/50 hover:bg-primary/20 text-foreground hover:text-primary transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Right side - Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-2xl -z-10"></div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F726a516ecba646cbb3ecb58fab02302e%2Ff497adecfa034b668a691aea14a330f5?format=webp&width=800&height=1200"
              alt="Sanjib Biswal"
              className="w-64 md:w-72 lg:w-80 rounded-2xl shadow-2xl border border-primary/20 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
