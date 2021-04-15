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
      { text: 'når man er alene', correct: true },
      { text: 'når man er glad', correct: false },
      { text: 'når man er sur', correct: false },
      { text: 'når man er forpustet', correct: false }
    ]
  },
  {
    question: 'hvem er det bedste gruppemedlem?',
    answers: [
      { text: 'pernille', correct: true },
      { text: 'lars larsen', correct: false },
      { text: 'pikachu', correct: false },
      { text: 'Ole Henriksen', correct: false }
    ]
  },
  {
    question: 'hvem er Søren banjomus?',
    answers: [
      { text: 'Ingi', correct: true },
      { text: 'lars Lykke', correct: false },
      { text: 'Dennis', correct: false },
      { text: 'Kim', correct: false }
    ]
  },
  {
    question: 'var det svært at lave denne quiz?',
    answers: [
      { text: 'nej', correct: false },
      { text: 'ja', correct: true },
      { text: 'nej', correct: false },
      { text: 'nej', correct: false }
    ]
  },
  {
    question: 'Hvor mange kokosnødder kan en migrerende afrikansk svale bære?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true },
      { text: '6', correct: false },
      { text: '6', correct: false }
    ]
  }
]
