import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [buttons] = useState([
    { id: 1, label: 'Multi-Lang Support', path: '/multi-lang-support' },
    { id: 1, label: 'Countdown', path: '/countdown' },
    { id: 1, label: 'InfiniteScroll', path: '/infinite-scroll' },
    { id: 1, label: 'Accordion', path: '/accordion' },
    { id: 1, label: 'NestedComments', path: '/nested-comments' },
    { id: 1, label: 'ImageSlider', path: '/image-slider' },
    { id: 1, label: 'Pagination', path: '/pagination' },
    { id: 1, label: 'YoutubeChat', path: '/yt-chat' },
  ]);

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className='flex space-x-4'>
        {buttons.map((button) => (
          <div
            key={button.id}
            onClick={() => handleButtonClick(button.path)}
            className='cursor-pointer rounded bg-white shadow-md p-4 hover:shadow-lg'
          >
            <h2 className='text-lg font-bold text-gray-800'>{button.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
