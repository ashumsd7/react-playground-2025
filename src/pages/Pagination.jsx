import React, { useEffect, useState } from 'react';

function Pagination() {
  const [products, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState([]);

  const LIMIT = 10;
  const fetchData = async (currentPage = 1) => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${(currentPage - 1) * LIMIT}&select=title,price`
    );
    const data = await res.json();
    console.log(data);
    setProduct(data?.products);
    setTotal(data?.total);
    const pages = [];
    for (let i = 1; i <= data?.total / LIMIT; i++) {
      pages.push(i);
    }
    console.log(pages);
    setTotalPages(pages);
  };
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);
  return (
    <div>
      <h1 className='text-2xl font-bold'>Pagination : offset</h1>

      <h2 className='mt-2 text-2xl font-bold'>Products</h2>

      <div className='mt-4 overflow-x-auto'>
        <table className='r min-w-full rounded-xl border bg-white shadow-md'>
          <thead>
            <tr>
              <th className='border-b px-4 py-2 text-left'>Title</th>
              <th className='border-b px-4 py-2 text-left'>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className='flex gap-2 border-b px-4 py-2'>
                  {product.id}-{product.title}
                </td>
                <td className='border-b px-4 py-2'>${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='mt-4 flex items-center justify-between border px-2 py-1'>
        <p className='text-xs'>
          Showing {currentPage * 10 + 1} to {currentPage * 10 + LIMIT} of {total} products
        </p>
      </div>
      <div className='mt-1 flex items-center justify-between border p-4'>
        <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
        {totalPages?.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`${page == currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-md px-2 py-1`}
          >
            {page}
          </button>
        ))}
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Pagination;
