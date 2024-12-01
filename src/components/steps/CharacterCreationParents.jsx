// components/CharacterCreationParents.js
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { faceNames, faces } from '../../utility/faceNames';

const CharacterCreationParents = ({ initialData, onNext, onPrevious }) => {
  const [activeTab, setActiveTab] = useState('mother');
  const [parentData, setParentData] = useState({
    motherFace: 0,
    motherSkin: 0,
    motherImage: 0,
    fatherFace: 0,
    fatherSkin: 0,
    fatherImage: 0,
    faceMix: 0.5,
    skinMix: 0.5
  });

  const handleNext = () => {
    onNext({
      ...initialData,
      ...parentData
    });
  };

  const renderImageSelector = (parent) => {
    const images = parent === 'mother' ? faces.female : faces.male;
    const currentImageIndex = parentData[`${parent}Image`];
    const faceParam = `${parent}Face`;
    const currentFace = parentData[faceParam];

    return (
      <div className="space-y-4">
        {/* Image Selection Grid */}
        <div className="grid grid-cols-5 gap-4 mb-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setParentData(prev => ({
                ...prev,
                [`${parent}Image`]: index
              }))}
              className={`aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                currentImageIndex === index 
                  ? 'ring-4 ring-indigo-600 scale-105' 
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
            >
              <img 
                src={image.photo} 
                alt={`${parent} option ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderMixSlider = (type) => {
    const mixParam = `${type}Mix`;
    const currentMix = parentData[mixParam];

    return (
      <div className="bg-gray-800 rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-gray-300">
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
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-start p-4">
      <div className="bg-black/80 border-2 border-gray-700 rounded-2xl shadow-2xl shadow-indigo-900/50 w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-8">
          Parent Characteristics
        </h1>

        {/* Tabs */}
        <div className="flex mb-6">
          <button
            onClick={() => setActiveTab('mother')}
            className={`flex-1 py-2 ${
              activeTab === 'mother' 
                ? 'bg-indigo-700 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Mother
          </button>
          <button
            onClick={() => setActiveTab('father')}
            className={`flex-1 py-2 ${
              activeTab === 'father' 
                ? 'bg-indigo-700 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Father
          </button>
        </div>

        {/* Dynamic Content Based on Active Tab */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">
            {initialData.name}'s {activeTab === 'mother' ? 'Mother' : 'Father'}
          </h2>

          {activeTab === 'mother' 
            ? renderImageSelector('mother') 
            : renderImageSelector('father')
          }
        </div>

        {/* Mix Sliders */}
        <div className="space-y-4">
          {renderMixSlider('face')}
          {renderMixSlider('skin')}
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-4 mt-6">
          <button
            onClick={onPrevious}
            className="flex-1 flex items-center justify-center bg-gray-800 text-gray-300 py-3 rounded-md hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className="mr-2" />
            Previous
          </button>
          <button
            onClick={handleNext}
            className="flex-1 flex items-center justify-center bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-500 transition-colors"
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
