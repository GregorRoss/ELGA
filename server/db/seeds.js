use elga;
db.dropDatabase();

db.numbers.insertMany([
    {
        number: 1,
        word: "one"
    },   {
        number: 2,
        word: "two"
    },    {
        number: 3,
        word: "three"
    },    {
        number: 4,
        word: "four"
    },    {
        number: 5,
        word: "five"
    },    {
        number: 6,
        word: "six"
    },    {
        number: 7,
        word: "seven"
    },    {
        number: 8,
        word: "eight"
    },    {
        number: 9,
        word: "nine"
    },    {
        number: 10,
        word: "ten"
    },    {
        number: 11,
        word: "eleven"
    },    {
        number: 12,
        word: "twelve"
    },   {
        number: 13,
        word: "thirteen"
    },    {
        number: 14,
        word: "fourteen"
    },    {
        number: 15,
        word: "fifteen"
    },    {
        number: 16,
        word: "sixteen"
    },    {
        number: 17,
        word: "seventeen"
    },    {
        number: 18,
        word: "eighteen"
    },    {
        number: 19,
        word: "ninteen"
    },    {
        number: 20,
        word: "twenty"
    },    {
        number: 21,
        word: "twenty one"
    },    {
        number: 22,
        word: "twenty two"
    },     {
        number: 23,
        word: "twenty three"
    },   {
        number: 24,
        word: "twenty four"
    },    {
        number: 25,
        word: "twenty five"
    },    {
        number: 26,
        word: "twenty six"
    },    {
        number: 27,
        word: "twenty seven"
    },    {
        number: 28,
        word: "twenty eight"
    },    {
        number: 29,
        word: "twenty nine"
    },    {
        number: 30,
        word: "thirty"
    },    {
        number: 31,
        word: "thirty one"
    },    {
        number: 32,
        word: "thirty two"
    },     {
        number: 33,
        word: "thirty three"
    },   {
        number: 34,
        word: "thirty four"
    },    {
        number: 35,
        word: "thirty five"
    },    {
        number: 36,
        word: "thirty six"
    },    {
        number: 37,
        word: "thirty seven"
    },    {
        number: 38,
        word: "thirty eight"
    },    {
        number: 39,
        word: "thirty nine"
    },    {
        number: 40,
        word: "forty"
    },    {
        number: 41,
        word: "forty one"
    },    {
        number: 42,
        word: "forty two"
    },     {
        number: 43,
        word: "forty three"
    },   {
        number: 44,
        word: "forty four"
    },    {
        number: 45,
        word: "forty five"
    },    {
        number: 46,
        word: "forty six"
    },    {
        number: 47,
        word: "forty seven"
    },    {
        number: 48,
        word: "forty eight"
    },    {
        number: 49,
        word: "forty nine"
    },    {
        number: 50,
        word: "fifty"
    },     {
        number: 51,
        word: "fifty one"
    },    {
        number: 52,
        word: "fifty two"
    },     {
        number: 53,
        word: "fifty three"
    },   {
        number: 54,
        word: "fifty four"
    },    {
        number: 55,
        word: "fifty five"
    },    {
        number: 56,
        word: "fifty six"
    },    {
        number: 57,
        word: "fifty seven"
    },    {
        number: 58,
        word: "fifty eight"
    },    {
        number: 59,
        word: "fifty nine"
    },    {
        number: 60,
        word: "sixty"
    },    {
        number: 61,
        word: "sixty one"
    },    {
        number: 62,
        word: "sixty two"
    },     {
        number: 63,
        word: "sixty three"
    },   {
        number: 64,
        word: "sixty four"
    },    {
        number: 65,
        word: "sixty five"
    },    {
        number: 66,
        word: "sixty six"
    },    {
        number: 67,
        word: "sixty seven"
    },    {
        number: 68,
        word: "sixty eight"
    },    {
        number: 69,
        word: "sixty nine"
    },    {
        number: 70,
        word: "seventy"
    },    {
        number: 71,
        word: "seventy one"
    },    {
        number: 72,
        word: "seventy two"
    },     {
        number: 73,
        word: "seventy three"
    },   {
        number: 74,
        word: "seventy four"
    },    {
        number: 75,
        word: "seventy five"
    },    {
        number: 76,
        word: "seventy six"
    },    {
        number: 77,
        word: "seventy seven"
    },    {
        number: 78,
        word: "seventy eight"
    },    {
        number: 79,
        word: "seventy nine"
    },    {
        number: 80,
        word: "eighty"
    },    {
        number: 81,
        word: "eighty one"
    },    {
        number: 82,
        word: "eighty two"
    },     {
        number: 83,
        word: "eighty three"
    },   {
        number: 84,
        word: "eighty four"
    },    {
        number: 85,
        word: "eighty five"
    },    {
        number: 86,
        word: "eighty six"
    },    {
        number: 87,
        word: "eighty seven"
    },    {
        number: 88,
        word: "eighty eight"
    },    {
        number: 89,
        word: "eighty nine"
    },    {
        number: 90,
        word: "ninety"
    },   {
        number: 91,
        word: "ninety one"
    },    {
        number: 92,
        word: "ninety two"
    },     {
        number: 93,
        word: "ninety three"
    },   {
        number: 94,
        word: "ninety four"
    },    {
        number: 95,
        word: "ninety five"
    },    {
        number: 96,
        word: "ninety six"
    },    {
        number: 97,
        word: "ninety seven"
    },    {
        number: 98,
        word: "ninety eight"
    },    {
        number: 99,
        word: "ninety nine"
    },    {
        number: 100,
        word: "one hundred"
    }, 
]);

