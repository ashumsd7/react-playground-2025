import React from 'react';

function MultiLangSupport() {
  const jsonData = [
    { id: 1, title: 'Welcome', description: 'Welcome to our multi-language support page' },
    { id: 2, title: 'Features', description: 'Explore the features of our application' },
    { id: 3, title: 'Contact Us', description: 'Get in touch with our support team' },
    { id: 4, title: 'About Us', description: 'Learn more about our company and values' },
    { id: 5, title: 'FAQ', description: 'Frequently Asked Questions' }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Multi Lang Support</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {jsonData.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MultiLangSupport;