// const questionObj = {
//   category: "Food & Drink",
//   id: "qa-1",
//   correctAnswer: "Three",
//   options: ["Two", "Three", "Four", "Five"],
//   question: "How many pieces of bun are in a Mcdonald's Big Mac?",
// };

const quesJSON = [
  {
    correctAnswer: "Sai",
    options: ["Rocklee", "Hinata", "Hanzo", "Sai"],
    question: "Who is the new member of team 7?",
  },
  {
    correctAnswer: "6",
    options: [
      "8",
      "5",
      "6",
      "3",
    ],
    question: "How many gates did the might guy open while fighting Kisame for the second time?",
  },
  {
    correctAnswer: "3 days",
    options: [
      "3 days",
      "1 day",
      "5 days",
      "4 days",
    ],
    question: "How long does it take a leaf village ninja to reach the sand village?",
  },
  {
    correctAnswer: "Jugo",
    options: ["Sauske", "kimmimaru", "Jugo", "Sakon"],
    question: "Who has the original cursed mark?",
  },
  {
    correctAnswer: "Itachi",
    options: [
      "Naruto",
      "Itachi",
      "Sakura",
      "Kakashi",
    ],
    question: "Who took the cursed mark off Sauske?",
  },
  {
    correctAnswer: "A susano",
    options: ["A snake", "A Toad", "A susano", "A fox"],
    question: " What is summoned when Itachi Mangekyo and Amaratsu are awakened?",
  },
  {
    correctAnswer: "Yahiko",
    options: ["Kakuzu", "Yahiko", "Kabuto", "Hiraku"],
    question: " Who is the creator of akatsuki?",
  },
  {
    correctAnswer: "Sasori",
    options: ["Kankuro", "Chiyo", "Naruto", "Sasori"],
    question: " Who created that poison the kankuro puppets use?",
  },
  {
    correctAnswer: "Kakashi",
    options: ["Danzo", "Naruto", "Kakashi", "Mighty guy"],
    question: " Who became the 6th Hokage?",
  },
  {
    correctAnswer: "4th Hokage",
    options: ["Kakashi", "Jiraya", "4th Hokage", "Sasuke"],
    question: "Who stopped Naruto from going to all nine tails while fighting pain?",
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
