
import { ArrowRight, Brain, Code, Zap } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Particle interface for TypeScript
interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

// Neural network node component
const NeuralNode = ({ x, y, delay = 0, isActive = false }: { x: string; y: string; delay?: number; isActive?: boolean }) => (
  <motion.div
    className={`absolute w-3 h-3 rounded-full ${isActive ? 'bg-primary' : 'bg-primary/30'} shadow-lg`}
    style={{ left: x, top: y }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: isActive ? [1, 1.2, 1] : 1, 
      opacity: isActive ? [0.3, 1, 0.3] : 0.3 
    }}
    transition={{ 
      delay, 
      duration: isActive ? 2 : 0.5,
      repeat: isActive ? Infinity : 0,
      ease: "easeInOut"
    }}
  />
);

// Connection line between nodes
const NeuralConnection = ({ 
  x1, y1, x2, y2, delay = 0, isActive = false 
}: { 
  x1: number; y1: number; x2: number; y2: number; delay?: number; isActive?: boolean 
}) => (
  <motion.line
    x1={x1} y1={y1} x2={x2} y2={y2}
    stroke="currentColor"
    strokeWidth="1"
    className={isActive ? 'text-primary' : 'text-primary/20'}
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ 
      pathLength: 1, 
      opacity: isActive ? [0.2, 0.8, 0.2] : 0.2 
    }}
    transition={{ 
      delay, 
      duration: isActive ? 2 : 1.5,
      repeat: isActive ? Infinity : 0,
      ease: "easeInOut"
    }}
  />
);

// Interactive particle system
const ParticleField = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Create particles
  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      const colors = ['rgb(59, 130, 246)', 'rgb(147, 51, 234)', 'rgb(236, 72, 153)'];
      
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      setParticles(newParticles);
    };

    createParticles();
    window.addEventListener('resize', createParticles);
    return () => window.removeEventListener('resize', createParticles);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const force = Math.max(0, 100 - distance) / 100;

          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;

          // Mouse attraction/repulsion
          if (distance < 100) {
            newX += (dx / distance) * force * 2;
            newY += (dy / distance) * force * 2;
          }

          // Boundary checks
          if (newX < 0 || newX > window.innerWidth) particle.vx *= -1;
          if (newY < 0 || newY > window.innerHeight) particle.vy *= -1;

          newX = Math.max(0, Math.min(window.innerWidth, newX));
          newY = Math.max(0, Math.min(window.innerHeight, newY));

          return {
            ...particle,
            x: newX,
            y: newY,
            opacity: Math.max(0.1, Math.min(0.6, particle.opacity + force * 0.3))
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 16);
    return () => clearInterval(interval);
  }, [mousePosition]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export function Hero() {
  const [activeNodes, setActiveNodes] = useState<number[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [0, window.innerHeight], [10, -10]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);
  
  const springConfig = { stiffness: 100, damping: 30 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Animate neural network nodes
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNodes = Array.from({ length: 3 }, () => Math.floor(Math.random() * 6));
      setActiveNodes(randomNodes);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
      onMouseMove={handleMouseMove}
    >
      {/* Particle Field Background */}
      <ParticleField />
      
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          {/* Neural network connections */}
          <NeuralConnection x1={100} y1={150} x2={200} y2={100} delay={0.5} isActive={activeNodes.includes(0)} />
          <NeuralConnection x1={100} y1={150} x2={200} y2={200} delay={0.7} isActive={activeNodes.includes(1)} />
          <NeuralConnection x1={200} y1={100} x2={350} y2={150} delay={0.9} isActive={activeNodes.includes(2)} />
          <NeuralConnection x1={200} y1={200} x2={350} y2={150} delay={1.1} isActive={activeNodes.includes(3)} />
          <NeuralConnection x1={350} y1={150} x2={500} y2={120} delay={1.3} isActive={activeNodes.includes(4)} />
          <NeuralConnection x1={350} y1={150} x2={500} y2={180} delay={1.5} isActive={activeNodes.includes(5)} />
          
          {/* Additional connections for complexity */}
          <NeuralConnection x1={600} y1={300} x2={700} y2={250} delay={0.3} />
          <NeuralConnection x1={600} y1={300} x2={700} y2={350} delay={0.6} />
          <NeuralConnection x1={150} y1={400} x2={250} y2={450} delay={0.8} />
          <NeuralConnection x1={250} y1={450} x2={400} y2={400} delay={1.0} />
        </svg>
      </div>

      {/* Neural Network Nodes */}
      <div className="absolute inset-0 opacity-20">
        <NeuralNode x="12%" y="25%" delay={0.2} isActive={activeNodes.includes(0)} />
        <NeuralNode x="25%" y="17%" delay={0.4} isActive={activeNodes.includes(1)} />
        <NeuralNode x="25%" y="33%" delay={0.6} isActive={activeNodes.includes(2)} />
        <NeuralNode x="44%" y="25%" delay={0.8} isActive={activeNodes.includes(3)} />
        <NeuralNode x="62%" y="20%" delay={1.0} isActive={activeNodes.includes(4)} />
        <NeuralNode x="62%" y="30%" delay={1.2} isActive={activeNodes.includes(5)} />
        
        {/* Additional decorative nodes */}
        <NeuralNode x="75%" y="50%" delay={0.3} />
        <NeuralNode x="87%" y="42%" delay={0.5} />
        <NeuralNode x="87%" y="58%" delay={0.7} />
        <NeuralNode x="19%" y="67%" delay={0.9} />
        <NeuralNode x="31%" y="75%" delay={1.1} />
        <NeuralNode x="50%" y="67%" delay={1.3} />
      </div>

      {/* Main Content */}
      <motion.div 
        className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center"
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 text-primary/30"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Brain size={24} />
          </motion.div>
          
          <motion.div
            className="absolute top-32 right-16 text-primary/30"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Code size={20} />
          </motion.div>
          
          <motion.div
            className="absolute bottom-40 left-20 text-primary/30"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Zap size={18} />
          </motion.div>
        </div>

        {/* Main Heading */}
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="block bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            Building Intelligent
          </motion.span>
          <motion.span 
            className="block text-foreground mt-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Web Experiences
          </motion.span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-4xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          A passionate student and web developer exploring the intersection of frontend craftsmanship and Artificial Intelligence. 
          I build responsive digital solutions while diving deep into the world of ML.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 w-full max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          <motion.a 
            href="#projects" 
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-semibold shadow-lg overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center">
              View My Work
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </span>
          </motion.a>
          
          <motion.a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-primary/30 bg-background/50 backdrop-blur-sm text-foreground font-semibold hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              borderColor: "hsl(var(--primary))"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Journey
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
