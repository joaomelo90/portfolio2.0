import { 
  Code, 
  Database, 
  Server, 
  GitBranch, 
  Palette,
  Smartphone,
  Cloud,
  Cpu,
  Globe,
  FileCode,
  Layers,
  Monitor,
  Terminal,
  Wrench
} from 'lucide-react';

const TechnologiesSection = () => {
  const techCategories = [
    {
      title: 'Frontend',
      icon: Code,
      technologies: [
        { name: 'React', icon: Code },
        { name: 'React native', icon: Code },
        { name: 'JavaScript', icon: FileCode },
        { name: 'TypeScript', icon: FileCode },
        { name: 'HTML5', icon: Globe },
        { name: 'CSS3', icon: Palette },
        { name: 'TailwindCSS', icon: Layers },
        { name: 'Styled Components', icon: Wrench }
      ],
      color: 'from-primary to-primary-light'
    },
    {
      title: 'Backend',
      icon: Server,
      technologies: [
        { name: 'Python', icon: Terminal },
        { name: 'Django', icon: Server }      
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Banco de Dados',
      icon: Database,
      technologies: [
        { name: 'MongoDB', icon: Database },
        { name: 'PostgreSQL', icon: Database }
      ],
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'No-Code',
      icon: Code,
      technologies: [
        { name: 'Bubble.io', icon: Code },
      ],
      color: 'from-black to-gray-500'
    },
    {
      title: 'Versionamento',
      icon: GitBranch,
      technologies: [
        { name: 'Git', icon: GitBranch },
        { name: 'GitHub', icon: GitBranch }
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-gradient-to-br from-accent to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Tecnologias
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ferramentas e tecnologias que utilizo para criar soluções web modernas e eficientes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="mb-12 last:mb-0 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Technologies List */}
              <div className="space-y-3 ml-2">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={tech.name}
                    className="flex items-center gap-4 p-4 card-gradient hover:shadow-card transition-all duration-300 hover:translate-x-2 animate-slide-up"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (techIndex * 0.1)}s` }}
                  >
                    <div className="flex-shrink-0">
                      <tech.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg font-medium text-foreground">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Additional Skills */}
          <div className="mt-16 text-center animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Outras Competências
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                { name: 'UI/UX Design', icon: Palette },
                { name: 'Mobile Development', icon: Smartphone },
                { name: 'APIs & Integration', icon: Cpu }
              ].map((skill, index) => (
                <div 
                  key={skill.name}
                  className="flex items-center gap-3 p-4 card-gradient hover:shadow-card transition-all duration-300 hover:scale-105 animate-bounce-in"
                  style={{ animationDelay: `${0.8 + (index * 0.1)}s` }}
                >
                  <skill.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;