import { FileDown } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  FaBrain,
  FaRocket,
  FaPuzzlePiece,
  FaGlobeAmericas,
} from "react-icons/fa";

// Component for Principle Cards (Improved Design)
const PrincipleCard = ({
  icon: Icon,
  text,
  delay = 0,
}: {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="flex items-center space-x-4 p-4 rounded-xl border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group"
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
        {text}
      </p>
    </motion.div>
  );
};

// Component for Timeline Items
const TimelineItem = ({
  title,
  children,
  iconGradient,
  delay,
  isInView,
}: {
  title: string;
  children: React.ReactNode;
  iconGradient: string;
  delay: number;
  isInView: boolean;
}) => {
  return (
    <motion.div
      className="relative pl-12"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      <div className={`absolute top-1 left-0 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-background ${iconGradient}`}>
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="text-lg leading-relaxed text-muted-foreground">{children}</div>
    </motion.div>
  );
};

export function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });

  const principles = [
    { icon: FaBrain, text: "Always learning new technologies and approaches" },
    { icon: FaRocket, text: "Avid reader of tech blogs and sci-fi novels" },
    { icon: FaPuzzlePiece, text: "Problem-solver who enjoys algorithmic challenges" },
    { icon: FaGlobeAmericas, text: "Committed to creating accessible and sustainable web experiences" },
  ];

  return (
    <section ref={sectionRef} id="about" className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
          />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
            From curiosity to creation, exploring the intersection of code and intelligence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 max-w-7xl mx-auto items-start">
          <motion.div
            className="lg:col-span-2 flex flex-col items-center space-y-12"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative group">
              <motion.div
                className="absolute -inset-1.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
              />
              <motion.div
                className="relative p-1 bg-background rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Avatar className="w-48 h-48 md:w-56 md:h-56">
                  <AvatarImage src="/lovable-uploads/322551c7-4b75-4e12-91d7-9a717dc82a04.png" alt="Omar's profile" />
                  <AvatarFallback className="text-5xl font-bold bg-secondary">OM</AvatarFallback>
                </Avatar>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center shadow-lg border-2 border-background"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaBrain className="w-6 h-6 text-white" />
              </motion.div>
            </div>
            
            <div className="w-full">
              <h3 className="text-2xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">My Principles</span>
              </h3>
              <div className="space-y-4">
                {principles.map((p, i) => (
                  <PrincipleCard key={i} icon={p.icon} text={p.text} delay={0.6 + i * 0.15} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative border-l-2 border-primary/20 space-y-16 py-4">
              <TimelineItem title="The Foundation" iconGradient="bg-gradient-to-br from-primary to-purple-500" delay={0.6} isInView={isInView}>
                <p>
                  My journey in tech began with a deep curiosity about how websites work, which evolved into a passion for creating exceptional digital experiences through clean code and thoughtful design. I specialize in frontend development with expertise in React, Next.js, and modern JavaScript, building applications that are not just functional, but delightful to use.
                </p>
              </TimelineItem>

              <TimelineItem title="The Spark of AI" iconGradient="bg-gradient-to-br from-purple-500 to-pink-500" delay={0.8} isInView={isInView}>
                <p>
                  Beyond the frontend, I'm particularly interested in AI integration and creating tools that solve real-world problems. This is where my passion truly ignites, exploring the intersection of user experience and machine learning.
                </p>
              </TimelineItem>

              <motion.div
                className="relative pl-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
              >
                <motion.a
                  href="#"
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg transition-all duration-300 relative overflow-hidden transform hover:-translate-y-1"
                  whileHover={{ boxShadow: "0 10px 20px rgba(59, 130, 246, 0.25)" }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Download CV"
                >
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white/20 rounded-full group-hover:w-32 group-hover:h-32"></span>
                  <FileDown className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="relative">Download CV</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}