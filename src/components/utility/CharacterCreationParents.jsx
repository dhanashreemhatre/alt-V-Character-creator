import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Palette, User } from 'lucide-react';

const CharacterCreationParents = ({ initialData, onNext, onPrevious }) => {
  const [parentData, setParentData] = useState({
    motherFace: 0,
    motherSkin: 0,
    fatherFace: 0,
    fatherSkin: 0,
    faceMix: 0.5,
    skinMix: 0.5
  });

  const faceNames = [
    'Benjamin', 'Daniel', 'Joshua', 'Noah', 'Andrew', 'Joan', 'Alex', 
    'Isaac', 'Evan', 'Ethan', 'Vincent', 'Angel', 'Diego', 'Adrian', 
    'Gabriel', 'Michael', 'Santiago', 'Kevin', 'Louis', 'Samuel', 
    'Anthony', 'Hannah', 'Audrey', 'Jasmine', 'Giselle', 'Amelia', 
    'Isabella', 'Zoe', 'Ava', 'Camilla', 'Violet', 'Sophia', 
    'Eveline', 'Nicole', 'Ashley', 'Grace', 'Brianna', 'Natalie', 
    'Olivia', 'Elizabeth', 'Charlotte', 'Emma', 'Claude', 'Niko', 
    'John', 'Misty'
  ];

  const handleNext = () => {
    onNext({
      ...initialData,
      ...parentData
    });
  };

  const updateParentParameter = (parent, parameter, value) => {
    setParentData(prev => ({
      ...prev,
      [`${parent}${parameter}`]: value
    }));
  };

  const renderFaceSelector = (parent) => {
    const faceParam = `${parent}Face`;
    const currentFace = parentData[faceParam];

    return (
      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-gray-700">
            {parent === 'mother' ? 'Mother' : 'Father'} Face
          </h3>
          <span className="text-sm text-gray-500">
            {currentFace} | 45
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => updateParentParameter(parent, 'Face', 
              currentFace > 0 ? currentFace - 1 : 45
            )}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-200"
          >
            &#8249;
          </button>
          <div className="flex-grow text-center">
            {faceNames[currentFace]}
          </div>
          <button 
            onClick={() => updateParentParameter(parent, 'Face', 
              currentFace < 45 ? currentFace + 1 : 0
            )}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-200"
          >
            &#8250;
          </button>
        </div>
      </div>
    );
  };

  const renderMixSlider = (type) => {
    const mixParam = `${type}Mix`;
    const currentMix = parentData[mixParam];

    return (
      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-gray-700">
            {type === 'face' ? 'Face' : 'Skin'} Mix
          </h3>
          <span className="text-sm text-gray-500">
            {currentMix.toFixed(1)} | 1.0
          </span>
        </div>
        <input 
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={currentMix}
          onChange={(e) => 
            setParentData(prev => ({
              ...prev,
              [mixParam]: parseFloat(e.target.value)
            }))
          }
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">
          Parent Characteristics
        </h1>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            {initialData.name}'s Parents
          </h2>

          {/* Mother Face Selector */}
          {renderFaceSelector('mother')}

          {/* Father Face Selector */}
          {renderFaceSelector('father')}

          {/* Face Mix Slider */}
          {renderMixSlider('face')}

          {/* Skin Mix Slider */}
          {renderMixSlider('skin')}
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={onPrevious}
            className="flex-1 flex items-center justify-center bg-gray-200 text-gray-700 py-3 rounded-md hover:bg-gray-300 transition-colors"
          >
            <ChevronLeft className="mr-2" />
            Previous
          </button>
          <button
            onClick={handleNext}
            className="flex-1 flex items-center justify-center bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Next Step
            <ChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterCreationParents;