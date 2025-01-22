const faceNames = [
  "Benjamin",
  "Daniel",
  "Joshua",
  "Noah",
  "Andrew",
  "Joan",
  "Alex",
  "Isaac",
  "Evan",
  "Ethan",
  "Vincent",
  "Angel",
  "Diego",
  "Adrian",
  "Gabriel",
  "Michael",
  "Santiago",
  "Kevin",
  "Louis",
  "Samuel",
  "Anthony",
  "Hannah",
  "Audrey",
  "Jasmine",
  "Giselle",
  "Amelia",
  "Isabella",
  "Zoe",
  "Ava",
  "Camila",
  "Violet",
  "Sophia",
  "Eveline",
  "Nicole",
  "Ashley",
  "Grace",
  "Brianna",
  "Natalie",
  "Olivia",
  "Elizabeth",
  "Charlotte",
  "Emma",
  "Claude",
  "Niko",
  "John",
  "Misty",
];

const maleNames = faceNames.filter(
    (name, index) => index < 21 || (index >= 42 && index < 45)
  ); // IDs 0-20 and 42-44 (Correct)
  
  const femaleNames = faceNames.filter(
    (name, index) => index >= 21 && index < 42 || index == 45
  ); // IDs 21-41 and index 45 (Misty)
  
// const faceNames = [
//   "Benjamin",
//   "Daniel",
//   "Joshua",
//   "Noah",
//   "Andrew",
//   "Joan",
//   "Alex",
//   "Isaac",
//   "Evan",
//   "Ethan",
//   "Vincent",
//   "Angel",
//   "Diego",
//   "Adrian",
//   "Gabriel",
//   "Michael",
//   "Santiago",
//   "Kevin",
//   "Louis",
//   "Samuel",
//   "Anthony",
//   "Hannah",
//   "Audrey",
//   "Jasmine",
//   "Giselle",
//   "Amelia",
//   "Isabella",
//   "Zoe",
//   "Ava",
//   "Camila",
//   "Violet",
//   "Sophia",
//   "Eveline",
//   "Nicole",
//   "Ashley",
//   "Grace",
//   "Brianna",
//   "Natalie",
//   "Olivia",
//   "Elizabeth",
//   "Charlotte",
//   "Emma",
//   "Claude",
//   "Niko",
//   "John",
//   "Misty",
// ];

// // Filter and map female names with their indices
// const femaleNamesWithIndices = faceNames
//   .map((name, index) => ({ name, index }))
//   .filter(
//     (entry) =>
//       (entry.index >= 21 && entry.index < 42) || entry.index === 45
//   );

// console.log(femaleNamesWithIndices);
