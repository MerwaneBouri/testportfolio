import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // <-- Import du Layout
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';


export default function App() {
  return (
    <Routes>
      {/* Le Layout enveloppe toutes les routes internes */}
      <Route element={<Layout />}>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Route>
    </Routes>
  );
}