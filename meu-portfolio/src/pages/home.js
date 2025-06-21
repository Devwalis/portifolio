
export default function Portfolio() {
  return (
    <div className="bg-slate-900 text-white font-sans">
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold">Olá! Meu nome é <span className="text-blue-400">Walisson Oliveira</span></h1>
        <p className="text-lg mt-4 max-w-xl mx-auto">
          Desenvolvedor de software certificado técnico em desenvolvimento de sistemas. Desenvolvo web sites interativos e automatizados para diferentes áreas de negócio.
        </p>
        <div className="mt-6 space-x-4">
          <a href="#sobre" className="bg-blue-500 text-white px-4 py-2 rounded">Sobre mim</a>
          <a href="#projetos" className="bg-white text-blue-500 px-4 py-2 rounded">Projetos</a>
        </div>
      </header>

      <section id="sobre" className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-blue-400 text-xl font-bold mb-4">| Sobre mim:</h2>
        <p className="text-slate-300">
          Estou em fase final do curso técnico em Desenvolvimento de Sistemas, investindo na prática e no estudo constante. Com cursos como Programador de Sistemas pelo Senac e atuação em projetos como o Condomínio Digital, venho desenvolvendo meu repertório técnico e também minhas soft skills. Estou preparado para contribuir como desenvolvedor com responsabilidade, atitude e criatividade.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-blue-400 text-xl font-bold mb-6">| Principais habilidades:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Skill title="Java" description="Desenvolvimento de Web através de IDEs como VSCode e Eclipse." />
          <Skill title="Banco de dados" description="Operações, consultas e conexão segura com MySQL e PostgreSQL." />
          <Skill title="Spring Boot" description="Framework robusto para criar APIs Java escaláveis." />
          <Skill title="Soft skill" description="Boa comunicação, proatividade, organização e trabalho em equipe." />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-blue-400 text-xl font-bold mb-6">| Os serviços que eu ofereço:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Service title="LAND PAGES" description="Criação de web sites dinâmicos e estáticos para lançamentos de produtos e portfólios." />
          <Service title="WEB Responsivo" description="Treinamento presencial ou remoto com aulas ao vivo exclusivo para empresas." />
          <Service title="DESENVOLVIMENTO DE WEB SITES" description="Elaboração de dashboards personalizados no Power BI para suportar negócios." />
          <Service title="SQL LINGUAGENS" description="Modelagem e integração de banco de dados em aplicações web." />
        </div>
      </section>

      <section className="bg-slate-800 py-10 text-center">
        <h2 className="text-blue-400 text-xl font-bold mb-4">Como você pode entrar em contato comigo:</h2>
        <div className="space-y-2 text-slate-300">
          <a href="mailto:walissonoliveira1@outlook.com">walissonoliveira1@outlook.com</a><br />
          <a href="https://instagram.com/thewali_oli" target="_blank">@thewali_oli</a><br />
          <a href="tel:+558188986561">+55 (81) 8898-6561</a><br />
          <a href="https://www.linkedin.com/in/walisson-oliveira" target="_blank">/walisson oliveira</a>
        </div>
      </section>

      <footer className="bg-blue-500 text-white py-4 text-center">
        <a href="#projetos" className="font-bold">Clique aqui para visualizar os meus projetos ⟶</a>
      </footer>
    </div>
  );
}

function Skill({ title, description }) {
  return (
    <div className="bg-slate-700 p-4 rounded shadow">
      <h3 className="text-blue-400 font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 text-sm">{description}</p>
    </div>
  );
}

function Service({ title, description }) {
  return (
    <div className="bg-slate-700 p-4 rounded shadow">
      <h3 className="text-blue-400 font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 text-sm">{description}</p>
    </div>
  );
}
