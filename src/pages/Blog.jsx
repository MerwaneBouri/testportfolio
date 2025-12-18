import { Link } from 'react-router-dom';

export default function Blog() {
  // 1. L'aspirateur à fichiers (Glob Import)
  // { eager: true } demande à Vite de charger les données TOUT DE SUITE (pas attendre un clic)
  const modules = import.meta.glob('../content/*.md', { eager: true });

  // 2. Transformation des données
  // "modules" est un objet complexe. On le transforme en tableau simple.
  const posts = Object.values(modules).map((module) => {
    // Le plugin markdown met le Frontmatter dans une propriété "attributes"
    return module.attributes; 
  });

  return (
    <div className="max-w-4xl w-full px-6 py-12 text-white">
      <h1 className="text-4xl font-bold mb-12 border-b border-gray-700 pb-4">
        Le Blog
      </h1>

      <div className="grid gap-8">
        {/* 3. On boucle sur les articles trouvés */}
        {posts.map((post) => (
          <article key={post.slug} className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
            <h2 className="text-2xl font-bold mb-2 text-blue-400">
              {post.title}
            </h2>
            
            <p className="text-gray-400 text-sm mb-4">
              Publié le {post.date}
            </p>
            
            <p className="text-gray-300 mb-6">
              {post.description}
            </p>

            {/* Le lien vers l'article (on le fera marcher à la prochaine étape) */}
            <Link 
              to={`/blog/${post.slug}`} 
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-sm font-semibold transition-transform hover:scale-105"
            >
              Lire l'article
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}