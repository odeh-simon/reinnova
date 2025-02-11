import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./Modules/Home/Home";
import About from './Modules/About/About';
import GreenPackaging from './Modules/Subsidiaries/GreenPackaging';
import GreenEcoplast from './Modules/Subsidiaries/GreenEcoplast';
import FirstAluminium from './Modules/Subsidiaries/FirstAluminium';
import Careers from './Modules/Careers/Careers';
import BlogList from './Modules/Blog/components/BlogList';
import BlogDetails from './Modules/Blog/components/BlogDetails';
import ContactUs from './Modules/Contact';
import { BlogProvider } from './contexts/BlogContext';

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
    element: <GreenPackaging/>
  },
  {
    path: '/green-ecoplast',
    element: <GreenEcoplast/>
  },
  {
    path: '/first-aluminium',
    element: <FirstAluminium/>
  },
  {
    path: '/career',
    element: <Careers/>
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
    <>
      <BlogProvider>
        <RouterProvider router={router} />
      </BlogProvider>
    </>
  );
}

export default App;