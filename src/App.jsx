import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { BlogProvider } from './contexts/BlogContext';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load the components
const Home = lazy(() => import('./Modules/Home/Home'));
const About = lazy(() => import('./Modules/About/About'));
const GreenPackaging = lazy(() => import('./Modules/Subsidiaries/GreenPackaging'));
const GreenEcoplast = lazy(() => import('./Modules/Subsidiaries/GreenEcoplast'));
const FirstAluminium = lazy(() => import('./Modules/Subsidiaries/FirstAluminium'));
const Careers = lazy(() => import('./Modules/Careers/Careers'));
const Team = lazy(() => import('./Modules/Team/Team'));
const BlogList = lazy(() => import('./Modules/Blog/components/BlogList'));
const BlogDetails = lazy(() => import('./Modules/Blog/components/BlogDetails'));
const ContactUs = lazy(() => import('./Modules/Contact'));

// Define your router with lazy-loaded components
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about-us',
    element: <About />
  },
  {
    path: '/contact-us',
    element: <ContactUs />
  },
  {
    path: '/green-packaging',
    element: <GreenPackaging />
  },
  {
    path: '/green-ecoplast',
    element: <GreenEcoplast />
  },
  {
    path: '/first-aluminium',
    element: <FirstAluminium />
  },
  {
    path: '/career',
    element: <Careers />
  },
  {
    path: '/team',
    element: <Team />
  },
  {
    path: '/blog',
    element: <BlogList />
  },
  {
    path: '/blog/:id',
    element: <BlogDetails />
  },
]);

function App() {
  return (
    <BlogProvider>
      <Suspense fallback={<LoadingSpinner/>}>
        <RouterProvider router={router} />
      </Suspense>
    </BlogProvider>
  );
}

export default App;
