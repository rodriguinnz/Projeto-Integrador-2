import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import {
  FaArrowLeft,
  FaCog,
  FaStar,
  FaTrophy,
  FaGamepad,
  FaClock,
  FaSignOutAlt
} from "react-icons/fa";

export default function UserPage() {
  const { user } = useAuth();
  const avatar = user?.photoURL || "/src/assets/placeholder_avatar.jpg";
  const name = user?.displayName || user?.email?.split("@")[0];
  const email = user?.email;

  async function logout() {
    await signOut(auth);
    window.location.href = "/signin";
  }

  return (
    <div className="user-page">

      {/* TOPO */}
      <header className="user-topbar">
        <div className="top-left">
          <Link to="/">
            <button className="config-btn">
              <FaArrowLeft />
            </button>
          </Link>

          <div className="user-identity">
            <img src={avatar} alt="avatar" className="user-avatar" />
            <div>
              <h2 className="user-name">{name}</h2>
              <p className="user-info-text">
                {email} | <span className="status-online">Online</span>
              </p>
            </div>
          </div>
        </div>

        <div className="top-right">
          <button className="icon-btn">
            <FaCog />
          </button>

          <button className="config-btn text-red-400" onClick={logout}>
            <FaSignOutAlt />
          </button>
        </div>
      </header>

      {/* CONTEÚDO */}
      <div className="user-layout">
        <main className="user-library">
          <div className="library-header">
            <h2 className="library-title">Biblioteca recente</h2>
          </div>

          {/* JOGOS */}
          <div className="library-grid">

            <div className="usercard group">
              <img src="/src/assets/Oblivion.png" className="usercard-img" />
            </div>

            <div className="usercard group">
              <img src="/src/assets/DoomEternal.png" className="usercard-img" />
            </div>

            <div className="usercard group">
              <img src="/src/assets/Starfield.png" className="usercard-img" />
            </div>

          </div>
        </main>

        {/* SIDEBAR */}
        <aside className="user-sidebar">
          <div className="stat-list">
            <div className="stat-item">
              <FaStar className="stat-icon text-yellow-400" />
              <span>Nível: 24</span>
            </div>
            <div className="stat-item">
              <FaTrophy className="stat-icon text-orange-400" />
              <span>Conquistas: 47</span>
            </div>
            <div className="stat-item">
              <FaGamepad className="stat-icon text-green-400" />
              <span>Jogos: 12</span>
            </div>
            <div className="stat-item">
              <FaClock className="stat-icon text-blue-400" />
              <span>Horas jogadas: 326h</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
