import { ExternalLink, Github, TrendingUp } from 'lucide-react';
import projectMackCar from '@/assets/MackCarLep.png';
import bubbleImg from'@/assets/bubble.png'
import burger from '@/assets/nativeBurger.png'

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Landing Page - Mack Car',
      description: 'Landing page moderna para oficina automotiva com foco em conversão e experiência do usuário.',
      image: projectMackCar,
      technologies: ['React', 'TailwindCSS', 'JavaScript', 'HTML5'],
      achievements: [
        'Aumento de 25% nas consultas de serviços',
        'Tempo de carregamento otimizado',
        'Design responsivo e moderno'
      ],
      links: {
        demo: 'https://oficina-mack-car-git-master-joaos-projects-584cef9f.vercel.app/',
        github: 'https://github.com/joaomelo90/oficina_MackCar'
      },
      highlight: true
    },
    {
      id: 2,
      title: 'Lista de compra No-Code',
      description: 'Aplicativo web simples que permite aos usuários criar, ler e excluir itens de uma lista de compras. Desenvolvido no Bubble.io, o projeto foca em uma interface intuitiva, experiência do usuário fluida e gerenciamento eficiente de dados sem código.',
      image: bubbleImg,
      technologies: ['Bubble.io'],
      achievements: [
        'Interface intuitiva e responsiva',
        'CRUD',
        'No-code'
      ],
      links: {
        demo: 'https://aplicativoteste-86187.bubbleapps.io/version-test/listamercado_login',
        github: '#'
      }
    },
    {
      id: 3,
      title: 'Cardápio Online',
      description: 'Transforme a experiência dos seus clientes com um cardápio digital interativo.Com nosso app, eles podem visualizar pratos com fotos, descrições detalhadas e preços atualizados, tudo na palma da mão',
      image: burger,
      technologies: ['React', 'Tailwindcss'],
      achievements: [
        'Fácil de navegar',
        'Sem necessidade de imprimir cardápios',
        'Acesso via QR Code ou link'
      ],
      links: {
        demo: 'https://cardapio-9d3l4hler-joaos-projects-584cef9f.vercel.app/',
        github: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div cofflinelassName="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, demonstrando diferentes tecnologias e soluções
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`card-gradient overflow-hidden animate-slide-up ${
                project.highlight ? 'lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <ExternalLink className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-muted-foreground">Em desenvolvimento</p>
                    </div>
                  </div>
                )}
                
                {project.highlight && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Destaque
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="tech-badge text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Principais resultados:
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li 
                        key={i}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a 
                    href={project.links.demo}
                    className="btn-outline flex items-center gap-2 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver Demo
                  </a>
                  {/*<a 
                    href={project.links.github}
                    className="bg-muted text-muted-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300 flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </a>*/}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Interessado em ver mais projetos?
          </p>
          <a 
            href="https://github.com/joaomelo90" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-hero inline-flex items-center gap-3 text-center px-6 py-3 text-base sm:text-lg"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline">Ver todos os projetos no GitHub</span>
            <span className="sm:hidden">Projetos no GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;