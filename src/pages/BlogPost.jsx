import { useParams, Link } from 'react-router-dom';

export default function BlogPost() {
  // 1. On récupère le "slug" depuis l'URL (ex: "premier-post")
  const { slug } = useParams();

  // 2. On charge tous les articles (comme dans Blog.jsx)
  const modules = import.meta.glob('../content/*.md', { eager: true });

  // 3. On cherche l'article qui correspond au slug
  const post = Object.values(modules).find((module) => {
    return module.attributes.slug === slug;
  });

  // Si on ne trouve pas l'article (ex: url bidon), on affiche un message d'erreur
  if (!post) {
    return (
      <div className="text-white text-center mt-20">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p>Oups ! Cet article n'existe pas.</p>
        <Link to="/blog" className="text-blue-400 underline mt-4 block">Retour au blog</Link>
      </div>
    );
  }

  // 4. On récupère le composant React généré par le plugin Markdown
  const Content = post.ReactComponent;

  return (
    <div className="max-w-3xl w-full px-6 py-12 text-white bg-black/50 backdrop-blur-sm rounded-lg my-10 border border-white/10">
      
      {/* Bouton retour */}
      <Link to="/blog" className="text-gray-400 hover:text-white mb-8 inline-block transition-colors">
        ← Retour aux articles
      </Link>

      {/* En-tête de l'article */}
      <header className="mb-10 border-b border-gray-700 pb-6">
        <h1 className="text-4xl font-bold text-blue-400 mb-4">{post.attributes.title}</h1>
        <div className="text-gray-400 text-sm">
          Publié le {post.attributes.date}
        </div>
      </header>

      {/* CONTENU DE L'ARTICLE 
         Attention : Tailwind "reset" tous les styles. 
         Tes titres h1, tes listes, etc. seront "nus" (sans style) pour l'instant.
         On réglera ça après.
      */}
      <div className="prose prose-invert max-w-none">
        <Content />
      </div>

    </div>
  );
}