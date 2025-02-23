import React, { useState } from 'react'


const jsonData = [
  { id: 1, title: 'Title 1', body: 'This is the body for title 1' },
  { id: 2, title: 'Title 2', body: 'This is the body for title 2' },
  { id: 3, title: 'Title 3', body: 'This is the body for title 3' },
  { id: 4, title: 'Title 4', body: 'This is the body for title 4' },
  { id: 5, title: 'Title 5', body: 'This is the body for title 5' }
];

function Accordion() {

  const [open, setOpen] = useState(null);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Accordion</h1>

      {jsonData?.map((item)=>(
        <AccordionItem key={item.id} item={item} open={open} setOpen={setOpen}/>
      ))}
      

      
    </div>
  )
}

export default Accordion



function AccordionItem({item,open, setOpen}){
  return (
    <>
      <div className="border-b border-gray-200">
        <div className='flex justify-between bg-gray-200 p-2 font-bold border-b border-gray-300'>
          {item.title}
          <button onClick={() => setOpen(open==item.id ? null : item.id)}>
            {open==item.id ? <span>&#9650;</span> : <span>&#9660;</span>}
          </button>
        </div>
        {open==item.id  && <div className='my-2'>{item.body}</div>}
      </div>
    </>
  )

}