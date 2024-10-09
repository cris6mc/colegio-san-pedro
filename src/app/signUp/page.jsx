"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

export default function SignUpPage({ params }) {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (params.id) {
            fetch(`/api/users/${params.id}`)
                .then((res) => res.json())
                .then((data) => {
                    setName(data.name)
                    setEmail(data.email)
                    setPassword(data.password)
                })
        }
    }, [])

    // const onSubmit = async (e) => {
    //     e.preventDefault()
    //     if (password !== confirmPassword) {
    //         setMessage('Las contraseñas no coinciden');
    //         return;
    //     }

    //     if (params.id) {
    //         const res = await fetch(`/api/users/${params.id}`, {
    //             method: "PUT",
    //             body: JSON.stringify({ name, email, password }),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         const data = await res.json()
    //         console.log(data)
    //     } else {
    //         const res = await fetch('/api/users', {
    //             method: "POST",
    //             body: JSON.stringify({ name, email, password }),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         const data = await res.json();
    //         setMessage("Se creo el usuario exitosamente")
    //     }
    //     router.refresh()
    //     router.push('/');
    // }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-red-500">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-8 w-80">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
                <div className="text-white text-center">{message}</div>
                <form>
                    <div className="mb-4">
                        <label className="block text-white mb-2">Tu Nombre:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 rounded bg-white bg-opacity-10 text-white focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-white mb-2">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 rounded bg-white bg-opacity-10 text-white focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-white mb-2">Contraseña:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 rounded bg-white bg-opacity-10 text-white focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white mb-2">Contraseña:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full p-2 rounded bg-white bg-opacity-10 text-white focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full p-2 rounded bg-white bg-opacity-30 text-white hover:bg-opacity-50 transition duration-300"
                        // onClick={onSubmit}
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
}