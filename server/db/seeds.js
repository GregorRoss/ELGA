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
    }
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
      word: "cat",
      image: "/images/cat.png"
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
      word: "pencil",
      image: "/images/pencil.png"
  },
    {
      word: "hamburger",
      image: "/images/hamburger.png"
  },
    {
      word: "dog",
      image: "/images/dog.png"
  },
]);