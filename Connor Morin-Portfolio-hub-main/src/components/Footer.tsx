import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold">Portfolio</span>
          </div>

          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center text-muted-foreground text-sm">
            Made with <Heart className="w-4 h-4 mx-2 text-red-400" /> using modern web technologies
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          © 2024 Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};