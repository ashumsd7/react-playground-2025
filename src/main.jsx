import '@styles/custom.css';
import '@styles/tailwind.css';

import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import InvoicePage from './pages/InvoicePage';
import Navbar from '@components/base/Navbar';
import { useNavigate } from 'react-router-dom';
import MultiLangSupport from './pages/MultiLangSupport';
import CountDownTimer from './pages/CountDownTimer';
import InfiniteScroll from './pages/InfiniteScroll';
import Accordion from './pages/Accordion';
import NestedComments from './pages/NestedComments';
import ImageSlider from './pages/ImageSlider';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  

  const handleLogout = () => {
    setIsLoggedIn(false);
 
  };

  const ProtectedRoute = ({ children }) => {
    return isLoggedIn ? children : <LoginPage />;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/home',
      element: <HomePage />,
    },
    {
      path: '/multi-lang-support',
      element: <MultiLangSupport />,
    },
    {
      path: '/infinite-scroll',
      element: <InfiniteScroll/>,
    },
    {
      path: '/countdown',
      element: <CountDownTimer />,
    },
      {
        path: '/accordion',
        element: <Accordion/>,
      },
      {
        path: '/image-slider',
        element: <ImageSlider/>,
      },
      {
        path: '/nested-comments',
        element: <NestedComments/>,
      },
    {
      path: '/login',
      element: <LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />,
    },
    {
      path: '/invoice',
      element: (
        <ProtectedRoute>
          <InvoicePage />
        </ProtectedRoute>
      ),
    },
  ]);

  return (

      <div>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <div className='m-10'>
          <RouterProvider router={router} />
        </div>
      </div>

  );
};

createRoot(document.getElementById('root')).render(<Main />);
