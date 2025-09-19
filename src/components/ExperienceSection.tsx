import { Building, Calendar, MapPin, Users, Zap, Code2 } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Code Solution Technology',
      position: 'Desenvolvedor Front-end',
      period: '2023 - Presente',
      location: 'São Paulo, SP',
      type: 'Tempo Integral',
      description: 'Desenvolvimento de soluções web e mobile para diversos clientes, focando em performance, usabilidade e integração de sistemas.',
      achievements: [
        'Criação de sites e aplicativos web responsivos',
        'Desenvolvimento de aplicativos mobile nativos',
        'Implementação de workflows automáticos',
        'Integração com APIs externas e serviços terceiros',
        'Otimização de performance'
      ],
      technologies: ['React', 'React Native', 'Python', 'Django', 'MongoDB', 'PostgreSQL']
    }
  ];

  const education = [
    {
      institution: 'Universidade FAM',
      course: 'Análise e Desenvolvimento de Sistemas',
      period: '2023 - 2025',
      status: 'Em andamento',
      description: 'Foco em desenvolvimento de software, banco de dados, engenharia de software e gestão de projetos.'
    },
    {
      institution: 'DevClub',
      course: 'Formação Full-stack',
      period: '2023',
      status: 'Concluído',
      description: 'Formação intensiva em desenvolvimento web moderno, cobrindo frontend, backend e deploy de aplicações.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-background to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Experiência
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Minha jornada profissional e formação acadêmica
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary p-3 rounded-xl">
                <Building className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Experiência Profissional
              </h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="card-gradient p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        {exp.position}
                      </h4>
                      <div className="flex items-center gap-2 text-primary font-medium mb-2">
                        <Building className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      Principais atividades:
                    </h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-primary" />
                      Tecnologias utilizadas:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="animate-slide-up animation-delay-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary p-3 rounded-xl">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Formação
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="card-gradient p-6">
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-foreground mb-1">
                      {edu.course}
                    </h4>
                    <div className="flex items-center gap-2 text-primary font-medium mb-2">
                      <Building className="w-4 h-4" />
                      {edu.institution}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Concluído' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="card-gradient p-6 mt-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Certificações e Cursos
              </h4>
              <div className="space-y-3">
                {[
                  'DevClub - Full-stack Development',
                  'JavaScript ES6+ - Curso Avançado',
                  'React.js - Do Básico ao Avançado',
                ].map((cert, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;