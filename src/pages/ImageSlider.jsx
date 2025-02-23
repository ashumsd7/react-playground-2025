import React, { useState } from 'react'
const data = [
  'https://picsum.photos/600/300',
  'https://picsum.photos/601/300',
  'https://picsum.photos/602/300',
  'https://picsum.photos/603/300',
  'https://picsum.photos/604/300',
];
function ImageSlider() {

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  return (
    <div>
      <h1>ImageSlider</h1>
      <div className='w-[600px] mx-auto'>
      <p className='text-center text-2xl font-bold'>{activeImageIndex + 1} / {data.length}</p>
        <img src={data[activeImageIndex]} alt="slider" className="shadow-lg" />
      </div>
      <div>
        <div className='w-[600px] mx-auto mt-6' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button 
            onClick={() => {
              if(activeImageIndex > 0){
                setActiveImageIndex(activeImageIndex - 1);
              } else {
                alert('You are at the first image.');
              }
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Previous
          </button>  
          <button 
            onClick={() => {
              if(activeImageIndex < data.length - 1){
                setActiveImageIndex(activeImageIndex + 1);
              } else {
                alert('You are at the last image.');
              }
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider