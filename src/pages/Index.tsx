import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import TechArchitecture from "@/components/TechArchitecture";
import FutureVision from "@/components/FutureVision";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <Features />
      <TechArchitecture />
      <FutureVision />
      <Footer />
    </div>
  );
};

export default Index;
