const livros = require('../database')
const read = require('readline-sync')

const listarLivrosOrdenados = () => {
    let primeiraResposta = read.question('Deseja ordenar os livros por número de páginas? S/N').toUpperCase()
    if (primeiraResposta === 'S') {
        let listaOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
        console.table(listaOrdenados)

    } else

        console.log('Digite' + ' ' + 'npm start :)')

}



module.exports = listarLivrosOrdenados