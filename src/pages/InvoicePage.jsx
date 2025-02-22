import React from 'react';

const InvoicePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 space-y-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Invoice</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Item</span>
            <span className="font-medium">Price</span>
          </div>
          <div className="flex justify-between">
            <span>Item 1</span>
            <span>$10.00</span>
          </div>
          <div className="flex justify-between">
            <span>Item 2</span>
            <span>$20.00</span>
          </div>
          <div className="flex justify-between">
            <span>Item 3</span>
            <span>$30.00</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>$60.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
