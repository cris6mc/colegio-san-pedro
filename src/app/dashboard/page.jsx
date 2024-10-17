
"use client";
import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user, router]);

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold">Bienvenido al Dashboard</h1>
      {user && (
        <p className="mt-4 text-lg">
          Hola, {user.nombre} <br /> {user.email} <br /> {user.rol}
        </p>
      )}
    </div>
  );
}