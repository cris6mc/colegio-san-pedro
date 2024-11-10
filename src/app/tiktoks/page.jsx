import Activities from "@/components/Activities";
import GradientLabel from "@/components/label";

export default function Tikchikilab() {
  return (
    <div className="flex flex-col justify-center items-center">
      <GradientLabel
        title={"TIK-CHIKI-LAB"}
        width={"80%"}
        textAlign={"center"}
        justifyContent={"center"}
      />
      <h3 className="text-center p-4 sm:p-6">
        Misión: Concientización del medio ambiente
      </h3>
      <Activities coleccion={"TikToks"} />
    </div>
  );
}
