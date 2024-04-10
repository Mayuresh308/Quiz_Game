// const questionObj = {
//   category: "Food & Drink",
//   id: "qa-1",
//   correctAnswer: "Three",
//   options: ["Two", "Three", "Four", "Five"],
//   question: "How many pieces of bun are in a Mcdonald's Big Mac?",
// };

const quesJSON = [
  {
    correctAnswer: "Keith Shadis",
    options: ["Keith Shadis", "Mikasa", "Jean", "Armin"],
    question: "Who ruined Eren's equipment back in the trainee days?",
  },
  {
    correctAnswer: "Kuchel",
    options: [
      "Kuchel",
      "Kim",
      "Carla",
      "Carmen",
    ],
    question: "What was the name of Levi's mother?",
  },
  {
    correctAnswer: "17",
    options: [
      "15",
      "16",
      "17",
      "18",
    ],
    question: "The Beast Titan is a __ Meter Class.",
  },
  {
    correctAnswer: "Gunther",
    options: ["Gunther", "Eld", "Petra", "Oluo"],
    question: "Who was the first member of Levi's squad to be killed by Annie, the Female Titan?",
  },
  {
    correctAnswer: "For 60 years",
    options: [
      "For 60 years",
      "For 50 years",
      "For 40 years",
      "For 70 years",
    ],
    question: "For how many years did Ymir wander outside of the Walls as a Titan?",
  },
  {
    correctAnswer: "Dot Pixis",
    options: ["Dot Pixis", "Nile Dok", "Darius Zackly", "Erwin"],
    question: "Who is in charge of the defense of the southern region?",
  },
  {
    correctAnswer: "Eyebrows",
    options: ["Eyebrows", "Smartass", "Idiot", "Blondie"],
    question: " What nickname was given to Erwin when he was a child?",
  },
  {
    correctAnswer: "Sasha",
    options: ["Sasha", "Moblit", "Armin", "Hanji"],
    question: " Who tended to Levi's wounds after he was attacked by the First Interior Squad?",
  },
  {
    correctAnswer: "35",
    options: ["30", "25", "40", "35"],
    question: " How many members of the First Interior Squad did Levi's squad fight in chapter 64?",
  },
  {
    correctAnswer: "The steam he releases from his body",
    options: ["The steam he releases from his body", "The size of his body", "His ability to harden", "His speed"],
    question: "What is the only thing that protects the Colossal Titan?",
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
