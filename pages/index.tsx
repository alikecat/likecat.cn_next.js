import "/app/globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection.mdx";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <HeroSection />
        <InterestBar />
      </main>
      <Footer />
    </div>
  );
}

function InterestBar() {
  return (
    <div className="container mx-auto px-4 mt-8 md:text-xl xl:text-3xl">
      <h2 className="font-bold mb-4">Things I interested</h2>
      <div className="flex space-x-4 font-mono border-y border-y-white/20 py-4">
        <div className="space-y-4">
          {" "}
          <Image
            src={"/Design_UI.jpg"}
            alt={""}
            width={600}
            height={400}
            className="rounded-md shadow-md saturate-150"
          />
          <div>Design UI</div>
        </div>
        <div className="space-y-4">
          <Image
            src={"/Write_Code.jpg"}
            alt={""}
            width={600}
            height={400}
            className="rounded-md shadow-md saturate-150"
          />
          <div>Write Code</div>
        </div>
        <div className="space-y-4">
          <Image
            src={"/Play_Game.jpg"}
            alt={""}
            width={600}
            height={400}
            className="rounded-md shadow-md saturate-150"
          />
          <div>Play Game</div>
        </div>
      </div>
    </div>
  );
}
