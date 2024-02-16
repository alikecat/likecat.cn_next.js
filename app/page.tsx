export default function Home() {
  return (
    <body>
      <header>
        <nav className="backdrop-brightness-75 backdrop-blur-md fixed w-full z-10">
          <div className="container mx-auto px-4 flex justify-between">
            <div className="flex flex-col py-2 text-center">
              <span className="font-serif text-2xl font-bold tracking-wider">
                Likecat
              </span>
              <span className="font-mono text-md">Bojun Zhang</span>
            </div>
            <div className="flex space-x-4 text-xl py-4">
              <button className="p-2 rounded-md text-blue-200 hover:text-white hover:bg-slate-500/20 active:bg-slate-500/50 transition ease-in-out">
                Home
              </button>
              <button className="p-2 rounded-md text-blue-200 hover:text-white hover:bg-slate-700 active:bg-slate-600 transition ease-in-out">
                About
              </button>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="bg-gradient-to-b from-sky-500 to-indigo-500">
          <div
            className="bg-cover"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/random?wallpapers')",
            }}
          >
            <div className="bg-slate-900/50 backdrop-brightness-50">
              <div className="container mx-auto px-4 pt-24 md:pt-28 xl:pt-32 pb-12 md:pb-16 xl:pb-20 font-mono xl:text-2xl md:text-xl xl:leading-loose md:leading-relaxed space-y-4">
                <h1 className="font-serif xl:text-6xl lg:text-5xl md:text-4xl text-2xl font-bold tracking-widest mb-8">
                  Likecat.cn
                </h1>
                <p>
                  🚀 Greetings, cosmic wanderers! 🌌 Step into the cosmic
                  construction site of my upcoming personal website – a digital
                  universe in the making! 🌐 Currently, it’s a canvas waiting
                  for strokes of creativity and your stellar suggestions.
                </p>
                <p>
                  🌟 What cosmic wonders should this cyber sanctuary behold?
                  That’s where you come in! Your ingenious ideas can turn this
                  digital playground into a constellation of captivating
                  experiences – be it interactive marvels, mind-bending
                  graphics, or a dedicated space for the weirdest cat videos in
                  the cosmos.
                </p>
                <p>
                  📧 Shoot your suggestions my way at a@likecat.cn, and let the
                  brainstorming cosmic energy flow! Your imagination might just
                  be the nebula that sparks this website’s celestial
                  transformation. 🎨💡
                </p>
                <p>
                  🙏 A galaxy-sized thank you for dropping by this construction
                  zone. Your virtual hard hat and imaginative contributions are
                  the stardust that propels this project forward! Brace yourself
                  for the cosmic reveal – it’s bound to be legendary! 🚧✨
                </p>
                <div className="space-x-4 flex">
                  <button className="border rounded-md font-sans font-semibold px-4 py-2 hover:bg-slate-500/20 active:bg-slate-500/50 hover:scale-105 active:scale-110 transition ease-in-out">
                    About Me
                  </button>
                  <button className="border rounded-md font-sans font-semibold px-4 py-2 hover:bg-slate-500/20 active:bg-slate-500/50 hover:scale-105 active:scale-110 transition ease-in-out">
                    Mail Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
