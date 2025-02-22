import React from 'react';

const Navbar = ({ isLoggedIn, handleLogout }) => (
  <nav className='bg-gray-800 p-4'>
    <div className='flex justify-between'>
      <div className='flex space-x-4'>
        <div>
          <a href='/' className='text-white hover:text-gray-300'>
            / {isLoggedIn ? 'LoggedIn' : 'Not LoggedIn'}
          </a>
        </div>
        <div>
          <a href='/home' className='text-white hover:text-gray-300'>
            Home
          </a>
        </div>
      </div>
      <div className='flex space-x-4'>
        <a href='/invoice' className='text-white hover:text-gray-300'>
          Invoice
        </a>
        {!isLoggedIn ? (
          <a href='/login' className='text-white hover:text-gray-300'>
            login
          </a>
        ) : (
          <button onClick={()=>{
            handleLogout()
   
          }} className='text-white hover:text-gray-300'>
            logout
          </button>
        )}
      </div>
    </div>
  </nav>
);

export default Navbar;
