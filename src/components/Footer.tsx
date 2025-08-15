
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/20 bg-gradient-to-t from-secondary/10 to-transparent">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <motion.p 
            className="text-muted-foreground text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            © {currentYear} Omar. All rights reserved.
          </motion.p>
          
          {/* Designed with love */}
          <motion.div 
            className="flex items-center space-x-2 text-muted-foreground"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-center md:text-right">Designed & Built with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll to top hint */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center space-x-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-primary"
            >
              ↑
            </motion.div>
            <span>Back to top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
