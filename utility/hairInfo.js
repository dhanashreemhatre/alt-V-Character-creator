const maleHair = [
    'Close Shave',
    'Buzzcut',
    'Faux Hawk',
    'Shaved Sides Slicked Back',
    'Raised Front Same Length',
    'Col De Sacs and Long Back',
    'Close Shave and Loose Mohawk',
    'Ponytail',
    'Corn Rows',
    'Slicked Back Curly Back',
    'Slicked Back',
    'Spiked',
    'Short Bowl Cut',
    'Messy Long Length',
    'Dreads',
    'Straight Long Length',
    'Curly Long',
    'Straight Long Partial Messy',
    'Side Part Front Short',
    'Slicked Back Short',
    'Side Part Front Long',
    'Razer Side Part Slick',
    'Mullet',
    'Nightvision',
    'Corn Rows',
    'Starfish Corn Rows',
    'Zig Zag Corn Rows',
    'Large Snakelike Corn Rows',
    'Small Snakelike Corn Rows',
    'Side Swirl Corn Rows',
    'Flat Top',
    'Front Crown Long Back',
    'Shaved Sided Slicked Back',
    'Side Parted Shaved Sides',
    'Mohawk',
    'Messy Long Back',
    'Center Parted Bob',
    'Buzz Cut',
    'Faux Hawk',
    'Shaved Sides Slicked Back',
    'Raised Front Same Length',
    'Col De Sacs and Long Back',
    'Close Shave and Loose Mohawk',
    'Ponytail',
    'Corn Rows',
    'Slicked Back Curly Back',
    'Slicked Back',
    'Spiked',
    'Short Bowl Cut',
    'Messy Long Length',
    'Dreads',
    'Straight Long Length',
    'Curly Long',
    'Straight Long Partial Messy',
    'Side Part Front Short',
    'Slicked Back Short',
    'Side Part Front Long',
    'Razer Side Part Slick',
    'Mullet',
    'Corn Rows',
    'Starfish Corn Rows',
    'Zig Zag Corn Rows',
    'Large Snakelike Corn Rows',
    'Small Snakelike Corn Rows',
    'Side Swirl Corn Rows',
    'Flat Top',
    'Front Crown Long Back',
    'Shaved Sided Slicked Back',
    'Side Parted Shaved Sides',
    'Mohawk',
    'Messy Long Back',
    'Center Parted Bob',
    'Shaved Sides Flat Top',
    'Shaved Sides Short Top',
    'Elvis'
];

const femaleHair = [
    'Close Shave',
    'Short Bob',
    'Bob',
    'Pigtails',
    'Ponytail',
    'Braided Mohawk',
    'Braids',
    'Bob',
    'Faux Hawk',
    'French Twist',
    'Long Bob',
    'Loose Tied Ponytail',
    'Pixie',
    'Side Parted Shaved Bangs',
    'Top Knot',
    'Wavy Long',
    'Messy Tied Bandana',
    'Messy Bun with Cropped Bangs',
    'Bob with Feathers',
    'Tight Bun Cropped Bangs',
    'Frizzy Curly Afro',
    'Messy Wavy Bangs',
    'Tight Top Bun Braided',
    'Mullet',
    'Night Vision',
    'Braided Corn Rows',
    'Center Part Braided Corn Rows',
    'Diamond Corn Rows',
    'Pigtails with Bangs',
    'Star Braided Corn Rows',
    'Vertical Shaved Corn Rows',
    'Loose Tied Ponytail',
    'Short Mullet',
    'Shaved Sides Slicked Back',
    'Side Parted Shaved Bangs',
    'Mohawk',
    'Tied Pigtails with Bandana',
    'The Karen',
    'Center Parted Bob',
    'Pixie',
    'Bob',
    'Pigtails',
    'Loose Tied Ponytail',
    'Braided Mohawk',
    'Braids',
    'Straight Bob',
    'Faux Hawk',
    'French Twist',
    'Long Bob',
    'Ponytail Bun',
    'Pixie',
    'Side Parted Shaved Bangs',
    'Top Knot',
    'Wavy Long',
    'Messy Tied Bandana',
    'Messy Top Knot with Bangs',
    'Bob with Feathers',
    'Tight Bun Cropped Bangs',
    'Frizzy Curly Afro',
    'Messy Wavy Bangs',
    'Tight Top Bun Braided',
    'Mullet',
    'Corn Rows',
    'Center Parted Corn Rows',
    'Diamond Corn Rows',
    'Pigtails',
    'Star Braided Corn Rows',
    'Vertical Shaved Corn Rows',
    'Loosely Tied Ponytail',
    'Short Mullet',
    'Shaved Sides Slicked Back',
    'Side Parted Shaved Bangs',
    'Mohawk',
    'Tied Pigtails with Bandana',
    'The Karen',
    'Pixie Bob',
    'Tight Pony Tail Bun',
    'Pixie Cut',
    'Elvis'
];

