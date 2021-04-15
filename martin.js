const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => 1)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Afslut quiz'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Hvad er ensomhed?',
    answers: [
      { text: 'En følelse, der opstår når man ikke får opfyldt sit sociale behov', correct: true },
      { text: 'En følelse, der opstår, når man er bange', correct: false },
      { text: 'En følelse, der opstår, når man keder sig', correct: false }
    ]
  },
  {
    question: 'Kan man være ensom, selvom man er omkredset af mennesker?',
    answers: [
      { text: 'Ja, for man kan sagtens føle sig alene i selskab med andre', correct: true },
      { text: 'Nej, selvfølgelig er man ikke ensom i andres selskab', correct: false },
      { text: 'Nej, hvis du er ensom kender du ingen mennesker', correct: false }
    ]
  },
  {
    question: 'Hvor mange unge føler sig ensomme i Danmark?',
    answers: [
      { text: '15.000', correct: false },
      { text: '125.000', correct: true },
      { text: '50.000', correct: false }
    ]
  },
  {
    question: 'Hvilke konsekvenser kan forekomme af langvarig ensomhed?',
    answers: [
      { text: 'Dårligere søvn og hovedpine', correct: false },
      { text: 'Depression og mindre empatisk', correct: false },
      { text: 'Alle tingene', correct: true }
    ]
  },
  {
    question: 'Hvad kan du gøre, hvis du føler dig ensom?',
    answers: [
      { text: 'Ingenting og håbe på at det bliver bedre', correct: false },
      { text: 'Samle mod til at snakke med nogen, eller søge hjælp', correct: true },
      { text: 'Spørge din huns til råds', correct: false }
    ]
  }
]
