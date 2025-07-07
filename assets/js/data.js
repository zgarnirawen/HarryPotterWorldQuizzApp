const quizzes = [
    {
        id: 1,
        symbol: "🧙‍♂️",
        title: "Which Character Said This?",
        banner: "../assets/img/character_quotes.jpg",
        
        questions: [
            { question: "It does not do to dwell on dreams and forget to live.", options: ["Snape", "Hermione", "Dumbledore", "McGonagall"], answer: 2 },
            { question: "After all this time? 'Always.'", options: ["Harry", "Ron", "Sirius", "Snape"], answer: 3 },
            { question: "I solemnly swear that I am up to no good.", options: ["Harry", "Hermione", "Neville", "Draco"], answer: 0 },
            { question: "Not my daughter, you bitch!", options: ["Hermione", "Luna", "Ginny", "Molly Weasley"], answer: 3 },
            { question: "You're a wizard, Harry.", options: ["Dumbledore", "Sirius", "Hagrid", "Arthur Weasley"], answer: 2 },
            { question: "Fear of a name increases fear of the thing itself.", options: ["McGonagall", "Dumbledore", "Snape", "Lupin"], answer: 0 },
            { question: "I am not afraid to die.", options: ["Harry", "Draco", "Neville", "Luna"], answer: 0 },
            { question: "We’ve all got both light and dark inside us.", options: ["Dumbledore", "Sirius Black", "Remus Lupin", "Hagrid"], answer: 1 },
            { question: "You’re just as sane as I am.", options: ["Ginny", "Hermione", "Luna Lovegood", "Tonks"], answer: 2 },
            { question: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.", options: ["Harry", "Lupin", "Dumbledore", "Sirius"], answer: 2 }
        ]
    },
    {
        id: 2,
        symbol: "🏰",
        title: "Hogwarts Trivia",
        banner: "../assets/img/hogwarts_trivia.jpg",
        questions: [
            { question: "What house is Luna Lovegood in?", options: ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"], answer: 1 },
            { question: "Who teaches Transfiguration?", options: ["Snape", "Flitwick", "McGonagall", "Sprout"], answer: 2 },
            { question: "What is Nearly Headless Nick’s real name?", options: ["Sir Nicholas de Mimsy-Porpington", "Sir Reginald de Mimsy-Porpington", "Sir Nicholas of Pudding Lane", "Sir Nicholas Black"], answer: 0 },
            { question: "Which common room is near the kitchens?", options: ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"], answer: 2 },
            { question: "Who is the ghost of Ravenclaw house?", options: ["Fat Friar", "Bloody Baron", "Grey Lady", "Nearly Headless Nick"], answer: 2 },
            { question: "What animal represents Hufflepuff?", options: ["Badger", "Lion", "Eagle", "Snake"], answer: 0 },
            { question: "What is the password to Gryffindor Tower in Book 1?", options: ["Sherbet Lemon", "Lemon Drop", "Caput Draconis", "Licorice Wand"], answer: 2 },
            { question: "What is Dumbledore’s full name?", options: ["Albus Severus Percival Wulfric Brian Dumbledore", "Albus Percival Wulfric Brian Dumbledore", "Albus Percival Severus Brian Dumbledore", "Albus Wulfric Percival Brian Dumbledore"], answer: 1 },
            { question: "Who is the Divination professor?", options: ["Firenze", "Sprout", "Trelawney", "Binns"], answer: 2 },
            { question: "What floor is the Prefects’ Bathroom on?", options: ["Second", "Fourth", "Fifth", "Seventh"], answer: 2 }
        ]
    },
    {
        id: 3,
        symbol: "✨",
        title: "Spells and Effects",
        banner: "../assets/img/spells.jpg",
        questions: [
            { question: "Expelliarmus", options: ["Stuns", "Disarms", "Unlocks", "Summons"], answer: 1 },
            { question: "Lumos", options: ["Disarms", "Lights wand", "Stuns", "Summons"], answer: 1 },
            { question: "Accio", options: ["Summons", "Unlocks", "Freezes", "Cuts"], answer: 0 },
            { question: "Alohomora", options: ["Locks", "Stuns", "Unlocks", "Summons"], answer: 2 },
            { question: "Stupefy", options: ["Stuns", "Disarms", "Unlocks", "Summons"], answer: 0 },
            { question: "Wingardium Leviosa", options: ["Levitation", "Light", "Stun", "Shield"], answer: 0 },
            { question: "Expecto Patronum", options: ["Disarms", "Summons Patronus", "Unlocks", "Cuts"], answer: 1 },
            { question: "Petrificus Totalus", options: ["Summons", "Freezes body", "Cuts", "Unlocks"], answer: 1 },
            { question: "Sectumsempra", options: ["Freezes", "Cuts deeply", "Unlocks", "Summons"], answer: 1 },
            { question: "Protego", options: ["Shield spell", "Summon", "Cut", "Unlock"], answer: 0 }
        ]
    },
    {
        id: 4,
        symbol: "🐉",
        title: "Magical Creatures",
        banner: "../assets/img/creatures.jpg",
        questions: [
            { question: "What creature is Buckbeak?", options: ["Dragon", "Hippogriff", "Basilisk", "Thestral"], answer: 1 },
            { question: "What creature can only be seen by those who have witnessed death?", options: ["Basilisk", "Phoenix", "Thestral", "Hippogriff"], answer: 2 },
            { question: "What guards the Sorcerer’s Stone?", options: ["Acromantula", "Fluffy, a three-headed dog", "Basilisk", "Dragon"], answer: 1 },
            { question: "What type of creature is Dobby?", options: ["Goblin", "House-elf", "Troll", "Centaur"], answer: 1 },
            { question: "What creature lives in the Chamber of Secrets?", options: ["Basilisk", "Acromantula", "Thestral", "Dragon"], answer: 0 },
            { question: "What is Fawkes?", options: ["Owl", "Hippogriff", "Phoenix", "Thestral"], answer: 2 },
            { question: "What giant spider does Hagrid love?", options: ["Fluffy", "Buckbeak", "Aragog", "Fawkes"], answer: 2 },
            { question: "What do you call a half-human, half-horse creature?", options: ["Centaur", "Hippogriff", "Thestral", "Acromantula"], answer: 0 },
            { question: "What creature helps Harry in the Triwizard Tournament’s second task?", options: ["Thestral", "Phoenix", "Mermaid", "Gillyweed"], answer: 3 },
            { question: "What small creatures infest the Hogwarts Express during Luna’s conversation?", options: ["Gnomes", "Wrackspurts", "Pixies", "Cornish Pixies"], answer: 1 }
        ]
    },
    {
        id: 5,
        symbol: "⚡",
        title: "Events in the Books",
        banner: "../assets/img/events.jpg",
        questions: [
            { question: "Who kills Dumbledore?", options: ["Voldemort", "Draco", "Snape", "Bellatrix"], answer: 2 },
            { question: "In which book does Sirius Black die?", options: ["Goblet of Fire", "Order of the Phoenix", "Half-Blood Prince", "Deathly Hallows"], answer: 1 },
            { question: "What is the last Horcrux destroyed by Neville?", options: ["Diadem", "Locket", "Nagini", "Cup"], answer: 2 },
            { question: "Who wins the Triwizard Tournament?", options: ["Harry", "Cedric", "Both Harry and Cedric", "Fleur"], answer: 2 },
            { question: "Who becomes Headmaster in Book 7?", options: ["Snape", "McGonagall", "Dumbledore", "Flitwick"], answer: 0 },
            { question: "Who rescues Harry from the Dursleys in Book 5?", options: ["Lupin", "Moody", "Order of the Phoenix", "Sirius"], answer: 2 },
            { question: "Who was the Half-Blood Prince?", options: ["Harry", "Snape", "Voldemort", "Dumbledore"], answer: 1 },
            { question: "Where do Harry and Hermione find the Sword of Gryffindor?", options: ["Room of Requirement", "Dumbledore’s Office", "Frozen lake", "Chamber of Secrets"], answer: 2 },
            { question: "Who destroys the Horcrux in the locket?", options: ["Harry", "Ron", "Hermione", "Neville"], answer: 1 },
            { question: "Where does the final battle take place?", options: ["Forbidden Forest", "Hogwarts", "Ministry of Magic", "Hogsmeade"], answer: 1 }
        ]
    },
    {
        id: 6,
        symbol: "🧪",
        title: "Potions and Objects",
        banner: "../assets/img/potions.jpg",
        questions: [
            { question: "What potion grants luck?", options: ["Amortentia", "Felix Felicis", "Polyjuice", "Veritaserum"], answer: 1 },
            { question: "What potion changes your appearance?", options: ["Veritaserum", "Felix Felicis", "Polyjuice Potion", "Amortentia"], answer: 2 },
            { question: "What is the love potion called?", options: ["Veritaserum", "Polyjuice Potion", "Felix Felicis", "Amortentia"], answer: 3 },
            { question: "What does the Marauder’s Map show?", options: ["Hogwarts’ secret passages", "Potion recipes", "Quidditch scores", "Spell instructions"], answer: 0 },
            { question: "What is Harry’s wand core?", options: ["Dragon heartstring", "Unicorn hair", "Phoenix feather", "Thestral hair"], answer: 2 },
            { question: "What object does Dumbledore leave to Hermione in his will?", options: ["Sword", "Snitch", "Deluminator", "Tales of Beedle the Bard"], answer: 3 },
            { question: "What does the Deluminator do?", options: ["Lights up", "Unlocks doors", "Absorbs light", "Changes appearance"], answer: 2 },
            { question: "What does the Pensieve do?", options: ["Shows the future", "Shows memories", "Creates potions", "Transforms objects"], answer: 1 },
            { question: "What object must be caught to end a Quidditch match?", options: ["Bludger", "Quaffle", "Snitch", "Broom"], answer: 2 },
            { question: "What Horcrux was hidden in Bellatrix’s vault?", options: ["Locket", "Cup", "Diadem", "Ring"], answer: 1 }
        ]
    }
];
