
import { Avatar } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  year: string;
  quote: string;
  avatarSrc?: string;
  delay: number;
}

const Testimonial = ({ name, role, year, quote, avatarSrc, delay }: TestimonialProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
  >
    <Quote className="text-novacode-lightpurple/20 h-10 w-10 mb-2" />
    
    <p className="text-gray-700 italic relative z-10 mb-6">"{quote}"</p>
    
    <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
      <Avatar className="h-14 w-14 bg-gradient-to-br from-novacode-purple to-novacode-lightpurple text-white ring-2 ring-white shadow-md">
        <span className="text-xl font-medium">
          {name.charAt(0)}
        </span>
      </Avatar>
      <div className="ml-4">
        <h4 className="font-heading font-semibold text-gray-800">{name}</h4>
        <p className="text-gray-600 text-sm">{role}, {year}</p>
      </div>
    </div>
  </motion.div>
);

const SuccessStories = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Intern",
      year: "2022",
      quote: "The Novacode marketing internship was an amazing opportunity that helped me land a full-time position at a top agency.",
      avatarSrc: ""
    },
    {
      name: "David Chen",
      role: "Web Dev Intern",
      year: "2023",
      quote: "I was a Novacode intern last year and went from knowing basic HTML/CSS to building full-stack applications, and now I work at a tech startup.",
      avatarSrc: ""
    },
    {
      name: "Aisha Patel",
      role: "Marketing Intern",
      year: "2023",
      quote: "The hands-on experience I gained at Novacode was invaluable. I learned skills that college classes couldn't teach me.",
      avatarSrc: ""
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-4"
        >
          <span className="bg-gradient-to-r from-novacode-darkpurple to-novacode-purple bg-clip-text text-transparent">
            Success Stories
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Hear from our past interns who have transformed their careers through our program
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              year={testimonial.year}
              quote={testimonial.quote}
              avatarSrc={testimonial.avatarSrc}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
