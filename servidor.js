const express = require('express')
const app = express()

app.get('/api/information/', function (req, res) {
    res.send('listar todas informações')
})

app.put('/api/information/:id', function (req, res) {
    res.send('Editar informação específica')
})

app.post('/api/information', function (req, res) {
    res.send('Incluir uma informação')
})

app.delete('/api/information:id', function (req, res) {
    res.send('Excluir uma informação')
})

app.listen(3000)