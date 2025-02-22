import React, { useEffect, useState } from 'react';

const jsonData = [
  { id: 1, title: 'Item 1', description: 'Description for item 1' },
  { id: 2, title: 'Item 2', description: 'Description for item 2' },
  { id: 3, title: 'Item 3', description: 'Description for item 3' },
  { id: 4, title: 'Item 4', description: 'Description for item 4' },
  { id: 5, title: 'Item 5', description: 'Description for item 5' },
  { id: 6, title: 'Item 6', description: 'Description for item 6' },
  { id: 7, title: 'Item 7', description: 'Description for item 7' },
  { id: 8, title: 'Item 8', description: 'Description for item 8' },
  { id: 9, title: 'Item 9', description: 'Description for item 9' },
  { id: 10, title: 'Item 10', description: 'Description for item 10' },
  { id: 11, title: 'Item 11', description: 'Description for item 11' },
  { id: 12, title: 'Item 12', description: 'Description for item 12' },
  { id: 13, title: 'Item 13', description: 'Description for item 13' },
  { id: 14, title: 'Item 14', description: 'Description for item 14' },
  { id: 15, title: 'Item 15', description: 'Description for item 15' },
  { id: 16, title: 'Item 16', description: 'Description for item 16' },
  { id: 17, title: 'Item 17', description: 'Description for item 17' },
  { id: 18, title: 'Item 18', description: 'Description for item 18' },
  { id: 19, title: 'Item 19', description: 'Description for item 19' },
  { id: 20, title: 'Item 20', description: 'Description for item 20' },
  { id: 21, title: 'Item 21', description: 'Description for item 21' },
  { id: 22, title: 'Item 22', description: 'Description for item 22' },
  { id: 23, title: 'Item 23', description: 'Description for item 23' },
  { id: 24, title: 'Item 24', description: 'Description for item 24' },
  { id: 25, title: 'Item 25', description: 'Description for item 25' }
];

function InfiniteScroll() {

  const [data,setData] = useState(jsonData.slice(0,10))
  const [isLoading,setIsLoading] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      console.log("scroll");

      const scrolledArea = window.scrollY;
      const pageScrollableArea = document.body.clientHeight;
      const windowSize = window.innerHeight;
      // return true or false
      console.log(scrolledArea+windowSize>=pageScrollableArea)
      if(scrolledArea+windowSize>=pageScrollableArea){
        console.log('fetch  more data')
        setIsLoading(true)
        setTimeout(()=>{
          setData(prevData=>[...prevData,...jsonData.slice(prevData.length,prevData.length+10)])
          setIsLoading(false)
        },5000)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Title and Total Length</h1>
      <p className="text-lg mb-4">Total items: {data.length}</p>
      {data.map((item) => (
        <div key={item.id} className="bg-white p-10 rounded shadow-md mb-4">
          <h2 className="text-xl font-bold mb-2">{item.title}</h2>
          <p className="text-gray-700">{item.description}</p>
        </div>
      ))}

      {isLoading && <h2>Loading....</h2>}
    </div>
  );
}

export default InfiniteScroll;