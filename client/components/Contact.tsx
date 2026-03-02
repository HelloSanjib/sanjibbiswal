import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Feel free to reach out for opportunities, collaborations, or just to
            chat about tech and development
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <a
            href="mailto:sanjibbiswal689@gmail.com"
            className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
          >
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Email</h3>
                <p className="text-foreground/70 mt-1 group-hover:text-primary transition-colors">
                  sanjibbiswal689@gmail.com
                </p>
              </div>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+919937123862"
            className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
          >
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Phone</h3>
                <p className="text-foreground/70 mt-1 group-hover:text-secondary transition-colors">
                  +91 9937123862
                </p>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/sanjib-biswal-b67127329"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
          >
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Linkedin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">LinkedIn</h3>
                <p className="text-foreground/70 mt-1 group-hover:text-primary transition-colors">
                  @sanjib-biswal
                </p>
              </div>
            </div>
          </a>

          {/* Location */}
          <div className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Location</h3>
                <p className="text-foreground/70 mt-1">India</p>
              </div>
            </div>
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/HelloSanjib"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
          >
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                <Github size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">GitHub</h3>
                <p className="text-foreground/70 mt-1 group-hover:text-secondary transition-colors">
                  @HelloSanjib
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8">
          <p className="text-foreground/80 mb-4">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="mailto:sanjibbiswal689@gmail.com"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-105 active:scale-95"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
