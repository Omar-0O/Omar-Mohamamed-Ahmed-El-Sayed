
import { useState, FormEvent, useRef } from "react";
import { Github, Linkedin, Mail, MessageSquare, Send } from "lucide-react";
import { motion, useInView } from "framer-motion";

export function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real implementation, you would send this data to a backend service
    // For now, we'll simulate a successful submission after a delay
    setTimeout(() => {
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been received."
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-20 md:py-32 bg-gradient-to-br from-background via-secondary/20 to-primary/5 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500 rounded-full blur-3xl"></div>
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
              Get In Touch
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </motion.p>
        </motion.div>

        {/* Main Glass Container */}
        <motion.div
          className="max-w-6xl mx-auto relative"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          {/* Glassmorphism Container */}
          <div className="relative bg-white/5 dark:bg-black/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 opacity-50 blur-xl"></div>
            
            {/* Content */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground/80">
                      Name
                    </label>
                    <motion.input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b-2 border-border/30 px-0 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-0 focus:outline-none transition-colors duration-300"
                      placeholder="Your full name"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground/80">
                      Email
                    </label>
                    <motion.input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b-2 border-border/30 px-0 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-0 focus:outline-none transition-colors duration-300"
                      placeholder="your.email@example.com"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  
                  {/* Subject Field */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground/80">
                      Subject
                    </label>
                    <motion.input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b-2 border-border/30 px-0 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-0 focus:outline-none transition-colors duration-300"
                      placeholder="What's this about?"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  
                  {/* Message Field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground/80">
                      Message
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b-2 border-border/30 px-0 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-0 focus:outline-none resize-none transition-colors duration-300"
                      placeholder="Tell me about your project or idea..."
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  
                  {/* Status Message */}
                  {submitStatus.message && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl backdrop-blur-sm ${
                        submitStatus.type === "success"
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}
                    >
                      {submitStatus.message}
                    </motion.div>
                  )}
                  
                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold rounded-xl shadow-lg disabled:opacity-50 overflow-hidden"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              </motion.div>
              
              {/* Contact Information */}
              <motion.div
                className="space-y-10"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                {/* Contact Info */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    Contact Information
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Feel free to reach out through any of these channels. I'm always excited to discuss new opportunities and interesting projects.
                  </p>
                  
                  <motion.div 
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Email</p>
                      <p className="text-foreground font-semibold">omar.nail774@gmail.com</p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Social Links */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    Find Me Online
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    <motion.a
                      href="https://github.com/Omar-0O"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 text-center"
                      whileHover={{ 
                        scale: 1.05,
                        y: -5,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="GitHub"
                    >
                      <Github className="h-8 w-8 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        GitHub
                      </p>
                    </motion.a>
                    
                    <motion.a
                      href="https://www.linkedin.com/in/omar-m-ahmed-b40025345/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 text-center"
                      whileHover={{ 
                        scale: 1.05,
                        y: -5,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-8 w-8 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        LinkedIn
                      </p>
                    </motion.a>
                    
                    <motion.a
                      href="https://t.me/omarmohamedQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 text-center"
                      whileHover={{ 
                        scale: 1.05,
                        y: -5,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Telegram"
                    >
                      <MessageSquare className="h-8 w-8 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        Telegram
                      </p>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
