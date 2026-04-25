import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';
import ExperienceDetail from '@/pages/ExperienceDetail';
import useScrollToTop from '@/hooks/useScrollToTop';

function App() {
  useScrollToTop();
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/experience/:slug" element={<ExperienceDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
