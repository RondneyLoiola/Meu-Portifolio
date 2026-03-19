import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import Me from './assets/eu.jpeg';
import Projeto1 from './assets/1.jpg';
import Projeto2 from './assets/2.jpg';
import Projeto3 from './assets/3.jpg';
import Projeto4 from './assets/4.jpg';
import Projeto5 from './assets/5.jpg';
import Projeto6 from './assets/6.jpg';
import Projeto7 from './assets/7.jpg';
import Projeto8 from './assets/8.jpg';
import Projeto9 from './assets/9.jpg';
import Projeto10 from './assets/10.jpg';

export default function Portfolio() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const projetos = [
    {
      id: 1,
      titulo: "Cafeteria",
      descricao: "Site para uma cafeteria ficticia, desenvolvido com foco em design atraente e experiência do usuário.",
      tecnologias: ["HTML", "CSS"],
      imagem: Projeto1,
      github: "https://github.com/RondneyLoiola/Cafeteria",
      demo: "https://cafeteriarl.netlify.app/"
    },
    {
      id: 2,
      titulo: "Urban Style",
      descricao: "Loja de roupa ficticia com estilos urbanos, e gerenciamento de carrinho.",
      tecnologias: ["React", "Styled Components"],
      imagem: Projeto2,
      github: "https://github.com/RondneyLoiola/UrbanStyle",
      demo: "https://urban-style-rho.vercel.app/"
    },
    {
      id: 3,
      titulo: "Réplica NetFlix",
      descricao: "Réplica da interface da Netflix desenvolvida em React, consumindo dados da API TMDB.",
      tecnologias: ["React", "Styled Components", "Api TMDB"],
      imagem: Projeto3,
      github: "https://github.com/RondneyLoiola/NETFLIX",
      demo: "https://netfrlirlxrl.netlify.app/"
    },
    {
      id: 4,
      titulo: "DevMovies",
      descricao: "Permite aos usuários navegar por uma vasta coleção de filmes, trailers e informações relevantes",
      tecnologias: ["React", "Styled Components", "Api TMDB"],
      imagem: Projeto5,
      github: "https://github.com/RondneyLoiola/devmovies_react",
      demo: "https://devmoviesrl.netlify.app/"
    },
    {
      id: 5,
      titulo: "TODO List Simples",
      descricao: "O projeto permite criar, editar, marcar como concluída e excluir tarefas de forma intuitiva.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      imagem: Projeto6,
      github: "https://github.com/RondneyLoiola/todolist-basic",
      demo: "https://todolistbasicrl.netlify.app/"
    },
    {
      id: 6,
      titulo: "DevBurguer",
      descricao: "Sistema completo para gerenciamento de pedidos, produtos e usuários de uma hamburgueria.",
      tecnologias: ["React", "Styled Components", "Swiper"],
      imagem: Projeto7,
      github: "https://github.com/RondneyLoiola/DevBurguer-Interface",
      demo: "https://devburguer-beta.vercel.app/"
    },
    {
      id: 7,
      titulo: "DevBills",
      descricao: "Um sistema de controle financeiro pessoal, permitindo gerenciar receitas, despesas e relatórios em tempo real.",
      tecnologias: ["Prisma", "Tailwind", "Firebase"],
      imagem: Projeto8,
      github: "https://github.com/RondneyLoiola/DevBills",
      demo: "https://dev-bills.vercel.app/"
    },
    {
      id: 8,
      titulo: "ExpenseTracker",
      descricao: "Sistema de calculadora de despesas, permitindo gerenciar despesas em tempo real.",
      tecnologias: ["Prisma", "Tailwind", "Firebase"],
      imagem: Projeto9,
      github: "https://github.com/RondneyLoiola/interface-expensetracker",
      demo: "https://interface-expensetracker.vercel.app/entrar"
    },
    {
      id: 9,
      titulo: "LuxeBristo",
      descricao: "Restaurante fictício, projeto responsivo e com design moderno.",
      tecnologias: ["React", "Tailwind"],
      imagem: Projeto4,
      github: "https://github.com/RondneyLoiola/LuxeBristo",
      demo: "https://luxe-bistro.netlify.app/"
    },
    {
      id: 10,
      titulo: "Site para Advogados",
      descricao: "Modelo de Landing Page para Advogados.",
      tecnologias: ["React", "Tailwind", "Vite"],
      imagem: Projeto10,
      github: "https://github.com/RondneyLoiola/advogado-landingpage",
      demo: "https://advlandingpage-rl.netlify.app/"
    }
  ];

  const habilidades = [
    { categoria: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Styled Components"] },
    { categoria: "Backend", items: ["Node.js", "Express", "REST APIs", "Sequelize"] },
    { categoria: "Database", items: ["MongoDB", "PostgreSQL"] },
    { categoria: "Ferramentas", items: ["Git", "Docker"] }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Header/Navegação */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-emerald-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-center items-center">            
            {/* Menu Desktop */}
            <div className="hidden md:flex gap-8">
              <a href="#sobre" className="text-gray-300 hover:text-emerald-400 transition">Sobre</a>
              <a href="#projetos" className="text-gray-300 hover:text-emerald-400 transition">Projetos</a>
              <a href="#habilidades" className="text-gray-300 hover:text-emerald-400 transition">Habilidades</a>
              <a href="#contato" className="text-gray-300 hover:text-emerald-400 transition">Contato</a>
            </div>

            {/* Menu Mobile */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMenuAberto(!menuAberto)}
            >
              {menuAberto ? <X /> : <Menu />}
            </button>
          </div>

          {/* Menu Mobile Dropdown */}
          {menuAberto && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <a href="#sobre" className="text-gray-300 hover:text-emerald-400 transition">Sobre</a>
              <a href="#projetos" className="text-gray-300 hover:text-emerald-400 transition">Projetos</a>
              <a href="#habilidades" className="text-gray-300 hover:text-emerald-400 transition">Habilidades</a>
              <a href="#contato" className="text-gray-300 hover:text-emerald-400 transition">Contato</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-70 h-70 mx-auto rounded-full bg-linear-to-r from-emerald-400 to-green-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <img className="w-full h-full object-cover rounded-full" src={Me} alt="rondney oliveira loiola" />
              </div>
            </div>
          </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Desenvolvedor
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-400"> Full Stack</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transformo ideias em aplicações web completas e funcionais. 
            Especializado em criar experiências digitais modernas e eficientes.
          </p>

          <div className="flex gap-4 justify-center">
            <a href="#projetos" className="px-8 py-3 bg-linear-to-r from-emerald-500 to-green-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition">
              Ver Projetos
            </a>
            <a href="#contato" className="px-8 py-3 border-2 border-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-500/10 transition">
              Contato
            </a>
          </div>

          <div className="flex gap-6 justify-center mt-8">
            <a href="https://github.com/RondneyLoiola" className="text-gray-400 hover:text-emerald-400 transition">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/rondneyloiola/" className="text-gray-400 hover:text-emerald-400 transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:OYi1f@example.com" className="text-gray-400 hover:text-emerald-400 transition">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">
            Sobre <span className="text-emerald-400">Mim</span>
          </h3>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className='w-full'>
                <h2 className='text-white text-xl w-full leading-relaxed'>
                  Olá, sou <span className='text-emerald-400'>Rondney Oliveira Loiola</span>, tenho 18 anos e sou desenvolvedor <span className='text-emerald-400'>Full-Stack</span> em formação. Me especializo em <span className='text-emerald-400'>HTML, CSS, JavaScript, React, Node.js e TypeScript </span> através do Dev Club.
                  Apaixonado por tecnologia, dedico-me diariamente ao aprendizado e à criação de projetos que resolvem problemas reais. Busco minha primeira oportunidade na área de TI para crescer profissionalmente e contribuir com soluções criativas e eficientes.
                  <span className='text-emerald-400'> Contato: orondney1@gmail.com</span>
                </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">
            Meus <span className="text-emerald-400">Projetos</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetos.map((projeto) => (
              <div 
                key={projeto.id}
                className="bg-slate-800/50 rounded-lg overflow-hidden border border-emerald-500/20 hover:border-emerald-500/40 transition cursor-pointer group"
                onClick={() => setProjetoSelecionado(projeto)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={projeto.imagem} 
                    alt={projeto.titulo}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">{projeto.titulo}</h4>
                  <p className="text-gray-400 mb-4 text-sm">{projeto.descricao}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projeto.tecnologias.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a href={projeto.github} target="_blank" className="text-emerald-400 hover:text-emerald-300 transition text-sm">
                      GitHub →
                    </a>
                    <a href={projeto.demo} target="_blank" className="text-emerald-400 hover:text-emerald-300 transition text-sm">
                      Demo →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">
            Minhas <span className="text-emerald-400">Habilidades</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {habilidades.map((grupo, i) => (
              <div key={i} className="bg-slate-800/50 p-6 rounded-lg border border-emerald-500/20">
                <h4 className="text-lg font-semibold text-emerald-400 mb-4">{grupo.categoria}</h4>
                <ul className="space-y-2">
                  {grupo.items.map((item, j) => (
                    <li key={j} className="text-gray-300 text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Vamos <span className="text-emerald-400">Conversar?</span>
          </h3>
          <p className="text-gray-300 mb-8">
            Estou sempre aberto a novos projetos e oportunidades. Entre em contato!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:rondney.loiola1@gmail.com"
              target='_blank'
              className="px-8 py-3 bg-linear-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Enviar Email
            </a>
            <a 
              href="https://www.linkedin.com/in/rondneyloiola/" 
              target="_blank"
              className="px-8 py-3 border-2 border-emerald-500 text-white rounded-lg font-semibold hover:bg-purple-500/10 transition flex items-center justify-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-emerald-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2026 Rondney Loiola. Desenvolvido com React e Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}