import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <section className="grid min-h-[70vh] place-items-center px-4 text-center">
      <div>
        <p className="text-7xl font-black text-violet-500">404</p>
        <h1 className="mt-3 text-3xl font-bold">Page not found</h1>
        <p className="mt-3 text-zinc-400">The page you are looking for does not exist.</p>
        <Link to="/" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 font-semibold hover:bg-violet-500">
          <ArrowLeft size={18} /> Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
