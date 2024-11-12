"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useUser } from "@/context/UserContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const { user, logout } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Usuario autenticado:", user);
      setErrorMessage("Logueo correcto");
      router.push("/");
    } catch (error) {
      setErrorMessage("Correo o contraseña incorrectos");
      console.error("Error en el login:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-400 p-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-8 max-w-md w-full sm:w-96">
        <h2 className="text-3xl font-semibold text-white mb-4 text-center">
          Login
        </h2>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-white font-bold">Correo</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-white bg-opacity-20 text-white placeholder-white"
              placeholder="Ingresa tu correo"
              required
            />
          </div>

          <div>
            <label className="block text-white font-bold">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-white bg-opacity-20 text-white placeholder-white"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
          >
            Iniciar Sesión
          </button>
        </form>

        {user && (
          <button
            onClick={logout}
            className="w-full mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
          >
            Cerrar Sesión
          </button>
        )}
      </div>
    </div>
  );
}
