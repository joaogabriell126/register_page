const express = require('express')
const app = express()
const port = 3000
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', async (req, res) => {
    const users = await prisma.user.findMany();
    res.render('index', {users: users})
})
app.get('/register', (req, res) => {
    res.render('register', {})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
