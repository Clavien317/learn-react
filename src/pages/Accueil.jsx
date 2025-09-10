import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Accueil() {

    const navigate = useNavigate()

    useEffect(()=>
    {
        // list
    },[])


  return (
    <div className='accueil'>
        <h1>Bienvenu dans notre site</h1>

        <br />
        <button onClick={()=>navigate("/produit")}>Produit</button>
    </div>
  )
}

export default Accueil