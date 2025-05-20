
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-novacode-purple to-novacode-lightpurple min-h-[700px] text-center flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Abstract background elements */}
      <motion.div 
        animate={{ 
          x: [0, 10, 0], 
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/10 blur-3xl"
      ></motion.div>
      
      <motion.div 
        animate={{ 
          x: [0, -10, 0], 
          y: [0, 10, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{ 
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.5
        }}
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-white/5 blur-3xl"
      ></motion.div>
      
      <motion.div 
        animate={{ 
          x: [0, 15, 0], 
          y: [0, 8, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ 
          duration: 9,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1
        }}
        className="absolute top-40 right-20 w-40 h-40 rounded-full bg-white/10 blur-2xl"
      ></motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-28 h-28 mb-10 transform hover:scale-105 transition-transform duration-300"
      >
        <div className="w-full h-full bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center shadow-xl border border-white/20">
          <div className="text-white text-4xl font-bold">&lt;/&gt;</div>
        </div>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 max-w-4xl leading-tight drop-shadow-md"
      >
        Kickstart Your Career with Novacode
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-xl md:text-2xl text-white mb-6 drop-shadow-md"
      >
        100% Free Premium Internship Opportunities
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg mb-12 max-w-2xl border border-white/10"
      >
        <p className="text-lg md:text-xl text-white/95 italic">
          "Your journey to success begins with a single step. Take it with Novacode."
        </p>
        <div className="mt-2 text-white/80 text-sm">— Jane Doe, Program Director</div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-col md:flex-row gap-4 relative z-10"
      >
        <Button 
          asChild
          variant="outline" 
          size="lg" 
          className="bg-white text-novacode-purple hover:bg-gray-100 font-medium px-10 py-6 text-base shadow-xl hover:shadow-2xl transition-all duration-300 border-none"
        >
          <Link to="/program">Explore Programs</Link>
        </Button>
        
        <Button 
          asChild
          size="lg"
          className="bg-gradient-to-r from-indigo-700 to-novacode-darkpurple text-white hover:opacity-90 font-medium px-10 py-6 text-base shadow-xl hover:shadow-2xl transition-all duration-300 border-none"
        >
          <Link to="/apply">Apply Now</Link>
        </Button>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
