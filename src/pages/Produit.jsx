import React from 'react'
import ListProduit from '../composants/ListProduit'

function Produit() {

  const list =[
    {
      id:1,
      nom:"Carotte",
      qte: "200Kg",
      prix:2000
    },
    {
      id:2,
      nom:"COCOMBRE",
      qte: "200Kg",
      prix:7000
    },
    {
      id:3,
      nom:"Haricot",
      qte: "200Kg",
      prix:3000
    }
  ]
  return (
    <div>
      
      <h1>Produit</h1>

      <ListProduit produit={list} />
    </div>
  )
}

export default Produit