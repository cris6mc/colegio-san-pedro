import Image from "next/image";
import React from "react";
import Link from "next/link";
import GradientLabel from "../../components/label";
function PagePodcast() {
  return (
    <div className="flex flex-col items-center">
      <GradientLabel
        title={"PODCAST"}
        width={"80%"}
        textAlign={"center"}
        justifyContent={"center"}
      />
      <h3 className="text-center p-4 sm:p-6">
        Misión: Concientización del medio ambiente
      </h3>
      <div className="flex flex-col sm:flex-row m-4 sm:m-10 justify-center mb-20">
        <div className="flex justify-center items-center">
          <Link href="https://spotify.com" target="_blank">
            <Image
              className="rounded-2xl"
              src="/images/podcast/InstanciasPodcast.png"
              alt="Colegio"
              width={1200}
              height={120}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PagePodcast;
