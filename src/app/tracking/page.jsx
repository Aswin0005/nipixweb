'use client';
import { PanelRightClose, Sliders } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function OrderTracking() {
  const [selectedMenu, setSelectedMenu] = useState('My Orders');
  const [orderStatus] = useState({
    current: 'Shipped',
    stages: [
      { name: 'Ordered', date: '15/10/24', time: '10:32 am', completed: true },
      { name: 'Ready', date: '15/10/24', time: '12:00 pm', completed: true },
      { name: 'Shipped', date: '16/10/24', time: '11:05 pm', completed: true },
      {
        name: 'Expected',
        date: '17/10/24',
        time: '10:32 am',
        completed: false,
      },
    ],
  });
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on load
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updates = [
    {
      date: '16/10/24 - 11:05 pm',
      location: 'Chennai, TN',
      event: 'Shipped',
      details: 'Carrier : TNT\nTracking no: P123456840',
    },
    {
      date: '15/10/24 - 12:00 pm',
      location: 'Chennai, TN',
      event: 'Ready',
      details: 'Waiting for Carrier',
    },
    {
      date: '15/10/24 - 10:32 am',
      location: 'Chennai, TN',
      event: 'Ordered',
      details: '',
    },
  ];

  const menuItems = ['My Orders', 'My Address', 'My Payment Method', 'Support'];

  const renderContent = () => {
    switch (selectedMenu) {
      case 'My Orders':
        return (
          <div className="">
            <h1 className="text-2xl font-bold mb-5">Order Tracking</h1>

            {/* Progress Bar */}
            <div className="bg-gray-100 rounded-lg p-5 mb-8">
              <div className="flex justify-between relative">
                {orderStatus.stages.map((stage, index) => (
                  <div
                    key={stage.name}
                    className="flex flex-col items-center relative z-10"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 
                      ${
                        stage.completed
                          ? 'bg-blue-600 text-white'
                          : 'bg-white border-2 border-blue-600'
                      }`}
                    >
                      {stage.completed && <span>✓</span>}
                    </div>
                    <div className="text-center">
                      <div className="font-bold">{stage.name}</div>
                      <div className="text-xs text-gray-500">{stage.date}</div>
                      <div className="text-xs text-gray-500">{stage.time}</div>
                    </div>
                  </div>
                ))}

                {/* Progress Line */}
                <div className="absolute top-3 left-4 right-4 h-0.5 bg-gray-300">
                  <div
                    className="h-full bg-blue-600 transition-all"
                    style={{
                      width: `${
                        ((orderStatus.stages.filter((stage) => stage.completed)
                          .length -
                          1) *
                          100) /
                        (orderStatus.stages.length - 1)
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Updates Section */}
            <div>
              <h2 className="text-lg font-bold mb-4">Updates :</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left p-2 w-1/4">Date</th>
                    <th className="text-left p-2 w-1/4">Location</th>
                    <th className="text-right p-2 w-1/2">Event</th>
                  </tr>
                </thead>
                <tbody>
                  {updates.map((update, index) => (
                    <tr key={index} className="border-b border-gray-300">
                      <td className="p-2 max-md:text-sm">{update.date}</td>
                      <td className="p-2 max-md:text-sm">{update.location}</td>
                      <td className="p-2 max-md:text-sm">
                        <div className="font-bold text-right">
                          {update.event}
                        </div>
                        {update.details && (
                          <div className="text-sm text-gray-500 whitespace-pre-line text-right">
                            {update.details}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'My Address':
        return <div>Address Management Content</div>;
      case 'My Payment Method':
        return <div>Payment Methods Content</div>;
      case 'Support':
        return <div>Support Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="relative pt-20 md:pt-32 flex flex-col items-start md:flex-row w-screen min-h-screen bg-white p-4 md:p-8">
      {/* Left Sidebar */}
      <div className="relative">
        {/* Sidebar Button for Mobile */}
        {isMobile && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-white rounded-md top-0 left-0"
          >
            <PanelRightClose color="blue" />
          </button>
        )}

        {/* Sidebar Menu */}
        <div
          className={`w-56 h-full bg-white border-r border-gray-300 p-5 z-20 transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0 fixed top-0 left-0' : 'hidden'}
          ${!isMobile && 'md:block'}`}
        >
          <div className={`text-lg font-bold mb-5 ${isMobile && 'pt-16'}`}>
            Welcome, Aswin
          </div>
          {menuItems.map((menu) => (
            <button
              key={menu}
              onClick={() => setSelectedMenu(menu)}
              className={`block w-full text-left p-2 mb-2 rounded-lg 
              ${
                selectedMenu === menu
                  ? 'bg-gray-100 text-blue-600 font-bold'
                  : 'text-black'
              }`}
            >
              {menu}
            </button>
          ))}
        </div>

        {/* Overlay for mobile when sidebar is open */}
        {isMobile && isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black opacity-50 z-10"
          ></div>
        )}
      </div>

      {/* Right Content */}
      <div className="flex-1 md:p-4">{renderContent()}</div>
    </div>
  );
}
