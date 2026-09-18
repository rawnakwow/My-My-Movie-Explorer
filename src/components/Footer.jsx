import { Clapperboard, Code2 } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-2 font-semibold">
            <Clapperboard size={18} className="text-violet-400" />
            MovieExplorer
          </Link>
          <p className="mt-2 text-sm text-zinc-500">© 2026 MovieExplorer. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-5 text-sm text-zinc-400">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/movies" className="hover:text-white">Movies</Link>
          <span className="flex items-center gap-1.5 text-zinc-500"><Code2 size={16} /> React Project React Project</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
