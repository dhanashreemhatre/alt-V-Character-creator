const faceNames = [
    'Benjamin', 'Daniel', 'Joshua', 'Noah', 'Andrew', 'Joan', 'Alex', 'Isaac', 'Evan', 'Ethan', 
    'Vincent', 'Angel', 'Diego', 'Adrian', 'Gabriel', 'Michael', 'Santiago', 'Kevin', 'Louis', 
    'Samuel', 'Anthony', 'Hannah', 'Audrey', 'Jasmine', 'Giselle', 'Amelia', 'Isabella', 'Zoe', 
    'Ava', 'Camilla', 'Violet', 'Sophia', 'Eveline', 'Nicole', 'Ashley', 'Grace', 'Brianna', 
    'Natalie', 'Olivia', 'Elizabeth', 'Charlotte', 'Emma', 'Claude', 'Niko', 'John', 'Misty'
];

const maleNames = faceNames.filter((name, index) => index < 21 || index >= 43); // IDs 0-20 and 43-45
const femaleNames = faceNames.filter((name, index) => index >= 21 && index < 43); // IDs 21-42
