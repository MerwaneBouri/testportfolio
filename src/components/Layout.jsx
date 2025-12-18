import { Link, Outlet } from 'react-router-dom';
import ThreeBackground from './ThreeBackground'; 

export default function Layout() {
  return (
    <>
    <ThreeBackground />
      {/* --- LE HEADER FIXE --- */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center text-white z-50">
        {/* Logo / Nom */}
        <div className="text-xl font-bold uppercase tracking-widest">
          <Link to="/" className="hover:text-gray-400 transition-colors">
          Merwane Bouri
          </Link>
        </div>

        {/* Liens de navigation */}
        <div className="flex gap-8">
          <Link to="/" className="hover:text-gray-400 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400 transition-colors">
            About
          </Link>
          <Link to="/blog" className="hover:text-gray-400 transition-colors">
            Blog
          </Link>
        </div>
      </nav>

      {/* --- LE CONTENU VARIABLE (Les pages) --- */}
      <main>
        {/* C'est ici que Home, About ou Blog vont s'afficher */}
        <Outlet />
      </main>
    </>
  );
}