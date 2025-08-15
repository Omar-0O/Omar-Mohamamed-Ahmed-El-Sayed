
import { FileDown } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  FaBrain, 
  FaRocket, 
  FaPuzzlePiece, 
  FaGlobeAmericas,
  FaStar 
} from "react-icons/fa";

// Animated list item component
const AnimatedListItem = ({ 
  icon: Icon, 
  text, 
  delay = 0 
}: { 
  icon: React.ComponentType<{ className?: string }>; 
  text: string; 
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="flex items-start space-x-4 group"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <motion.div
        className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-purple-500/30 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <Icon className="w-5 h-5 text-primary group-hover:text-purple-500 transition-colors duration-300" />
      </motion.div>
      <motion.p 
        className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export function About() {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const isLeftInView = useInView(leftColumnRef, { once: true, margin: "-100px" });
  const isRightInView = useInView(rightColumnRef, { once: true, margin: "-100px" });

  const principles = [
    {
      icon: FaBrain,
      text: "Always learning new technologies and approaches"
    },
    {
      icon: FaRocket,
      text: "Avid reader of tech blogs and sci-fi novels"
    },
    {
      icon: FaPuzzlePiece,
      text: "Problem-solver who enjoys algorithmic challenges"
    },
    {
      icon: FaGlobeAmericas,
      text: "Committed to creating accessible and sustainable web experiences"
    }
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 bg-gradient-to-br from-secondary/30 via-background to-primary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-4"
            animate={{
              rotate: [0, 1, -1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaStar className="text-primary w-6 h-6" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              My Journey
            </h2>
            <FaStar className="text-primary w-6 h-6" />
          </motion.div>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From curiosity to creation, exploring the intersection of code and intelligence
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 max-w-7xl mx-auto">
          {/* Left Column - The Narrative */}
          <motion.div
            ref={leftColumnRef}
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-2 h-8 bg-gradient-to-b from-primary to-purple-500 rounded-full mr-4"></span>
                  The Foundation
                </h3>
                <motion.p 
                  className="text-lg leading-relaxed text-foreground/90 font-medium"
                  initial={{ opacity: 0.8 }}
                  animate={isLeftInView ? { opacity: 1 } : { opacity: 0.8 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  My journey in tech began with a deep curiosity about how websites work, which evolved into a passion for creating exceptional digital experiences through clean code and thoughtful design. I specialize in frontend development with expertise in React, Next.js, and modern JavaScript, building applications that are not just functional, but delightful to use.
                </motion.p>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-4"></span>
                  The Spark of AI
                </h3>
                <motion.p 
                  className="text-lg leading-relaxed text-muted-foreground"
                  initial={{ opacity: 0.8 }}
                  animate={isLeftInView ? { opacity: 1 } : { opacity: 0.8 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Beyond the frontend, I'm particularly interested in AI integration and creating tools that solve real-world problems. This is where my passion truly ignites, exploring the intersection of user experience and machine learning.
                </motion.p>
              </motion.div>
            </div>

            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.a 
                href="#" 
                className="group inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Download CV"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <FileDown className="mr-3 h-5 w-5 relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Download CV</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Visuals */}
          <motion.div
            ref={rightColumnRef}
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Enhanced Profile Picture */}
            <motion.div 
              className="flex justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isRightInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <Avatar className="w-48 h-48 border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300 relative z-10">
                  <AvatarImage 
                    src="/lovable-uploads/322551c7-4b75-4e12-91d7-9a717dc82a04.png" 
                    alt="Omar's profile" 
                    className="object-cover"
                  />
                  <AvatarFallback className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 text-white">
                    OM
                  </AvatarFallback>
                </Avatar>
                <motion.div
                  className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaBrain className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Visual Principles List */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isRightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  My Principles
                </span>
              </h3>
              
              <div className="space-y-6">
                {principles.map((principle, index) => (
                  <AnimatedListItem
                    key={index}
                    icon={principle.icon}
                    text={principle.text}
                    delay={0.6 + index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
