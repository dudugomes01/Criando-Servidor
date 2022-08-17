const express = require('express')
const path = require('path')
const app = express()

//definindo templete engine
app.set('view engine', 'ejs')

//definindo os arquivos estáticos
//app.use(express.static(path.join(__dirname, 'views'))) Mais facil

//definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//Rotas
app.get('/',(req, res) =>{
    res.render('index')
})

app.get('/sobre',(req, res) => {
    res.send('Sobre')
})
//404 error (not found)
app.use((req, res) => {
    res.send('Página não encontrada')
})

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port,()=> console.log(`Server is listening on port ${port}`))
