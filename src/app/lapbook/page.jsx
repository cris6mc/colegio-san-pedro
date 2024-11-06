"use client";
import { React, useEffect, useState } from "react";
import Activities from "@/components/Activities";

export default function PageLapBook() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="w-full py-8 mx-10 h-18 items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400">
        <h1 className="w-full text-5xl font-bold text-center text-white">
          LAP BOOK
        </h1>
      </div>
      <h2 className="text-center p-6">
        Misión: Concientización del medio ambiente
      </h2>
      <div className="flex flex-col items-center">
        <Activities coleccion="lapbooks" />
      </div>
    </div>
  );
}
