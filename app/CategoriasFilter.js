const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros)) 
// Vai pegar cada botao, tendo btn, e fazer um forEach para chamar a funcao

function filtrarLivros(){  // Puxa livros automaticamente do outro arquivo
        const elementoBtn = document.getElementById(this.id) // Pegar botao clicado
        const categoria = elementoBtn.value  // No html o botao tem value 'dado, back..'
        let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
        exibirOsLivrosNaTela(livrosFiltrados)
}
