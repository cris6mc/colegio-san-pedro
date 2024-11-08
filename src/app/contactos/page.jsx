import Contact from "@/components/Contact";
import Image from "next/image";
import Link from "next/link";

export default function ContactosPage() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Contact />
      <h2 className="text-2xl font-bold mt-12 mb-8">Ubicanos</h2>
      <Link
        className="h-[500px]"
        href="https://maps.app.goo.gl/g857jdA7Kz5LWqn99"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-blue-500 w-[100vw] h-full flex justify-center items-center overflow-hidden">
          <Image
            src="/images/mapa.png"
            alt="Logo"
            width={800}
            height={400}
            className="object-cover"
          />
        </div>
      </Link>
    </div>
  );
}
