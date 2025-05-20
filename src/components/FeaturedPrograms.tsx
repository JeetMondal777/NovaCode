
import { motion } from "framer-motion";
import ProgramCard from "./ProgramCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedPrograms = () => {
  const featuredPrograms = [
    {
      title: "Web Development",
      description: "Learn front-end and back-end development with modern frameworks",
      features: [
        "HTML, CSS, JavaScript fundamentals",
        "React and Node.js development",
        "Real-world project portfolio",
      ],
      duration: "12 weeks intensive program",
      schedule: "Starting monthly",
      popular: true
    },
    {
      title: "Digital Marketing",
      description: "Master digital marketing strategies and campaigns",
      features: [
        "SEO & SEM optimization",
        "Social Media Marketing",
        "Content Creation strategies",
      ],
      duration: "10 weeks intensive program",
      schedule: "Starting monthly"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="bg-gradient-to-r from-novacode-darkpurple to-novacode-purple bg-clip-text text-transparent">
              Featured Programs
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular internship programs designed to help you gain valuable skills and experience
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
          {featuredPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProgramCard {...program} />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            asChild
            variant="outline" 
            size="lg" 
            className="bg-white text-novacode-purple hover:bg-gray-100 border-novacode-purple/30 hover:border-novacode-purple font-medium text-base shadow-lg"
          >
            <Link to="/program">View All Programs</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
