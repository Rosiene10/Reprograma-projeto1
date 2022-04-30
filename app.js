const livros = require('./database')
const read = require('readline-sync')

const resposta = read.question(`
=============== Menu ================

1 - CATEGORIA: buscar livro por catergoria
2 - ORDENAR: Ordenar livros por quantidade de paginas
3 - RECOMENDADOS: Buscar livros recomendados 
4 - LISTA DE DESEJO: Busca livros nao lidos

5 - StaticRange

Digite um numero [1-5]:
`)

console.log(resposta)
