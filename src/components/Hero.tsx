import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Zap } from "lucide-react";
import heroImage from "@/assets/hero-ai-brain.jpg";
import logoImage from "/logo1.png";
import SlidePanel from "./slide";

const Hero = () => {
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero" id="hero-section">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 text-sm">
              {/* <Brain className="w-4 h-4 text-primary" /> */}
              <img src={logoImage} alt="logo" className="h-5 w-5" />
              <span className="text-muted-foreground">Powered by Advanced AI</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                MVAI
              </span>
              <br />
              <span className="text-foreground">Strategic AI</span>
              <br />
              <span className="text-muted-foreground text-3xl lg:text-4xl">for Marketers</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Transform marketing complexities into laser-focused strategies. MVAI deciphers the data deluge and delivers actionable insights that drive real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* <Button variant="outline" size="lg">
                Watch Demo
              </Button> */}
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">Lightning Fast Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={logoImage} alt="logo" className="h-5 w-5" />
                {/* <Brain className="w-5 h-5 text-primary" /> */}
                <span className="text-sm text-muted-foreground">AI-Powered Strategies</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative lg:block hidden animate-fade-in">
            <div className="relative">
              {/* <img
                src={heroImage}
                alt="AI Brain Network Visualization"
                className="w-full h-auto rounded-2xl shadow-elegant"
              /> */}
              <SlidePanel />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-8 -left-8 bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 animate-float">
              <div className="text-2xl font-bold text-primary">10x</div>
              <div className="text-sm text-muted-foreground">Faster Analysis</div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 animate-float animation-delay-500">
              <div className="text-2xl font-bold text-accent">95%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;