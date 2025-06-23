const container = document.querySelector('#carrosel-img-projetos');

const dadosPersonalizados = [
  {
    id: 868161423,
    titulo: 'Ame Como Uma Criança',
    video: 'videos/ame.mp4',
    descricao: 'Projeto web do curso CDD4.0 visa impacto social na internet, documentando fotos. Desenvolvido em grupo, promove colaboração socioemocional, sem fins lucrativos e com foco social.',
    link: 'https://ame-uma-crian-a-cdd.vercel.app/',
    link2: 'https://github.com/Devwalis/AmeUmaCrian-aCDD'
  },
  {
    id: 891493600,
    titulo: 'Raízes da Educação',
    video: 'videos/raizes.mp4',
    descricao: 'Projeto no SENAC com Python, HTML, CSS e JavaScript visa alfabetização gratuita para idosos. Conecta professores, alunos e instituições, promovendo educação acessível e de qualidade.',
    link: 'https://s8m-industrious-cavendish.circumeo-apps.net',
    link2: 'https://github.com/meloim/raizes-edu'
  },
  {
    id: 911666462,
    titulo: 'Parallax',
    video: 'videos/parallax.mp4',
    descricao: 'Praticando CSS3 e HTML5 com técnicas de parallax, buscando aprimorar o design web com animações dinâmicas e criativas, melhorando a experiência visual e a usabilidade.',
    link: 'https://devwalis.github.io/paralax/',
    link2: 'https://github.com/Devwalis/Paralax'
  }
];

async function getProjetos() {
  const urlGitHub = 'https://api.github.com/users/Devwalis/repos';

  try {
    const response = await fetch(urlGitHub);
    if (!response.ok) throw new Error('Erro ao buscar projetos do GitHub');

    const data = await response.json();

    const filtrados = data.filter(repo =>
      dadosPersonalizados.some(dado => dado.id === repo.id)
    );

    return filtrados.map(repo => {
      const dadosRepo = dadosPersonalizados.find(dado => dado.id === repo.id);
      return {
        id: repo.id,
        titulo: dadosRepo?.titulo || repo.name,
        video: dadosRepo?.video || '',
        descricao: dadosRepo?.descricao || repo.description || 'Descrição não disponível',
        link: dadosRepo?.link || repo.html_url,
        link2: dadosRepo?.link2 || repo.html_url
      };
    });

  } catch (error) {
    console.error('Erro:', error);
    return [];
  }
}

function criarLayoutProjetos(projetos) {
  projetos.forEach(projeto => {
    const projetoHTML = document.createElement('div');
    projetoHTML.classList.add('border');

    projetoHTML.innerHTML = `
      <div class="video">
        <video class="video" src="${projeto.video}" autoplay loop muted></video>
      </div>
      <div class="textoProjetos">
        <h3 class="tituloProjeto">${projeto.titulo}</h3>
        <p class="subtituloProjeto">Objetivos principais do projeto: </p>
        <p class="descricao">${projeto.descricao}</p>
        <div class="btn-contato">
          <a href="${projeto.link}" target="_blank"><button>Clique para interagir</button></a>
          <a href="${projeto.link2}" target="_blank"><button>Repositório</button></a>
        </div>
      </div>
    `;

    // adiciona o projeto dentro do container principal
    container.appendChild(projetoHTML);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const projetos = await getProjetos();
  criarLayoutProjetos(projetos);
});