db.phrases.insertMany([
  {
    phrase: "Hello"
  },
  {
    phrase: "Thank you"
  },
  {
    phrase: "How are you?"
  },
  {
    phrase: "Goodbye"
  },
  {
    phrase: "Where is the library?"
  },
  {
    phrase: "What is your name?"
  },
  {
    phrase: "Where is the nearest toilet?"
  },
  {
    phrase: "Please"
  },
  {
    phrase: "I need help"
  },
  {
    phrase: "How much does this cost?"
  },
  {
    phrase: "I love you"
  },
  {
    phrase: "Where is the fudge?"
  },
  {
    phrase: "Excuse me"
  },
  {
    phrase: "Coding is cool"
  },
]);

db.images.insertMany([
  {
      word: "apple",
      image: "/images/apple.png"
  },   {
      word: "chocolate",
      image: "/images/chocolate.png"
  },
     {
      word: "dog",
      image: "/images/dog.png"
  },
    {
      word: "computer",
      image: "/images/computer.png"
  },
  {
      word: "guitar",
      image: "/images/guitar.png"
  },
    {
      word: "hamburger",
      image: "/images/hamburger.png"
  },
    {
      word: "cake",
      image: "/images/cake.png"
  },
    {
      word: "milk",
      image: "/images/milk.png"
  },
    {
      word: "snake",
      image: "/images/snake.png"
  },
    {
      word: "car",
      image: "/images/car.png"
  },
    {
      word: "duck",
      image: "/images/duck.png"
  },
]);

db.facts.insertMany([
  {
    fact: "Spanish is spoken by 559 million people around the world"
  },
  {
    fact: "The Eiffel Tower was Almost Built in Barcelona"
  },
  {
    fact: "Spain has a National Anthem with no Words"
  },
  {
    fact: "Madrid is Home to the Oldest Restaurant in the World- it has been serving customer since 1725"
  },
  {
    fact: "Spain Means The Land of the Rabbits"
  },
  {
    fact: "There’s a Spanish New Year’s custom where you eat 12 grapes at midnight"
  },
  {
    fact: "Spain’s Christmas lottery has the world’s biggest payout – It’s called El Gordo (which translates to the fat one)"
  },
  {
    fact: "La Tomatina is an annual festival held in Spain where people throw thousands of tomatoes at each other"
  },
  {
    fact: "Madrid is the physical center of Spain"
  },
  {
    fact: "There are more native Spanish speakers than native English speakers in the world."
  },
]);