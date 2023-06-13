const quizDB = [
    {
        question: "1. What does CSS stand for?",
        a: "Creative Style Sheets",
        b: "Colorful Style Sheets",
        c: 'Cascading Style Sheets',
        d: "Computer Style Sheets",
        ans: "ans3"
    },
    {
        question: "2. In CSS, h1 can be called as?",
        a: "Selector",
        b: "Value",
        c: 'Attribute',
        d: "Tag",
        ans: 'ans1'
    },
    {
        question: "3. CSS padding property is used for?",
        a: "Border",
        b: "Space",
        c: 'Margin',
        d: "Background color",
        ans: 'ans2'
    },
    {
        question: "4. Which is the correct CSS syntax?",
        a: "body {color: black}",
        b: "{body;color:black}",
        c: '{body:color=black(body}',
        d: "body:color=black",
        ans: 'ans1'
    },
]

const question = document.querySelector('.question');

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

const submit = document.getElementById('submit');
const answers = document.querySelectorAll('.answer')
const showScore = document.querySelector('#showScore')

let questionCount = 0;
const loadQuestion = (questionCount) => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion(questionCount); // when page reload so loadQuestion funciotn automatice call one time

getCheckAnswer = () => {
    let answer;
    answers.forEach((currentAnsElem) => {
        if (currentAnsElem.checked) {
            answer = currentAnsElem.id
        }
    })
    return answer;
};

resetInputClick = () => {
    answers.forEach((currentAnsElem) => {
        currentAnsElem.checked = false;
    })
}

const options = document.querySelectorAll("label")
let score = 0;
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    }
    questionCount++;
    resetInputClick();
    if (questionCount < quizDB.length) {
        loadQuestion(questionCount);
    }
    else {
        showScore.innerHTML = `
            <h3>You scored ${score}/${quizDB.length} ✌️ </h3>
            <button class="btn" onclick="location.reload()" >Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
})