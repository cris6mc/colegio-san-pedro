import Activities from "@/components/Activities";

export default function Tikchikilab() {
  return (
    <div className="flex flex-col items-center">
      <div className='py-8 mx-10 h-18 items-center w-[80vw]  bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400'>
        <h1 className="text-5xl font-bold text-center text-white">TIKTOKEANDO CON EL AMBIENTE</h1>
      </div>
      <h2 className="text-center p-6">
        Misión: Concientización del medio ambiente
      </h2>
      <Activities coleccion={"tiktoks"} />
    </div>
  );
}