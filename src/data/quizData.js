// Utility function to shuffle array
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Function to get random questions from a category
export const getRandomQuestions = (questions, count = 5) => {
  return shuffleArray(questions).slice(0, count);
};

export const quizData = {
  'World Geography': {
    easy: [
      {
        question: "Which country has the most time zones?",
        options: ["Russia", "United States", "China", "Brazil"],
        correctAnswer: 0,
        explanation: "Russia spans 11 time zones, more than any other country."
      },
      {
        question: "What is the deepest ocean trench on Earth?",
        options: ["Java Trench", "Mariana Trench", "Tonga Trench", "Philippine Trench"],
        correctAnswer: 1,
        explanation: "The Mariana Trench reaches depths of over 36,000 feet."
      },
      {
        question: "Which river flows through the most countries?",
        options: ["Nile", "Amazon", "Danube", "Mississippi"],
        correctAnswer: 2,
        explanation: "The Danube flows through 10 countries in Europe."
      },
      {
        question: "What is the only country that borders both the Atlantic and Pacific Oceans?",
        options: ["Mexico", "Colombia", "Panama", "Costa Rica"],
        correctAnswer: 2,
        explanation: "Panama connects North and South America and has coastlines on both oceans."
      },
      {
        question: "Which continent contains the most fresh water?",
        options: ["Asia", "North America", "Antarctica", "Africa"],
        correctAnswer: 2,
        explanation: "Antarctica contains about 70% of the world's fresh water in ice form."
      },
      {
        question: "What is the smallest country by population?",
        options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
        correctAnswer: 2,
        explanation: "Vatican City has approximately 800 residents."
      },
      {
        question: "Which mountain range forms the border between Europe and Asia?",
        options: ["Alps", "Ural Mountains", "Caucasus", "Carpathians"],
        correctAnswer: 1,
        explanation: "The Ural Mountains are considered the traditional boundary between Europe and Asia."
      },
      {
        question: "What is the largest island in the Mediterranean Sea?",
        options: ["Sicily", "Sardinia", "Cyprus", "Crete"],
        correctAnswer: 0,
        explanation: "Sicily is the largest island in the Mediterranean at 25,711 km²."
      },
      {
        question: "Which country has the longest coastline?",
        options: ["Russia", "Canada", "Indonesia", "Philippines"],
        correctAnswer: 1,
        explanation: "Canada has the world's longest coastline at 202,080 km."
      },
      {
        question: "What is the driest inhabited continent?",
        options: ["Africa", "Australia", "Asia", "South America"],
        correctAnswer: 1,
        explanation: "Australia is the driest inhabited continent, with much of its interior being desert."
      }
    ],
    medium: [
      {
        question: "Which country has the most natural lakes?",
        options: ["Russia", "Canada", "United States", "Finland"],
        correctAnswer: 1,
        explanation: "Canada has over 2 million lakes, more than any other country."
      },
      {
        question: "What is the highest capital city in the world?",
        options: ["La Paz", "Quito", "Bogotá", "Addis Ababa"],
        correctAnswer: 0,
        explanation: "La Paz, Bolivia, sits at 3,640 meters above sea level."
      },
      {
        question: "Which country has the most UNESCO World Heritage Sites?",
        options: ["China", "Italy", "Spain", "France"],
        correctAnswer: 1,
        explanation: "Italy has 58 UNESCO World Heritage Sites, more than any other country."
      },
      {
        question: "What is the largest country by land area?",
        options: ["China", "Canada", "Russia", "United States"],
        correctAnswer: 2,
        explanation: "Russia covers 17.1 million square kilometers, making it the largest country."
      },
      {
        question: "Which river has the largest drainage basin?",
        options: ["Nile", "Amazon", "Mississippi", "Congo"],
        correctAnswer: 1,
        explanation: "The Amazon River basin covers about 7 million square kilometers."
      },
      {
        question: "What is the driest place on Earth?",
        options: ["Sahara Desert", "Atacama Desert", "Antarctica", "Gobi Desert"],
        correctAnswer: 1,
        explanation: "The Atacama Desert in Chile receives less than 1mm of rain per year."
      },
      {
        question: "Which country is completely surrounded by South Africa?",
        options: ["Botswana", "Lesotho", "Swaziland", "Namibia"],
        correctAnswer: 1,
        explanation: "Lesotho is an enclave completely surrounded by South Africa."
      },
      {
        question: "What is the largest island in the world?",
        options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
        correctAnswer: 0,
        explanation: "Greenland is the world's largest island at 2.16 million km²."
      },
      {
        question: "Which sea is the saltiest?",
        options: ["Mediterranean", "Red Sea", "Dead Sea", "Black Sea"],
        correctAnswer: 2,
        explanation: "The Dead Sea has a salinity of about 34%, making it extremely salty."
      },
      {
        question: "What is the capital of Bhutan?",
        options: ["Paro", "Thimphu", "Punakha", "Wangdue Phodrang"],
        correctAnswer: 1,
        explanation: "Thimphu is the capital and largest city of Bhutan."
      }
    ],
    hard: [
      {
        question: "Which country has the most active volcanoes?",
        options: ["Japan", "Indonesia", "Philippines", "United States"],
        correctAnswer: 1,
        explanation: "Indonesia has over 130 active volcanoes, more than any other country."
      },
      {
        question: "What is the smallest ocean?",
        options: ["Arctic", "Indian", "Southern", "Atlantic"],
        correctAnswer: 0,
        explanation: "The Arctic Ocean is the smallest and shallowest of the world's oceans."
      },
      {
        question: "Which country is known as the 'Pearl of the Indian Ocean'?",
        options: ["Maldives", "Sri Lanka", "Mauritius", "Seychelles"],
        correctAnswer: 1,
        explanation: "Sri Lanka is known as the 'Pearl of the Indian Ocean'."
      },
      {
        question: "What is the capital of Eritrea?",
        options: ["Asmara", "Massawa", "Keren", "Assab"],
        correctAnswer: 0,
        explanation: "Asmara is the capital and largest city of Eritrea."
      },
      {
        question: "Which country has the most active volcanoes?",
        options: ["Japan", "Indonesia", "Philippines", "United States"],
        correctAnswer: 1,
        explanation: "Indonesia has over 130 active volcanoes, more than any other country."
      },
      {
        question: "What is the highest mountain in Africa?",
        options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Elgon", "Mount Meru"],
        correctAnswer: 1,
        explanation: "Mount Kilimanjaro in Tanzania is Africa's highest peak at 5,895 meters."
      },
      {
        question: "Which country has the most islands?",
        options: ["Philippines", "Indonesia", "Sweden", "Norway"],
        correctAnswer: 1,
        explanation: "Indonesia has over 17,000 islands, making it the world's largest archipelagic state."
      },
      {
        question: "What is the largest desert in Asia?",
        options: ["Gobi Desert", "Thar Desert", "Karakum Desert", "Taklamakan Desert"],
        correctAnswer: 0,
        explanation: "The Gobi Desert spans parts of China and Mongolia, covering 1.3 million km²."
      },
      {
        question: "Which country has the most UNESCO World Heritage Sites?",
        options: ["China", "Italy", "Spain", "France"],
        correctAnswer: 1,
        explanation: "Italy has 58 UNESCO World Heritage Sites, more than any other country."
      },
      {
        question: "What is the longest river in Europe?",
        options: ["Danube", "Volga", "Rhine", "Seine"],
        correctAnswer: 1,
        explanation: "The Volga River in Russia is 3,690 km long, making it Europe's longest river."
      }
    ]
  },

  'Space & Astronomy': {
    easy: [
      {
        question: "What is the closest star to Earth?",
        options: ["Alpha Centauri", "The Sun", "Sirius", "Proxima Centauri"],
        correctAnswer: 1,
        explanation: "The Sun is our closest star, located about 93 million miles away."
      },
      {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1,
        explanation: "Mars appears red due to iron oxide (rust) on its surface."
      },
      {
        question: "How many moons does Earth have?",
        options: ["0", "1", "2", "3"],
        correctAnswer: 1,
        explanation: "Earth has one natural satellite: the Moon."
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
        correctAnswer: 1,
        explanation: "Jupiter is the largest planet, with a mass greater than all other planets combined."
      },
      {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        correctAnswer: 1,
        explanation: "Mercury is the closest planet to the Sun in our solar system."
      },
      {
        question: "What causes the phases of the Moon?",
        options: ["Earth's shadow", "The Moon's rotation", "The Sun's position", "The Moon's orbit around Earth"],
        correctAnswer: 3,
        explanation: "Moon phases are caused by the changing angle of sunlight hitting the Moon as it orbits Earth."
      },
      {
        question: "Which galaxy is closest to the Milky Way?",
        options: ["Andromeda Galaxy", "Triangulum Galaxy", "Large Magellanic Cloud", "Small Magellanic Cloud"],
        correctAnswer: 2,
        explanation: "The Large Magellanic Cloud is the closest major galaxy to the Milky Way."
      },
      {
        question: "What is a light-year?",
        options: ["A unit of time", "A unit of distance", "A unit of brightness", "A unit of temperature"],
        correctAnswer: 1,
        explanation: "A light-year is the distance light travels in one year, about 9.46 trillion kilometers."
      }
    ],
    medium: [
      {
        question: "What is a black hole?",
        options: ["A dark planet", "A region where gravity is so strong nothing can escape", "A type of star", "An empty space"],
        correctAnswer: 1,
        explanation: "A black hole is a region where gravity is so intense that not even light can escape."
      },
      {
        question: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correctAnswer: 1,
        explanation: "Saturn has over 80 confirmed moons, more than any other planet."
      },
      {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
        correctAnswer: 0,
        explanation: "Light travels at approximately 299,792,458 meters per second in vacuum."
      },
      {
        question: "Which type of star is our Sun?",
        options: ["Red giant", "White dwarf", "Yellow dwarf", "Red dwarf"],
        correctAnswer: 2,
        explanation: "Our Sun is a G-type main-sequence star, commonly called a yellow dwarf."
      },
      {
        question: "What causes a solar eclipse?",
        options: ["The Moon blocks the Sun", "The Earth blocks the Sun", "Clouds block the Sun", "The Sun blocks the Moon"],
        correctAnswer: 0,
        explanation: "A solar eclipse occurs when the Moon passes between Earth and the Sun, blocking sunlight."
      },
      {
        question: "Which planet has the Great Red Spot?",
        options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
        correctAnswer: 1,
        explanation: "Jupiter's Great Red Spot is a massive storm that has been raging for centuries."
      },
      {
        question: "What is the name of our galaxy?",
        options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
        correctAnswer: 1,
        explanation: "Our galaxy is called the Milky Way, containing billions of stars including our Sun."
      },
      {
        question: "Which planet is known for its prominent ring system?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correctAnswer: 1,
        explanation: "Saturn is famous for its spectacular ring system made of ice and rock particles."
      }
    ],
    hard: [
      {
        question: "What is the Schwarzschild radius?",
        options: ["Distance from event horizon", "Radius of neutron star", "Size of black hole singularity", "Boundary of observable universe"],
        correctAnswer: 0,
        explanation: "The Schwarzschild radius is the distance from a black hole's center to its event horizon."
      },
      {
        question: "Which type of star will our Sun become when it dies?",
        options: ["Neutron star", "Black hole", "White dwarf", "Red giant"],
        correctAnswer: 2,
        explanation: "Our Sun will become a white dwarf after it exhausts its nuclear fuel."
      },
      {
        question: "What is dark matter?",
        options: ["Matter that doesn't emit light", "Matter that absorbs light", "Matter that reflects light", "Matter that creates light"],
        correctAnswer: 0,
        explanation: "Dark matter is a form of matter that doesn't emit, absorb, or reflect light, but has gravitational effects."
      },
      {
        question: "Which planet has the fastest rotation?",
        options: ["Jupiter", "Saturn", "Mercury", "Venus"],
        correctAnswer: 0,
        explanation: "Jupiter rotates once every 9.9 hours, making it the fastest-rotating planet in our solar system."
      },
      {
        question: "What is a pulsar?",
        options: ["A type of planet", "A rapidly rotating neutron star", "A type of galaxy", "A comet"],
        correctAnswer: 1,
        explanation: "A pulsar is a rapidly rotating neutron star that emits beams of radiation."
      },
      {
        question: "Which galaxy will collide with the Milky Way in the future?",
        options: ["Triangulum Galaxy", "Andromeda Galaxy", "Large Magellanic Cloud", "Small Magellanic Cloud"],
        correctAnswer: 1,
        explanation: "The Andromeda Galaxy is expected to collide with the Milky Way in about 4.5 billion years."
      },
      {
        question: "What is the Oort Cloud?",
        options: ["A type of star", "A cloud of comets surrounding the solar system", "A planet", "A moon"],
        correctAnswer: 1,
        explanation: "The Oort Cloud is a spherical shell of icy objects surrounding our solar system."
      },
      {
        question: "Which planet has the most extreme seasons?",
        options: ["Earth", "Mars", "Uranus", "Pluto"],
        correctAnswer: 2,
        explanation: "Uranus has the most extreme seasons due to its 98-degree axial tilt."
      }
    ]
  },

  'World History': {
    easy: [
      {
        question: "In which year did World War II end?",
        options: ["1944", "1945", "1946", "1947"],
        correctAnswer: 1,
        explanation: "World War II ended in 1945 with Japan's surrender."
      },
      {
        question: "Who was the first person to walk on the Moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
        correctAnswer: 1,
        explanation: "Neil Armstrong was the first person to set foot on the Moon in 1969."
      },
      {
        question: "Which ancient wonder of the world was located in Alexandria?",
        options: ["Hanging Gardens", "Colossus of Rhodes", "Lighthouse of Alexandria", "Temple of Artemis"],
        correctAnswer: 2,
        explanation: "The Lighthouse of Alexandria was one of the Seven Wonders of the Ancient World."
      },
      {
        question: "Who wrote 'The Communist Manifesto'?",
        options: ["Vladimir Lenin", "Karl Marx", "Friedrich Engels", "Joseph Stalin"],
        correctAnswer: 1,
        explanation: "Karl Marx co-wrote 'The Communist Manifesto' with Friedrich Engels."
      },
      {
        question: "In which year did the Berlin Wall fall?",
        options: ["1987", "1989", "1991", "1993"],
        correctAnswer: 1,
        explanation: "The Berlin Wall fell on November 9, 1989."
      }
    ],
    medium: [
      {
        question: "Which dynasty built the Great Wall of China?",
        options: ["Han", "Tang", "Ming", "Qing"],
        correctAnswer: 2,
        explanation: "The Ming Dynasty built most of the Great Wall we see today."
      },
      {
        question: "Who was the first President of the United States?",
        options: ["John Adams", "Thomas Jefferson", "George Washington", "Benjamin Franklin"],
        correctAnswer: 2,
        explanation: "George Washington served as the first President from 1789-1797."
      },
      {
        question: "Which empire was ruled by Julius Caesar?",
        options: ["Greek", "Roman", "Byzantine", "Ottoman"],
        correctAnswer: 1,
        explanation: "Julius Caesar was a Roman general and dictator."
      },
      {
        question: "In which year did the Renaissance begin?",
        options: ["1200s", "1300s", "1400s", "1500s"],
        correctAnswer: 1,
        explanation: "The Renaissance began in the 14th century in Italy."
      },
      {
        question: "Who discovered America?",
        options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Amerigo Vespucci"],
        correctAnswer: 1,
        explanation: "Christopher Columbus reached the Americas in 1492."
      }
    ],
    hard: [
      {
        question: "Which battle ended Napoleon's rule?",
        options: ["Battle of Austerlitz", "Battle of Waterloo", "Battle of Leipzig", "Battle of Borodino"],
        correctAnswer: 1,
        explanation: "The Battle of Waterloo in 1815 ended Napoleon's rule."
      },
      {
        question: "Who was the last Tsar of Russia?",
        options: ["Alexander II", "Alexander III", "Nicholas I", "Nicholas II"],
        correctAnswer: 3,
        explanation: "Nicholas II was the last Tsar, executed in 1918."
      },
      {
        question: "Which treaty ended World War I?",
        options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of London", "Treaty of Berlin"],
        correctAnswer: 0,
        explanation: "The Treaty of Versailles was signed in 1919."
      },
      {
        question: "Who was the first female Prime Minister of the UK?",
        options: ["Margaret Thatcher", "Theresa May", "Liz Truss", "Indira Gandhi"],
        correctAnswer: 0,
        explanation: "Margaret Thatcher served as PM from 1979-1990."
      },
      {
        question: "Which civilization built Machu Picchu?",
        options: ["Aztec", "Maya", "Inca", "Olmec"],
        correctAnswer: 2,
        explanation: "The Inca built Machu Picchu in the 15th century."
      }
    ]
  },

  'Biology & Nature': {
    easy: [
      {
        question: "What is the largest mammal in the world?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: 1,
        explanation: "The blue whale is the largest mammal on Earth, reaching up to 100 feet long."
      },
      {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Tiger", "Lion", "Elephant", "Leopard"],
        correctAnswer: 1,
        explanation: "The lion is often called the King of the Jungle, though they actually live in savannas."
      },
      {
        question: "What is the fastest land animal?",
        options: ["Lion", "Cheetah", "Leopard", "Tiger"],
        correctAnswer: 1,
        explanation: "The cheetah can reach speeds of up to 70 mph in short bursts."
      },
      {
        question: "Which blood type is known as the universal donor?",
        options: ["A+", "B+", "AB+", "O-"],
        correctAnswer: 3,
        explanation: "O- blood can be donated to people with any blood type."
      },
      {
        question: "What is the smallest bone in the human body?",
        options: ["Femur", "Stapes", "Tibia", "Radius"],
        correctAnswer: 1,
        explanation: "The stapes in the ear is the smallest bone, about the size of a grain of rice."
      },
      {
        question: "Which organelle is known as the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
        correctAnswer: 1,
        explanation: "Mitochondria produce ATP, the cell's energy currency."
      },
      {
        question: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        correctAnswer: 0,
        explanation: "Water consists of two hydrogen atoms and one oxygen atom."
      },
      {
        question: "Which gas makes up most of Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        correctAnswer: 2,
        explanation: "Nitrogen makes up about 78% of Earth's atmosphere."
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        correctAnswer: 2,
        explanation: "Diamond is the hardest known natural material."
      },
      {
        question: "Which animal has the longest lifespan?",
        options: ["Elephant", "Tortoise", "Whale", "Parrot"],
        correctAnswer: 1,
        explanation: "Some tortoises can live over 150 years, with the oldest recorded at 255 years."
      }
    ],
    medium: [
      {
        question: "What is the pH of pure water?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 1,
        explanation: "Pure water has a pH of 7, which is neutral."
      },
      {
        question: "Which enzyme is responsible for DNA replication?",
        options: ["RNA polymerase", "DNA polymerase", "Helicase", "Ligase"],
        correctAnswer: 1,
        explanation: "DNA polymerase synthesizes new DNA strands during replication."
      },
      {
        question: "What is the unit of electrical resistance?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        correctAnswer: 2,
        explanation: "The ohm is the unit of electrical resistance."
      },
      {
        question: "Which blood type is known as the universal recipient?",
        options: ["A+", "B+", "AB+", "O-"],
        correctAnswer: 2,
        explanation: "AB+ blood can receive from any blood type."
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Skin", "Lung", "Heart"],
        correctAnswer: 1,
        explanation: "The skin is the largest organ, covering the entire body."
      },
      {
        question: "Which gas makes up about 21% of Earth's atmosphere?",
        options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
        correctAnswer: 1,
        explanation: "Oxygen makes up about 21% of Earth's atmosphere."
      },
      {
        question: "What is the smallest unit of life?",
        options: ["Atom", "Molecule", "Cell", "Tissue"],
        correctAnswer: 2,
        explanation: "The cell is the smallest unit of life that can reproduce independently."
      },
      {
        question: "Which part of the brain controls balance?",
        options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"],
        correctAnswer: 1,
        explanation: "The cerebellum controls balance, coordination, and fine motor skills."
      },
      {
        question: "What is the process by which plants make food?",
        options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
        correctAnswer: 1,
        explanation: "Photosynthesis is how plants convert sunlight into energy."
      },
      {
        question: "Which vitamin is produced when skin is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
        correctAnswer: 2,
        explanation: "Vitamin D is produced in the skin when exposed to UVB sunlight."
      }
    ],
    hard: [
      {
        question: "What is the Heisenberg Uncertainty Principle?",
        options: ["Energy cannot be created or destroyed", "You cannot simultaneously know position and momentum", "Light behaves as both wave and particle", "Matter and energy are equivalent"],
        correctAnswer: 1,
        explanation: "The principle states that the more precisely you know position, the less precisely you can know momentum."
      },
      {
        question: "Which quantum number describes electron spin?",
        options: ["Principal", "Azimuthal", "Magnetic", "Spin"],
        correctAnswer: 3,
        explanation: "The spin quantum number describes the intrinsic angular momentum of electrons."
      },
      {
        question: "What is the half-life of Carbon-14?",
        options: ["5,730 years", "1,620 years", "12,000 years", "24,000 years"],
        correctAnswer: 0,
        explanation: "Carbon-14 has a half-life of approximately 5,730 years."
      },
      {
        question: "Which process converts glucose into ATP?",
        options: ["Photosynthesis", "Cellular respiration", "Fermentation", "Glycolysis"],
        correctAnswer: 1,
        explanation: "Cellular respiration converts glucose into ATP through a series of metabolic processes."
      },
      {
        question: "What is the function of the Golgi apparatus?",
        options: ["Protein synthesis", "Protein modification and packaging", "Energy production", "DNA replication"],
        correctAnswer: 1,
        explanation: "The Golgi apparatus modifies, packages, and ships proteins and lipids."
      },
      {
        question: "Which hormone regulates blood sugar levels?",
        options: ["Adrenaline", "Insulin", "Testosterone", "Estrogen"],
        correctAnswer: 1,
        explanation: "Insulin regulates blood sugar levels by promoting glucose uptake by cells."
      },
      {
        question: "What is the process by which cells divide?",
        options: ["Meiosis", "Mitosis", "Both A and B", "Neither A nor B"],
        correctAnswer: 2,
        explanation: "Both mitosis and meiosis are processes of cell division, with different purposes."
      },
      {
        question: "Which part of the neuron carries signals away from the cell body?",
        options: ["Dendrite", "Axon", "Synapse", "Myelin"],
        correctAnswer: 1,
        explanation: "The axon carries electrical signals away from the neuron's cell body."
      },
      {
        question: "What is the primary function of red blood cells?",
        options: ["Fight infection", "Carry oxygen", "Clot blood", "Produce antibodies"],
        correctAnswer: 1,
        explanation: "Red blood cells carry oxygen from the lungs to the body's tissues."
      },
      {
        question: "Which organelle contains the cell's genetic material?",
        options: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic Reticulum"],
        correctAnswer: 1,
        explanation: "The nucleus contains the cell's DNA and controls cellular activities."
      }
    ]
  },

  'Sports & Games': {
    easy: [
      {
        question: "How many players are on a basketball team on the court at one time?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 1,
        explanation: "Each basketball team has 5 players on the court at any time."
      },
      {
        question: "In which sport would you perform a slam dunk?",
        options: ["Tennis", "Basketball", "Volleyball", "Badminton"],
        correctAnswer: 1,
        explanation: "A slam dunk is a basketball move where a player jumps and scores."
      },
      {
        question: "How many holes are in a standard game of golf?",
        options: ["16", "17", "18", "19"],
        correctAnswer: 2,
        explanation: "A standard round of golf consists of 18 holes."
      },
      {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["Germany", "Brazil", "France", "Argentina"],
        correctAnswer: 2,
        explanation: "France won the 2018 FIFA World Cup, defeating Croatia 4-2."
      },
      {
        question: "In tennis, what score comes after 40?",
        options: ["45", "50", "Game", "Advantage"],
        correctAnswer: 2,
        explanation: "In tennis, after 40, the next point wins the game (unless it's deuce)."
      },
      {
        question: "How many players are on a soccer team?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 1,
        explanation: "A soccer team has 11 players on the field."
      },
      {
        question: "What is the maximum score in a single frame of bowling?",
        options: ["10", "20", "30", "40"],
        correctAnswer: 2,
        explanation: "A perfect frame in bowling is 30 points (strike + two more strikes)."
      },
      {
        question: "Which sport uses a shuttlecock?",
        options: ["Tennis", "Badminton", "Squash", "Racquetball"],
        correctAnswer: 1,
        explanation: "Badminton uses a shuttlecock instead of a ball."
      },
      {
        question: "How many innings are in a standard baseball game?",
        options: ["7", "8", "9", "10"],
        correctAnswer: 2,
        explanation: "A standard baseball game has 9 innings."
      },
      {
        question: "Which sport is played on ice?",
        options: ["Soccer", "Hockey", "Basketball", "Tennis"],
        correctAnswer: 1,
        explanation: "Ice hockey is played on ice."
      }
    ],
    medium: [
      {
        question: "Who holds the record for most Olympic gold medals?",
        options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Mark Spitz"],
        correctAnswer: 1,
        explanation: "Michael Phelps holds the record with 23 Olympic gold medals."
      },
      {
        question: "In which year was the first modern Olympics held?",
        options: ["1892", "1896", "1900", "1904"],
        correctAnswer: 1,
        explanation: "The first modern Olympics were held in Athens in 1896."
      },
      {
        question: "Which country has won the most FIFA World Cups?",
        options: ["Germany", "Brazil", "Argentina", "Italy"],
        correctAnswer: 1,
        explanation: "Brazil has won 5 FIFA World Cups."
      },
      {
        question: "What is the distance of a marathon?",
        options: ["26.2 miles", "25.2 miles", "27.2 miles", "28.2 miles"],
        correctAnswer: 0,
        explanation: "A marathon is exactly 26.2 miles (42.195 kilometers)."
      },
      {
        question: "Which sport is known as 'the beautiful game'?",
        options: ["Basketball", "Soccer", "Tennis", "Golf"],
        correctAnswer: 1,
        explanation: "Soccer is often called 'the beautiful game'."
      },
      {
        question: "How many players are on a volleyball team?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 1,
        explanation: "A volleyball team has 6 players on the court."
      },
      {
        question: "Which country invented cricket?",
        options: ["Australia", "India", "England", "South Africa"],
        correctAnswer: 2,
        explanation: "Cricket was invented in England."
      },
      {
        question: "What is the highest score possible in a single dart throw?",
        options: ["60", "120", "150", "180"],
        correctAnswer: 3,
        explanation: "The highest score in a single dart throw is 180 (three triple 20s)."
      },
      {
        question: "Which sport uses a puck?",
        options: ["Soccer", "Hockey", "Basketball", "Tennis"],
        correctAnswer: 1,
        explanation: "Hockey uses a puck instead of a ball."
      },
      {
        question: "How many players are on a rugby team?",
        options: ["13", "14", "15", "16"],
        correctAnswer: 2,
        explanation: "A rugby union team has 15 players on the field."
      }
    ],
    hard: [
      {
        question: "Who is the only player to score 100 points in a single NBA game?",
        options: ["Kobe Bryant", "Wilt Chamberlain", "Michael Jordan", "LeBron James"],
        correctAnswer: 1,
        explanation: "Wilt Chamberlain scored 100 points in a single game in 1962."
      },
      {
        question: "Which country has never won a FIFA World Cup?",
        options: ["Netherlands", "Spain", "Portugal", "Belgium"],
        correctAnswer: 0,
        explanation: "The Netherlands has reached the final three times but never won."
      },
      {
        question: "What is the fastest recorded serve in tennis?",
        options: ["150 mph", "160 mph", "163 mph", "170 mph"],
        correctAnswer: 2,
        explanation: "The fastest recorded tennis serve is 163.7 mph by John Isner."
      },
      {
        question: "Which sport has the highest paid athletes on average?",
        options: ["Basketball", "Soccer", "Tennis", "Golf"],
        correctAnswer: 0,
        explanation: "Basketball players are among the highest paid athletes."
      },
      {
        question: "Who was the first woman to run a marathon in under 2:20?",
        options: ["Paula Radcliffe", "Florence Griffith Joyner", "Joan Benoit", "Grete Waitz"],
        correctAnswer: 0,
        explanation: "Paula Radcliffe was the first woman to run under 2:20."
      },
      {
        question: "Which country has won the most Olympic medals overall?",
        options: ["United States", "Soviet Union", "China", "Germany"],
        correctAnswer: 0,
        explanation: "The United States has won the most Olympic medals overall."
      },
      {
        question: "What is the maximum break in snooker?",
        options: ["147", "155", "160", "170"],
        correctAnswer: 0,
        explanation: "The maximum break in snooker is 147 points."
      },
      {
        question: "Which sport has the most participants worldwide?",
        options: ["Soccer", "Basketball", "Tennis", "Swimming"],
        correctAnswer: 0,
        explanation: "Soccer has the most participants worldwide."
      },
      {
        question: "Who holds the record for most consecutive Grand Slam titles?",
        options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
        correctAnswer: 0,
        explanation: "Roger Federer holds the record for most consecutive Grand Slam titles."
      },
      {
        question: "Which country invented table tennis?",
        options: ["China", "Japan", "England", "Germany"],
        correctAnswer: 2,
        explanation: "Table tennis was invented in England in the 1880s."
      }
    ]
  },

  'Computer Science': {
    easy: [
      {
        question: "What does 'AI' stand for?",
        options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Integration", "Automated Integration"],
        correctAnswer: 1,
        explanation: "AI stands for Artificial Intelligence."
      },
      {
        question: "Which company developed the iPhone?",
        options: ["Samsung", "Google", "Apple", "Microsoft"],
        correctAnswer: 2,
        explanation: "Apple Inc. developed and released the first iPhone in 2007."
      },
      {
        question: "What does 'URL' stand for?",
        options: ["Universal Resource Locator", "Uniform Resource Locator", "Universal Reference Link", "Uniform Reference Link"],
        correctAnswer: 1,
        explanation: "URL stands for Uniform Resource Locator."
      },
      {
        question: "Which programming language is known for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: 2,
        explanation: "JavaScript is primarily used for web development."
      },
      {
        question: "What does 'CPU' stand for?",
        options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
        correctAnswer: 0,
        explanation: "CPU stands for Central Processing Unit."
      },
      {
        question: "Which company created Windows?",
        options: ["Apple", "Google", "Microsoft", "IBM"],
        correctAnswer: 2,
        explanation: "Microsoft created the Windows operating system."
      },
      {
        question: "What does 'HTML' stand for?",
        options: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
        correctAnswer: 0,
        explanation: "HTML stands for HyperText Markup Language."
      },
      {
        question: "Which device is used to store data permanently?",
        options: ["RAM", "CPU", "Hard Drive", "Monitor"],
        correctAnswer: 2,
        explanation: "A hard drive is used to store data permanently."
      },
      {
        question: "What does 'WiFi' stand for?",
        options: ["Wireless Fidelity", "Wide Frequency", "Wireless Frequency", "Wide Fidelity"],
        correctAnswer: 0,
        explanation: "WiFi stands for Wireless Fidelity."
      },
      {
        question: "Which company created Android?",
        options: ["Apple", "Google", "Microsoft", "Samsung"],
        correctAnswer: 1,
        explanation: "Google created the Android operating system."
      }
    ],
    medium: [
      {
        question: "What does 'API' stand for?",
        options: ["Application Programming Interface", "Advanced Programming Interface", "Application Process Interface", "Advanced Process Interface"],
        correctAnswer: 0,
        explanation: "API stands for Application Programming Interface."
      },
      {
        question: "Which programming language was created by Guido van Rossum?",
        options: ["Java", "Python", "C++", "JavaScript"],
        correctAnswer: 1,
        explanation: "Python was created by Guido van Rossum."
      },
      {
        question: "What does 'SQL' stand for?",
        options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"],
        correctAnswer: 0,
        explanation: "SQL stands for Structured Query Language."
      },
      {
        question: "Which company created the first web browser?",
        options: ["Microsoft", "Netscape", "Google", "Apple"],
        correctAnswer: 1,
        explanation: "Netscape created one of the first popular web browsers."
      },
      {
        question: "What does 'VPN' stand for?",
        options: ["Virtual Private Network", "Very Private Network", "Virtual Public Network", "Very Public Network"],
        correctAnswer: 0,
        explanation: "VPN stands for Virtual Private Network."
      },
      {
        question: "Which programming language is known for data science?",
        options: ["Java", "Python", "C++", "JavaScript"],
        correctAnswer: 1,
        explanation: "Python is widely used in data science and machine learning."
      },
      {
        question: "What does 'HTTP' stand for?",
        options: ["HyperText Transfer Protocol", "High Tech Transfer Protocol", "Hyperlink Transfer Protocol", "High Transfer Protocol"],
        correctAnswer: 0,
        explanation: "HTTP stands for HyperText Transfer Protocol."
      },
      {
        question: "Which company created the first smartphone?",
        options: ["Apple", "Samsung", "BlackBerry", "Nokia"],
        correctAnswer: 2,
        explanation: "BlackBerry created some of the first smartphones."
      },
      {
        question: "What does 'CSS' stand for?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 1,
        explanation: "CSS stands for Cascading Style Sheets."
      },
      {
        question: "Which programming language is used for iOS development?",
        options: ["Java", "Python", "Swift", "C++"],
        correctAnswer: 2,
        explanation: "Swift is Apple's programming language for iOS development."
      }
    ],
    hard: [
      {
        question: "What does 'REST' stand for in web development?",
        options: ["Representational State Transfer", "Remote State Transfer", "Resource State Transfer", "Representative State Transfer"],
        correctAnswer: 0,
        explanation: "REST stands for Representational State Transfer."
      },
      {
        question: "Which algorithm is used for blockchain consensus?",
        options: ["Proof of Work", "Proof of Stake", "Both A and B", "Neither A nor B"],
        correctAnswer: 2,
        explanation: "Both Proof of Work and Proof of Stake are used in blockchain."
      },
      {
        question: "What does 'OOP' stand for in programming?",
        options: ["Object-Oriented Programming", "Online Object Programming", "Organized Object Programming", "Optimized Object Programming"],
        correctAnswer: 0,
        explanation: "OOP stands for Object-Oriented Programming."
      },
      {
        question: "Which company created the first commercial computer?",
        options: ["IBM", "Apple", "Microsoft", "Intel"],
        correctAnswer: 0,
        explanation: "IBM created the first commercial computer."
      },
      {
        question: "What does 'CRUD' stand for in database operations?",
        options: ["Create, Read, Update, Delete", "Create, Retrieve, Update, Delete", "Create, Read, Update, Destroy", "Create, Retrieve, Update, Destroy"],
        correctAnswer: 0,
        explanation: "CRUD stands for Create, Read, Update, Delete."
      },
      {
        question: "Which programming paradigm is functional programming?",
        options: ["Imperative", "Declarative", "Object-oriented", "Procedural"],
        correctAnswer: 1,
        explanation: "Functional programming is a declarative programming paradigm."
      },
      {
        question: "What does 'CI/CD' stand for in DevOps?",
        options: ["Continuous Integration/Continuous Deployment", "Continuous Integration/Continuous Delivery", "Both A and B", "Neither A nor B"],
        correctAnswer: 2,
        explanation: "CI/CD can stand for both Continuous Deployment and Continuous Delivery."
      },
      {
        question: "Which company created the first graphical user interface?",
        options: ["Apple", "Microsoft", "Xerox", "IBM"],
        correctAnswer: 2,
        explanation: "Xerox created the first graphical user interface."
      },
      {
        question: "What does 'MVC' stand for in software architecture?",
        options: ["Model-View-Controller", "Model-View-Component", "Model-View-Container", "Model-View-Context"],
        correctAnswer: 0,
        explanation: "MVC stands for Model-View-Controller."
      },
      {
        question: "Which programming language was created by James Gosling?",
        options: ["C++", "Java", "Python", "JavaScript"],
        correctAnswer: 1,
        explanation: "Java was created by James Gosling at Sun Microsystems."
      }
    ]
  },

  'Arts & Literature': {
    easy: [
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correctAnswer: 1,
        explanation: "William Shakespeare wrote 'Romeo and Juliet' in the late 16th century."
      },
      {
        question: "Which novel begins with 'It was the best of times, it was the worst of times'?",
        options: ["Great Expectations", "A Tale of Two Cities", "Oliver Twist", "David Copperfield"],
        correctAnswer: 1,
        explanation: "This is the opening line of Charles Dickens' 'A Tale of Two Cities'."
      },
      {
        question: "Who wrote '1984'?",
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
        correctAnswer: 1,
        explanation: "George Orwell wrote the dystopian novel '1984'."
      },
      {
        question: "Which author wrote 'Pride and Prejudice'?",
        options: ["Charlotte Brontë", "Emily Brontë", "Jane Austen", "Virginia Woolf"],
        correctAnswer: 2,
        explanation: "Jane Austen wrote 'Pride and Prejudice' in 1813."
      },
      {
        question: "What is the name of the wizard school in Harry Potter?",
        options: ["Hogwarts", "Durmstrang", "Beauxbatons", "Ilvermorny"],
        correctAnswer: 0,
        explanation: "Hogwarts School of Witchcraft and Wizardry is the main setting."
      },
      {
        question: "Who wrote 'The Great Gatsby'?",
        options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"],
        correctAnswer: 1,
        explanation: "F. Scott Fitzgerald wrote 'The Great Gatsby'."
      },
      {
        question: "Which author wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Maya Angelou", "Toni Morrison", "Alice Walker"],
        correctAnswer: 0,
        explanation: "Harper Lee wrote 'To Kill a Mockingbird'."
      },
      {
        question: "Who wrote 'The Catcher in the Rye'?",
        options: ["J.D. Salinger", "Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck"],
        correctAnswer: 0,
        explanation: "J.D. Salinger wrote 'The Catcher in the Rye'."
      },
      {
        question: "Which author wrote 'The Lord of the Rings'?",
        options: ["C.S. Lewis", "J.R.R. Tolkien", "George R.R. Martin", "Terry Pratchett"],
        correctAnswer: 1,
        explanation: "J.R.R. Tolkien wrote 'The Lord of the Rings'."
      },
      {
        question: "Who wrote 'Moby Dick'?",
        options: ["Herman Melville", "Mark Twain", "Edgar Allan Poe", "Nathaniel Hawthorne"],
        correctAnswer: 0,
        explanation: "Herman Melville wrote 'Moby Dick'."
      }
    ],
    medium: [
      {
        question: "Which author wrote 'One Hundred Years of Solitude'?",
        options: ["Gabriel García Márquez", "Isabel Allende", "Mario Vargas Llosa", "Jorge Luis Borges"],
        correctAnswer: 0,
        explanation: "Gabriel García Márquez wrote 'One Hundred Years of Solitude'."
      },
      {
        question: "Who wrote 'The Handmaid's Tale'?",
        options: ["Margaret Atwood", "Ursula K. Le Guin", "Octavia Butler", "Doris Lessing"],
        correctAnswer: 0,
        explanation: "Margaret Atwood wrote 'The Handmaid's Tale'."
      },
      {
        question: "Which author wrote 'Beloved'?",
        options: ["Maya Angelou", "Toni Morrison", "Alice Walker", "Zora Neale Hurston"],
        correctAnswer: 1,
        explanation: "Toni Morrison wrote 'Beloved'."
      },
      {
        question: "Who wrote 'The Kite Runner'?",
        options: ["Khaled Hosseini", "Salman Rushdie", "Arundhati Roy", "Vikram Seth"],
        correctAnswer: 0,
        explanation: "Khaled Hosseini wrote 'The Kite Runner'."
      },
      {
        question: "Which author wrote 'The Road'?",
        options: ["Cormac McCarthy", "Don DeLillo", "Thomas Pynchon", "David Foster Wallace"],
        correctAnswer: 0,
        explanation: "Cormac McCarthy wrote 'The Road'."
      },
      {
        question: "Who wrote 'The Color Purple'?",
        options: ["Maya Angelou", "Toni Morrison", "Alice Walker", "Zora Neale Hurston"],
        correctAnswer: 2,
        explanation: "Alice Walker wrote 'The Color Purple'."
      },
      {
        question: "Which author wrote 'The Book Thief'?",
        options: ["Markus Zusak", "John Boyne", "Khaled Hosseini", "Paulo Coelho"],
        correctAnswer: 0,
        explanation: "Markus Zusak wrote 'The Book Thief'."
      },
      {
        question: "Who wrote 'The Alchemist'?",
        options: ["Paulo Coelho", "Gabriel García Márquez", "Isabel Allende", "Mario Vargas Llosa"],
        correctAnswer: 0,
        explanation: "Paulo Coelho wrote 'The Alchemist'."
      },
      {
        question: "Which author wrote 'Life of Pi'?",
        options: ["Salman Rushdie", "Arundhati Roy", "Yann Martel", "Vikram Seth"],
        correctAnswer: 2,
        explanation: "Yann Martel wrote 'Life of Pi'."
      },
      {
        question: "Who wrote 'The Girl with the Dragon Tattoo'?",
        options: ["Stieg Larsson", "Henning Mankell", "Jo Nesbø", "Camilla Läckberg"],
        correctAnswer: 0,
        explanation: "Stieg Larsson wrote 'The Girl with the Dragon Tattoo'."
      }
    ],
    hard: [
      {
        question: "Which author wrote 'Infinite Jest'?",
        options: ["David Foster Wallace", "Thomas Pynchon", "Don DeLillo", "Cormac McCarthy"],
        correctAnswer: 0,
        explanation: "David Foster Wallace wrote 'Infinite Jest'."
      },
      {
        question: "Who wrote 'The Sound and the Fury'?",
        options: ["William Faulkner", "Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck"],
        correctAnswer: 0,
        explanation: "William Faulkner wrote 'The Sound and the Fury'."
      },
      {
        question: "Which author wrote 'Gravity's Rainbow'?",
        options: ["Thomas Pynchon", "David Foster Wallace", "Don DeLillo", "Cormac McCarthy"],
        correctAnswer: 0,
        explanation: "Thomas Pynchon wrote 'Gravity's Rainbow'."
      },
      {
        question: "Who wrote 'The Recognitions'?",
        options: ["William Gaddis", "Thomas Pynchon", "David Foster Wallace", "Don DeLillo"],
        correctAnswer: 0,
        explanation: "William Gaddis wrote 'The Recognitions'."
      },
      {
        question: "Which author wrote 'Underworld'?",
        options: ["Don DeLillo", "Thomas Pynchon", "David Foster Wallace", "Cormac McCarthy"],
        correctAnswer: 0,
        explanation: "Don DeLillo wrote 'Underworld'."
      },
      {
        question: "Who wrote 'The Corrections'?",
        options: ["Jonathan Franzen", "David Foster Wallace", "Thomas Pynchon", "Don DeLillo"],
        correctAnswer: 0,
        explanation: "Jonathan Franzen wrote 'The Corrections'."
      },
      {
        question: "Which author wrote 'House of Leaves'?",
        options: ["Mark Z. Danielewski", "David Foster Wallace", "Thomas Pynchon", "Don DeLillo"],
        correctAnswer: 0,
        explanation: "Mark Z. Danielewski wrote 'House of Leaves'."
      },
      {
        question: "Who wrote 'The Wind-Up Bird Chronicle'?",
        options: ["Haruki Murakami", "Kenzaburō Ōe", "Yukio Mishima", "Natsume Sōseki"],
        correctAnswer: 0,
        explanation: "Haruki Murakami wrote 'The Wind-Up Bird Chronicle'."
      },
      {
        question: "Which author wrote '2666'?",
        options: ["Roberto Bolaño", "Gabriel García Márquez", "Mario Vargas Llosa", "Jorge Luis Borges"],
        correctAnswer: 0,
        explanation: "Roberto Bolaño wrote '2666'."
      },
      {
        question: "Who wrote 'The Savage Detectives'?",
        options: ["Roberto Bolaño", "Gabriel García Márquez", "Mario Vargas Llosa", "Jorge Luis Borges"],
        correctAnswer: 0,
        explanation: "Roberto Bolaño wrote 'The Savage Detectives'."
      }
    ]
  },

  'Entertainment & Media': {
    easy: [
      {
        question: "Which movie won the Academy Award for Best Picture in 2020?",
        options: ["Joker", "1917", "Parasite", "Once Upon a Time in Hollywood"],
        correctAnswer: 2,
        explanation: "Parasite became the first non-English language film to win Best Picture."
      },
      {
        question: "Who directed 'The Godfather'?",
        options: ["Martin Scorsese", "Francis Ford Coppola", "Steven Spielberg", "Alfred Hitchcock"],
        correctAnswer: 1,
        explanation: "Francis Ford Coppola directed 'The Godfather' in 1972."
      },
      {
        question: "Which actor played Jack in 'Titanic'?",
        options: ["Brad Pitt", "Tom Cruise", "Leonardo DiCaprio", "Matt Damon"],
        correctAnswer: 2,
        explanation: "Leonardo DiCaprio played Jack Dawson in the 1997 film 'Titanic'."
      },
      {
        question: "What is the highest-grossing film of all time?",
        options: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"],
        correctAnswer: 0,
        explanation: "Avatar (2009) is the highest-grossing film of all time."
      },
      {
        question: "Which studio produced 'Frozen'?",
        options: ["Pixar", "DreamWorks", "Disney", "Warner Bros"],
        correctAnswer: 2,
        explanation: "Disney Animation Studios produced 'Frozen' in 2013."
      },
      {
        question: "Who directed 'Pulp Fiction'?",
        options: ["Martin Scorsese", "Quentin Tarantino", "Steven Spielberg", "Alfred Hitchcock"],
        correctAnswer: 1,
        explanation: "Quentin Tarantino directed 'Pulp Fiction' in 1994."
      },
      {
        question: "Which actor played the Joker in 'The Dark Knight'?",
        options: ["Jack Nicholson", "Heath Ledger", "Joaquin Phoenix", "Jared Leto"],
        correctAnswer: 1,
        explanation: "Heath Ledger played the Joker in 'The Dark Knight'."
      },
      {
        question: "What is the name of the main character in 'Forrest Gump'?",
        options: ["Forrest Gump", "Tom Hanks", "Bubba", "Lieutenant Dan"],
        correctAnswer: 0,
        explanation: "Forrest Gump is the main character played by Tom Hanks."
      },
      {
        question: "Which movie features the line 'May the Force be with you'?",
        options: ["Star Trek", "Star Wars", "Guardians of the Galaxy", "The Matrix"],
        correctAnswer: 1,
        explanation: "This line is from the Star Wars franchise."
      },
      {
        question: "Who directed 'The Shawshank Redemption'?",
        options: ["Frank Darabont", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino"],
        correctAnswer: 0,
        explanation: "Frank Darabont directed 'The Shawshank Redemption'."
      }
    ],
    medium: [
      {
        question: "Which movie won Best Picture at the 2021 Oscars?",
        options: ["Nomadland", "The Trial of the Chicago 7", "Mank", "Minari"],
        correctAnswer: 0,
        explanation: "Nomadland won Best Picture at the 2021 Academy Awards."
      },
      {
        question: "Who directed 'Inception'?",
        options: ["Christopher Nolan", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino"],
        correctAnswer: 0,
        explanation: "Christopher Nolan directed 'Inception' in 2010."
      },
      {
        question: "Which actor played Tony Stark in the Marvel Cinematic Universe?",
        options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
        correctAnswer: 1,
        explanation: "Robert Downey Jr. played Tony Stark/Iron Man in the MCU."
      },
      {
        question: "What is the highest-grossing animated film of all time?",
        options: ["Frozen", "The Lion King", "Toy Story 4", "Incredibles 2"],
        correctAnswer: 1,
        explanation: "The Lion King (2019) is the highest-grossing animated film."
      },
      {
        question: "Who directed 'Get Out'?",
        options: ["Jordan Peele", "Spike Lee", "Ava DuVernay", "Barry Jenkins"],
        correctAnswer: 0,
        explanation: "Jordan Peele directed 'Get Out' in 2017."
      },
      {
        question: "Which movie features the character Hannibal Lecter?",
        options: ["The Silence of the Lambs", "Psycho", "The Shining", "Halloween"],
        correctAnswer: 0,
        explanation: "Hannibal Lecter appears in 'The Silence of the Lambs'."
      },
      {
        question: "Who directed 'Black Panther'?",
        options: ["Ryan Coogler", "Taika Waititi", "James Gunn", "Jon Favreau"],
        correctAnswer: 0,
        explanation: "Ryan Coogler directed 'Black Panther' in 2018."
      },
      {
        question: "Which movie won Best Picture at the 2019 Oscars?",
        options: ["Roma", "Green Book", "Black Panther", "Bohemian Rhapsody"],
        correctAnswer: 1,
        explanation: "Green Book won Best Picture at the 2019 Academy Awards."
      },
      {
        question: "Who directed 'La La Land'?",
        options: ["Damien Chazelle", "Barry Jenkins", "Denis Villeneuve", "Greta Gerwig"],
        correctAnswer: 0,
        explanation: "Damien Chazelle directed 'La La Land' in 2016."
      },
      {
        question: "Which movie features the character Thanos?",
        options: ["Guardians of the Galaxy", "Avengers: Infinity War", "Thor", "Captain America"],
        correctAnswer: 1,
        explanation: "Thanos is the main villain in 'Avengers: Infinity War'."
      }
    ],
    hard: [
      {
        question: "Which movie won the Palme d'Or at Cannes in 2019?",
        options: ["Parasite", "Once Upon a Time in Hollywood", "The Lighthouse", "Pain and Glory"],
        correctAnswer: 0,
        explanation: "Parasite won the Palme d'Or at the 2019 Cannes Film Festival."
      },
      {
        question: "Who directed 'The Tree of Life'?",
        options: ["Terrence Malick", "David Lynch", "Wes Anderson", "Paul Thomas Anderson"],
        correctAnswer: 0,
        explanation: "Terrence Malick directed 'The Tree of Life' in 2011."
      },
      {
        question: "Which movie features the character Travis Bickle?",
        options: ["Taxi Driver", "Raging Bull", "Goodfellas", "Casino"],
        correctAnswer: 0,
        explanation: "Travis Bickle is the main character in 'Taxi Driver'."
      },
      {
        question: "Who directed 'Mulholland Drive'?",
        options: ["David Lynch", "Terrence Malick", "Wes Anderson", "Paul Thomas Anderson"],
        correctAnswer: 0,
        explanation: "David Lynch directed 'Mulholland Drive' in 2001."
      },
      {
        question: "Which movie won Best Picture at the 2017 Oscars?",
        options: ["La La Land", "Moonlight", "Manchester by the Sea", "Arrival"],
        correctAnswer: 1,
        explanation: "Moonlight won Best Picture at the 2017 Academy Awards."
      },
      {
        question: "Who directed 'There Will Be Blood'?",
        options: ["Paul Thomas Anderson", "Wes Anderson", "Terrence Malick", "David Lynch"],
        correctAnswer: 0,
        explanation: "Paul Thomas Anderson directed 'There Will Be Blood' in 2007."
      },
      {
        question: "Which movie features the character Anton Chigurh?",
        options: ["No Country for Old Men", "The Big Lebowski", "Fargo", "Burn After Reading"],
        correctAnswer: 0,
        explanation: "Anton Chigurh is the main antagonist in 'No Country for Old Men'."
      },
      {
        question: "Who directed 'The Grand Budapest Hotel'?",
        options: ["Wes Anderson", "Paul Thomas Anderson", "Terrence Malick", "David Lynch"],
        correctAnswer: 0,
        explanation: "Wes Anderson directed 'The Grand Budapest Hotel' in 2014."
      },
      {
        question: "Which movie won Best Picture at the 2016 Oscars?",
        options: ["The Revenant", "Spotlight", "Mad Max: Fury Road", "The Big Short"],
        correctAnswer: 1,
        explanation: "Spotlight won Best Picture at the 2016 Academy Awards."
      },
      {
        question: "Who directed 'Under the Skin'?",
        options: ["Jonathan Glazer", "Lynne Ramsay", "Andrea Arnold", "Clio Barnard"],
        correctAnswer: 0,
        explanation: "Jonathan Glazer directed 'Under the Skin' in 2013."
      }
    ]
  }
};