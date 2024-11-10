"use client";
import { React, useEffect, useState } from "react";
import Activities from "@/components/Activities";
import GradientLabel from "@/components/label";

export default function PageLapBook() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <GradientLabel
        title={"LAP-BOOK"}
        width={"80%"}
        textAlign={"center"}
        justifyContent={"center"}
      />
      <h3 className="text-center p-4 sm:p-6">
        Misión: Concientización del medio ambiente
      </h3>
      <div className="flex flex-col items-center">
        <Activities coleccion="LapBooks" />
      </div>
    </div>
  );
}
