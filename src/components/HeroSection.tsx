import { Download, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-bg-new.jpg';
import curriculum from '@/assets/dev_joao_melo_Front_end.pdf'

const HeroSection = () => {
  const handleDownloadCV = () => {
     const link = document.createElement("a");
    link.href = curriculum;
    link.download = "Joao_Melo_frontend.pdf";
    link.click();
  };

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(175, 178, 236, 0.9), rgba(44, 60, 106, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              João Melo
            </h1>
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 mb-8">
              <p className="text-xl md:text-2xl text-white/95 font-medium">
                Desenvolvedor Front-End
              </p>
            </div>
          </div>

          <div className="animate-slide-up animation-delay-200">
            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Sou desenvolvedor Front-end criador de soluções web e mobile. 
              Transformo designs em interfaces intuitivas, responsivas e acessíveis, 
              aplicando tecnologia e inovação.
            </p>
          </div>

          <div className="animate-bounce-in animation-delay-400 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button 
                onClick={handleDownloadCV}
                className="btn-hero flex items-center gap-3 group"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Baixar Currículo
              </button>
              <button 
                onClick={scrollToContact}
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Entre em Contato
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a 
                href="https://www.linkedin.com/in/joao-paulo-moreira-melo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/joaomelo90" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="joaopaulomoreiramelo@gmail.com" 
                className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;