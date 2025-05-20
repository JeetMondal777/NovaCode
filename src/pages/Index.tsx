
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import SuccessStories from "@/components/SuccessStories";
import WhyChooseSection from "@/components/WhyChooseSection";
import ApplySection from "@/components/ApplySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedPrograms />
        <SuccessStories />
        <WhyChooseSection />
        <ApplySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
