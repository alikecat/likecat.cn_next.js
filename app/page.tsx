import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
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

function HeroSection() {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: "url('https://source.unsplash.com/random?wallpapers')",
      }}
    >
      <div className="bg-slate-900/50 backdrop-brightness-50">
        <div className="container mx-auto px-4 pt-24 md:pt-28 xl:pt-32 pb-12 md:pb-16 xl:pb-20 font-mono xl:text-2xl md:text-xl xl:leading-loose md:leading-relaxed space-y-4">
          <h1 className="font-serif xl:text-6xl lg:text-5xl md:text-4xl text-2xl font-bold tracking-widest mb-8">
            Likecat.cn
          </h1>
          <p>
            🚀 Greetings, cosmic wanderers! 🌌 Step into the cosmic construction
            site of my upcoming personal website – a digital universe in the
            making! 🌐 Currently, it’s a canvas waiting for strokes of
            creativity and your stellar suggestions.
          </p>
          <p>
            🌟 What cosmic wonders should this cyber sanctuary behold? That’s
            where you come in! Your ingenious ideas can turn this digital
            playground into a constellation of captivating experiences – be it
            interactive marvels, mind-bending graphics, or a dedicated space for
            the weirdest cat videos in the cosmos.
          </p>
          <p>
            📧 Shoot your suggestions my way at{" "}
            <a
              href="mailto:a@likecat.cn"
              className="text-blue-200 underline hover:text-blue-300 active:text-blue-400 transition ease-in-out"
            >
              a@likecat.cn
            </a>
            , and let the brainstorming cosmic energy flow! Your imagination
            might just be the nebula that sparks this website’s celestial
            transformation. 🎨💡
          </p>
          <p>
            🙏 A galaxy-sized thank you for dropping by this construction zone.
            Your virtual hard hat and imaginative contributions are the stardust
            that propels this project forward! Brace yourself for the cosmic
            reveal – it’s bound to be legendary! 🚧✨
          </p>
          <div className="space-x-4 pt-8">
            <Link href={"about"}>
              <button className="border rounded-md font-sans font-semibold px-4 py-2 hover:bg-white/10 active:bg-white/20 hover:scale-105 active:scale-110 transition ease-in-out">
                About Me
              </button>
            </Link>
            <Link href={"mailto:a@likecat.cn"}>
              <button className="border rounded-md font-sans font-semibold px-4 py-2 hover:bg-white/10 active:bg-white/20 hover:scale-105 active:scale-110 transition ease-in-out">
                Mail Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function InterestBar() {
  return (
    <div className="container mx-auto px-4 mt-8 text-xl md:text-2xl xl:text-3xl">
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
