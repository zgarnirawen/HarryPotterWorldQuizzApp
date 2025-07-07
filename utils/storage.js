// Sauvegarder une entrée d'historique dans localStorage
function saveHistoryEntry(entry) {
  const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
  history.push(entry);
  localStorage.setItem("quizHistory", JSON.stringify(history));
}

// Récupérer tout l'historique
function getHistory() {
  return JSON.parse(localStorage.getItem("quizHistory")) || [];
}

// Effacer l'historique (optionnel)
function clearHistory() {
  localStorage.removeItem("quizHistory");
}
