import { Link } from 'react-router-dom';

export default function Home() {
  return (
    // Conteneur principal centré (hauteur écran moins le header)
    <div className="flex flex-col items-center justify-center text-center h-screen px-4">
      
      {/* Le Titre : Gros, Gras, et avec un petit dégradé subtil */}
      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
        Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Developer</span>
      </h1>

      {/* Le Sous-titre : Description courte */}
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
        J'explore la fusion entre le code et le design. 
        Bienvenue dans mon laboratoire d'expérimentations WebGL et React.
      </p>

      {/* Les Boutons d'action (CTA) */}
      <div className="flex gap-4">
        <Link 
          to="/blog" 
          className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
        >
          Lire le Blog
        </Link>
        
        <Link 
          to="/about" 
          className="px-8 py-3 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
        >
          À propos
        </Link>
      </div>

    </div>
  );
}