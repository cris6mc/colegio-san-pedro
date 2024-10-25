"use client";
import { React, useEffect, useState } from "react";
import Activities from "@/components/Activities";

export default function PageLapBook() {

  return (
    <div>
      <div className='py-8 mx-10 h-18 items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400'>
        <h1 className="text-5xl font-bold text-center text-white">LAP BOOK</h1>
      </div>
      <h2 className="text-center p-6">
        Misión: Concientización del medio ambiente
      </h2>
      <Activities coleccion="lapbooks" />
    </div>
  );
}
