import { CalendarDays, Clock3, ExternalLink, Star, X } from "lucide-react";
import { useEffect } from "react";

const stripHtml = (value) => {
  if (!value) return "No overview is available for this title.";
  return value.replace(/<[^>]*>/g, "");
};

const MovieModal = ({ movie, onClose }) => {
  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const image = movie.image?.original || movie.image?.medium;
  const rating = movie.rating?.average ?? "N/A";
  const releaseDate = movie.premiered || "Unknown";

  return (
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
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/65 text-white backdrop-blur hover:bg-black"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-[280px_1fr]">
          <div className="min-h-80 bg-zinc-950 md:min-h-[500px]">
            {image ? (
              <img src={image} alt={`${movie.name} poster`} className="h-full w-full object-cover" />
            ) : (
              <div className="grid h-full min-h-80 place-items-center text-zinc-600">No image available</div>
            )}
          </div>

          <div className="p-6 sm:p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-violet-400">Movie Details</p>
            <h2 className="pr-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">{movie.name}</h2>

            <div className="mt-5 flex flex-wrap gap-3 text-sm text-zinc-300">
              <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5"><Star size={16} className="text-amber-400" /> {rating}</span>
              <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5"><CalendarDays size={16} /> {releaseDate}</span>
              {movie.runtime && <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5"><Clock3 size={16} /> {movie.runtime} min</span>}
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-white">Overview</h3>
              <p className="mt-2 leading-7 text-zinc-400">{stripHtml(movie.summary)}</p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">Genres</p>
                <p className="mt-1 text-sm text-zinc-200">{movie.genres?.length ? movie.genres.join(", ") : "N/A"}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">Language</p>
                <p className="mt-1 text-sm text-zinc-200">{movie.language || "N/A"}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">Status</p>
                <p className="mt-1 text-sm text-zinc-200">{movie.status || "N/A"}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">Network</p>
                <p className="mt-1 text-sm text-zinc-200">{movie.network?.name || movie.webChannel?.name || "N/A"}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-500"
              >
                Close
              </button>
              {movie.officialSite && (
                <a
                  href={movie.officialSite}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:bg-white/5"
                >
                  Official Site <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
