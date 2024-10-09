import Card from "@/components/Card";
import { FaFilter } from "react-icons/fa";


export default function PageLapBook() {
  return (
    <div>
      <div className='py-8 mx-10 h-18 items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400'>
        <h1 className="text-5xl font-bold text-center text-white">LAP BOOK</h1>
      </div>
      <h2 className="text-center p-6">
        Mision: Concientizacion del medio ambiente
      </h2>
      <div className="flex flex-row justify-center">
        <button className="m-2 bg-green-500 text-white py-2 px-4 rounded-full flex items-center justify-center space-x-2">
          <FaFilter />
          <span>Filtros</span>
        </button>
        <button className="m-2 bg-blue-500 text-white py-2 px-4 rounded-full space-x-2 hover:bg-red-400">
          Todos
        </button>
        <button className="m-2 bg-blue-500 text-white py-2 px-4 rounded-full space-x-2 hover:bg-red-400">
          Dentro del aula
        </button>
        <button className="m-2 bg-blue-500 text-white py-2 px-4 rounded-full space-x-2 hover:bg-red-400">
          En la I.E.
        </button>
        <button className="m-2 bg-blue-500 text-white py-2 px-4 rounded-full space-x-2 hover:bg-red-400">
          Docentes
        </button>
        <button className="m-2 bg-blue-500 text-white py-2 px-4 rounded-full space-x-2 hover:bg-red-400">
          Comunidad Local
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 p-8">
        <div className="p-4 bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400">
          <Card
            Description={"descripcion"}
            Title={"titulo"}
            ImageSRC={"/images/LOGO.png"}
            isButton={false}
          />
        </div>
        <div className="p-4 bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400">
          <Card
            Description={"descripcion"}
            Title={"titulo"}
            ImageSRC={"/images/LOGO.png"}
            isButton={false}
          />
        </div>
        <div className="p-4 bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400">
          <Card
            Description={"descripcion"}
            Title={"titulo"}
            ImageSRC={"/images/LOGO.png"}
            isButton={false}
          />
        </div>
        <div className="p-4 bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400">
          <Card
            Description={"descripcion"}
            Title={"titulo"}
            ImageSRC={"/images/LOGO.png"}
            isButton={false}
          />
        </div>
        <div className="p-4 bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400">
          <Card
            Description={"descripcion"}
            Title={"titulo"}
            ImageSRC={"/images/LOGO.png"}
            isButton={false}
          />
        </div>
        <div className="p-4 bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400">
          <Card
            Description={"descripcion"}
            Title={"titulo"}
            ImageSRC={"/images/LOGO.png"}
            isButton={false}
          />
        </div>
        <div className="p-4 bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400">
          <Card
            Description={"descripcion"}
            Title={"titulo"}
            ImageSRC={"/images/LOGO.png"}
            isButton={false}
          />
        </div>
        
      </div>
      <hr className="border-t-2 border-l-gray-500 my-4" />
      <div className="h-16"></div>
    </div>
  );
}