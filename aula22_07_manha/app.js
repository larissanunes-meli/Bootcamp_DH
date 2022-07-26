const express = require('express');
const app = express();

app.get('/', (req, res) => {

    if(2 > 1) {
    res.send('Hello Word!')
    } else {
    res.redirect('/produtos')
    }
    
});

app.get('/produtos', (req, res) => {
    res.send('Essa eh a rota de produtos')
});

app.listen(3000, () => 
console.log('Servidor em execucao')
);