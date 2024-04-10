// const questionObj = {
//   category: "Food & Drink",
//   id: "qa-1",
//   correctAnswer: "Three",
//   options: ["Two", "Three", "Four", "Five"],
//   question: "How many pieces of bun are in a Mcdonald's Big Mac?",
// };

const quesJSON = [
  {
    correctAnswer: "Fishbone D",
    options: ["Fishbone D", "Grand Fisher", "Shrieker", "None of the above"],
    question: "What is the name of the Hollow which attacked the Kurosaki clinic in the very 1st episode?",
  },
  {
    correctAnswer: "Benihime",
    options: [
      "Benishidare",
      "Benihime",
      "Nijigasumi",
      "Kachikame",
    ],
    question: "What is the name of Kisuke Urahara's zanpakuto?",
  },
  {
    correctAnswer: "Byakurai",
    options: [
      "Byakurai",
      "Sokatsui",
      "Shakkaho",
      "None of the above",
    ],
    question: "Hado No. 4 is ___________.",
  },
  {
    correctAnswer: "Sui-Feng",
    options: ["Retsu Unohana", " Mayuri Kurotsuchi", "Yamamoto", "Sui-Feng"],
    question: "Which of the following Captain's Bankai is a Rocket Launcher?",
  },
  {
    correctAnswer: "Shun Shun Rika",
    options: [
      "Shun Shun Rika",
      "RokuHana",
      "Hana no Rokumi",
      "None of the above",
    ],
    question: "Orihime's Six hairpins turn into a group of Six pixies known as __________. ",
  },
  {
    correctAnswer: "Katen Kyokotsu",
    options: ["Zaraki Kenpachi", "Katen Kimiko", "Katen Kyotomi", "Katen Kyokotsu"],
    question: "What is the name of Shunsui Kyoraku's zanpakuto?",
  },
  {
    correctAnswer: "Dried Persimmons",
    options: [" Sushi", "Ramen Noodles", "Miso Soup", "Dried Persimmons"],
    question: " Gin Ichimaru's favorite food item is ___________. ",
  },
  {
    correctAnswer: "Muken",
    options: ["Bykuya", "Muken", "Akumahiro", " Yume"],
    question: "  What is the name of the prison cell in which Aizen is being kept after his defeat at the hands of Ichigo?",
  },
  {
    correctAnswer: "Retsu Unohana",
    options: ["Toshiro Hitsugaya", "Sui Feng", "Isane Kotetsu", "Retsu Unohana"],
    question: "Minazuki is the name of whose zanpakuto?",
  },
  {
    correctAnswer: "Tensa Zangetsu",
    options: ["Tensa Zangetsu", "Tenshi Zangetsu", "Sekai Zangetsu", " Yenshi Zangetsu"],
    question: "The name of Ichigo Kurosaki's Bankai is ____________. ",
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
