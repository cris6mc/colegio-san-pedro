import Contact from "@/components/Contact";
import Image from "next/image";
import Link from "next/link";

export default function ContactosPage() {
    return (
        <div className="flex flex-col justify-center items-center">
            <Contact/>
            <h2 className="text-2xl font-bold">
                Ubicación
            </h2>
                <Link href="https://maps.app.goo.gl/g857jdA7Kz5LWqn99"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src="/images/mapa.png" alt="Logo" width={600} height={400} className="border-4 hover:border-green-500  border-blue-500"/>
                </Link>
        </div>
    )
}