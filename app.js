const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "How to Make Lasagnaale", correct: "false" },
            { text: "Hyper Text Markup Language", correct: "true" },
            { text: "Hot Mail", correct: "false" },
            { text: "Hyper Texts Makeup Language", correct: "false" },
        ]
    },

    {
        question: "How many tags are in a regular element?",
        answers: [
            { text: "2", correct: "true" },
            { text: "3", correct: "false" },
            { text: "1", correct: "false" },
            { text: "4", correct: "false" },
        ]
    },

    {
        question: "What is the difference between an opening tag and a closing tag?",
        answers: [
            { text: "There is no difference", correct: "false" },
            { text: "Opening tag has a / in front", correct: "false" },
            { text: "Closing tag has a / in front", correct: "true" },
            { text: "None Of This", correct: "false" },
        ]
    },
    {
        question: "< br  / > What type of tag is this?",
        answers: [
            { text: "Break tag", correct: "true" },
            { text: "None Of This", correct: "false" },
            { text: "A broken one", correct: "false" },
            { text: "An opening tag", correct: "false" },
        ]
    },
    {
        question: "Where is the meta tag only found?",
        answers: [
            { text: "The last page", correct: "false" },
            { text: "None Of This", correct: "false" },
            { text: "The second page", correct: "false" },
            { text: "The home page", correct: "true" },
        ]
    },
    {
        question: " Which is the correct way to tag an image?",
        answers: [
            { text: `src=”image.jpg/gif” alt=”type some text”`, correct: "false" },
            { text: `img src="image.jpg/gif" alt=img"`, correct: "true" },
            { text: `Src=”image.jpg/gif” alt=type some text”`, correct: "false" },
            { text: `Src=”img.jpg” alt=image”`, correct: "false" },
        ]
    },
    {
        question: "What is an element that does not have a closing tag called?",
        answers: [
            { text: "Tag", correct: "false" },
            { text: "None Of This", correct: "false" },
            { text: "Empty element", correct: "true" },
            { text: "Closed element", correct: "false" },
        ]
    },
    {
        question: " What should values always be enclosed in?",
        answers: [
            { text: "Parenthesis", correct: "false" },
            { text: "None Of This", correct: "false" },
            { text: "Quotation marks", correct: "true" },
            { text: "Commas", correct: "false" },
        ]
    },
    {
        question: "How can you add space between the border and inner content of the element?",
        answers: [
            { text: "margin", correct: "false" },
            { text: "border", correct: "false" },
            { text: "Spacing", correct: "false" },
            { text: "padding", correct: "true" },
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Computer Style Sheet", correct: "false" },
            { text: "Colorful Style Sheet", correct: "false" },
            { text: "None Of This", correct: "true" },
            { text: "Creative Style Sheet", correct: "false" },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}


function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
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
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Try Again"
    nextButton.style.display = "block"
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}



nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();











