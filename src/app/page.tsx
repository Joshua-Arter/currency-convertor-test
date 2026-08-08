import CurrencyConverter from "@/components/CurrencyConverter";

const stats = [
  { value: "120+", label: "active markets" },
  { value: "24/7", label: "rate monitoring" },
  { value: "99.9%", label: "uptime" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.25),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_60%,_#111827_100%)] px-4 py-6 text-slate-100 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:gap-10">
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur sm:px-5">
          <div>
            <p className="text-lg font-semibold tracking-wide text-white">FutureFX Lab</p>
            <p className="text-sm text-slate-400">A personal build for future projects</p>
          </div>
          <a
            href="#converter"
            className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
          >
            Try the converter
          </a>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-slate-200 backdrop-blur">
              Built as a personal development concept for future products
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Shape ideas into polished digital experiences.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                FutureFX Lab is a personal sandbox for experimenting with live currency tools, modern UI patterns, and future-ready web experiences.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#converter"
                className="rounded-full bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300"
              >
                Launch the calculator
              </a>
              <a
                href="#benefits"
                className="rounded-full border border-white/15 bg-white/10 px-5 py-3 font-medium text-white transition hover:bg-white/20"
              >
                Explore features
              </a>
            </div>
            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="converter" className="w-full">
            <CurrencyConverter />
          </div>
        </section>

        <section id="benefits" className="grid gap-6 rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur md:grid-cols-3 md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Personal build</p>
            <p className="mt-3 text-lg font-medium text-white">A creative space for learning and refining.</p>
            <p className="mt-2 text-sm text-slate-400">Built as a flexible prototype for future apps, tools, and product ideas.</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Live experimentation</p>
            <p className="mt-3 text-lg font-medium text-white">Testing real-world data in a practical way.</p>
            <p className="mt-2 text-sm text-slate-400">This project explores how live exchange-rate data can power user-friendly interfaces and future features.</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Future ready</p>
            <p className="mt-3 text-lg font-medium text-white">A foundation for bigger ideas.</p>
            <p className="mt-2 text-sm text-slate-400">The structure is flexible enough to evolve into client projects, side products, or new portfolio concepts.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
