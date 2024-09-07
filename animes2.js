function pesquisarAnimes() {
    // Obtém o termo de pesquisa digitado pelo usuário e converte para minúsculas
    let termoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase();
  
    // Obtém a seção HTML onde os resultados serão exibidos
    let resultadosSection = document.getElementById('resultados-pesquisa');
  
    // Limpa os resultados anteriores da seção
    resultadosSection.innerHTML = '';
  
    // Verifica se o usuário digitou algum termo de pesquisa
    if (!termoPesquisa) {
      resultadosSection.innerHTML = '<p>Por favor, digite o nome do anime.</p>';
      return;
    }
  
    // Filtra os animes que correspondem ao termo de pesquisa
    let animesEncontrados = anime.filter(anime => {
      return anime.titulo.toLowerCase().includes(termoPesquisa) ||
             anime.descricao.toLowerCase().includes(termoPesquisa) ||
             anime.tags.toLowerCase().includes(termoPesquisa);
    });
  
    // Renderiza os resultados na página
    if (animesEncontrados.length === 0) {
      resultadosSection.innerHTML = '<p>Nenhum anime encontrado.</p>';
    } else {
      animesEncontrados.forEach(anime => {
        resultadosSection.innerHTML += `
          <div class="item-resultado">
            <h2>
              <a href="${anime.link}" target="_blank">${anime.titulo}</a>
            </h2>
            <p class="descricao-meta">${anime.descricao}</p>
          </div>
        `;
      });
    }
  }