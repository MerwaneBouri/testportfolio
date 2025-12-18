export default function About() {
  return (
    <div className="max-w-4xl w-full px-6 py-12 text-white mt-10">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">À propos de moi</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Colonne Gauche : Le Texte */}
        <div className="space-y-6 text-gray-300">
          <p>
            Bonjour ! Je suis un développeur passionné par la création d'expériences numériques interactives.
          </p>
          <p>
            Ce site est mon terrain de jeu. J'ai décidé de le construire "brique par brique" pour comprendre réellement comment fonctionnent les technologies modernes comme <strong>React</strong>, <strong>WebGL</strong> et <strong>Vite</strong>.
          </p>
          <p>
            Mon objectif n'est pas seulement de coder, mais de créer des ponts entre le design minimaliste et la performance technique.
          </p>
        </div>

        {/* Colonne Droite : Les Skills */}
        <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">Stack Technique</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span> React / Vite
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span> Tailwind CSS (v4)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Three.js / WebGL
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span> JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span> Git / GitHub
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}