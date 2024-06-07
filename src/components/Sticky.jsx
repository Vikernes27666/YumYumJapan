// src/components/sticky.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import facebookIcon from './icon/facebook.svg';
import instagramIcon from './icon/instagram.svg';
import tiktokIcon from './icon/tiktok.svg';
import whatsappIcon from './icon/whatsapp.svg';

const Sticky = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="fixed bottom-2 right-2 flex flex-col items-center">
                <button
                    className="bg-gray-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl transition-colors duration-300 hover:bg-gray-500"
                    onClick={() => setIsVisible(!isVisible)}
                >
                    {isVisible ? '▲' : '▼'}
                </button>
                <div className={`flex flex-col items-center mb-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-5 pointer-events-none'}`}>
                    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 m-1 bg-green-500 rounded-lg bg-center bg-cover" style={{ backgroundImage: `url(${whatsappIcon})` }}></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 m-1 bg-pink-600 rounded-lg bg-center bg-cover" style={{ backgroundImage: `url(${instagramIcon})` }}></a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 m-1 bg-blue-600 rounded-lg bg-center bg-cover" style={{ backgroundImage: `url(${facebookIcon})` }}></a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 m-1 bg-black rounded-lg bg-center bg-cover" style={{ backgroundImage: `url(${tiktokIcon})` }}></a>
                </div>
            </div>
        </div>
    );
};

export default Sticky;
