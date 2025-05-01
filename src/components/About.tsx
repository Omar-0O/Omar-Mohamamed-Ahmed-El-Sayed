
import { FileDown } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-secondary/50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center">About Me</h2>
          
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="mb-6">
              I'm a passionate web developer with a focus on creating exceptional digital experiences 
              through clean code and thoughtful design. My journey in tech started with a curiosity 
              about how websites work, which evolved into a deep love for frontend development and 
              application architecture.
            </p>
            
            <p className="mb-6">
              With expertise in React, Next.js, and modern JavaScript, I build applications that are 
              not just functional, but delightful to use. I'm particularly interested in AI integration 
              and creating tools that solve real-world problems.
            </p>
            
            <h3 className="text-xl font-bold mt-10 mb-4">Beyond the Code</h3>
            
            <ul className="space-y-2 mb-8">
              <li>🌟 Always learning new technologies and approaches</li>
              <li>📚 Avid reader of tech blogs and sci-fi novels</li>
              <li>🧩 Problem-solver who enjoys algorithmic challenges</li>
              <li>🌱 Committed to creating accessible and sustainable web experiences</li>
            </ul>
            
            <div className="mt-10 flex justify-center">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium shadow hover:bg-primary/90 transition-colors"
                aria-label="Download CV"
              >
                <FileDown className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
