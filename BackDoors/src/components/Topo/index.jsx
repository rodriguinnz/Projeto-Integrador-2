import { Link, useNavigate } from "react-router-dom";
import logo from "/Logo.png";
import search from "../../assets/search.png";
import cart from "../../assets/Cart.png";
import user from "../../assets/User.png";
import { FaSignInAlt } from "react-icons/fa";
import { useState } from "react";

export default function Topo() {
  const [showSearch, setShowSearch] = useState(false);
  const [term, setTerm] = useState("");

  const navigate = useNavigate();

  const handleKey = (e) => {
    if (e.key === "Enter" && term.trim() !== "") {
      navigate(`/buscar?game=${term}`);
      setShowSearch(false);
    }
  };

  return (
    <header className="topo">
      <Link to="/" className="logo-area">
        <img src={logo} className="logo" />
        <h1 className="logo-text">Trapdoor</h1>
      </Link>

      <nav className="menu">
        <Link to="/" className="menu-link">Início</Link>
        <Link to="/carrinho" className="menu-link">Carrinho</Link>
        <Link to="/usuario" className="menu-link">Usuário</Link>
        <Link to="/signin" className="menu-link">Login</Link>
      </nav>

      <div className="icons">
        {/* Botão para abrir o input */}
        <img
          src={search}
          alt="Buscar"
          className="icon"
          onClick={() => setShowSearch(!showSearch)}
        />

        {showSearch && (
          <input
            type="text"
            className="search-input"
            placeholder="Buscar jogos..."
            autoFocus
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            onKeyDown={handleKey}
          />
        )}

        <Link to="/carrinho">
          <img src={cart} className="icon" />
        </Link>

        <Link to="/usuario">
          <img src={user} className="icon" />
        </Link>

        <Link to="/signin">
          <FaSignInAlt className="icon text-white text-xl" />
        </Link>
      </div>
    </header>
  );
}
