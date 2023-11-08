// src/components/Task2.js

import React, { useState } from 'react';
import { FaEquals, FaTimes, FaDivide, FaPlus, FaMinus } from 'react-icons/fa';
import { BsBackspace } from 'react-icons/bs';

const App = () => {
    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                setInput(eval(input).toString());
            } catch (error) {
                setInput('Error');
            }
        } else if (value === 'C') {
            setInput('');
        } else if (value === '←') {
            setInput((prevInput) => prevInput.slice(0, -1));
        } else {
            setInput((prevInput) => prevInput + value);
        }
    };

    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-none md:rounded-2xl h-full md:h-96 w-full md:w-52 overflow-hidden">
                <div className="bg-[#172d67] p-4 h-1/3 rounded-t-xl font-mono text-2xl text-white">{input || '0'}</div>
                <div className="bg-[#070b26] h-2/3 rounded-b-xl grid grid-cols-4">
                    {['7', '8', '9', '/'].map((btn) => (
                        <button
                            key={btn}
                            onClick={() => handleButtonClick(btn)}
                            className="hover:bg-gray-800 transition-all duration-300 flex justify-center items-center w-full p-2 text-lg text-white bg-[#070b26] rounded"
                        >
                            {btn === '/' ? <FaDivide /> : btn}
                        </button>
                    ))}
                    {['4', '5', '6', '*'].map((btn) => (
                        <button
                            key={btn}
                            onClick={() => handleButtonClick(btn)}
                            className="hover:bg-gray-800 transition-all duration-300 flex justify-center items-center w-full p-2 text-lg text-white bg-[#070b26] rounded"
                        >
                            {btn === '*' ? <FaTimes /> : btn}
                        </button>
                    ))}
                    {['1', '2', '3', '-'].map((btn) => (
                        <button
                            key={btn}
                            onClick={() => handleButtonClick(btn)}
                            className="hover:bg-gray-800 transition-all duration-300 flex justify-center items-center w-full p-2 text-lg text-white bg-[#070b26] rounded"
                        >
                            {btn === '-' ? <FaMinus /> : btn}
                        </button>
                    ))}
                    {['0', '.', '='].map((btn) => (
                        <button
                            key={btn}
                            onClick={() => handleButtonClick(btn)}
                            className="hover:bg-gray-800 transition-all duration-300 flex justify-center items-center w-full p-2 text-lg text-white bg-[#070b26] rounded"
                        >
                            {btn === '=' ? <FaEquals /> : btn}
                        </button>
                    ))}
                    {['+', 'C', '←'].map((btn) => (
                        <button
                            key={btn}
                            onClick={() => handleButtonClick(btn)}
                            className="hover:bg-gray-800 transition-all duration-300 flex justify-center items-center w-full p-2 text-lg text-white bg-[#070b26] rounded"
                        >
                            {
                                (btn === '←') ? <BsBackspace /> : ((btn === '+') ? <FaPlus/> : btn)
                            }
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;