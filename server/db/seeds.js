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
      image: "https://www.flaticon.com/free-icon/apple_10807526?related_id=10807526&origin=pack"
  },   {
      word: "aeroplane",
      image: "https://www.flaticon.com/free-icon/aeroplane_226614?term=aeroplane&page=1&position=12&origin=style&related_id=226614"
  },
     {
      word: "cat",
      image: "https://www.flaticon.com/free-icon/aeroplane_226614?term=aeroplane&page=1&position=12&origin=style&related_id=226614"
  },
    {
      word: "computer",
      image: "https://www.flaticon.com/free-icon/monitor_10741262?related_id=10741262&origin=pack"
  },
  {
      word: "guitar",
      image: "https://www.flaticon.com/free-icon/monitor_10741262?related_id=10741262&origin=pack"
  },
    {
      word: "pencil",
      image: "https://www.flaticon.com/free-icon/pencil_10773596?related_id=10773596&origin=pack"
  },
    {
      word: "hamburger",
      image: "https://www.flaticon.com/free-icon/sandwhich_10773373?related_id=10773373"
  },
    {
      word: "bread",
      image: "https://www.flaticon.com/free-icon/bread_4241694?related_id=4241694&origin=pack"
  },
    {
      word: "trumpet",
      image: "https://www.flaticon.com/free-icon/trumpet_3536071?related_id=3536071&origin=pack"
  },
    {
      word: "train",
      image: "https://www.flaticon.com/free-icon/trumpet_3536071?related_id=3536071&origin=pack"
  },
]);