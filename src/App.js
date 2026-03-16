import './App.css'
import logo from './assets/logo.png'

export default function SandalwoodLandingPage() {
  const heroImage = "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80";
  const logoImage = logo;

  const stats = [
    { value: "Association", label: "Community-led platform" },
    { value: "Coming Soon", label: "Official web portal" },
    { value: "Forest Heritage", label: "Sandalwood & red sanders" },
  ];

  const highlights = [
    {
      title: "Member-Centered Vision",
      desc: "Designed to represent growers, plantation stakeholders, and forest-based livelihoods with trust and dignity.",
    },
    {
      title: "Indian Cooperative Feel",
      desc: "A structured homepage with strong navigation, leadership tone, and association-focused storytelling inspired by regional institutional websites.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f1e4] text-[#2d2418]">
      <header className="sticky top-0 z-50 border-b border-[#d8c39a] bg-[#f8f1df]/95 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden">
              <img src={logoImage} alt="Sandalwood and Red Sanders Growers Association logo" className="h-full w-full object-contain" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.28em] text-[#8a5a19]">Official Association Portal</div>
              <div className="text-lg font-black leading-tight text-[#1e4a2a] md:text-xl">
                Sandalwood and Red Sanders Growers Association
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-7 lg:flex">
            <button className="rounded-full bg-[#8d4b1f] px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-[#a85a26]">
              Coming Soon
            </button>
          </nav>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-[#8c2f1c] via-[#cfad4e] to-[#1f5b2b]" />
      </header>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12351b]/90 via-[#1a4724]/72 to-[#4d2a15]/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,213,110,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(141,75,31,0.2),transparent_25%)]" />

        <div className="relative grid min-h-[88vh] items-center gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black uppercase leading-[0.95] text-white drop-shadow-2xl md:text-6xl xl:text-7xl">
              Sandalwood & Red Sanders
              <span className="mt-2 block text-[#f6d37a]">Growers Association</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#f6edde] md:text-xl">
              Building a dignified digital presence for growers, communities, and stakeholders.
              Our official website is being prepared with an institutional, agriculture-focused style that reflects Indian values, forestry heritage, and Telangana identity.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#c89b35] px-7 py-3.5 text-base font-black text-[#2a1e10] shadow-xl transition hover:-translate-y-0.5 hover:bg-[#dfb14c]">
                Website Coming Soon
              </button>
              <button className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-bold text-white backdrop-blur-md transition hover:bg-white/20">
                Explore Association Vision
              </button>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 text-white shadow-xl backdrop-blur-md"
                >
                  <div className="text-2xl font-black text-[#f8d57b]">{item.value}</div>
                  <div className="mt-1 text-sm leading-6 text-[#f8f0e1]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-[2rem] border border-[#f1d79d]/35 bg-[#f8f1e8]/92 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <div className="rounded-[1.6rem] border border-[#d4b26c] bg-white p-8 text-center shadow-inner">
                <div className=" flex h-32 items-center justify-center overflow-hidden rounded-full">
                  <img
                    src={logoImage}
                    alt="Sandalwood and Red Sanders Growers Association"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="mt-6 text-sm font-bold uppercase tracking-[0.35em] text-[#8d4b1f]">
                  Official Web Presence
                </div>
                <h2 className="mt-3 text-4xl font-black text-[#1e4a2a]">Coming Soon</h2>
                <p className="mt-4 text-[15px] leading-7 text-[#4e4331]">
                  A premium association website for sandalwood and red sanders growers — crafted with a formal cooperative layout, clear structure, and regional character.
                </p>
                <div className="mt-6 rounded-2xl bg-[#f7f1e3] p-4 text-left">
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a5a19]">Website Focus</div>
                  <ul className="mt-3 space-y-2 text-sm font-medium text-[#33452f]">
                    <li>• Association identity and trust</li>
                    <li>• Forestry and plantation representation</li>
                    <li>• Grower community visibility</li>
                    <li>• Telangana-inspired visual tone</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f3e8] px-6 py-16">
        <div className="">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.28em] text-[#8d4b1f]">Designed in a formal institutional style</div>
              <h3 className="mt-3 text-3xl font-black text-[#1e4a2a] md:text-4xl">A homepage structure inspired by cooperative and agricultural leadership websites</h3>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-[#dcc394] bg-white p-7 shadow-lg">
                <div className="mb-4 h-1.5 w-16 rounded-full bg-[#c89b35]" />
                <h4 className="text-2xl font-black text-[#1e4a2a]">{item.title}</h4>
                <p className="mt-4 text-[15px] leading-7 text-[#5a4c39]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#214a2b] px-6 py-14 text-white">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.3em] text-[#f4d783]">Association Message</div>
            <h3 className="mt-3 text-3xl font-black md:text-4xl">From forests to future generations</h3>
          </div>
          <p className="text-base leading-8 text-[#edf3e8] md:text-lg">
            This upcoming website is intended to reflect the strength of growers, the value of protected forest resources,
            and the long-term vision of a united association. It is being shaped as a formal, trustworthy, and culturally rooted platform.
          </p>
        </div>
      </section>
    </div>
  );
}
