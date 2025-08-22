import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  const scrollToNext = () => {
    const element = document.getElementById('info');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-accent" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Developer
            </span>
            <br />
            <span className="text-foreground">& Creator</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting innovative solutions through code, AI, and interactive experiences.
            Passionate about pushing the boundaries of technology.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-12">
            <Button variant="outline" size="lg" className="rounded-full hover:shadow-glow-primary">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="rounded-full hover:shadow-glow-secondary">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="rounded-full hover:shadow-glow-primary">
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToNext}
            className="animate-bounce p-2 rounded-full bg-muted/20 backdrop-blur-sm hover:bg-muted/40 transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-secondary rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-pulse opacity-50" />
    </section>
  );
};