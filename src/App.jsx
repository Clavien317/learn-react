import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Produit from './pages/Produit'
import Commande from './pages/Commande'
import Accueil from './pages/Accueil'
import Detail from './pages/Detail'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path="/produit" element={<Produit />} />
          <Route path="/produit/:id" element={<Detail />} />
          <Route path="/commande" element={<Commande />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App