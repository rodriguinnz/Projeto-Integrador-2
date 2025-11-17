import { Link } from "react-router-dom";
import GameCard from "../../components/GameCard";

const Home = () => {
  return (
    <div>

      {/* ========== BANNER PRINCIPAL FULL WIDTH ========== */}
      <section className="banner banner-full">
        <div className="banner-img-container">
          <img
            src="/src/assets/BannerDescontoEpico.png"
            alt="Banner Principal"
            className="banner-img"
          />
        </div>
      </section>

      {/* ========== CONTEÚDO CENTRAL (LIMITADO A 1280px) ========== */}
      <div className="page-container">

        {/* CARD JOGOS */}
        <section>
          <h2 className="title-large">Os mais esperados de 2025!</h2>
          <p className="subtitle">O que 2025 guardou para você?</p>

          <div className="card-grid">
            <Link to="/jogo/oblivion">
              <GameCard
                title="The Elder Scrolls IV: Oblivion Remastered"
                price="211,92"
                discount="20"
                image="/src/assets/Oblivion.png"
              />
            </Link>

            <Link to="/jogo/doom-eternal">
              <GameCard
                title="DOOM Eternal"
                price="181,80"
                discount="20"
                image="/src/assets/DoomEternal.png"
              />
            </Link>

            <Link to="/jogo/indiana-jones">
              <GameCard
                title="Indiana Jones and the Great Circle"
                price="279,20"
                discount="20"
                image="/src/assets/IndianaJones.png"
              />
            </Link>

            <Link to="/jogo/starfield">
              <GameCard
                title="Starfield"
                price="179,40"
                discount="40"
                image="/src/assets/Starfield.png"
              />
            </Link>
          </div>
        </section>

      </div>

      {/* ========== BANNER INTERMEDIÁRIO FULL WIDTH ========== */}
      <section className="banner banner-full">
        <div className="banner-img-container">
          <img
            src="/src/assets/BannerCupons.png"
            alt="Banner secundário"
            className="banner-img"
          />
        </div>
      </section>

      {/* ========== CONTEÚDO CENTRAL 2 (LIMITADO) ========== */}
      <div className="page-container">

        {/* Seção: Mais populares */}
        <section>
          <h2 className="title-large">Tá na hora da ação!</h2>

          <div className="card-grid">
            <Link to="/jogo/back4blood">
              <GameCard
                title="Back 4 Blood"
                price="55,99"
                discount="80"
                image="/src/assets/Back4Blood.png"
              />
            </Link>

            <Link to="/jogo/injustice2">
              <GameCard
                title="Injustice 2 - Legendary Edition"
                price="55,99"
                discount="80"
                image="/src/assets/Injustice2.png"
              />
            </Link>

            <Link to="/jogo/suicide-squad">
              <GameCard
                title="Suicide Squad: Kill the Justice League"
                price="55,99"
                discount="80"
                image="/src/assets/SuicideSquad.png"
              />
            </Link>

            <Link to="/jogo/injustice-gods">
              <GameCard
                title="Injustice: Gods Among Us Ultimate Edition"
                price="17,99"
                discount="80"
                image="/src/assets/InjusticeGodAUs.png"
              />
            </Link>

            
          </div>
        </section>

      </div>

    </div>
  );
};

export default Home;
