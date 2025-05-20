
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Program from "./pages/Program";
import Partners from "./pages/Partners";
import Connect from "./pages/Connect";
import Info from "./pages/Info";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";
import TermsAndConditions from "./pages/TermsAndConditions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/program" element={<Program />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/info" element={<Info />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/termsandconditions" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
