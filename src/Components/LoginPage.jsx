import React, { useState } from "react";
import './LoginPage.css'
import { useNavigate } from "react-router-dom";


const LoginPage = () => {

const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 
   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
if (!email.includes("@")) {
    setError("Invalid email format");
    return;
  }
  if (!password) {
    setError("Password cannot be empty");
    return;
  }
  setError("");
  setLoading(true);

  
    setTimeout(() => {
      if (email === "abc@gmail.com" && password === "password") {
        navigate("/dashboardpage"); 
      } else {
        setError("Invalid email or password");
      }
      setLoading(false);
    }, 2000);
};

  return (
   <div className="login-container">
    <div className="login-card">
      <h1>Login Page</h1>
    <form onSubmit={handleSubmit} className="login-form">
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
    {error && <p style={{ color: "red" }}>{error}</p>}
    <button type="submit" className="login-button">{loading ? "Loading..." : "Login"}</button>
  </form>
  </div>
  </div>
  );
};

export default LoginPage;
