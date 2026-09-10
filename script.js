const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const choiceList = document.getElementById("choices-list");
const resultContainer = document.getElementById("result-container");
const scoreText = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

const questions = [
  {
    question: "1. What does 'MVP' stand for in a freelance web project?",
    choices: [
      "Most Valuable Page",
      "Minimum Viable Product",
      "Multiple Vendor Platform",
      "Main Value Proposition",
    ],
    answer: "Minimum Viable Product",
  },
  {
    question:
      "2. Which document typically outlines the scope, deliverables, and timeline before starting freelance work?",
    choices: [
      "Invoice",
      "Proposal/SOW (Statement of Work)",
      "Resume",
      "Portfolio",
    ],
    answer: "Proposal/SOW (Statement of Work)",
  },
  {
    question: "3. What is 'scope creep' in a freelance project?",
    choices: [
      "A pricing strategy",
      "When a client gradually asks for more work than originally agreed",
      "A type of website layout",
      "A tool for tracking time",
    ],
    answer: "When a client gradually asks for more work than originally agreed",
  },
  {
    question:
      "4. Which of these is commonly used by freelancers to track billable hours?",
    choices: ["Figma", "Toggl", "Photoshop", "Postman"],
    answer: "Toggl",
  },
  {
    question: "5. What does 'responsive design' primarily ensure?",
    choices: [
      "The website loads faster",
      "The website works well on different screen sizes and devices",
      "The website has more animations",
      "The website uses less code",
    ],
    answer: "The website works well on different screen sizes and devices",
  },
  {
    question: "6. In freelancing, what is a 'retainer'?",
    choices: [
      "A one-time payment for a finished project",
      "A recurring fee a client pays to reserve ongoing work from you",
      "A type of website template",
      "A legal contract for full-time employment",
    ],
    answer: "A recurring fee a client pays to reserve ongoing work from you",
  },
  {
    question:
      "7. Which platform is commonly used by freelancers to host and version-control their code?",
    choices: ["GitHub", "Canva", "Mailchimp", "Trello"],
    answer: "GitHub",
  },
  {
    question:
      "8. What is the main purpose of a 'portfolio' website for a freelance developer?",
    choices: [
      "To sell physical products",
      "To showcase past projects and skills to attract clients",
      "To host client databases",
      "To manage invoices",
    ],
    answer: "To showcase past projects and skills to attract clients",
  },
  {
    question: "9. What does 'client onboarding' typically involve?",
    choices: [
      "Writing CSS animations",
      "The process of gathering requirements and setting expectations with a new client",
      "Deploying a website to production",
      "Testing website performance",
    ],
    answer:
      "The process of gathering requirements and setting expectations with a new client",
  },
  {
    question:
      "10. Which of these is a common freelance pricing model, besides hourly rates?",
    choices: [
      "Fixed-price per project",
      "Random pricing",
      "Client-set salary",
      "Auction bidding only",
    ],
    answer: "Fixed-price per project",
  },
];

startBtn.addEventListener("click", function () {
  startBtn.classList.add("hidden");
  resultContainer.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  showQuestion();
});

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  showQuestion(currentQuestionIndex);
});

function showQuestion() {
  answered = false;
  nextBtn.classList.add("hidden");
  const currtQuestion = questions[currentQuestionIndex];
  questionText.textContent = currtQuestion.question;
  choiceList.innerHTML = "";
  currtQuestion.choices.forEach((choice) => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.addEventListener("click", () => selectAnswer(choice));
    choiceList.appendChild(li);
  });
}

function selectAnswer(choice) {
  if (answered) return;
  answered = true;
  const selectedAnswer = questions[currentQuestionIndex].answer;
  if (selectedAnswer === choice) {
    // score++;
    score += 1;
    // console.log(score);
  }

  const allChoices = choiceList.querySelectorAll("li");
  allChoices.forEach((li) => {
    li.style.pointerEvents = "none";
    if (li.textContent === selectedAnswer) {
      li.style.backgroundColor = "green";
    }
  });

  if (currentQuestionIndex + 1 === questions.length) {
    showResult();
  } else {
    nextBtn.classList.remove("hidden");
  }
}

function showResult() {
  questionContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreText.textContent = `You scored ${score} out of ${questions.length}`;
}

restartBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  resultContainer.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  showQuestion();
});
