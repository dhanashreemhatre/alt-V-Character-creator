import React, { useState } from 'react'; 
import CharacterCreationStart from './steps/CharacterCreationStart'; 
import CharacterCreationParents from './steps/CharacterCreationParents'; 
import CharacterStructureEditor from './steps/CharacterStructureEditor';
 
function CharacterCreation() { 
  const [step, setStep] = useState(1); 
  const [characterData, setCharacterData] = useState({}); 
 
  const handleNextStep = (data) => { 
    setCharacterData(prevData => ({ 
      ...prevData, 
      ...data 
    })); 
    setStep(step + 1); 
  }; 
 
  const handlePreviousStep = () => { 
    setStep(step - 1); 
  }; 
 
  return ( 
    <> 
      {step === 1 && ( 
        <CharacterCreationStart onNext={handleNextStep} /> 
      )} 
      {step === 2 && ( 
        <CharacterCreationParents  
          initialData={characterData}  
          onNext={handleNextStep} 
          onPrevious={handlePreviousStep} 
        /> 
      )} 
      {step === 3 && (
        <CharacterStructureEditor
          initialData={characterData}
          onNext={handleNextStep}
          onPrevious={handlePreviousStep}
        />
      )}
    </> 
  ); 
} 
 
export default CharacterCreation;