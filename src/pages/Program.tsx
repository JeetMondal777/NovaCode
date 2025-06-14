import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/ProgramCard";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Program = () => {
  const programs = [
    {
      title: "Web Development",
      description: "Learn front-end and back-end development with modern frameworks",
      features: [
        "HTML, CSS, JavaScript fundamentals",
        "React and Node.js development",
        "Real-world project portfolio",
        "Industry mentorship"
      ],
      duration: "8 weeks intensive program",
      schedule: "Starting monthly",
      spots: "Limited to 20 participants",
      popular: true
    },
    {
      title: "Digital Marketing",
      description: "Master digital marketing strategies and campaigns",
      features: [
        "SEO & SEM optimization",
        "Social Media Marketing",
        "Content Creation strategies",
        "Analytics and reporting"
      ],
      duration: "4 weeks intensive program",
      schedule: "Starting monthly",
      spots: "Limited to 15 participants"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-br from-novacode-purple/10 to-novacode-lightpurple/10 py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h1 className="text-4xl font-bold font-heading mb-4 bg-gradient-to-r from-novacode-darkpurple to-novacode-purple bg-clip-text text-transparent">
                Our Internship Programs
              </h1>
              <p className="text-lg text-gray-700">
                Discover our range of internship programs designed to launch your career. 
                All our programs are 100% free and focused on providing real-world experience.
              </p>
            </motion.div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProgramCard {...program} />
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ScrollLink to="apply-section" smooth={true} duration={800}>
                <Button 
                  className="bg-gradient-to-r from-novacode-purple to-novacode-darkpurple hover:opacity-90 transition-opacity shadow-lg px-6 py-6 text-base"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Apply Now
                </Button>
              </ScrollLink>
            </motion.div>
          </div>
        </div>
        
        <section className="py-16 container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-heading mb-6">How Our Programs Work</h2>
            <p className="text-lg text-gray-600 mb-12">
              Our internship programs are designed to provide you with the skills and experience you need to succeed in your career.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-novacode-purple to-novacode-lightpurple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold mb-2">Apply</h3>
                <p className="text-gray-600 text-sm">Submit your application and tell us why you're interested.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-novacode-purple to-novacode-lightpurple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold mb-2">Learn</h3>
                <p className="text-gray-600 text-sm">Participate in hands-on workshops and real-world projects.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-novacode-purple to-novacode-lightpurple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold mb-2">Launch</h3>
                <p className="text-gray-600 text-sm">Graduate with a portfolio and connections to kickstart your career.</p>
              </div>
            </div>
          </div>
        </section>
        
        <div id="apply-section" className="pt-10">
          <div className="bg-gradient-to-br from-gray-50 to-white py-20 relative overflow-hidden">
            <div className="absolute top-0 w-full h-full">
              <div className="absolute top-20 right-20 w-64 h-64 bg-novacode-lightpurple/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-40 left-20 w-80 h-80 bg-novacode-purple/5 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-novacode-purple to-novacode-lightpurple flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Sparkles className="text-white w-8 h-8" />
                </div>
                
                <h2 className="text-2xl font-heading font-bold text-center mb-3">Apply Today</h2>
                
                <p className="text-center text-gray-600 mb-8">
                  Take the first step towards your new career
                </p>
                
                <Button 
                  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScb0ltqNx3bhi-7wYfnxIw8Na5qdlqoMXpiGxG0Nk-gm1t82g/viewform", "_blank")} 
                  className="w-full bg-gradient-to-r from-novacode-purple to-novacode-darkpurple hover:opacity-90 transition-opacity py-6 shadow-lg text-base"
                >
                  Complete Application Form
                </Button>
                
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Have questions about the application?
                  </p>
                  <a href="mailto:internship@novacode.live" className="text-novacode-purple hover:underline font-medium">
                    internship@novacode.live
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Program;
