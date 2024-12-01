import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Female, Male } from '../../assets/images';

const CharacterCreationStart = ({ onNext }) => {
  const [name, setName] = useState('');
  const [sex, setSex] = useState(null);
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!name.trim()) {
      setError('Please enter a character name');
      return;
    }
    if (sex === null) {
      setError('Please select a gender');
      return;
    }

    setError('');
    onNext({ name, sex });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-start p-4">
      <div className="relative w-[35vw] max-w-md bg-black/80 border-2 border-gray-700 rounded-2xl shadow-2xl shadow-indigo-900/50 overflow-hidden">
        {/* Subtle glowing border effect */}
        <div className="absolute inset-0 border-4 border-transparent animate-border-glow pointer-events-none"></div>
        
        <div className="p-8 relative z-10">
          <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-8">
            Character Genesis
          </h1>

          {/* Name Input with enhanced styling */}
          <div className="mb-6">
            <label 
              htmlFor="character-name" 
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Enter Your Persona
            </label>
            <input 
              id="character-name"
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your character's name"
              className="w-full px-4 py-3 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300 placeholder-gray-500"
            />
          </div>

          {/* Gender Selection with refined look */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Choose Your Essence
            </label>
            <div className="flex space-x-4">
              <button
                onClick={() => setSex(0)}
                className={`flex-1 flex flex-col items-center justify-center py-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  sex === 0 
                    ? 'bg-gradient-to-br from-pink-600 to-purple-600 text-white scale-105 shadow-xl' 
                    : 'bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700'
                }`}
              >
                <img src={Female} alt="Female" className='mt-2 w-16 h-16 object-contain'/>
                <span className="mt-2">Female</span>
              </button>
              <button
                onClick={() => setSex(1)}
                className={`flex-1 flex flex-col items-center justify-center py-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  sex === 1 
                    ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white scale-105 shadow-xl' 
                    : 'bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700'
                }`}
              >
                <img src={Male} alt="Male" className='mt-2 w-16 h-16 object-contain'/>
                <span className="mt-2">Male</span>
              </button>
            </div>
          </div>

          {/* Error Message with dramatic styling */}
          {error && (
            <div className="bg-red-900/30 border border-red-700 text-red-300 px-4 py-3 rounded-lg mb-4 text-center animate-pulse">
              {error}
            </div>
          )}

          {/* Next Button with epic game-like styling */}
          <button
            onClick={handleNext}
            disabled={!name || sex === null}
            className="w-full flex items-center justify-center py-4 rounded-lg 
              bg-gradient-to-r from-indigo-700 to-purple-700 
              text-white font-bold uppercase tracking-wider 
              hover:from-indigo-800 hover:to-purple-800 
              transition-all duration-300 
              disabled:opacity-30 disabled:cursor-not-allowed 
              transform hover:scale-[1.02] active:scale-100"
          >
            Forge Character
            <ChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterCreationStart;