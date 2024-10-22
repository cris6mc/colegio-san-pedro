"use client";

import { React, useEffect, useState } from "react";
import { db } from "@/lib/firebase"; // Adjust the import according to your firebase configuration
import { collection, getDocs } from "firebase/firestore";
import { useUser } from "@/context/UserContext";
import SliderFeria from "@/components/SliderFeria";


export default function PageFeria() {
  const [cartografias, setCartografias] = useState([]);
  const { user, loading } = useUser(); // Acceder al usuario desde el contexto
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleCloseEdit = () => {
    setShowEdit(false);
  };

  useEffect(() => {
    const fetchCartografias = async () => {
      const querySnapshot = await getDocs(collection(db, "cartografias"));
      const cartografiaList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCartografias(cartografiaList);
    };

    fetchCartografias();
  }, []);


  return (
    <div>
      <SliderFeria />  
    </div>
  );
}