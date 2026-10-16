import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import ProjectPage from './pages/ProjectPage';
import PostersPortfolio from './pages/PostersPortfolio';
import PosterPage from './pages/PosterPage';

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/projects', element: <Portfolio /> },
      { path: '/project', element: <Portfolio /> },
      { path: '/projets', element: <Portfolio /> },
      { path: '/skills', element: <Skills /> },
      { path: '/competences', element: <Skills /> },
      { path: '/experience', element: <Experience /> },
      { path: '/parcours', element: <Experience /> },
      { path: '/contact', element: <Contact /> },
      { path: '/project/:id', element: <ProjectPage /> },
      { path: '/projects/:id', element: <ProjectPage /> },
      { path: '/projet/:id', element: <ProjectPage /> },
      { path: '/posters', element: <PostersPortfolio /> },
      { path: '/posters/:id', element: <PosterPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
