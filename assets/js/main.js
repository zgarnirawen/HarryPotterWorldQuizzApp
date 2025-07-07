// assets/js/main.js

const quizListContainer = document.getElementById("quiz-list");

// Affiche la liste des quiz en cartes cliquables
function displayQuizzes() {
  if (!quizListContainer) return;

  let html = "";

  quizzes.forEach(quiz => {
    html += `
      <div class="quiz-card" onclick="goToQuiz(${quiz.id})" style="cursor:pointer;">
        <img src="${quiz.banner}" alt="${quiz.title}" style="max-width:100%; border-radius:8px;" />
        <h2>${quiz.symbol} ${quiz.title}</h2>
        <p>${quiz.questions.length} questions</p>
      </div>
    `;
  });

  quizListContainer.innerHTML = html;
}

// Redirige vers la page quiz.html avec l'id du quiz en paramètre
function goToQuiz(id) {
  window.location.href = `./quiz.html?id=${id}`;

}

// Appel à l’affichage au chargement
document.addEventListener("DOMContentLoaded", displayQuizzes);
