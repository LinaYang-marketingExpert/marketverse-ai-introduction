import { 
  FaTelegramPlane, 
  FaDiscord, 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope 
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import logoImage from "/logo1.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Problems", href: "#problems" },
        { name: "Solutions", href: "#solutions" },
        { name: "Technology", href: "#tech-architecture" },
      ]
    },
    // {
    //   title: "Company",
    //   links: [
    //     { name: "About Us", href: "#about" },
    //     { name: "Careers", href: "#careers" },
    //     { name: "News", href: "#news" },
    //     { name: "Contact", href: "#contact" }
    //   ]
    // },
    {
      title: "Resources",
      links: [
        { name: "Whitepaper", href: "https://docs.google.com/document/d/1zOvMPdQtRnlsBi9aHk19zV91wkJQ1FPHzVelfqjq-gc/edit?usp=sharing" },
        { name: "Pitch deck", href: "https://pitch.com/v/marketverse-ai-uqckyp" }
      ]
    }
  ];

  const socialLinks = [
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaTelegramPlane, href: "#", label: "Telegram" },
    { icon: FaDiscord, href: "#", label: "Discord" },
    // { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    // { icon: FaGithub, href: "#", label: "GitHub" },
    // { icon: FaEnvelope, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
                <img src={logoImage} alt="logo" className="h-10 w-10" />
                {/* <Brain className="w-6 h-6 text-white" /> */}
              </div>
              <span className="text-xl font-bold">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">MVAI</span>
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              Strategic AI for Marketers. Transform marketing complexities into laser-focused strategies with MVAI's intelligent platform.
            </p>

            <div className="flex space-x-4 text-gray-600">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}> 
                    <social.icon />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        {/* <div className="border-t border-border/50 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest insights on AI-powered marketing strategies.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button variant="default" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} MVAI. All rights reserved.
            </div>

            {/* <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;