const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(" Hello World! ");
});
const products=[
    {
        id:1,
        name: "Tênis",
        price: 200,
        quantity:20
    }
]

app.get('/products', (req, res) => {
    res.status(200).send(products);
});

app.post('/products', (req, res) => {
    try {
         const product = req.body
         products.push(product)
         res.status(201);
        
    } catch (error) {
        res.status(500)
        
    }
});

app.get('/products/:id', (req, res) => {
    const id = req.params
    const found = products.find(produto => produto.id == id)
    if (!found) {
        res.status(404)
    }
    res.status(200).send(found)
});

app.listen(port, () => {})