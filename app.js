function pesquisar() {

    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    if(!campoPesquisa) {
        section.innerHTML = "<p>Sem resultados para essa pesquisa</p>"
return
    };

campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada objeto no array de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
 // Constrói o HTML para cada resultado, formatando as propriedades do objeto
 resultados += `
 <div class="item-resultado">
   <h2><a href=${dado.gameplay}" target="_blank">${dado.titulo}</a></h2>
   <p class="descricao-meta"> ${dado.descricao} </p>
   <a href=${dado.link}" target="_blank"> Mais informações sobre o game </a>
 </div>
`;
        }
     if (!resultados) { resultados = "<p>Sem retorno. Pesquise novamente.</p>"}

    }
  
    // Atualiza o conteúdo HTML da seção com os resultados construídos
    section.innerHTML = resultados;
  }



