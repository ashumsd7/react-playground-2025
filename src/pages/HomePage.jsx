import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [buttons] = useState([
    { id: 1, label: 'Multi-Lang Support', path: '/multi-lang-support' }
  ]);

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className='flex space-x-4'>
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => handleButtonClick(button.path)}
            className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700'
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
