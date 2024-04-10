// const questionObj = {
//   category: "Food & Drink",
//   id: "qa-1",
//   correctAnswer: "Three",
//   options: ["Two", "Three", "Four", "Five"],
//   question: "How many pieces of bun are in a Mcdonald's Big Mac?",
// };

const quesJSON = [
  {
    correctAnswer: "At school",
    options: ["At home", "In the middle of a park", "Outside a police station", "At school"],
    question: "Where did Light first find the Death Note?",
  },
  {
    correctAnswer: "He was bored",
    options: [
      "Light was chosen to be Kira",
      "Light told him to do",
      "He was bored",
      "He would have died if he didn't",
    ],
    question: "Why did Ryuk drop his Death Note into the human world?",
  },
  {
    correctAnswer: "A terrorist using hostages at a school",
    options: [
      "A pervert outside a convenience store",
      "A terrorist using hostages at a school",
      "Lind L. Tailor",
      "The FBI agent trailing him",
    ],
    question: "The first person Light killed with the Death Note?",
  },
  {
    correctAnswer: "Wammy's House",
    options: ["Wammy's House", "Wynton Academy", "Westridge", "Westlake House"],
    question: "The name of the orphanage where L, Mello, and Near were raised?",
  },
  {
    correctAnswer: "Raye Penber",
    options: [
      "Thomas O'Connor",
      "Raye Iwamatsu",
      "Mark Dwellton",
      "Raye Penber",
    ],
    question: "The name of the FBI Agent that was stalking Light was?",
  },
  {
    correctAnswer: "The 13-Day Rule",
    options: ["The 11-Hour Rule", "The Absent Owner Clause", "The Two-Week Clause", "The 13-Day Rule"],
    question: "What was the fake rule in the Death Note called?",
  },
  {
    correctAnswer: "Inside his watch",
    options: ["Inside his watch", "In his shoes", "In his socks", "Inside his cellphone"],
    question: " Where did Light often hide small clippings of the Death Note?",
  },
  {
    correctAnswer: "The SPK",
    options: ["The KGB", "The Yotsuba Alliance", "The SPK", "The NSA"],
    question: " Near's organization of investigators was called",
  },
  {
    correctAnswer: "L Lawliet",
    options: ["L Lawliet", "Light Yagami", "Soichiro Yagami", "Mello"],
    question: " What major character did Rem kill?",
  },
  {
    correctAnswer: "4th Hokage",
    options: ["Misa, Mikami, Light Yagami", "Misa, Mikami, Takada", "Misa, Higuchi, Mikami, Soichiro", "Misa, Higuchi, Mello, Takada"],
    question: "Which characters had the Shinigami eyes?",
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
