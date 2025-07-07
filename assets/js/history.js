// Affiche l'historique dans une div dont l'id est containerId
function displayHistory(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const history = getHistory();

  if (history.length === 0) {
    container.innerHTML = "<p>Pas d'historique pour le moment.</p>";
    return;
  }

  // Création d'un tableau HTML stylé
  let html = `
    <table style="width:100%; border-collapse: collapse;">
      <thead>
        <tr>
          <th style="border: 1px solid #ccc; padding: 8px;">Quiz</th>
          <th style="border: 1px solid #ccc; padding: 8px;">Score</th>
          <th style="border: 1px solid #ccc; padding: 8px;">Date</th>
        </tr>
      </thead>
      <tbody>
  `;

  history.forEach(entry => {
    html += `
      <tr>
        <td style="border: 1px solid #ccc; padding: 8px;">${entry.quizTitle}</td>
        <td style="border: 1px solid #ccc; padding: 8px;">${entry.score} / ${entry.total}</td>
        <td style="border: 1px solid #ccc; padding: 8px;">${entry.date}</td>
      </tr>
    `;
  });

  html += "</tbody></table>";

  container.innerHTML = html;
}

// Efface l'historique et met à jour l'affichage
function clearHistoryDisplay(containerId) {
  clearHistory();
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = "<p>Historique effacé.</p>";
  }
}
