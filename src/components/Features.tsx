import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Brain, Calendar, Settings } from "lucide-react";
import marketAnalysisImage from "@/assets/market-analysis.png";
import strategyForgeImage from "@/assets/strategy-forge.png";
import actionPlannerImage from "@/assets/action-planner.png";

const features = [
  {
    id: "data-miner",
    icon: Database,
    title: "AI-Powered Market Analysis",
    subtitle: "Data Miner Module",
    description: "Automatically gathers and analyzes market intelligence from social media, news articles, competitor websites, and industry reports",
    benefits: [
      "Save time and resources by automating market research",
      "Extract key themes, trends, and customer sentiments",
      "Comprehensive understanding of market landscape"
    ],
    image: marketAnalysisImage,
    gradient: "from-primary to-primary-glow"
  },
  {
    id: "strategy-forge",
    icon: Brain,
    title: "Intelligent Strategy Generation",
    subtitle: "Strategy Forge Module",
    description: "MVAI generate customized marketing strategies based on your product, target audience, and business goals by analyzing millions of data points.",
    benefits: [
      "Access to expert-level marketing strategies",
      "Identify most effective tactics and channels",
      "Detailed partnership and implementation plans"
    ],
    image: strategyForgeImage,
    gradient: "from-accent to-accent-glow"
  },
  {
    id: "action-planner",
    icon: Calendar,
    title: "Automated Campaign Planning",
    subtitle: "Action Planner Module",
    description: "Translates marketing strategies into actionable tasks with automated planning, progress tracking, and task-specific deadlines to ensure accountability.",
    benefits: [
      "Campaigns executed on time and within budget",
      "Automated task generation and tracking",
      "Built-in accountability measures"
    ],
    image: actionPlannerImage,
    gradient: "from-secondary to-primary"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-background" id="features">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Core Features: <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Unleashing Marketing Power</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            MVAI doesn't just process data—it transforms it into actionable strategies that empower marketers to conquer complexity, unleash creativity, and drive real results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="space-y-6 animate-slide-up">
                <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 text-sm">
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{feature.subtitle}</span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold">
                  <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.title}
                  </span>
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button variant="outline" className="group">
                  Learn More
                  <Settings className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </Button>
              </div>
              
              {/* Image */}
              <div className="relative animate-fade-in">
                <Card className="overflow-hidden border-0 shadow-elegant">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
                </Card>
                
                {/* Floating Badge */}
                <div className={`absolute -top-4 -right-4 bg-gradient-to-r ${feature.gradient} p-3 rounded-xl shadow-glow animate-pulse-glow`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Customization Feature */}
        <div className="mt-24 text-center animate-slide-up">
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-card to-card/50 border-border/50 backdrop-blur-sm">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center space-x-2 bg-background/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 text-sm">
                <Settings className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">Personalization Engine</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold">
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Complete Customization
                </span>
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                MVAI adapts to your unique personality and preferences through an intelligent quiz system, then provides ongoing implementation support to ensure you see your projects through to completion.
              </p>
              
              <Button variant="accent" size="lg" className="group">
                Start Personalization Quiz
                <Brain className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;