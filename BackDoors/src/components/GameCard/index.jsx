import { FaWindows, FaClock, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function GameCard({ title, discount, image }) {
  const [favorited, setFavorited] = useState(false);
  const randomPrice = (Math.random() * (300 - 20) + 20).toFixed(2);

  return (
    <div className="game-card group relative">

      {/* Steam */}
      <div className="game-card-steam">
        <span>Steam</span>
      </div>

      {/* Imagem */}
      <div className="image-container relative">
        <img src={image} alt={title} className="game-card-image" />

        {/* Favorito */}
        <button
          className={`favorite-btn ${favorited ? "favorited" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            setFavorited(!favorited);
          }}
        >
          <FaHeart />
        </button>

        {/* Carrinho DO HOVER (único) */}
        <Link to="/carrinho" className="hover-cart">
          <FaShoppingCart size={16} />
        </Link>
      </div>

      {/* Conteúdo */}
      <div className="game-card-content">
        <h3 className="game-card-title">{title}</h3>

        <div className="game-card-info">
          <div className="info-pill">Windows</div>
          <div className="info-pill">02d 01:15:12</div>
        </div>

        {/* Rodapé */}
        <div className="game-card-footer">

          {/* Desconto */}
          <span className="discount-badge">-{discount}%</span>

          {/* Botão Comprar (só preço) */}
          <Link to="/pagamento" className="buy-box">
            <span className="buy-box-price">R$ {randomPrice}</span>
          </Link>

        </div>
      </div>
    </div>
  );
}
