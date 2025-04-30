const quizData = [
    {
        question: 'What does DOM stands for',
        options: [
            'Document Order Modal',
            'Document Object Modal',
            'Data Object Modal',
            'Direct Object Management'
        ],
        correct: 1
    },
    {
        question: 'Which Method select By Id',
        options: [
            'getElementById()',
            'getQuerySelectorAll()',
            'getElement()',
            'getElementByClassName()'
        ],
        correct: 0,
    },
    {
        question: 'Which event fires on input change',
        options: ['click', 'submit', 'change', 'keydown'],
        correct: 2
    }
]

let questions = [...quizData].sort(() => Math.random() - 0.5);
let currentQuestion = 0;
let score = 0;
let timer;
let leftTimer;

const questionEl = document.getElementById('question')
const optionsEl = document.getElementById('options')
const nextBtn = document.getElementById('next-btn')
const timerEl = document.getElementById('timer')
const resultEl = document.getElementById('result')

function loadQuestion() {
    clearInterval(timer)
    leftTimer = 15;
    updateTimer();
    timer = setInterval(countdonw, 1000);

    
    const q = questions[currentQuestion]
    questionEl.textContent = `Q${currentQuestion + 1}. ${q.question}`
    optionsEl.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement('button')
        btn.classList.add('option-btn');
        btn.textContent = option;
        btn.addEventListener('click', () => selectAnswer(index,true))
        optionsEl.appendChild(btn)
    });
    nextBtn.style.display = 'none'
}

function countdonw(){
    leftTimer--;
    updateTimer();
    if(leftTimer === 0){
        clearInterval(timer)
        selectAnswer(questions[currentQuestion]?.correct, false)
    }
}

function updateTimer(){
    timerEl.textContent = `${leftTimer}`
}

nextBtn.addEventListener('click', () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion()
    } else {
        // show the result
        showResult()
    }
})

function selectAnswer(index,shouldScore) {
    const q = questions[currentQuestion]
    const button = document.querySelectorAll('.option-btn')

    button.forEach(btn => btn.disabled = true)

    if (index === q.correct) {
        shouldScore && score++;
        button[index].classList.add('correct');
    } else {
        button[index].classList.add('wrong');
        button[q.correct].classList.add('correct');
    }

    nextBtn.style.display = 'inline-block'
}

function showResult() {
    nextBtn.style.display = 'none';
    const hightScore = localStorage.getItem('quizHigestScore') || 0;

    const isNew = score > hightScore

    if (isNew) {
        localStorage.setItem('quizHigestScore', score)
    }

    resultEl.innerHTML = `
    <h2>Hurry Quiz Completed</h2>
    <p>You have score ${score} out of ${questions.length} questions</p>
    <p>Highest Score: ${Math.max(score, hightScore)}</p>
    ${isNew ? "<p>Hey, new hightest score</p>" : " "}
    <button onclick="location.reload()">Restart Quiz</button>
    `
}

loadQuestion()
