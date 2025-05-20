
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Partners = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-8">Our Partners</h1>
        <p className="text-xl text-gray-700 mb-12">
          We collaborate with leading companies to provide the best opportunities for our interns.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center p-6">
            <div className="text-2xl font-bold text-gray-400">Partner 1</div>
          </div>
          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center p-6">
            <div className="text-2xl font-bold text-gray-400">Partner 2</div>
          </div>
          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center p-6">
            <div className="text-2xl font-bold text-gray-400">Partner 3</div>
          </div>
          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center p-6">
            <div className="text-2xl font-bold text-gray-400">Partner 4</div>
          </div>
          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center p-6">
            <div className="text-2xl font-bold text-gray-400">Partner 5</div>
          </div>
          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center p-6">
            <div className="text-2xl font-bold text-gray-400">Partner 6</div>
          </div>
          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center p-6">
            <div className="text-2xl font-bold text-gray-400">Partner 7</div>
          </div>
          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center p-6">
            <div className="text-2xl font-bold text-gray-400">Partner 8</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
