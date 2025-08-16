import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Target, TrendingUp, Lightbulb, ArrowRight } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Data Deluge Overwhelm",
    description: "Exponential growth of marketing data creates analysis paralysis, making it impossible to extract meaningful insights quickly."
  },
  {
    icon: Target,
    title: "Audience Targeting Challenges",
    description: "Identifying the right target audience and optimal channels becomes increasingly complex in a fragmented digital landscape."
  },
  {
    icon: TrendingUp,
    title: "Traditional Method Limitations",
    description: "Legacy marketing approaches fail to adapt to dynamic market conditions and emerging consumer behaviors."
  }
];

const solutions = [
  {
    icon: Lightbulb,
    title: "Conquer Complexity",
    description: "MVAI simplifies massive datasets into clear, actionable insights with concise market overviews.",
    color: "text-primary"
  },
  {
    icon: Target,
    title: "Unleash Creativity",
    description: "Generate innovative marketing strategies and campaigns you never would have thought of on your own.",
    color: "text-accent"
  },
  {
    icon: TrendingUp,
    title: "Drive Results",
    description: "Transform your vision into executable campaigns with clear, step-by-step implementation plans.",
    color: "text-secondary"
  }
];

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-background" id="problems">
      <div className="container mx-auto px-6">
        {/* The Problem */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              The Challenge: <span className="text-muted-foreground">Marketing in the Data Deluge</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Modern marketers face unprecedented challenges in an increasingly complex digital landscape where traditional methods fall short.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <Card
                key={index}
                className="p-6 lg:p-8 text-center hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center">
                    <problem.icon className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Transition */}
        <div className="text-center py-12 animate-fade-in">
          <div className="inline-flex items-center space-x-4 bg-card/50 backdrop-blur-sm border border-border rounded-full px-8 py-4">
            <span className="text-2xl font-bold text-muted-foreground">But what if there was a better way?</span>
            <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
          </div>
        </div>

        {/* The Solution */}
        <div id="solutions">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              The Solution: <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">MVAI - Your Strategic AI Partner</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              MVAI doesn't just process data—it transforms it into <strong className="text-foreground">ACTIONABLE strategies</strong> that empower marketers to overcome complexity and drive unprecedented results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="p-6 lg:p-8 text-center hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-card to-card/50 border-border/50 backdrop-blur-sm animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center animate-slide-up">
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-border/50 backdrop-blur-sm">
              <div className="max-w-2xl mx-auto space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold">
                  Ready to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Transform Your Marketing?</span>
                </h3>
                <p className="text-lg text-muted-foreground">
                  Join the future of data-driven marketing with MVAI's strategic AI partnership.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" className="group">
                    Start Your Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  {/* <Button variant="outline" size="lg">
                    Schedule Demo
                  </Button> */}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;