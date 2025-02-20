import '@styles/custom.css';
import '@styles/tailwind.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <nav className='bg-gray-800 p-4'>
        <div className='flex justify-between'>
          <div className='flex space-x-4'>
          <div>
            <a href='/' className='text-white hover:text-gray-300'>
              /
            </a>
          </div>
          <div>
            <a href='/home' className='text-white hover:text-gray-300'>
              Home
            </a>
          </div>
          </div>
          <div className='flex space-x-4'>
            <a href='/test' className='text-white hover:text-gray-300'>
              Test
            </a>
            <a href='/list' className='text-white hover:text-gray-300'>
              List
            </a>
          </div>
        </div>
      </nav>
      <div className='m-10'>
        <RouterProvider router={router} />
      </div>
    </div>
  </StrictMode>
);
