import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">João Melo</h3>
            <p className="text-background/80 leading-relaxed">
              Desenvolvedor Front-end apaixonado por criar soluções web inovadoras 
              e experiências digitais memoráveis.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/60">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>e muito</span>
              <Coffee className="w-4 h-4 text-yellow-600" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <div className="space-y-2">
              {[
                { name: 'Sobre', id: 'home' },
                { name: 'Tecnologias', id: 'technologies' },
                { name: 'Projetos', id: 'projects' },
                { name: 'Experiência', id: 'experience' },
                { name: 'Contato', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const section = document.getElementById(link.id);
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-background/80 hover:text-background transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-2 text-background/80">
              <p>São Bernaedo do Campo, SP - Brasil</p>
              <a 
                href="joaopaulomoreiramelo@gmail.com"
                className="block hover:text-background transition-colors duration-300"
              >
                joaopaulomoreiramelo@gmail.com              </a>
              <a 
                href="tel:+5511958083366"
                className="block hover:text-background transition-colors duration-300"
              >
                +55 (11) 95808-3366
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-background/60 text-sm mb-4 md:mb-0">
            <Code className="w-4 h-4" />
            <span>© {currentYear} João Melo. Todos os direitos reservados.</span>
          </div>
          
          <div className="text-background/60 text-sm">
            <span>Desenvolvido com React, TypeScript e TailwindCSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;