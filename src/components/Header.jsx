import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        🧸 BrinqueKids
      </div>

      <nav>
        <a href="/">Início</a>
        <a href="/brinquedos">Brinquedos</a>
        <a href="/contato">Contato</a>
        <a href="/login">Login</a>
      </nav>

      <div className="carrinho">
        🛒 Carrinho
      </div>
    </header>
  )
}

export default Header