import { CalendarDays, ImageOff, Star } from "lucide-react";

const MovieCard = ({ movie, onDetails }) => {
  const image = movie.image?.medium || movie.image?.original;
  const year = movie.premiered ? movie.premiered.slice(0, 4) : "N/A";
  const rating = movie.rating?.average ?? "N/A";

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 shadow-xl shadow-black/10 hover:-translate-y-1 hover:border-violet-500/30">
      <div className="relative aspect-[2/3] overflow-hidden bg-zinc-900">
        {image ? (
          <img
            src={image}
            alt={`${movie.name} poster`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full place-items-center text-zinc-600">
            <div className="text-center"><ImageOff className="mx-auto mb-2" /><span className="text-sm">No poster</span></div>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>

      <div className="p-4">
        <h3 className="line-clamp-1 text-lg font-semibold text-white">{movie.name}</h3>
        <div className="mt-2 flex items-center justify-between text-sm text-zinc-400">
          <span className="flex items-center gap-1.5"><Star size={15} className="text-amber-400" />{rating}</span>
          <span className="flex items-center gap-1.5"><CalendarDays size={15} />{year}</span>
        </div>
        <button
          type="button"
          onClick={() => onDetails(movie)}
          className="mt-4 w-full rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-500"
        >
          See Details
        </button>
      </div>
    </article>
  );
};

export default MovieCard;
