import { hero_section, navLinks } from "@/constants/home";

export default function Home(props: any) {
  return (
    <main>
      {/* Header and Hero Section */}
      <section className="min-h-screen w-full flex flex-col grid-bg">
        <Navbar />
        <HeroSection />
      </section>

      {/* Skills Section */}
      <section>
        
      </section>
    </main>
  );
}

function Navbar(props: any) {
  return (
    <header className="flex justify-between p-4 px-8 text-xl bg-[#dddddd44] dark:bg-[#00000033]">
      <h1>ABHAY BISHT</h1>
      <nav className="flex gap-x-10">
        {navLinks.map((item: any, index: number) => (
          <a
            key={index}
            className="dark:text-gray-100 font-thin"
            href={item.url}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function HeroSection(props: any) {
  return (
    <section className="flex-1 flex flex-col justify-center items-center gap-y-16">
      {/* Heading */}
      <div className="flex flex-col gap-y-5">
        <h1 className="text-6xl">
          {hero_section.heading.map((item: string, index: number) => (
            <div className="text-center" key={index}>
              {item}
            </div>
          ))}
        </h1>
        <h2 className="text-2xl">
          {hero_section.subheading.map((item: string, index: number) => (
            <div className="text-center" key={index}>
              {item}
            </div>
          ))}
        </h2>
      </div>
      {/* CTA */}
      <div className="flex flex-col gap-y-5">
        <button className="active:scale-95 text-xl px-8 transition-all font-extrabold py-3 rounded-full border-2 dark:border-gray-200 border-gray-500 hover:bg-gray-800 hover:text-gray-100 dark:hover:bg-white dark:hover:text-gray-800">
          {hero_section.CTA}
        </button>
        <a className="text-xl cursor-pointer [&>.bottom-line]:hover:scale-100 px-2">
          <div className="px-2 mb-2">{hero_section.subCTA}</div>
          <div className="bottom-line transition-transform duration-500 h-[2px] w-full scale-0 dark:bg-gray-200 bg-gray-800 rounded"></div>
        </a>
      </div>
    </section>
  );
}
