import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [isRegistering, setIsRegistering] = useState(false); // Login é o padrão (false)
  const [isRecovering, setIsRecovering] = useState(false); // Padrão para recuperação de senha
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fade, setFade] = useState("fade-in");

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    alert("Enviando os dados: " + username + " - " + password);
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
    } else {
      alert("Registrando: " + username + " - " + email);
    }
  };

  const handleRecoverSubmit = (event) => {
    event.preventDefault();
    alert("Instruções para recuperação de senha enviadas para: " + email);
  };

  const toggleForm = (formType) => {
    setFade("fade-out");
    setTimeout(() => {
      if (formType === "register") {
        setIsRegistering(true);
        setIsRecovering(false);
      } else if (formType === "recover") {
        setIsRegistering(false);
        setIsRecovering(true);
      } else {
        setIsRegistering(false);
        setIsRecovering(false);
      }

      setEmail("");
      setUserName("");
      setPassword("");
      setConfirmPassword("");
      setFade("fade-in");
    }, 500); // Tempo da animação deve ser o mesmo que o tempo da transição no CSS
  };

  return (
    <div className="container">
      <div className={`form-wrapper`}>
        {!isRegistering && !isRecovering ? (
          <form onSubmit={handleLoginSubmit} className={`form ${fade}`}>
            <h1>Acesse o sistema</h1>
            <div className="input-field">
              <input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <FaUser className="icon" />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="icon" />
            </div>
            <div className="recall-forget">
              <label>
                <input type="checkbox" />
                Lembrar minha conta
              </label>
              <a href="#" onClick={() => toggleForm("recover")}>Esqueceu a Senha?</a>
            </div>
            <button type="submit">Entrar</button>
            <div className="signup-link">
              <p>
                Não tem conta?{" "}
                <a href="#" onClick={() => toggleForm("register")}>
                  Registrar
                </a>
              </p>
            </div>
          </form>
        ) : isRegistering ? (
          <form onSubmit={handleRegisterSubmit} className={`form ${fade}`}>
            <h1>Crie sua conta</h1>
            <div className="input-field">
              <input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <FaUser className="icon" />
            </div>
            <div className="input-field">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FaEnvelope className="icon" />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="icon" />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Confirme a Senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <FaLock className="icon" />
            </div>
            <button type="submit">Registrar</button>
            <div className="signup-link">
              <p>
                Já tem uma conta?{" "}
                <a href="#" onClick={() => toggleForm("login")}>
                  Entrar
                </a>
              </p>
            </div>
          </form>
        ) : (
          <form onSubmit={handleRecoverSubmit} className={`form ${fade}`}>
            <h1>Recuperar Senha</h1>
            <div className="input-field">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FaEnvelope className="icon" />
            </div>
            <button type="submit">Enviar Instruções</button>
            <div className="signup-link">
              <p>
                Lembrou sua senha?{" "}
                <a href="#" onClick={() => toggleForm("login")}>
                  Entrar
                </a>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
