import {
  ArrowRight,
  Search,
  Sparkles,
  Star,
  Play,
  Info,
} from "lucide-react";
import { Link } from "react-router";

const Home = () => {
  const steps = [
    {
      number: "01",
      title: "Search",
      text: "Search shows by title using live TVMaze data.",
    },
    {
      number: "02",
      title: "Explore",
      text: "Browse posters, ratings, release dates and genres.",
    },
    {
      number: "03",
      title: "View Details",
      text: "Open the details modal to learn more about a show.",
    },
    {
      number: "04",
      title: "Choose Where to Watch",
      text: "Explore Netflix, Prime Video, Disney+ and CBS TV.",
    },
  ];

  const features = [
    {
      title: "Live Search",
      text: "Search titles instantly using the TVMaze search API.",
      icon: <Search size={24} />,
    },
    {
      title: "Movie Details",
      text: "View ratings, release dates, genres, runtime and summaries.",
      icon: <Info size={24} />,
    },
    {
      title: "Watch Options",
      text: "Quickly open popular streaming platforms for your selected title.",
      icon: <Play size={24} />,
    },
  ];

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-20 bg-zinc-950" />

        <div className="absolute -left-24 top-20 -z-10 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />

        <div className="absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-semibold text-violet-300">
              <Sparkles size={14} />
              Find your next favorite show
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Discover stories
              <span className="block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                worth watching.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Browse popular shows, search by title, check ratings, explore
              details and discover where you can watch them.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/movies"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]"
              >
                Explore Movies
                <ArrowRight size={18} />
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-semibold text-zinc-200 transition hover:bg-white/5"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-8 -z-10 rounded-full bg-violet-600/10 blur-3xl" />

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                      MovieExplorer
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-white">
                      Find something great
                    </h2>
                  </div>

                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-600/15 text-violet-300">
                    <Search size={22} />
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    "Search by title",
                    "Check ratings",
                    "View show details",
                    "Choose where to watch",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-600 text-sm font-bold text-white">
                        0{index + 1}
                      </span>

                      <span className="text-sm font-medium text-zinc-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 p-4">
                  <div>
                    <p className="text-xs text-white/70">
                      Ready to explore?
                    </p>
                    <p className="font-semibold text-white">
                      Hundreds of titles
                    </p>
                  </div>

                  <Star className="fill-white text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — HOW IT WORKS */}
      <section
        id="how-it-works"
        className="border-b border-white/10 bg-zinc-950/70"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-400">
              How it works
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              From search to streaming in four steps
            </h2>

            <p className="mt-4 leading-7 text-zinc-400">
              Finding something to watch should be simple and fast.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition hover:-translate-y-1 hover:border-violet-500/30"
              >
                <span className="text-sm font-bold text-violet-400">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-400">
              Features
            </p>

            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to explore your next show
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-zinc-400 lg:justify-self-end">
            MovieExplorer uses live TVMaze data to provide a simple and
            responsive experience across desktop and mobile devices.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-white/10 bg-zinc-900/50 p-7 transition hover:border-violet-500/30 hover:bg-zinc-900"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-600/15 text-violet-400 transition group-hover:bg-violet-600 group-hover:text-white">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — FINAL CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-violet-500/20 bg-gradient-to-br from-violet-600/20 via-zinc-900 to-fuchsia-600/10 px-6 py-14 text-center sm:px-10 sm:py-16">
          <div className="absolute -left-20 top-0 h-60 w-60 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-fuchsia-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-violet-300">
              <Sparkles size={14} />
              Start exploring
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Your next favorite show is waiting.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-400">
              Browse hundreds of titles, search instantly and discover more
              information before choosing what to watch.
            </p>

            <Link
              to="/movies"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              Browse Movies
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;