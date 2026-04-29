import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';
import ExperienceDetail from '@/pages/ExperienceDetail';
import Blog from '@/pages/Blog';
import BlogArticle from '@/pages/BlogArticle';
import useScrollToTop from '@/hooks/useScrollToTop';

function ScrollToTop() {
  useScrollToTop();
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/experience/:slug" element={<ExperienceDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