const hairColors = {
    0: "#1c1f21",
    1: "#272a2c",
    2: "#312e2c",
    3: "#35261c",
    4: "#4b321f",
    5: "#5c3b24",
    6: "#6d4c35",
    7: "#6b503b",
    8: "#765c45",
    9: "#7f684e",
    10: "#99815d",
    11: "#a79369",
    12: "#af9c70",
    13: "#bba063",
    14: "#d6b97b",
    15: "#dac38e",
    16: "#9f7f59",
    17: "#845039",
    18: "#682b1f",
    19: "#61120c",
    20: "#640f0a",
    21: "#7c140f",
    22: "#a02e19",
    23: "#b64b28",
    24: "#a2502f",
    25: "#aa4e2b",
    26: "#626262",
    27: "#808080",
    28: "#aaaaaa",
    29: "#c5c5c5",
    30: "#463955",
    31: "#5a3f6b",
    32: "#763c76",
    33: "#ed74e3",
    34: "#eb4b93",
    35: "#f299bc",
    36: "#04959e",
    37: "#025f86",
    38: "#023974",
    39: "#3fa16a",
    40: "#217c61",
    41: "#185c55",
    42: "#b6c034",
    43: "#70a90b",
    44: "#439d13",
    45: "#dcb857",
    46: "#e5b103",
    47: "#e69102",
    48: "#f28831",
    49: "#fb8057",
    50: "#e28b58",
    51: "#d1593c",
    52: "#ce3120",
    53: "#ad0903",
    54: "#880302",
    55: "#1f1814",
    56: "#291f19",
    57: "#2e221b",
    58: "#37291e",
    59: "#2e2218",
};


const facialHair = [
    'Stubble',
    'Balbo',
    'Circle Beard',
    'Goatee',
    'Chin',
    'Chin Fuzz',
    'Pencil Chin Strap',
    'Scruffy',
    'Musketeer',
    'Mustache',
    'Trimmed Beard',
    'Stubble Beard',
    'Thin Circle Beard',
    'Horseshoe',
    'Pencil and Chops',
    'Chin Strap',
    'Balbo and Sideburns',
    'Mutton Chops',
    'Scruffy Beard',
    'Curly',
    'Curly and Beard',
    'Handlebar',
    'Faustic',
    'Otto and Patch',
    'Otto and Beard',
    'Light Franz',
    'The Hampstead',
    'The Ambrose',
    'Lincoln Curtain',
    'Clean Shaven'
];

const overlayColors = [
    '#FF0000', // Red
    '#FFC0CB', // Pink
    '#FFB6C1', // Light Pink
    '#FFCCCC', // Lighter Pink
    '#FFE4E1', // Lightest Pink
    '#B03060', // Light Maroon
    '#800000', // Maroon
    '#D2B48C', // Light Brown
    '#A0522D', // Lighter Brown
    '#8B4513', // Lightest Brown
    '#FFF5F5', // White Pink
    '#F5F5DC', // Beige
    '#8B0000', // Brown Red
    '#FFA500', // Orange
    '#FF9966', // Orange Pink
    '#FFE4E1', // Lightest Pink
    '#FFCCCC', // Lighter Pink
    '#FFC0CB', // Pink
    '#FF69B4', // Vibrant Pink
    '#FF1493', // Dark Pink
    '#C71585', // Darker Pink
    '#8B0000', // Darkest Pink
    '#FF0000', // Red
    '#FF6347', // Lighter Red
    '#FF4500', // Vibrant Red
    '#FF7F7F', // Red Pink
    '#800080', // Purple
    '#9370DB', // Light Purple
    '#6A5ACD', // Dark Purple
    '#4B0082', // Darker Purple
    '#301934', // Darkest Purple
    '#9400D3', // Vibrant Purple
    '#660066', // Black Purple
    '#0000FF', // Blue
    '#ADD8E6', // Light Blue
    '#87CEEB', // Lighter Blue
    '#E0FFFF', // Lightest Blue
    '#00FFFF', // Cyan
    '#2E8B57', // Sea Green
    '#20B2AA', // Deep Sea Green
    '#008000', // Green
    '#006400', // Dark Green
    '#90EE90', // Light Green
    '#9ACD32', // Yellow Green
    '#FFD700', // Dark Yellow
    '#FFFF00', // Yellow
    '#FFCC00', // Yellow Orange
    '#FFA500', // Dark Yellow Orange
    '#FF8C00', // Vibrant Orange
    '#FF4500', // Dark Orange
    '#FAF0BE', // Blonde
    '#F5F5F5', // Blonde White
    '#FFFFFF', // White
    '#808080', // Gray
    '#A9A9A9', // Dark Gray
    '#2F4F4F', // Darkest Gray
    '#000000', // Black
    '#ADD8E6', // Light Blue
    '#00008B', // Dark Blue
    '#000033', // Darkest Blue
    '#D2B48C', // Light Brown
    '#A52A2A', // Brown
    '#8B4513', // Dark Brown
    '#5C4033'  // Darker Brown
];


const eyebrowNames = [
    'Balanced',
    'Fashion',
    'Cleopatra',
    'Quizzical',
    'Femme',
    'Seductive',
    'Pinched',
    'Chola',
    'Triomphe',
    'Carefree',
    'Curvaceous',
    'Rodent',
    'Double Tram',
    'Thin',
    'Penciled',
    'Mother Plucker',
    'Straight and Narrow',
    'Natural',
    'Fuzzy',
    'Unkempt',
    'Caterpillar',
    'Regular',
    'Mediterranean',
    'Groomed',
    'Bushels',
    'Feathered',
    'Prickly',
    'Monobrow',
    'Winged',
    'Triple Tram',
    'Arched Tram',
    'Cutouts',
    'Fade Away',
    'Solo Tram',
    'None'
];
