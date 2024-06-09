import React, { useState } from 'react';

const MailTabs = () => {
  const [activeTab, setActiveTab] = useState('important');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getTabColor = (tab) => {
    switch (tab) {
      case 'important':
        return 'bg-red-500';
      case 'promotions':
        return 'bg-yellow-500';
      case 'social':
        return 'bg-blue-500';
      case 'marketing':
        return 'bg-green-500';
      case 'spam':
        return 'bg-gray-500';
      default:
        return 'bg-purple-500';
    }
  };

  return (
    <div>
      <div className="flex">
        <button
          className={`px-4 py-2 rounded-l ${
            activeTab === 'important' ? getTabColor('important') : 'bg-gray-300'
          } text-white`}
          onClick={() => handleTabClick('important')}
        >
          Important
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === 'promotions' ? getTabColor('promotions') : 'bg-gray-300'
          } text-white`}
          onClick={() => handleTabClick('promotions')}
        >
          Promotions
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === 'social' ? getTabColor('social') : 'bg-gray-300'
          } text-white`}
          onClick={() => handleTabClick('social')}
        >
          Social
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === 'marketing' ? getTabColor('marketing') : 'bg-gray-300'
          } text-white`}
          onClick={() => handleTabClick('marketing')}
        >
          Marketing
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === 'spam' ? getTabColor('spam') : 'bg-gray-300'
          } text-white`}
          onClick={() => handleTabClick('spam')}
        >
          Spam
        </button>
        <button
          className={`px-4 py-2 rounded-r ${
            activeTab === 'general' ? getTabColor('general') : 'bg-gray-300'
          } text-white`}
          onClick={() => handleTabClick('general')}
        >
          General
        </button>
      </div>
      <div className="p-4">
        {activeTab === 'important' && <div>Important emails go here.</div>}
        {activeTab === 'promotions' && <div>Promotion emails go here.</div>}
        {activeTab === 'social' && <div>Social emails go here.</div>}
        {activeTab === 'marketing' && <div>Marketing emails go here.</div>}
        {activeTab === 'spam' && <div>Spam emails go here.</div>}
        {activeTab === 'general' && <div>General emails go here.</div>}
      </div>
    </div>
  );
};

export default MailTabs;