import {
  CalendarDays,
  Clock3,
  Play,
  Star,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const stripHtml = (value) => {
  if (!value) return "No overview is available for this title.";
  return value.replace(/<[^>]*>/g, "");
};

const MovieModal = ({ movie, onClose }) => {
  const [showWatchOptions, setShowWatchOptions] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key !== "Escape") return;

      if (showWatchOptions) {
        setShowWatchOptions(false);
      } else {
        onClose();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [onClose, showWatchOptions]);

  const image = movie.image?.original || movie.image?.medium;
  const rating = movie.rating?.average ?? "N/A";
  const releaseDate = movie.premiered || "Unknown";

  const streamingPlatforms = [
    {
      name: "Netflix",
      icon: "🎬",
      url: `https://www.netflix.com/search?q=${encodeURIComponent(movie.name)}`,
    },
    {
      name: "Prime Video",
      icon: "▶️",
      url: `https://www.primevideo.com/search/ref=atv_nb_sr?phrase=${encodeURIComponent(
        movie.name
      )}`,
    },
    {
      name: "Disney+",
      icon: "🍿",
      url: `https://www.disneyplus.com/search?q=${encodeURIComponent(
        movie.name
      )}`,
    },
    {
      name: "CBS TV",
      icon: "📺",
      url: "https://www.cbs.com/shows/",
    },
  ];

  return (
    <>
      <div
        className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <div className="modal-scroll relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/50">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close movie details"
            className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/65 text-white backdrop-blur transition hover:bg-black"
          >
            <X size={20} />
          </button>

          <div className="grid md:grid-cols-[280px_1fr]">
            <div className="min-h-80 bg-zinc-950 md:min-h-[500px]">
              {image ? (
                <img
                  src={image}
                  alt={`${movie.name} poster`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="grid h-full min-h-80 place-items-center text-zinc-600">
                  No image available
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-violet-400">
                Movie Details
              </p>

              <h2 className="pr-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {movie.name}
              </h2>

              <div className="mt-5 flex flex-wrap gap-3 text-sm text-zinc-300">
                <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5">
                  <Star size={16} className="text-amber-400" />
                  {rating}
                </span>

                <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5">
                  <CalendarDays size={16} />
                  {releaseDate}
                </span>

                {movie.runtime && (
                  <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5">
                    <Clock3 size={16} />
                    {movie.runtime} min
                  </span>
                )}
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-white">Overview</h3>

                <p className="mt-2 leading-7 text-zinc-400">
                  {stripHtml(movie.summary)}
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Genres
                  </p>
                  <p className="mt-1 text-sm text-zinc-200">
                    {movie.genres?.length
                      ? movie.genres.join(", ")
                      : "N/A"}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Language
                  </p>
                  <p className="mt-1 text-sm text-zinc-200">
                    {movie.language || "N/A"}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Status
                  </p>
                  <p className="mt-1 text-sm text-zinc-200">
                    {movie.status || "N/A"}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Network
                  </p>
                  <p className="mt-1 text-sm text-zinc-200">
                    {movie.network?.name ||
                      movie.webChannel?.name ||
                      "N/A"}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setShowWatchOptions(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  <Play size={16} />
                  Watch Now
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:bg-white/5"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showWatchOptions && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/75 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowWatchOptions(false);
            }
          }}
        >
          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-zinc-900 p-6 shadow-2xl shadow-black/50">
            <button
              type="button"
              onClick={() => setShowWatchOptions(false)}
              aria-label="Close watch options"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-zinc-400 transition hover:bg-white/5 hover:text-white"
            >
              <X size={20} />
            </button>

            <h3 className="pr-10 text-xl font-bold text-white">
              Where do you want to watch?
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Choose a platform to look for {movie.name}.
            </p>

            <div className="mt-6 space-y-3">
              {streamingPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white transition hover:border-violet-500/50 hover:bg-violet-600"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl">{platform.icon}</span>
                    <span className="font-medium">{platform.name}</span>
                  </span>

                  <span className="text-sm text-zinc-400">
                    Open ↗
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-5 text-xs leading-5 text-zinc-500">
              Availability may vary by platform and region.
            </p>
          </div>
        </div>
      )}
    </>
  );
};


export default MovieModal;