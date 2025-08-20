import { ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectProps = {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
};

const ProjectCard = ({
  title,
  description,
  imageUrl,
  tags,
  liveUrl,
  githubUrl,
  index,
}: ProjectProps & { index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      className="relative group h-96 rounded-2xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.9 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
        animate={{
          background: isHovered
            ? "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.4) 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Card Shadow */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)"
            : "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Action Buttons */}
      <motion.div
        className="absolute top-4 right-4 flex gap-2 z-20" // <-- ✨ تم إضافة التعديل هنا
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : -10,
        }}
        transition={{ duration: 0.3, delay: isHovered ? 0.1 : 0 }}
      >
        <motion.a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`View ${title} on GitHub`}
        >
          <FaGithub className="w-5 h-5 text-white" />
        </motion.a>

        {liveUrl && (
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`View ${title} live demo`}
          >
            <FaExternalLinkAlt className="w-4 h-4 text-white" />
          </motion.a>
        )}
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        {/* Tags */}
        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          transition={{ duration: 0.3, delay: isHovered ? 0.2 : 0 }}
        >
          {tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
              }}
              transition={{
                duration: 0.2,
                delay: isHovered ? 0.3 + tagIndex * 0.05 : 0,
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-white/90 text-sm leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          transition={{ duration: 0.3, delay: isHovered ? 0.15 : 0 }}
        >
          {description}
        </motion.p>

        {/* Title */}
        <motion.h3
          className="text-white text-2xl font-bold"
          animate={{
            y: isHovered ? -10 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {title}
        </motion.h3>
      </div>

      {/* Subtle border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl border border-transparent"
        animate={{
          borderColor: isHovered ? "rgba(59, 130, 246, 0.3)" : "transparent",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const projects: ProjectProps[] = [
    {
      title: "Quran App",
      description:
        "A modern web application to browse the Holy Quran with surah list, Ayah navigation, and responsive design.",
      imageUrl: "/HolyQuran.png",
      tags: ["Next.js", "React", "Quran.com API", "Tailwind CSS"],
      liveUrl: "https://quran-app-ocz7.vercel.app",
      githubUrl: "https://github.com/Omar-0O/quran-app",
    },
    {
      title: "TrackWise",
      description:
        "A platform offering personalized career and education insights for 9th-grade students using global assessment standards.",
      imageUrl:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQzNDUwNTB8&ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS"],
      githubUrl: "https://github.com/Omar-0O/trackwise-pathways",
    },
    {
      title: "Limitless Hydrate",
      description:
        "High-performance product website for hydration solutions with a custom CMS backend.",
      imageUrl: "/Hydrate.png",
      tags: ["React", "Next.js", "Strapi CMS", "Styled Components"],
      githubUrl: "https://github.com/Omar-0O/limitless-hydrate",
    },
    {
      title: "Evalyzer",
      description:
        "AI-powered skin and hair analysis tool providing personalized beauty recommendations.",
      imageUrl: "/Evalyzer.png",
      tags: ["React Native", "Python", "TensorFlow", "Flask", "Strapi"],
      githubUrl: "https://github.com/Omar-0O/Evalyzer",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-20 md:py-32 bg-gradient-to-br from-background via-secondary/20 to-primary/5 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
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
              Featured Projects
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Here are some of my recent projects that showcase my technical
            skills and problem-solving approach.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ExternalLink className="h-5 w-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}