import React, { useState } from 'react';
import { ChevronRight, User} from 'lucide-react';
import { Female,Male } from '../../assets/images';

const CharacterCreationStart = ({ onNext }) => {
  const [name, setName] = useState('');
  const [sex, setSex] = useState(null);
  const [error, setError] = useState('');

  const handleNext = () => {
    // Validate name and sex selection
    if (!name.trim()) {
      setError('Please enter a character name');
      return;
    }
    if (sex === null) {
      setError('Please select a gender');
      return;
    }

    // Clear any previous errors
    setError('');

    // Pass the initial character data to the next step
    onNext({
      name,
      sex,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">
          Create Your Character
        </h1>

        {/* Name Input */}
        <div className="mb-6">
          <label 
            htmlFor="character-name" 
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Character Name
          </label>
          <input 
            id="character-name"
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter character name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Sex Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Gender
          </label>
          <div className="flex space-x-4">
            <button
              onClick={() => setSex(0)}
              className={`flex-1 flex flex-col items-center justify-center py-3 rounded-md transition-all duration-300 ${
                sex === 0 
                  ? 'bg-pink-500 text-white ring-4 ring-pink-200' 
                  : 'bg-gray-100 text-gray-600 hover:bg-pink-100'
              }`}
            >
              <img src={Female} className='mt-2 w-12'/>
              Female
            </button>
            <button
              onClick={() => setSex(1)}
              className={`flex-1 flex flex-col items-center justify-center py-3 rounded-md transition-all duration-300 ${
                sex === 1 
                  ? 'bg-blue-500 text-white ring-4 ring-blue-200' 
                  : 'bg-gray-100 text-gray-600 hover:bg-blue-100'
              }`}
            >
              <img src={Male} className='mt-2 w-12'/>
              Male
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-2 rounded-md mb-4 text-center">
            {error}
          </div>
        )}

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={!name || sex === null}
          className="w-full flex items-center justify-center bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next Step
          <ChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default CharacterCreationStart;