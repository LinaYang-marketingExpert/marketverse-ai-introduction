import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Shield, Brain, Zap, Link, Database } from "lucide-react";

const techFeatures = [
  {
    icon: Cloud,
    title: "Cloud-Based Infrastructure",
    description: "Secure, scalable, and high-performance cloud hosting ensuring 99.9% uptime and global accessibility.",
    // technologies: ["AWS", "Auto-scaling", "Load Balancing"]
  },
  {
    icon: Brain,
    title: "Advanced NLP & ML",
    description: "State-of-the-art natural language processing and machine learning algorithms for deep market insights.",
    // technologies: ["GPT-4", "BERT", "TensorFlow"]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, access controls, and regular security audits to protect your valuable data.",
    // technologies: ["AES-256", "OAuth 2.0", "SOC 2"]
  },
  {
    icon: Link,
    title: "Seamless Integrations",
    description: "Connect with popular marketing platforms for streamlined workflows and automated data synchronization.",
    // technologies: ["Google Ads", "Facebook Ads", "Mailchimp"]
  }
];

const TechArchitecture = () => {
  return (
    <section className="py-24 bg-muted/30" id="tech-architecture">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 text-sm mb-6">
            <Database className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Powered by Cutting-Edge Technology</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Engine Architecture
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            MVAI's strategic capabilities are powered by a robust and scalable AI engine built on a foundation of cutting-edge technologies, ensuring reliability, security, and performance at scale.
          </p>
        </div>

        {/* Tech Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {techFeatures.map((feature, index) => (
            <Card
              key={index}
              className="p-6 lg:p-8 hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {/* {feature.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-background/50 text-foreground border-border"
                    >
                      {tech}
                    </Badge>
                  ))} */}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Architecture Highlights */}
        <div className="grid lg:grid-cols-3 gap-8 animate-slide-up">
          <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Lightning Fast</h3>
              <p className="text-muted-foreground">Process millions of data points in seconds with optimized algorithms</p>
            </div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-accent-glow">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Secure by Design</h3>
              <p className="text-muted-foreground">Enterprise-grade security with end-to-end encryption and compliance</p>
            </div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-to-br from-secondary/20 to-transparent border-secondary/20">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Continuously Learning</h3>
              <p className="text-muted-foreground">AI models that improve over time, adapting to market changes</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechArchitecture;