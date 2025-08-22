import { ProjectCard } from './ProjectCard';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

interface ProjectSectionProps {
  id: string;
  title: string;
  subtitle: string;
  projects: Project[];
  icon: React.ReactNode;
}

export const ProjectSection = ({ id, title, subtitle, projects, icon }: ProjectSectionProps) => {
  return (
    <section id={id} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-gradient-primary rounded-xl mr-4">
              {icon}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              {title.split(' ').map((word, index) => (
                <span key={index}>
                  {index === 0 ? (
                    <span className="bg-gradient-primary bg-clip-text text-transparent">{word}</span>
                  ) : (
                    <span className="text-foreground"> {word}</span>
                  )}
                </span>
              ))}
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="scroll-reveal">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <div className="text-muted-foreground">
                {icon}
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Coming Soon</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Exciting projects in this category are currently in development. 
              Stay tuned for updates!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};