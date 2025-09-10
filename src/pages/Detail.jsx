import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Detail() {

    const {id} = useParams()
    const router = useNavigate()
    
  return (
    <div>Detail de produit {id}
    
    <br />
    <br />
    <button onClick={()=>router("/produit")}>Produit </button>
    </div>
  )
}

export default Detail