// const questionObj = {
//   category: "Food & Drink",
//   id: "qa-1",
//   correctAnswer: "Three",
//   options: ["Two", "Three", "Four", "Five"],
//   question: "How many pieces of bun are in a Mcdonald's Big Mac?",
// };

const quesJSON = [
  {
    correctAnswer: "Kamado",
    options: ["Kamado", "Hashibira", "Agatsuma", "Kumadi"],
    question: " What is Tanjiro's last name?",
  },
  {
    correctAnswer: "Giyuu Tomioka",
    options: [
      "Giyuu Tomioka",
      "Shinobu Kocho",
      "Mitsuri Kanroji",
      "Kyojuro Rengoku",
    ],
    question: "Who was the first Hashira that Tanjiro met first in the mountains?",
  },
  {
    correctAnswer: "Sakonji Urokodaki",
    options: [
      "Sakonji Urokodaki",
      "Sanemi Shinazugawa",
      "Shinjuro Rengoku",
      "Kyojuro Rengoku",
    ],
    question: "Who was the person who taught Tanjiro Water Breathing?",
  },
  {
    correctAnswer: "Nichirin Sword",
    options: ["Nichirin Sword", " Adamantium Blade", "Steel Katana", "Vibranium katana"],
    question: "What type of sword does Demon Slayer Corp own?",
  },
  {
    correctAnswer: "Muzan Kibutsuji",
    options: [
      "Muzan Kibutsuji",
      "Rui",
      "Kokushibo",
      "Akaza",
    ],
    question: "Who is said to be the creator for demons?",
  },
  {
    correctAnswer: "12",
    options: ["10", "14", "6", "12"],
    question: "  There are ___ Kizuki under the Demon King's command.",
  },
  {
    correctAnswer: "Wood",
    options: ["Iron core", "Charcoal", "Gold Ore", "Wood"],
    question: " What did Tanjiro sell before his Demon Slayer job?",
  },
  {
    correctAnswer: "Inosuke Hashibira & Tanjiro Kamado",
    options: ["Tanjiro Kamado & Zenitsu Agatsuma", "Inosuke Hashibira & Tanjiro Kamado", "Zenitsu Agatsuma & Inosuke Hashibira", " Zenitsu Agatsuma & Kyojuro Rengoku"],
    question: " Which two Demon Slayers never seen a train before?",
  },
  {
    correctAnswer: "Genya Shinazugawa",
    options: ["Genya Shinazugawa", "Iguro Obanai", "Enmu", "Akaza"],
    question: "Who is known as the “Demon Child?",
  },
  {
    correctAnswer: "Wind Hashira",
    options: ["Wind Hashira", "Mist Hashira", " Water Hashira", "Sound Hashira"],
    question: "Which Hashira has “Rare Marechi Blood?",
  },
];

let score = 0;
let currentQuestion = 0;
const totalScore = quesJSON.length;

const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextEl = document.getElementById("next");

showQuestion();

nextEl.addEventListener("click", () => {
  nextQuestion();
  scoreEl.textContent = `Score: ${score} / ${totalScore}`;
});

function showQuestion() {
  // //Destructuring the object
  const { correctAnswer, options, question } = quesJSON[currentQuestion];
  //setting question text content
  questionEl.textContent = question;

  const shuffledOptions = shuffleOptions(options);

  //Populating the options div with the buttons
  shuffledOptions.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    optionEl.appendChild(btn);

    //Event handling on the button
    btn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score++;
      } else {
        score = score - 0.25;
      }
      //   console.log(score);
      scoreEl.textContent = `Score: ${score} / ${totalScore}`;
      nextQuestion();
    });
  });
}

function nextQuestion() {
  currentQuestion++;
  optionEl.textContent = "";
  if (currentQuestion >= quesJSON.length) {
    questionEl.textContent = "Quiz Completed!!";
    nextEl.remove();
  } else {
    showQuestion();
  }
}

//shuffling the options

function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i + 1);

    [options[i], options[j]] = [options[j], options[i]];
  }

  return options;
}

// shuffleOptions([1, 2, 3, 4, 5]);
