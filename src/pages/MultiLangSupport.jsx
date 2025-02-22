import React, { useState } from 'react';

function MultiLangSupport() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const jsonData = {
    en: [
      { id: 1, title: 'Welcome', description: 'Welcome to our multi-language support page' },
      { id: 2, title: 'Features', description: 'Explore the features of our application' },
      { id: 3, title: 'Contact Us', description: 'Get in touch with our support team' },
      { id: 4, title: 'About Us', description: 'Learn more about our company and values' },
      { id: 5, title: 'FAQ', description: 'Frequently Asked Questions' }
    ],
    hi: [
      { id: 1, title: 'स्वागत है', description: 'हमारे बहुभाषी समर्थन पृष्ठ पर आपका स्वागत है' },
      { id: 2, title: 'विशेषताएँ', description: 'हमारे अनुप्रयोग की विशेषताओं का अन्वेषण करें' },
      { id: 3, title: 'संपर्क करें', description: 'हमारी समर्थन टीम से संपर्क करें' },
      { id: 4, title: 'हमारे बारे में', description: 'हमारी कंपनी और मूल्यों के बारे में अधिक जानें' },
      { id: 5, title: 'सामान्य प्रश्न', description: 'अक्सर पूछे जाने वाले प्रश्न' }
    ],
    es: [
      { id: 1, title: 'Bienvenido', description: 'Bienvenido a nuestra página de soporte multilingüe' },
      { id: 2, title: 'Características', description: 'Explora las características de nuestra aplicación' },
      { id: 3, title: 'Contáctenos', description: 'Póngase en contacto con nuestro equipo de soporte' },
      { id: 4, title: 'Sobre nosotros', description: 'Conozca más sobre nuestra empresa y valores' },
      { id: 5, title: 'Preguntas frecuentes', description: 'Preguntas Frecuentes' }
    ],
    ru: [
      { id: 1, title: 'Добро пожаловать', description: 'Добро пожаловать на нашу страницу многоязычной поддержки' },
      { id: 2, title: 'Особенности', description: 'Изучите возможности нашего приложения' },
      { id: 3, title: 'Свяжитесь с нами', description: 'Свяжитесь с нашей службой поддержки' },
      { id: 4, title: 'О нас', description: 'Узнайте больше о нашей компании и ценностях' },
      { id: 5, title: 'Часто задаваемые вопросы', description: 'Часто задаваемые вопросы' }
    ]
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
   
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Multi Lang Support</h1>
        <select value={selectedLanguage} onChange={handleLanguageChange} className="p-2 border rounded w-[200px]">
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="es">Spanish</option>
          <option value="ru">Russian</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {jsonData[selectedLanguage].map((item) => (
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