import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { gamesData } from "../gamesData";

export default function SearchResults() {
  const [params] = useSearchParams();
  const query = params.get("game")?.toLowerCase() || "";

  const [results, setResults] = useState([]);

  useEffect(() => {
    const filtered = gamesData.filter((game) =>
      game.title.toLowerCase().includes(query)
    );

    setResults(filtered);
  }, [query]);

  return (
    <div className="page-container text-white mt-14">
      <h1 className="text-3xl font-bold mb-8">
        Resultados para: "{query}"
      </h1>

      <div className="card-grid">
        {results.map((game) => (
          <Link key={game.id} to={`/jogo/${game.id}`}>
            <div className="game-card">
              <div className="image-container">
                <img src={game.cover} className="game-card-image" />
              </div>

              <div className="game-card-content">
                <h2 className="game-card-title">{game.title}</h2>
                <p className="text-gray-300 text-sm">
                  R$ {game.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {results.length === 0 && (
        <p className="text-gray-400 mt-10 text-lg">
          Nenhum jogo encontrado 😢
        </p>
      )}
    </div>
  );
}
