const questionSet = [
    {
        question: "Which programming language is primarily used for developing Android applications?",
        options: [
            { text: "Java", correct: true},
            { text: "Python", correct: false},
            { text: "C#", correct: false},
            { text: "Swift", correct: false}
        ]
    },
    {
        question: "What does HTML stand for in web development?",
        options: [
            { text: "Hyperlink and Text Markup Language", correct: false},
            { text: "Hypertext Markup Language", correct: true},
            { text: "Hyper Transfer Markup Language", correct: false},
            { text: "High-Tech Markup Language", correct: false}
        ]
    },
    {
        question: "What is the maximum transmission speed of USB 3.0?",
        options: [
            { text: "480 Mbps", correct: false},
            { text: "1 Gbps", correct: false},
            { text: "5 Gbps", correct: true},
            { text: "10 Gbps", correct: false}
        ]
    },
    {
        question: "What does VPN stand for?",
        options: [
            { text: "Virtual Private Network", correct: true},
            { text: "Virtual Public Network", correct: false},
            { text: "Virtual Personal Network", correct: false},
            { text: "Visible Private Network", correct: false}
        ]
    },
    {
        question: "What is the default port number for HTTP connections?",
        options: [
            { text: "80", correct: true},
            { text: "443", correct: false},
            { text: "8080", correct: false},
            { text: "22", correct: false}
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

    if(currentQIndex == questionSet.length-1){
        nextBtn.innerHTML = "Finish";
    }
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
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(Btns.children).forEach(btn =>{
        if (btn.dataset.correct === "true") {
            btn.classList.add("correct");
        }
        btn.disabled = true;
    })
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questionSet.length}`;
    nextBtn.style.display = "none";

    const scoreImg = document.createElement("img");
    scoreImg.src = `./scoreImages/${score}.png`
    Btns.appendChild(scoreImg);
}

function handleNext(){
    currentQIndex++;
    if(currentQIndex < questionSet.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click", ()=>{
    if(currentQIndex < questionSet.length){
        handleNext();
    }else{
        start();
    }
})

start();

