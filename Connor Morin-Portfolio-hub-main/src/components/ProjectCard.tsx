import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

export const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  image,
  featured = false
}: ProjectCardProps) => {
  return (
    <Card 
      className={`group h-full transition-all duration-500 hover:shadow-elegant hover:-translate-y-2 border-border/50 backdrop-blur-sm ${
        featured ? 'bg-gradient-accent border-primary/30 shadow-glow-primary' : 'bg-card/50'
      }`}
    >
      {image && (
        <div className="relative overflow-hidden rounded-t-xl">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          {featured && (
            <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
              Featured
            </Badge>
          )}
        </div>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="border-border/50 hover:bg-muted/50">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild className="flex-1 hover:shadow-glow-primary">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button variant="default" size="sm" asChild className="flex-1 bg-gradient-primary hover:shadow-glow-primary">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};