const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questions = [
  {
    question: "What does 'MVP' stand for in a freelance web project?",
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
      "Which document typically outlines the scope, deliverables, and timeline before starting freelance work?",
    choices: [
      "Invoice",
      "Proposal/SOW (Statement of Work)",
      "Resume",
      "Portfolio",
    ],
    answer: "Proposal/SOW (Statement of Work)",
  },
  {
    question: "What is 'scope creep' in a freelance project?",
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
      "Which of these is commonly used by freelancers to track billable hours?",
    choices: ["Figma", "Toggl", "Photoshop", "Postman"],
    answer: "Toggl",
  },
  {
    question: "What does 'responsive design' primarily ensure?",
    choices: [
      "The website loads faster",
      "The website works well on different screen sizes and devices",
      "The website has more animations",
      "The website uses less code",
    ],
    answer: "The website works well on different screen sizes and devices",
  },
  {
    question: "In freelancing, what is a 'retainer'?",
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
      "Which platform is commonly used by freelancers to host and version-control their code?",
    choices: ["GitHub", "Canva", "Mailchimp", "Trello"],
    answer: "GitHub",
  },
  {
    question:
      "What is the main purpose of a 'portfolio' website for a freelance developer?",
    choices: [
      "To sell physical products",
      "To showcase past projects and skills to attract clients",
      "To host client databases",
      "To manage invoices",
    ],
    answer: "To showcase past projects and skills to attract clients",
  },
  {
    question: "What does 'client onboarding' typically involve?",
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
      "Which of these is a common freelance pricing model, besides hourly rates?",
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
});
