"use client";
import { useState, useRef } from "react";
import { db, storage } from "@/lib/firebase"; // Importar Firebase Storage
import { collection, addDoc } from "firebase/firestore"; // Importar funciones de Firebase Firestore
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Importar funciones de Firebase Storage

function AddCard({ Coleccion }) {
  const [file, setFile] = useState(null);
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    if (file) {
      setLoading(true);
      setSuccess(false);
      try {
        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        console.log(url);

        // Crear un nuevo documento en Firestore
        await addDoc(collection(db, Coleccion), {
          title: Title,
          description: Description,
          imageURL: url,
          link: Link,
        });

        // Limpiar el formulario
        setTitle("");
        setDescription("");
        setLink("");
        setFile(null);
        fileInputRef.current.value = null; // Resetear el input de archivo
        setSuccess(true);
      } catch (error) {
        console.error("Error uploading file and saving activity: ", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form className="space-y-6 w-full" onSubmit={handleSubmit}>
      <div>
        <label className="text-gray-400">Insertar imágen:</label>
        <input
          type="file"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="overflow-hidden w-full text-ellipsis"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        />
      </div>
      <div>
        <label className="block text-black font-bold">Titulo</label>
        <input
          type="text"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded bg-white bg-opacity-20 text-black placeholder-black"
          placeholder="Titulo"
          required
        />
      </div>
      <div>
        <label className="block text-black font-bold">Descripcion</label>
        <input
          type="text"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 rounded bg-white bg-opacity-20 text-black placeholder-black"
          placeholder="Descripcion"
          required
        />
      </div>
      <div>
        <label className="block text-black font-bold">Link</label>
        <input
          type="text"
          value={Link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full p-2 rounded bg-white bg-opacity-20 text-black placeholder-black"
          placeholder="Link"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
        disabled={loading}
      >
        {loading ? "Cargando..." : "Guardar"}
      </button>
      {success && (
        <div className="text-green-500 font-bold">¡Guardado con éxito!</div>
      )}
    </form>
  );
}

export default AddCard;
