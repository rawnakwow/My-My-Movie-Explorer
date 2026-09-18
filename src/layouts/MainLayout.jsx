import { Outlet, ScrollRestoration } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <main className="min-h-[calc(100vh-160px)]">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
