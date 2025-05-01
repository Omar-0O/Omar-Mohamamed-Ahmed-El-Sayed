
import { ExternalLink, Github } from "lucide-react";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl: string;
};

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  demoUrl, 
  githubUrl 
}: ProjectProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md card-hover">
      <div className="h-48 bg-muted overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline"
            >
              <ExternalLink className="mr-1 h-4 w-4" />
              Live Demo
            </a>
          )}
          
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline"
          >
            <Github className="mr-1 h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export function Projects() {
  const projects: ProjectProps[] = [
    {
      title: "Quran App",
      description: "A modern web application to browse the Holy Quran with surah list, Ayah navigation, and responsive design.",
      image: "https://images.unsplash.com/photo-1609599006353-e629a7e1d3a1?ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQzNDUwNTB8&ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Next.js", "React", "Quran.com API", "Tailwind CSS"],
      demoUrl: "https://quran-app-ocz7.vercel.app",
      githubUrl: "https://github.com/yourusername/quran-app",
    },
    {
      title: "TrackWise",
      description: "A platform offering personalized career and education insights for 9th-grade students using global assessment standards.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQzNDUwNTB8&ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/trackwise-profile-pathways",
    },
    {
      title: "Limitless Hydrate",
      description: "High-performance product website for hydration solutions with a custom CMS backend.",
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQzNDUwNTB8&ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      technologies: ["React", "Next.js", "Strapi CMS", "Styled Components"],
      githubUrl: "https://github.com/yourusername/limitless-hydrate",
    },
    {
      title: "Evalyzer",
      description: "AI-powered skin and hair analysis tool providing personalized beauty recommendations.",
      image: "https://images.unsplash.com/photo-1522125123931-9304d91a42ee?ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQzNDUwNTB8&ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React Native", "Python", "TensorFlow", "Flask", "Strapi"],
      githubUrl: "https://github.com/yourusername/Evalyzer",
    },
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title text-center">Featured Projects</h2>
      <p className="section-subtitle text-center mx-auto">
        Here are some of my recent projects that showcase my technical skills and problem-solving approach.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
