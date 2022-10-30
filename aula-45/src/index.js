const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT
const Produto = require('./models/produto.model')

app.use(express.json())

mongoose.connect(process.env.DATABASE)
.then(() => {
    console.log('MongoDB conectado com sucesso!')
}).catch((e) => {
    console.log(e)
})



app.get('', (req, res) => {
    res.send('Hello, Xuxinha')
})

app.post('/produtos', async (req, res) => {
    const produto = new Produto(req.body)
    const retorno = await produto.save()
    res.send(retorno)
})

app.get('/produtos', async (req, res) => {
    const produtos = await Produto.find()
    res.send(produtos)
})

app.put('/produtos/:id', async (req, res) => {
    const _id = req.params.id
    const retorno = await Produto.updateOne({ _id }, req.body)
    res.send(retorno)
})

app.listen(PORT, () => {
    console.log('Serviço está executando perfeitamente.')
})