let filmes = [
  {
    titulo: "Interestelar",
    ano: "2014",
    idade: "10",
    duracao: "2h49",
    sinopse:
      "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço, na tentativa de garantir a sobrevivência da humanidade.",
    direcao: ["Christopher Nolan"],
    elenco: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    generos: ["Aventura", "Drama", "Ficção"],
    poster: "interestelar.jpg",
  },

  {
    titulo: "Coringa",
    ano: "2019",
    idade: "16",
    duracao: "2h02",
    sinopse:
      "Um comediante falido enlouquece e se torna um assassino psicopata.",
    direcao: ["Todd Phillips"],
    elenco: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
    generos: ["Policial", "Drama", "Suspense"],
    poster: "coringa.jpg",
  },

  {
    titulo: "Bohemian Rhapsody",
    ano: "2018",
    idade: "14",
    duracao: "2h14",
    sinopse:
      "História da lendária banda de rock Queen e do vocalista Freddie Mercury e sua famosa performance no Live Aid em 1985.",
    direcao: ["Bryan Singer"],
    elenco: ["Rami Malek", "Lucy Boynton", "Gwilym Lee"],
    generos: ["Biografia", "Drama", "Musical"],
    poster: "bohemian.rhapsody.jpg",
  },

  {
    titulo: "Extraordinário",
    ano: "2017",
    idade: "10",
    duracao: "1h53",
    sinopse:
      "Conta a inspiradora é doce historia de August Pullman, um menino com diferenças na sua cara que vai na escola pela primeira vez.",
    direcao: ["Stephen Chbosky"],
    elenco: ["Jacob Tremblay", "Owen Wilson", "Izabela Vidovic", "Sonia Braga"],
    generos: ["Drama", "Família"],
    poster: "extraordinario.jpg",
  },

  {
    titulo: "Questão de Tempo",
    ano: "2013",
    idade: "12",
    duracao: "2h03",
    sinopse:
      "Tim descobre que pode viajar no tempo e mudar o que acontece e aconteceu em sua vida. Sua decisão de tornar seu mundo um lugar melhor ao conseguir uma namorada acaba não sendo tão fácil.",
    direcao: ["Richard Curtis"],
    elenco: ["Domhnall Gleeson", "Rachel McAdams", "Bill Nighy"],
    generos: ["Comédia", "Drama", "Fantasia"],
    poster: "questao.de.tempo.jpg",
  },

  {
    titulo: "Jojo Rabbit",
    ano: "2019",
    idade: "14",
    duracao: "1h48",
    sinopse:
      "Um jovem parte do exército nazi, descobre que sua mãe esconde uma jovem judia na sua casa.",
    direcao: ["Taika Waititi"],
    elenco: ["Roman Griffin Davis", "Thomasin McKenzie", "Scarlett Johansson"],
    generos: ["Comédia", "Drama", "Guerra"],
    poster: "jojo.rabbit.jpg",
  },

  {
    titulo: "Whiplash: Em busca da perfeição",
    ano: "2014",
    idade: "12",
    duracao: "1h46",
    sinopse:
      "Um jovem e promissor baterista se matricula em um conservatório de música onde seus sonhos são guiados por um instrutor que não pára por nada para perceber o potencial de um aluno.",
    direcao: ["Damien Chazelle"],
    elenco: ["Miles Teller", "J.K. Simmons", "Melissa Benoist"],
    generos: ["Drama", "Musical"],
    poster: "whiplash.jpg",
  },

  {
    titulo: "Avatar",
    ano: "2009",
    idade: "12",
    duracao: "2h42",
    sinopse:
      "Um militar paraplégico despachado para a lua Pandora em uma missão única fica dividido entre seguir suas ordens e proteger o mundo que ele sente ser sua casa.",
    direcao: ["James Cameron"],
    elenco: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    generos: ["Ação", "Aventura", "Fantasia"],
    poster: "avatar.jpg",
  },

  {
    titulo: "Nasce Uma Estrela",
    ano: "2018",
    idade: "16",
    duracao: "2h16",
    sinopse:
      "Um experiente músico descobre a jovem artista desconhecida a quem ajuda a encontrar fama mais acaba se apaixonando por ela. O relacionamento pessoal entre os dois começa a desandar, à medida que Jack luta contra problemas de álcool.",
    direcao: ["Bradley Cooper"],
    elenco: ["Lady Gaga", "Bradley Cooper", "Sam Elliott"],
    generos: ["Drama", "Musical", "Romance"],
    poster: "nasce.uma.estrela.jpg",
  },
];

let listaElem = document.querySelector("#lista");
listaElem.innerHTML = "";
filmes.forEach((f) => {
  let direcaoLIs = f.direcao.map((d) => "<li>" + d + "</li>").join();
  let elencoLIs = f.elenco.map((d) => "<li>" + d + "</li>").join();
  let generosLIs = f.generos.map((d) => "<li>" + d + "</li>").join();

  let filmeElem = `
    <section class="filme">
      <figure class="poster"><img src="./posters/${f.poster}" /></figure>
      <h2 class="titulo">${f.titulo}</h2>
      <ul class="dados">
        <li class="ano">${f.ano}</li>
        <li class="idade">${f.idade}</li>
        <li class="duracao">${f.duracao}</li>
      </ul>
      <p class="sinopse">${f.sinopse}</p>
      <p class="rótulo">Direção</p>
      <ul class="direcao">${direcaoLIs}</ul>
      <p class="rótulo">Elenco</p>
      <ul class="elenco">${elencoLIs}</ul>
      <p class="rótulo">Gêneros</p>
      <ul class="generos">${generosLIs}</ul>
    </section>  
  `;
  listaElem.innerHTML += filmeElem;
});
