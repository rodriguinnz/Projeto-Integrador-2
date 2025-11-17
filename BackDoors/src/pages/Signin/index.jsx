import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SignIn.css";
import trapdoorBanner from "/src/assets/trapdoorbanner.png";

import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();
    setError("");

    if (!/\S+@\S+\.\S+/.test(email))
      return setError("E-mail inválido.");

    if (user.length < 3)
      return setError("Nome de usuário muito curto.");

    if (senha.length < 6)
      return setError("A senha precisa ter pelo menos 6 caracteres.");

    if (senha !== confirmar)
      return setError("As senhas não coincidem.");

    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      navigate("/usuario");
    } catch (err) {
      setError("Erro ao criar conta. Verifique o e-mail.");
    }

    setLoading(false);
  }

  async function registerGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/usuario");
    } catch (err) {
      setError("Erro ao criar conta com Google.");
    }
  }

  return (
    <div className="signup-wrapper">
      <div className="signup-left">
        <div className="signup-box">

          <img src="/Logo.png" className="signup-logo" />

          <h2 className="signup-title">Criar conta</h2>

          <form onSubmit={handleRegister}>

            <input
              type="email"
              placeholder="E-mail"
              className="input-box"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Nome de usuário"
              className="input-box"
              onChange={(e) => setUser(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Senha"
              className="input-box"
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Confirmar senha"
              className="input-box"
              onChange={(e) => setConfirmar(e.target.value)}
              required
            />

            {error && <p className="error-message">{error}</p>}

            <button type="button" className="social facebook">
              <FaFacebookF /> <span>Facebook</span>
            </button>

            <button type="button" className="social google" onClick={registerGoogle}>
              <FcGoogle className="google-icon" /> 
              <span>Google</span>
            </button>

            <button type="button" className="social apple">
              <FaApple /> <span>Apple</span>
            </button>

            <div className="remember-area">
              <input type="checkbox" id="save" />
              <label htmlFor="save">Salvar dados</label>
            </div>

            <button type="submit" className="btn-register" disabled={loading}>
              {loading ? "Carregando..." : "CADASTRAR →"}
            </button>

          </form>

          <div className="signup-links">
            <p>NÃO CONSEGUE CRIAR CONTA?</p>
            <Link to="/signin">JÁ TEM UMA CONTA?</Link>
          </div>
        </div>
      </div>

      <div className="signup-right">
        <img src={trapdoorBanner} className="signup-banner" />
      </div>
    </div>
  );
}
