import { Clapperboard, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

const navClass = ({ isActive }) =>
  `text-sm font-medium ${
    isActive ? "text-white" : "text-zinc-400 hover:text-white"
  }`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-600 shadow-lg shadow-violet-900/30">
            <Clapperboard size={20} />
          </span>
          <span className="text-lg font-bold tracking-tight">
            Movie<span className="text-violet-400">Explorer</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/movies" className={navClass}>Movies</NavLink>
          <Link
            to="/movies"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-zinc-950 hover:bg-violet-200"
          >
            Explore Movies
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg p-2 text-zinc-300 hover:bg-white/10 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-zinc-950 px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            <NavLink to="/" end className={navClass} onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/movies" className={navClass} onClick={() => setOpen(false)}>Movies</NavLink>
            <Link
              to="/movies"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-violet-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-violet-500"
            >
              Explore Movies
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
