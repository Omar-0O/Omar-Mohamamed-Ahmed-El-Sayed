
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-16">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
          Hi, I'm Omar
          <span className="block text-primary mt-2">
            A Web Developer Crafting Digital Experiences
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mb-10">
          I specialize in frontend development, software architecture, and AI-driven solutions. 
          Turning complex problems into elegant, user-friendly experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium shadow hover:bg-primary/90 transition-colors"
          >
            View My Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
