import React from 'react'
import { useNavigate } from 'react-router-dom'

function ListProduit({produit}) {

  const router = useNavigate()

  return (
    <div>ListProduit
        <button onClick={()=>router("/")}>Accueil</button>
        <ul>
            {
                produit.map((item,index)=>
                {
                    return(
                        <div key={index} style={{marginTop:"4vh"}}>
                            <li>
                                Designation : {item.nom}
                            </li>

                            <li>
                                Quantite : {item.qte}
                            </li>

                            <li>
                                Prix : {item.prix} Ar
                            </li>

                            <button onClick={()=>router(`/produit/${item.id}`)}>Detail</button>
                        </div>
                    )
                })
            }
            <li></li>
        </ul>
    </div>
  )
}

export default ListProduit