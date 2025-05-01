
export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS", "JavaScript"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Strapi CMS"]
    },
    {
      category: "AI & ML",
      skills: ["TensorFlow", "Python", "Image Recognition", "Data Analysis"]
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "Netlify"]
    },
  ];

  return (
    <section id="skills" className="section-container bg-secondary/50">
      <h2 className="section-title text-center">My Skills</h2>
      <p className="section-subtitle text-center mx-auto">
        The technologies, tools, and approaches I use to bring ideas to life.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {skillCategories.map((category) => (
          <div key={category.category} className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4 px-4 py-2 bg-primary/10 border-l-4 border-primary rounded">
              {category.category}
            </h3>
            
            <div className="flex flex-wrap gap-3 mt-5">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-card rounded-md shadow-sm border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
