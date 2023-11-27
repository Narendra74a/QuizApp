const quizData = [{
    question: 'how old you',
    a: '10',
    b: '12',
    c: '28',
    d: '110',
    correct: "c"
}, {
    question: 'what is most use programming language 2019',
    a: 'java',
    b: 'js',
    c: 'python',
    d: 'c',
    correct: "a"
}, {
    question: 'how is precident of us',
    a: 'flori',
    b: 'dori',
    c: 'donal trump',
    d: 'jhsdgf',
    correct: "c"
}, {
    question: 'what dose html stend for',
    a: 'hiper text markup language',
    b: 'isudfh',
    c: 'dkfjgh',
    d: 'xkjfgn',
    correct: "a"
}, {
    question: 'what year was javascript luanched',
    a: '2020',
    b: '2019',
    c: '2018',
    d: 'none of above',
    correct: "d"
}, {
    question: 'what dose html stend for',
    a: 'hiper text markup language',
    b: 'isudfh',
    c: 'dkfjgh',
    d: 'xkjfgn',
    correct: "a"
}
]

const questionEL = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');


let currentQuestion = 0;
let currentQuiz = 0;
let answer = undefined;
let score = 0;
loadQuiz();

function loadQuiz() {
    
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEL.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    // currentQuestion++;
}

function getselected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}


submitBtn.addEventListener("click", () => {

    // check to see answer//
    const answer = getselected();
    console.log(answer);
    if (answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }


        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at  ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
});