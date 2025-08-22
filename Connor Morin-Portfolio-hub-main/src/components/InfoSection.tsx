import { Download, MapPin, Calendar, Code2, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = [
  'JavaScript', 'TypeScript', 'Python', 'React', 'Node.js', 'Next.js',
  'TensorFlow', 'PyTorch', 'Machine Learning', 'Deep Learning', 'AWS', 'Docker'
];

const achievements = [
  { title: 'Full-Stack Development', description: '5+ years of experience building scalable web applications' },
  { title: 'AI/ML Expertise', description: 'Specialized in computer vision and natural language processing' },
  { title: 'Open Source Contributor', description: 'Active contributor to various open-source projects' },
  { title: 'Tech Leadership', description: 'Led development teams and mentored junior developers' }
];

export const InfoSection = () => {
  return (
    <section id="info" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate developer with expertise across AI/ML, web development, and interactive gaming.
            I love turning complex problems into elegant, user-friendly solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-500">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Software Developer</CardTitle>
                  <CardDescription className="text-lg flex items-center mt-1">
                    <MapPin className="w-4 h-4 mr-2" />
                    Available Worldwide
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="w-5 h-5 mr-3" />
                <span>5+ years of professional experience</span>
              </div>
              
              <p className="text-foreground leading-relaxed">
                I specialize in creating innovative solutions that bridge the gap between cutting-edge technology 
                and real-world applications. From machine learning models to interactive web experiences, 
                I'm passionate about crafting code that makes a difference.
              </p>

              <Button className="w-full bg-gradient-primary hover:shadow-glow-primary">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </CardContent>
          </Card>

          {/* Skills & Achievements */}
          <div className="space-y-8">
            {/* Skills */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-3 text-primary" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-gradient-primary hover:text-primary-foreground transition-all">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/30 hover:bg-card/50 transition-all duration-300">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-primary mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};