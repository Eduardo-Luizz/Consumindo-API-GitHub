const express = require('express')
const axios = require('axios')
const app = express()

app.listen(3000)

app.route('/').get( (request, response) => {
  
  axios.get('https://api.github.com/users/Eduardo-Luizz')
    // .then( resultado => response.send(resultado.data) ) // axios response dentro do data para retornar os dados // (resultado.data.avatar_url) retorna o objeto especifico 
    .then( resultado => response.send(`<img src="${resultado.data.avatar_url}" />`) ) // retorna a imagem
    .catch( error => console.log(error) )
})

console.log("Servidor iniciado ...")