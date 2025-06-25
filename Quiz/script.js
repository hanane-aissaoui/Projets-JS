const questions = [
  {
    question: "Comment inverser un tableau T1?",
    answers: [
      { text: "T1.transpose()", correct: false },
      { text: "T1.inverse()", correct: false },
      { text: "T1.rollout", correct: false },
      { text: "T1.reverse()", correct: true }
    ]
  },
  {
    question: "Math.max(Math.SQRT2 , Math.PI , 4) retourne",
    answers: [
      { text: "la racine carrée de 2", correct: false },
      { text: "une erreur", correct: false },
      { text: "4", correct: true },
      { text: "PI", correct: false }
    ]
  },
  {
    question: "window.confirm() affiche une boite de dialogue avec",
    answers: [
      { text: "un message, un champ de saisie et les boutons OK Annuler", correct: false },
      { text: "un message et le bouton OK seul", correct: false },
      { text: "n'existe pas en JavaScript", correct: false },
      { text: "un message et les boutons OK Annuler", correct: true }
    ]
  },
  {
    question: "La fonction split() divise une chaîne selon ?",
    answers: [
      { text: "des caractères spécifiques", correct: true },
      { text: "un nombre de caractères précis", correct: false },
      { text: "une condition logique", correct: false },
      { text: "ces trois réponses sont possibles avec split()", correct: false }
    ]
  },
  {
    question: "Qu'est-ce que JSON par rapport au JavaScript ?",
    answers: [
      { text: "un langage de requêtes", correct: false },
      { text: "un format d'échange de données texte", correct: true },
      { text: "un langage de programmation dérivé", correct: false },
      { text: "une variable d'environnement système", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("reponse");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = "Suivant";
  showQuestion();
}

function showQuestion() {
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.style.backgroundColor = "#0ded3a";
    score++;
  } else {
    selectedBtn.style.backgroundColor = "#f70303";
  }

  
  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.style.backgroundColor = "#0ded3a";
    }
  });

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionElement.innerText = `Votre score est ${score} sur ${questions.length}.`;
  nextButton.innerText = "Recommencer";
  nextButton.style.display = "block";
  nextButton.onclick = startQuiz;
}

startQuiz();