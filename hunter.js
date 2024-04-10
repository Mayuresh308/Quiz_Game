// const questionObj = {
//   category: "Food & Drink",
//   id: "qa-1",
//   correctAnswer: "Three",
//   options: ["Two", "Three", "Four", "Five"],
//   question: "How many pieces of bun are in a Mcdonald's Big Mac?",
// };

const quesJSON = [
  {
    correctAnswer: "4",
    options: ["4", "6", "5", "2"],
    question: "How many siblings does killua Zoldyck have?",
  },
  {
    correctAnswer: "Hunter Exam",
    options: [
      "Hunter Exam",
      "Heavens Arena",
      "Green Island",
      "Whale Tail Island",
    ],
    question: "When was the first time Killua & Gon met?",
  },
  {
    correctAnswer: "9-4",
    options: [
      "10-6",
      "9-4",
      "2-1",
      "3-4",
    ],
    question: "How many points has Hisoka won against Gon at Heavens Arena?",
  },
  {
    correctAnswer: "because of the Phantom Troupe",
    options: ["because of the Phantom Troupe", " because he's weird", "IDK", "because they are creepy"],
    question: "Why does Kurapika hate spiders?",
  },
  {
    correctAnswer: "Youngest",
    options: [
      "Youngest",
      "IDK",
      "Oldest",
      "both",
    ],
    question: "Is Killua Zoldyck the youngest or the oldest in the Zoldyck family?",
  },
  {
    correctAnswer: "Because of his dad",
    options: ["Because of his dad", "Because he was forced to", "Because he wants to make new friends", "Because he wants to go on an adventure"],
    question: " Why does Gon want to become a Hunter?",
  },
  {
    correctAnswer: "13",
    options: ["44", "13", "16", "20"],
    question: " How many Phantom Troupe members are there?",
  },
  {
    correctAnswer: "Manipulation",
    options: ["Manipulation", "Transmutation", "Specialization", " Emuter"],
    question: " What Nen does Illumi have?",
  },
  {
    correctAnswer: "6",
    options: ["6", "10", "8", "7"],
    question: " How many seasons does Hunter X Hunter have?",
  },
  {
    correctAnswer: "Chrollo",
    options: ["Hisoka", "Chrollo", "Neither", "Both"],
    question: "Who would win in a fight, Hisoka or Chrollo?",
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
