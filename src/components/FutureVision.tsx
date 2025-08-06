import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Users, Zap, Globe, ArrowRight } from "lucide-react";

const futureFeatures = [
  {
    icon: Users,
    title: "Hyper-Personalization",
    description: "AI-driven individual customer experiences with precision targeting and custom messaging for every interaction."
  },
  {
    icon: Zap,
    title: "Real-Time Adaptation",
    description: "Instantaneous strategy adjustments based on live market data and consumer behavior changes."
  },
  {
    icon: Globe,
    title: "Global Market Intelligence",
    description: "Cross-cultural insights and international market penetration strategies powered by worldwide data analysis."
  },
  {
    icon: Sparkles,
    title: "Predictive Innovation",
    description: "Anticipate market trends and consumer needs before they emerge, staying ahead of the competition."
  }
];

const FutureVision = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 text-sm mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-muted-foreground">The Future is Here</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              The Future of Marketing
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            As AI continues to evolve, the future of marketing will be shaped by closer collaboration between humans and machines. 
            MVAI is committed to staying at the forefront of innovation, delivering the next generation of marketing intelligence.
          </p>
        </div>

        {/* Future Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {futureFeatures.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] bg-card/30 backdrop-blur-sm border-border/30 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-accent-glow animate-pulse-glow">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Innovation Promise */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-3xl lg:text-4xl font-bold">
              Innovation Never <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Stops</span>
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              The field of AI is constantly evolving, and MVAI is committed to staying at the forefront of innovation. 
              Our research and development team continuously integrates the latest advancements in machine learning, 
              natural language processing, and predictive analytics.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Continuous model improvements and feature updates</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Integration of emerging AI technologies</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Partnership with leading research institutions</span>
              </div>
            </div>
            
            <Button variant="outline" size="lg">
              Join Our Innovation Journey
            </Button>
          </div>
          
          {/* Right Content - Stats */}
          <div className="space-y-6 animate-fade-in">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">2024+</div>
                <div className="text-sm text-muted-foreground">Continuous Innovation</div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-accent">AI-First</div>
                <div className="text-sm text-muted-foreground">Marketing Evolution</div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-secondary/20 to-transparent border-secondary/20">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-foreground">∞</div>
                <div className="text-sm text-muted-foreground">Possibilities Ahead</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 animate-slide-up">
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-card to-card/50 border-border/50 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold">
                Be Part of the <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Marketing Revolution</span>
              </h3>
              
              <p className="text-lg text-muted-foreground">
                Don't just adapt to the future of marketing—help shape it. Join MVAI today and experience the power of strategic AI partnership.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="group">
                  Get Early Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="accent" size="lg">
                  Join Waitlist
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;