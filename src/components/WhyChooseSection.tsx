
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseSection = () => {
  const benefits = [
    {
      title: "Certified Training",
      description: "Our internship programs are designed by industry experts and provide certification that demonstrates skills and a valuable credential for your resume."
    },
    {
      title: "Real-World Projects",
      description: "Work on actual client projects and build a professional portfolio that demonstrates your skills and experience to future employers."
    },
    {
      title: "Career Support",
      description: "Access mentorship, resume reviews, interview preparation, and job placement services that help launch your career after the internship."
    }
  ];



  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-6"
        >
          Why Choose <span className="bg-gradient-to-r from-novacode-darkpurple to-novacode-purple bg-clip-text text-transparent">Novacode</span>?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-16"
        >
          We're committed to providing exceptional learning experiences that prepare you for success
        </motion.p>
        
        <div className="space-y-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="flex bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mr-6 text-novacode-purple">
                <CheckCircle size={28} className="mt-1" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        

      </div>
    </div>
  );
};

export default WhyChooseSection;
