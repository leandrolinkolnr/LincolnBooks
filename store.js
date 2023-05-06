let livros = []
const endopointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI(){
    const res = await fetch(endopointDaApi)
    livros = await res.json()

    console.table(livros)
}