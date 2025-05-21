
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
          <div className="flex flex-col items-center">
            <a href="https://play.google.com/store/apps/details?id=com.internshala.app&hl=en_IN" target="_blank" rel="noopener noreferrer" className="h-32 bg-gray-100 rounded-full flex items-center justify-center p-6 hover:opacity-100 hover:shadow-md transition-all duration-300">
              <img src="https://yt3.googleusercontent.com/foVCTywFAyUZG05GpiGEAJhgOv7UFcgm-ymCTAxXg85tMvc506VvSUo4xsbsAavj1DrTbaqTW10=s900-c-k-c0x00ffffff-no-rj" alt="Internshala" className="h-20 w-20 object-contain" />
            </a>
            <p className="mt-2 font-medium text-gray-700">Internshala</p>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://media.licdn.com/dms/image/v2/C4E0BAQH0mT1MwzCLYA/company-logo_200_200/company-logo_200_200/0/1633340962822/prepbytes_logo?e=2147483647&v=beta&t=HPRYI8NbdMDUshECUNnwUKiaLtz-FLiFMk1pEf0d3C4" target="_blank" rel="noopener noreferrer" className="h-32 bg-gray-100 rounded-full flex items-center justify-center p-6 hover:opacity-100 hover:shadow-md transition-all duration-300">
              <img src="https://media.licdn.com/dms/image/v2/C4E0BAQH0mT1MwzCLYA/company-logo_200_200/company-logo_200_200/0/1633340962822/prepbytes_logo?e=2147483647&v=beta&t=HPRYI8NbdMDUshECUNnwUKiaLtz-FLiFMk1pEf0d3C4" alt="Prepbytes" className="h-20 w-20 object-contain rounded-full" />
            </a>
            <p className="mt-2 font-medium text-gray-700">Prepbytes</p>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="h-32 bg-gray-100 rounded-full flex items-center justify-center p-6 hover:opacity-100 hover:shadow-md transition-all duration-300">
              <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="h-20 w-20 object-contain" />
            </a>
            <p className="mt-2 font-medium text-gray-700">GitHub</p>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://codeclause.com" target="_blank" rel="noopener noreferrer" className="h-32 bg-gray-100 rounded-full flex items-center justify-center p-6 hover:opacity-100 hover:shadow-md transition-all duration-300">
              <img src="https://codeclause.com/assets/img/Main%20Logo.png" alt="Codeclause" className="h-20 w-20 object-contain" />
            </a>
            <p className="mt-2 font-medium text-gray-700">Codeclause</p>
          </div>

        
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
