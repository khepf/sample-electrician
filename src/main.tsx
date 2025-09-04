import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom';
import App from './App';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ReactDOM from 'react-dom/client';
import './index.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollRestoration />
        <App />
      </>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
