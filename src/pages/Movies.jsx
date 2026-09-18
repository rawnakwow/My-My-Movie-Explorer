import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import LoadingCards from "../components/LoadingCards";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import { getAllShows, searchShows } from "../services/movie-api";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const keyword = query.trim();

    const timer = setTimeout(async () => {
      setLoading(true);
      setError("");

      try {
        const data = keyword
          ? await searchShows(keyword, controller.signal)
          : await getAllShows(controller.signal);
        setMovies(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Could not load movies right now. Please try again.");
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, keyword ? 350 : 0);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-400">Browse & Search</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Movie Library</h1>
        <p className="mt-4 text-zinc-400">Search by movie or show title and open any card for more details.</p>
      </div>

      <div className="mx-auto mt-9 max-w-2xl">
        <label htmlFor="movie-search" className="sr-only">Search for a movie</label>
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900 px-4 py-3 shadow-xl shadow-black/10 focus-within:border-violet-500/60">
          <Search size={20} className="shrink-0 text-zinc-500" />
          <input
            id="movie-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for a movie..."
            className="w-full bg-transparent text-base text-white outline-none placeholder:text-zinc-600"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="rounded-lg p-1 text-zinc-500 hover:bg-white/5 hover:text-white">
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      <div className="mt-10 flex items-end justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <h2 className="text-xl font-semibold">{query.trim() ? `Results for “${query.trim()}”` : "Popular Shows"}</h2>
          {!loading && !error && <p className="mt-1 text-sm text-zinc-500">{movies.length} titles found</p>}
        </div>
      </div>

      <div className="mt-6">
        {loading ? (
          <LoadingCards />
        ) : error ? (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-8 text-center text-red-200">{error}</div>
        ) : movies.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-10 text-center">
            <div className="text-4xl">🎞️</div>
            <h3 className="mt-3 text-lg font-semibold">No movies found</h3>
            <p className="mt-2 text-sm text-zinc-500">Try another title or clear your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onDetails={setSelectedMovie} />
            ))}
          </div>
        )}
      </div>

      {selectedMovie && <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </section>
  );
};

export default Movies;
