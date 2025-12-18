import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    // 1. SETUP DE BASE
    const scene = new THREE.Scene();
    // On ajoute un léger brouillard pour donner de la profondeur (les étoiles lointaines sont plus sombres)
    scene.fog = new THREE.FogExp2(0x000000, 0.05); 

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); // Antialias = lisser les bords
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Netteté max sur les écrans rétina

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // --- LE CONTENU : CHAMP DE PARTICULES ---
    
    // A. Création de la géométrie vide
    const geometry = new THREE.BufferGeometry();
    const count = 3000; // Nombre d'étoiles

    // B. Création du tableau de positions (x, y, z pour chaque étoile)
    // Float32Array est un format optimisé pour l'ordinateur
    const positions = new Float32Array(count * 3); 

    // C. Remplissage aléatoire
    for (let i = 0; i < count * 3; i++) {
      // Math.random() - 0.5 donne un nombre entre -0.5 et 0.5
      // On multiplie par 10 pour étaler les étoiles sur une zone de 10 unités
      positions[i] = (Math.random() - 0.5) * 15; 
    }

    // D. On injecte les positions dans la géométrie
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // E. Le Matériel (L'apparence des points)
    const material = new THREE.PointsMaterial({
      size: 0.02,     // Taille des étoiles
      color: 0x88ccff, // Bleu clair
      transparent: true,
      opacity: 0.8,
    });

    // F. Création de l'objet final
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);


    // --- ANIMATION ---
    const animate = () => {
      requestAnimationFrame(animate);

      // On fait tourner tout l'univers doucement
      particles.rotation.y += 0.00005;
      particles.rotation.x += 0.00002;

      renderer.render(scene, camera);
    };
    animate();

    // --- RESIZE ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // --- CLEANUP ---
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
         mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-black" />;
}