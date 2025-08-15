
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer, 
  SiHtml5, 
  SiJavascript, 
  SiNodedotjs, 
  SiExpress, 
  SiGraphql, 
  SiStrapi, 
  SiTensorflow, 
  SiPython, 
  SiGit, 
  SiGithub, 
  SiVercel, 
  SiNetlify, 
  SiFigma, 

  SiPostgresql 
} from 'react-icons/si';
import { FaRobot, FaBrain, FaServer, FaChartLine, FaCode } from 'react-icons/fa';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  gradient: string;
}

// Skill card component with hover animations
const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <motion.div
      className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 flex flex-col items-center justify-center min-h-[100px] cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        ease: "easeOut" 
      }}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Gradient background that appears on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      
      {/* Subtle border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl border border-transparent"
        animate={{
          borderColor: "transparent"
        }}
        whileHover={{
          borderColor: "rgba(59, 130, 246, 0.3)"
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Icon */}
      <motion.div
        className="text-3xl mb-2 text-foreground/80 group-hover:text-primary transition-colors duration-300"
        whileHover={{ 
          rotate: [0, -10, 10, 0],
          transition: { duration: 0.5 }
        }}
      >
        {skill.icon}
      </motion.div>
      
      {/* Skill name */}
      <motion.span
        className="text-sm font-medium text-center text-foreground/90 group-hover:text-foreground transition-colors duration-300"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        {skill.name}
      </motion.span>

      {/* Floating particles effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

// Category container component
const CategoryContainer = ({ 
  category, 
  index 
}: { 
  category: SkillCategory; 
  index: number 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: "easeOut" 
      }}
    >
      {/* Category header */}
      <motion.div
        className={`relative mb-6 p-4 rounded-xl bg-gradient-to-r ${category.gradient} backdrop-blur-sm`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="text-xl font-bold text-white text-center">
          {category.title}
        </h3>
        
        {/* Decorative elements */}
        <div className="absolute top-2 left-2 w-2 h-2 bg-white/30 rounded-full" />
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-white/20 rounded-full" />
      </motion.div>
      
      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillCard 
            key={skill.name} 
            skill={skill} 
            index={skillIndex}
          />
        ))}
      </div>
    </motion.div>
  );
};

export function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Framer Motion", icon: <SiFramer /> },
        { name: "HTML/CSS", icon: <SiHtml5 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ]
    },
    {
      title: "Backend",
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "REST APIs", icon: <FaServer /> },
        { name: "GraphQL", icon: <SiGraphql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Strapi CMS", icon: <SiStrapi /> },
      ]
    },
    {
      title: "AI & ML",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Python", icon: <SiPython /> },
        { name: "Image Recognition", icon: <FaRobot /> },
        { name: "Data Analysis", icon: <FaChartLine /> },
      ]
    },
    {
      title: "Tools & DevOps",
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "VS Code", icon: <FaCode /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Netlify", icon: <SiNetlify /> },
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative py-20 md:py-32 bg-gradient-to-br from-secondary/30 via-background to-primary/5 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
              My Skills
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The technologies, tools, and approaches I use to bring ideas to life.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <CategoryContainer
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-6 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full"
            animate={{
              y: [0, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaBrain className="text-primary w-5 h-5" />
            <span className="text-muted-foreground font-medium">Always learning & evolving</span>
            <FaBrain className="text-primary w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
