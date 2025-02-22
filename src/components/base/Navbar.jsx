import React from 'react';

const Navbar = ({ isLoggedIn, handleLogout }) => (
  <nav className='bg-gray-900 p-6 shadow-md'>
    <div className='container mx-auto flex justify-between items-center'>
      <div className='flex items-center space-x-6'>
        <a href='/' className='text-xl font-semibold text-white hover:text-gray-400'>
          {isLoggedIn ? 'Dashboard' : 'Welcome'}
        </a>
        <a href='/home' className='text-lg text-white hover:text-gray-400'>
          Home
        </a>
      </div>
      <div className='flex items-center space-x-6'>
        <a href='/invoice' className='text-lg text-white hover:text-gray-400'>
          Invoice
        </a>
        {!isLoggedIn ? (
          <a href='/login' className='text-lg text-white hover:text-gray-400'>
            Login
          </a>
        ) : (
          <button
            onClick={handleLogout}
            className='text-lg text-white hover:text-gray-400 focus:outline-none'
          >
            Logout
          </button>
        )}
      </div>
    </div>
  </nav>
);

export default Navbar;
