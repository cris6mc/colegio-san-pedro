"use client";
import Link from "next/link";
import { FaFacebook, FaSearch, FaTiktok, FaList } from "react-icons/fa";
import { useUser } from "@/context/UserContext";
import { useState, useEffect } from 'react';
import { db, auth, storage } from '@/lib/firebase'; // Asegúrate de tener configurado Firebase y exportado db y auth
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore'; // Importar funciones desde firebase/firestore
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Importar funciones de Firebase Storage


export default function Contacts() {
  const { user, loading } = useUser(); // Acceder al usuario desde el contexto
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [userList, setUserList] = useState([]);
  const [newUser, setNewUser] = useState({ nombre: '', email: '', rol: '', password: '' });
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = await getDocs(collection(db, 'usuarios'));
        const usersData = usersCollection.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUserList(usersData);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsers();
  }, []);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowForm(false);
  };

  const handleAddUserClick = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleRoleChange = (role) => {
    setNewUser({ ...newUser, rol: role });
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      if (!file) {
        console.error("No file selected");
        return;
      }
      const createdUser = await createUserWithEmailAndPassword(auth, newUser.email, newUser.password);

      const storageRef = ref(storage, `users/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      console.log(url);

      await setDoc(doc(db, 'usuarios', createdUser.user.uid), {
        id: createdUser.user.uid,
        nombre: newUser.nombre,
        email: newUser.email,
        rol: newUser.rol,
        imageURL: url
      });

      // Actualizar la lista de usuarios en el estado
      setUserList([...userList, { id: createdUser.user.uid, ...newUser }]);
      setShowForm(false);
      setNewUser({ nombre: '', email: '', rol: '', password: '' });
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };


  const handleRoleUpdate = async (userId, newRole) => {
    try {
      await setDoc(doc(db, 'usuarios', userId), { rol: newRole }, { merge: true });
      setUserList(userList.map(user => user.id === userId ? { ...user, rol: newRole } : user));
    } catch (error) {
      console.error("Error updating user role: ", error);
    }
  };

  const [selectedUser, setSelectedUser] = useState(null);

  const handleRoleButtonClick = (userId) => {
    setSelectedUser(userId);
  };

  const handleRoleSelect = (role) => {
    if (selectedUser) {
      handleRoleUpdate(selectedUser, role);
      setSelectedUser(null);
    }
  };

  return (
    <>
      <footer className={`py-1 ${user ? 'bg-green-500' : 'bg-blue-100'} text-gray-500`}>
        <div className="container mx-auto flex justify-end items-center">
          {user && user.rol === 'admin' && (
            <button
              className="bg-blue-600 text-white font-bold px-4 py-2 rounded-full mr-4"
              onClick={handleButtonClick}
            >
              <FaList />
            </button>
          )}
          <Link href="/login">
            <button className="bg-blue-600 text-white font-bold px-4 py-2 rounded-full mr-4">
              Intranet
            </button>
          </Link>
          <div className="flex items-center space-x-4">
            <FaFacebook size={20} color="grey" />
            <FaTiktok size={20} color="grey" />
          </div>
        </div>
      </footer>

      {showModal && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg max-h-full overflow-y-auto">
            <div className="flex flex-row mb-3 w-full justify-between items-center">
              <h2 className="text-xl font-bold justify-center">Colaboradores</h2>
              <button
                className="bg-red-600 text-white px-3 py-1 rounded-full text-xl font-bold"
                onClick={handleCloseModal}
              >
                X
              </button>
            </div>
            <button
              className="flex justify-center mt-4 bg-green-600 text-white px-4 py-2 rounded"
              onClick={handleAddUserClick}
            >
              Añadir nuevo usuario
            </button>

            {showForm && (
              <form onSubmit={handleAddUser} className="mt-4">
                <div>
                  <label className="block text-gray-500">Imagen:</label>
                  <input type="file" onChange={handleFileChange} />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-500">Nombre:</label>
                  <input
                    type="text"
                    name="nombre"
                    value={newUser.nombre}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 rounded"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-500">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 rounded"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-500">Rol:</label>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      className={`px-4 py-2 rounded ${newUser.rol === 'admin' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
                      onClick={() => handleRoleChange('admin')}
                    >
                      Admin
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 rounded ${newUser.rol === 'profesor' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
                      onClick={() => handleRoleChange('profesor')}
                    >
                      Profesor
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 rounded ${newUser.rol === 'visitante' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
                      onClick={() => handleRoleChange('visitante')}
                    >
                      Visitante
                    </button>
                  </div>
                </div>
                <div className="mb-2">
                  <label className="block text-gray-500">Contraseña:</label>
                  <input
                    type="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 rounded"
                    required
                  />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                  Crear Usuario
                </button>
              </form>
            )}
            <div className="w-full border-t border-gray-500 my-4"></div>
            <ul className="">
              {userList.map((userItem) => (
                <li key={userItem.id} className="flex mb-2">
                  <div className="flex flex-1 flex-row justify-between items-center">
                    <div className="flex flex-col m-3">
                      <h3 className="font-bold">{userItem.nombre} <span className="font-medium text-red-900">({userItem.rol})</span> </h3>
                      <span>{userItem.email}</span>
                    </div>
                    <button
                      className="bg-blue-600 text-white px-2 py-1 rounded"
                      onClick={() => handleRoleButtonClick(userItem.id)}
                    >
                      Cambiar Rol
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {selectedUser && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-500 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Selecciona un nuevo rol</h2>
            <div className="flex space-x-2">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => handleRoleSelect('admin')}
              >
                Admin
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => handleRoleSelect('profesor')}
              >
                Profesor
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => handleRoleSelect('visitante')}
              >
                Visitante
              </button>
            </div>
            <button
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
              onClick={() => setSelectedUser(null)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
