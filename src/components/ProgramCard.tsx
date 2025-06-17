import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, Users, BookOpen, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export interface ProgramProps {
  title: string;
  description: string;
  features: string[];
  duration: string;
  schedule: string;
  spots?: string;
  popular?: boolean;
}

const ProgramCard = ({
  title,
  description,
  features,
  duration,
  schedule,
  spots,
  popular = false,
}: ProgramProps) => {
  const navigate = useNavigate();
  const handleLearnMore = () => {
    navigate("/apply");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="flex flex-col overflow-hidden border-none h-full shadow-lg bg-white relative">
        {popular && (
          <div className="absolute top-0 right-0">
            <div className="bg-gradient-to-r from-novacode-purple to-novacode-darkpurple text-white py-1 px-4 text-sm font-bold transform rotate-45 translate-x-12 translate-y-7 shadow-md">
              Popular
            </div>
          </div>
        )}

        <CardHeader className="bg-gradient-to-r from-novacode-purple/10 to-novacode-lightpurple/10 pb-4">
          <div className="space-y-2">
            {popular && (
              <Badge className="bg-novacode-purple text-white border-none mb-1">
                Most Popular
              </Badge>
            )}
            <h3 className="font-heading text-2xl font-bold text-gray-800">
              {title}
            </h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </CardHeader>

        <CardContent className="pt-6 flex-grow">
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-novacode-purple mr-2 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-3 text-sm border-t pt-4 mt-6">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-2 text-novacode-purple" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <BookOpen className="w-4 h-4 mr-2 text-novacode-purple" />
              <span>{schedule}</span>
            </div>
            {spots && (
              <div className="flex items-center text-gray-600">
                <Users className="w-4 h-4 mr-2 text-novacode-purple" />
                <span>{spots}</span>
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="border-t pt-4 pb-5 bg-gray-50">
          <Button
            onClick={handleLearnMore}
            className="w-full py-6 bg-gradient-to-r from-novacode-purple to-novacode-darkpurple hover:opacity-90 transition-opacity"
          >
            Apply Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProgramCard;
