'use client'
import { useState } from 'react';

export default function OrderTracking() {
    const [selectedMenu, setSelectedMenu] = useState('My Orders');
    const [orderStatus] = useState({
        current: 'Shipped',
        stages: [
            { name: 'Ordered', date: '15/10/24', time: '10:32 am', completed: true },
            { name: 'Ready', date: '15/10/24', time: '12:00 pm', completed: true },
            { name: 'Shipped', date: '16/10/24', time: '11:05 pm', completed: true },
            { name: 'Expected', date: '17/10/24', time: '10:32 am', completed: false }
        ]
    });

    const updates = [
        {
            date: '16/10/24 - 11:05 pm',
            location: 'Chennai, TN',
            event: 'Shipped',
            details: 'Carrier : TNT\nTracking no: P123456840'
        },
        {
            date: '15/10/24 - 12:00 pm',
            location: 'Chennai, TN',
            event: 'Ready',
            details: 'Waiting for Carrier'
        },
        {
            date: '15/10/24 - 10:32 am',
            location: 'Chennai, TN',
            event: 'Ordered',
            details: ''
        }
    ];

    const renderContent = () => {
        switch (selectedMenu) {
            case 'My Orders':
                return (
                    <div className='px-10'>
                        <h1 className="text-2xl font-bold mb-5">Order Tracking</h1>

                        {/* Progress Bar */}
                        <div className="bg-gray-100 rounded-lg p-5 mb-8">
                            <div className="flex justify-between relative">
                                {orderStatus.stages.map((stage, index) => (
                                    <div key={stage.name} className="flex flex-col items-center relative z-10">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 
                      ${stage.completed ? 'bg-blue-600 text-white' : 'bg-white border-2 border-blue-600'}`}>
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
                                    <div className="h-full bg-blue-600 transition-all" style={{
                                        width: `${(orderStatus.stages.filter(stage => stage.completed).length - 1) * 100 / (orderStatus.stages.length - 1)}%`
                                    }} />
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
                                        <th className="text-left p-2 w-1/2">Event</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {updates.map((update, index) => (
                                        <tr key={index} className="border-b border-gray-300">
                                            <td className="p-2">{update.date}</td>
                                            <td className="p-2">{update.location}</td>
                                            <td className="p-2">
                                                <div className="font-bold">{update.event}</div>
                                                {update.details && (
                                                    <div className="text-sm text-gray-500 whitespace-pre-line">
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
        <div className="mt-32 px-16 flex min-h-screen bg-white">
            {/* Left Sidebar */}
            <div className="w-56 border-r border-gray-300 p-5">
                <div className="text-lg font-bold mb-5">
                    Welcome, Aswin
                </div>
                {['My Orders', 'My Address', 'My Payment Method', 'Support'].map((menu) => (
                    <button
                        key={menu}
                        onClick={() => setSelectedMenu(menu)}
                        className={`block w-full text-left p-2 mb-2 rounded-lg 
              ${selectedMenu === menu ? 'bg-gray-100 text-blue-600 font-bold' : 'text-black'}`}
                    >
                        {menu}
                    </button>
                ))}
            </div>

            {/* Right Content */}
            <div className="flex-1 p-5">
                {renderContent()}
            </div>
        </div>
    );
}
