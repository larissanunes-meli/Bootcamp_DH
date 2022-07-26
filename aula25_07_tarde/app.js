const express = require('express')

const app = express();

const routeProdutos = require('./routes/routeProdutos')

app.use(express.json())
app.use('/api/products', routeProdutos);


app.listen(3001, () => {
  console.log('Servidor online!!!');
})