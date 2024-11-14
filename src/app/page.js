import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import Slider from "@/components/Slider";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Slider />
      <div className="my-14"></div>
      <Welcome />
      <div className="my-14"></div>
      <Activities coleccion={"Actividades Institucionales "} />
      <div className="my-14"></div>
      <Contact />
    </div>
  );
}
