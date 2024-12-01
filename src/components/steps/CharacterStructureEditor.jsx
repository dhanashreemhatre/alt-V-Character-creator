import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import {eyebrow,cheeck,lips,nose,jaw,eye} from '../../assets/structure/structure';

const structureFeaturesImages={
    Nose:nose,
    Lips:lips,
    Cheeks:cheeck,
    Brow:eyebrow,
    Chin:jaw,
    Eyes:eye,

}

const structureFeatures = {
  Nose: [
    'Nose Width', 
    'Nose Height', 
    'Nose Length', 
    'Nose Bridge', 
    'Nose Tip', 
    'Nose Bridge Shaft'
  ],
  Brow: [
    'Brow Height', 
    'Brow Width'
  ],
  Cheeks: [
    'Cheekbone Height', 
    'Cheekbone Width', 
    'Cheek Width',
    'Jaw Width', 
    'Jaw Height'
  ],
  Eyes: [
    'Eyelids'
  ],
  Lips: [
    'Lips'
  ],
  Chin: [
    'Chin Length', 
    'Chin Position', 
    'Chin Width', 
    'Chin Shape',
    'Neck Width'
  ],
};

const CharacterStructureEditor = ({ 
  initialData, 
  onNext, 
  onPrevious 
}) => {
  const [activeTab, setActiveTab] = useState('Nose');
  const [structure, setStructure] = useState(
    initialData.structure || new Array(Object.values(structureFeatures).flat().length).fill(0)
  );

  const handleStructureChange = (index, value) => {
    const newStructure = [...structure];
    newStructure[index] = parseFloat(value);
    setStructure(newStructure);
  };

  const handleNext = () => {
    onNext({ structure });
  };

  const tabs = Object.keys(structureFeatures);

  const renderFeatureSliders = () => {
    const startIndex = Object.keys(structureFeatures)
      .slice(0, tabs.indexOf(activeTab))
      .reduce((sum, key) => sum + structureFeatures[key].length, 0);

    return structureFeatures[activeTab].map((label, tabIndex) => {
      const globalIndex = startIndex + tabIndex;
      return (
        <div key={label} className="flex items-center space-x-4 mb-4">
          <div className="flex-grow">
            <div className="flex justify-between text-sm text-gray-400 mb-1">
              <span>{label}</span>
              <span>{structure[globalIndex].toFixed(1)} | 1.0</span>
            </div>
            <input 
              type="range" 
              min="-1" 
              max="1" 
              step="0.1" 
              value={structure[globalIndex]}
              onChange={(e) => handleStructureChange(globalIndex, e.target.value)}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-start p-4">
      <div className="relative w-[35vw] max-w-3xl bg-black/80 border-2 border-gray-700 rounded-2xl shadow-2xl shadow-indigo-900/50 overflow-hidden">
        <div className="absolute inset-0 border-4 border-transparent animate-border-glow pointer-events-none"></div>
        
        <div className="p-8 relative z-10">
          <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-8">
            Sculpt Your Features
          </h1>

          {/* Tabs */}
          <div className="flex mb-6 space-x-2 bg-gray-800 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 rounded-md transition-all duration-300 flex items-center justify-center ${
                  activeTab === tab 
                    ? 'bg-gradient-to-r from-indigo-700 to-purple-700 text-white' 
                    : 'text-gray-400 hover:bg-gray-700'
                }`}
              >
                <img src={structureFeaturesImages[tab]} className='w-6'/>
                {/* {tab.charAt(0).toUpperCase() + tab.slice(1)} */}
              </button>
            ))}
          </div>

          {/* Feature Sliders */}
          <div className="space-y-4 min-h-[300px]">
            {renderFeatureSliders()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-4 mt-8">
            <button
              onClick={onPrevious}
              className="flex-1 flex items-center justify-center py-4 rounded-lg 
                bg-gray-800 text-gray-400 
                hover:bg-gray-700 
                transition-all duration-300"
            >
              <ChevronLeft className="mr-2" />
              Previous
            </button>

            <button
              onClick={handleNext}
              className="flex-1 flex items-center justify-center py-4 rounded-lg 
                bg-gradient-to-r from-indigo-700 to-purple-700 
                text-white font-bold uppercase tracking-wider 
                hover:from-indigo-800 hover:to-purple-800 
                transition-all duration-300 
                transform hover:scale-[1.02] active:scale-100"
            >
              Next Step
              <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CharacterStructureEditor;

