const express = require('express');

const routes = express.Router();

let produtos = require('../produtos')

routes.get('/', (req, res) => {
  res.status(200).json(produtos)
})

routes.get('/:id', (req, res) => {
  const id = Number(req.params.id)

  const product = produtos.find((produto) => produto.id === id);

  if (!product) {
    return res.status(400).json({ "message": "Produto não encontrado" })
  }
  res.status(200).json(product)
})

routes.post('/', (req, res) => {
  const newProducts = req.body

  products = [...produtos, ...newProducts]

  res.status(200).json(products)
})

routes.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  const newProducts = req.body

  const product = produtos.find((produto) => produto.id === id);

  if (!product) {
    return res.status(400).json({ "message": "Produto não encontrado" })
  }

  produtoAtualizado = produtos.map((produto) => {
    if (produto.id === id) {
      return newProducts
    }
    return produto
  })

  products = produtoAtualizado

  res.status(200).json(products)
})

routes.delete('/:id', (req, res) => {
  const id = Number(req.params.id)

  const product = produtos.find((produto) => produto.id === id);

  if (!product) {
    return res.status(400).json({ "message": "Produto não encontrado" })
  }

  products = produtos.filter((produto) => produto.id != id)

  res.status(200).json(products)
})

module.exports = routes;