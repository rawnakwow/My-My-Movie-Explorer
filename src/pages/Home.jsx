import { ArrowRight, Search, Sparkles, Star } from "lucide-react";
import { Link } from "react-router";

const Home = () => {
  const steps = [
    "Search by title",
    "Check ratings",
    "Choose where to watch",
  ];

  const features = [
    {
      title: "Live Search",
      text: "Type a title and instantly get matching shows from the TVMaze search API.",
      icon: "🔎",
    },
    {
      title: "Useful Cards",
      text: "See poster, title, rating and release year in a clean responsive card layout.",
      icon: "🎬",
    },
    {
      title: "Watch Options",
      text: "View show details and quickly open popular streaming platforms to look for a title.",
      icon: "▶️",
    },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-20 bg-zinc-950" />

        <div className="absolute -left-20 top-20 -z-10 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />

        <div className="absolute -right-20 top-0 -z-10 h-80 w-80 rounded-full bg-rose-500/15 blur-3xl" />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 text-xs font-semibold text-violet-300">
              <Sparkles size={14} />
              Your next watch starts here
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Discover stories worth{" "}
              <span className="text-violet-400">watching.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Browse popular shows, search by title, check ratings and release
              dates, view detailed information, and explore streaming options.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/movies"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500"
              >
                Explore Movies
                <ArrowRight size={18} />
              </Link>

              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-semibold text-zinc-200 transition hover:bg-white/5"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-violet-500/10 blur-3xl" />

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="rounded-3xl border border-white/10 bg-zinc-900 p-5 sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      MovieExplorer
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-white">
                      Find something great
                    </h2>
                  </div>

                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-600/15 text-violet-300">
                    <Search />
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {steps.map((item, index) => (
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
                      Ready to browse?
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

      <section
        id="features"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-400">
            Simple movie discovery
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to explore
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            MovieExplorer uses live TVMaze data to make finding a show quick
            and easy.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6"
            >
              <div className="text-3xl">{feature.icon}</div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;