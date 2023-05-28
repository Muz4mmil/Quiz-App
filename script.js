const questionSet = [
    {
        question: "Question 1",
        options: [
            { text: "Answer1", correct: false},
            { text: "Answer1", correct: false},
            { text: "Answer1", correct: false},
            { text: "Answer1", correct: true}
        ]
    },
    {
        question: "Question 2",
        options: [
            { text: "Answer1", correct: false},
            { text: "Answer1", correct: false},
            { text: "Answer1", correct: false},
            { text: "Answer1", correct: true}
        ]
    },
    {
        question: "Question 3",
        options: [
            { text: "Answer1", correct: false},
            { text: "Answer1", correct: false},
            { text: "Answer1", correct: false},
            { text: "Answer1", correct: true}
        ]
    },
    {
        question: "Question 4",
        options: [
            { text: "Answer1", correct: false},
            { text: "Answer1", correct: false},
            { text: "Answer1", correct: false},
            { text: "Answer1", correct: true}
        ]
    },
]

const questionElement = document.querySelector(".question");
const Btns = document.querySelector(".btns");
const nextBtn = document.querySelector(".nextBtn");

let currentQIndex = 0;
let score = 0;

function start(){
    currentQIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";

    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQ = questionSet[currentQIndex];
    let QNo = currentQIndex + 1;
    questionElement.innerHTML = QNo +". "+ currentQ.question;

    currentQ.options.forEach(option =>{
        const btn = document.createElement("button");
        btn.innerHTML = option.text;
        btn.classList.add("ansBtn");
        Btns.appendChild(btn);
        if(option.correct){
            btn.dataset.correct = option.correct;
        }
        btn.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    while(Btns.firstChild){
        Btns.removeChild(Btns.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
}

start();

