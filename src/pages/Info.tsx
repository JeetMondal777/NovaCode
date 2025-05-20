
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Info = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-8">Information</h1>
        <p className="text-xl text-gray-700 mb-12">
          Everything you need to know about our internship programs.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="mb-12">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                How do the internships work?
              </AccordionTrigger>
              <AccordionContent>
                Our internships are 100% remote and last between 10-12 weeks, depending on the program. 
                You'll work on real projects, receive training from industry experts, and build a portfolio 
                that showcases your skills. The internships are designed to be part-time, requiring about 
                15-20 hours per week.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                Are the internships really free?
              </AccordionTrigger>
              <AccordionContent>
                Yes, our internship programs are 100% free. We partner with companies that sponsor our 
                programs, allowing us to offer these valuable opportunities at no cost to participants.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                What are the eligibility requirements?
              </AccordionTrigger>
              <AccordionContent>
                Our internships are open to students and recent graduates. Some basic knowledge in your 
                chosen field is helpful but not always required. Each program has specific requirements 
                that are outlined in the application process. We welcome applicants from all backgrounds 
                and locations since our internships are remote.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                Do I get a certificate after completion?
              </AccordionTrigger>
              <AccordionContent>
                Yes, all interns who successfully complete the program receive an official certificate 
                that can be added to your resume and LinkedIn profile. Additionally, you'll have tangible 
                work experience and portfolio pieces to showcase your new skills to potential employers.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                How do I apply?
              </AccordionTrigger>
              <AccordionContent>
                To apply, click on the "Apply Now" button on our website. You'll fill out a brief application 
                form detailing your background, interests, and the program you're interested in. Selected 
                candidates will be invited for a short interview before final selections are made.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Ready to start your journey?</h2>
            <p className="text-gray-600 mb-6">
              Apply now to secure your spot in our next internship cohort. Spaces fill up quickly!
            </p>
            <div className="flex justify-center">
              <a 
                href="/apply" 
                className="bg-novacode-purple hover:bg-novacode-darkpurple text-white px-8 py-3 rounded-md font-medium"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Info;
