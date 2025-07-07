// === Récupération des éléments DOM ===
const quizTitle = document.getElementById("quiz-title");
const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-btn");
const timerDisplay = document.getElementById("timer");
const toggleDarkBtn = document.getElementById("toggle-dark");
const body = document.body;

// === Dark Mode ===
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        toggleDarkBtn.textContent = "🌙";
    } else {
        body.classList.remove("dark-mode");
        toggleDarkBtn.textContent = "☀️";
    }
}

function toggleTheme() {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        toggleDarkBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        body.classList.add("dark-mode");
        toggleDarkBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }
}

toggleDarkBtn.addEventListener("click", toggleTheme);
document.addEventListener("DOMContentLoaded", loadTheme);

// === Gestion du Quiz ===

// Récupération de l'ID du quiz depuis l'URL
const params = new URLSearchParams(window.location.search);
const quizId = parseInt(params.get("id"));

// Trouver le quiz correspondant dans quizzes (défini dans data.js)
const quiz = quizzes.find(q => q.id === quizId);

if (!quiz) {
    quizTitle.textContent = "Quiz Not Found";
    quizContainer.innerHTML = "<p>Sorry, the quiz you requested does not exist.</p>";
    nextBtn.style.display = "none";
    timerDisplay.style.display = "none";
} else {
    quizTitle.textContent = `${quiz.symbol} ${quiz.title}`;

    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    const timePerQuestion = 20; // secondes par question

    function startTimer(seconds) {
        let timeLeft = seconds;
        timerDisplay.textContent = `⏱️ ${timeLeft}s`;

        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `⏱️ ${timeLeft}s`;

            if (timeLeft <= 0) {
                clearInterval(timer);
                autoFail();
            }
        }, 1000);
    }

    function showQuestion() {
        clearInterval(timer);
        startTimer(timePerQuestion);

        quizContainer.innerHTML = "";

        const currentQuestion = quiz.questions[currentQuestionIndex];

        const questionEl = document.createElement("p");
        questionEl.textContent = `Q${currentQuestionIndex + 1}: ${currentQuestion.question}`;
        quizContainer.appendChild(questionEl);

        currentQuestion.options.forEach((option, index) => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.classList.add("option-btn");
            btn.disabled = false;

            btn.addEventListener("click", () => handleAnswer(index, btn));
            quizContainer.appendChild(btn);
        });

        nextBtn.style.display = "none";
    }

    function handleAnswer(selectedIndex, button) {
        clearInterval(timer);

        const correctIndex = quiz.questions[currentQuestionIndex].answer;

        if (selectedIndex === correctIndex) {
            button.classList.add("correct");
            score++;
        } else {
            button.classList.add("incorrect");
            const buttons = document.querySelectorAll(".option-btn");
            buttons[correctIndex].classList.add("correct");
        }

        document.querySelectorAll(".option-btn").forEach(btn => {
            btn.disabled = true;
        });

        nextBtn.style.display = "block";
    }

    function autoFail() {
        const correctIndex = quiz.questions[currentQuestionIndex].answer;
        const buttons = document.querySelectorAll(".option-btn");
        buttons[correctIndex].classList.add("correct");

        buttons.forEach(btn => {
            btn.disabled = true;
        });

        nextBtn.style.display = "block";
    }

    function endQuiz() {
        quizContainer.innerHTML = `
            <h2>Quiz Terminé !</h2>
            <p>Votre score : ${score} / ${quiz.questions.length}</p>
        `;

        const entry = {
            quizTitle: `${quiz.symbol} ${quiz.title}`,
            score,
            total: quiz.questions.length,
            date: new Date().toLocaleString()
        };
        saveHistoryEntry(entry);

        nextBtn.style.display = "none";
        timerDisplay.style.display = "none";
    }

    nextBtn.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quiz.questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    });

    showQuestion();
}
