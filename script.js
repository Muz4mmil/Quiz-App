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
const ansBtns = document.querySelector(".btns");
const nextBtn = document.querySelector(".nextBtn");

let currentQIndex = 0;
let score = 0;

function start(){
    currentQIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";

    showQuestion();
}
