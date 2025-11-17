import { useAuth } from "../hooks/useAuth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { FaAngleDown, FaSignOutAlt } from "react-icons/fa";

export default function AccountMenu() {
  const { user } = useAuth();

  if (!user) return null;

  const avatar = user.photoURL || "/src/assets/placeholder_avatar.jpg";
  const name = user.displayName || user.email.split("@")[0];

  async function logout() {
    await signOut(auth);
    window.location.href = "/signin";
  }

  return (
    <div className="relative flex items-center gap-3 cursor-pointer group">

      <Link to="/usuario" className="flex items-center gap-2">
        <img src={avatar} className="w-9 h-9 rounded-full border border-white/30" />
        <span className="text-white font-semibold">{name}</span>
        <FaAngleDown />
      </Link>

      <div className="absolute right-0 top-11 w-40 bg-[#1c013d] border border-purple-700 rounded-xl shadow-lg p-2 opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto">
        <Link to="/usuario" className="block px-3 py-2 text-white hover:bg-purple-800 rounded-md">
          Meu perfil
        </Link>
        <button onClick={logout} className="flex items-center gap-2 px-3 py-2 text-red-400 hover:bg-red-600/20 rounded-md w-full">
          <FaSignOutAlt /> Sair
        </button>
      </div>

    </div>
  );
}
