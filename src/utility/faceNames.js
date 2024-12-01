// utility/faceNames.js
import { hannah,jasmine,joan,misty,giselle } from "../assets/character/female/femaleImagess";
import { joshua,benjamin } from "../assets/character/male/malesImages";

const femaleImages = {
    Hannah: hannah,
    Jasmine: jasmine,
    Joan: joan,
    Misty: misty,
    Giselle: giselle,
  };
const malesImages={
    Benjamin:benjamin,
    Joshua:joshua
}

export const faceNames = [
    'Benjamin', 'Daniel', 'Joshua', 'Noah', 'Andrew', 'Joan', 'Alex', 'Isaac', 'Evan', 'Ethan',
    'Vincent', 'Angel', 'Diego', 'Adrian', 'Gabriel', 'Michael', 'Santiago', 'Kevin', 'Louis',
    'Samuel', 'Anthony', 'Hannah', 'Audrey', 'Jasmine', 'Giselle', 'Amelia', 'Isabella', 'Zoe',
    'Ava', 'Camilla', 'Violet', 'Sophia', 'Eveline', 'Nicole', 'Ashley', 'Grace', 'Brianna',
    'Natalie', 'Olivia', 'Elizabeth', 'Charlotte', 'Emma', 'Claude', 'Niko', 'John', 'Misty'
  ];
  
  export const faces = {
    female: faceNames
      .filter(name => ['Joan', 'Hannah', 'Jasmine', 'Giselle','Misty',
                    //    'Zoe', 'Ava', 'Camilla', 'Violet', 'Sophia', 'Eveline', 'Nicole', 'Ashley','Audrey',  'Amelia', 
                    //    'Grace', 'Brianna', 'Natalie', 'Olivia', 'Elizabeth', 'Charlotte', 'Emma', ''Isabella',
                    ]
                       .includes(name))
      .map((name, id) => ({
        id: id + 1,
        name,
        photo: femaleImages[name]
      })),
    male: faceNames
      .filter(name => ['Benjamin', 'Daniel', 'Joshua', 'Noah', 'Andrew',
                    //    'Ethan', 'Vincent', 'Angel', 'Diego', 'Adrian', 'Gabriel', 'Michael',  'Alex', 'Isaac', 'Evan',
                    //    'Santiago', 'Kevin', 'Louis', 'Samuel', 'Anthony', 'Claude', 'Niko', 'John'
                    ]
                       .includes(name))
      .map((name, id) => ({
        id: id + 1,
        name,
        photo: malesImages[name]
      }))
  };
  