import React, { useState } from "react";
import axios from "axios";

const Inscription = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/users", {
        email,
        password,
        first_name: firstName,
      });
      console.log(response.data);

      localStorage.setItem("userId", response.data.userId);
      const userId = localStorage.getItem("userId");
      console.log("id user: ", userId);
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
    }
    setEmail("");
    setPassword("");
    setFirstName("");
  };
  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <label>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Mot de passe:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Prénom:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Inscription;
