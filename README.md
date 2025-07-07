 Accueil Quiz Harry Potter

Une application web responsive permettant de jouer à des quiz Harry Potter, consulter son historique de scores, tout en pratiquant les fondamentaux HTML, CSS, JavaScript et localStorage sans frameworks.
🎯 Objectif du Projet

Développer une application web permettant aux utilisateurs :
✅ de choisir parmi plusieurs quiz,
✅ de répondre à des questions à choix multiple,
✅ de consulter leur historique de résultats.

Ce projet vise à renforcer les compétences en développement web sans frameworks.
🛠️ Technologies Utilisées

    HTML5 : structure des pages.

    CSS3 : mise en forme responsive et animations simples.

    JavaScript : logique de quiz, navigation, gestion des événements.

    localStorage : sauvegarde de l’historique des résultats.

✅ Fonctionnalités Réalisées
1️⃣ Page d’Accueil – Liste des Quiz

    Liste des quiz présentés sous forme de cartes cliquables avec image, titre, nombre de questions.

    L’utilisateur clique sur une carte pour démarrer le quiz.

    Bouton toggle Dark/Light mode sauvegardé dans localStorage.

    Bouton pour accéder à l’historique.

2️⃣ Vue Quiz – Questions en Séquence

    Affichage d’une question à la fois avec :

        Titre de la question

        3 à 4 options de réponse sous forme de boutons

        Indicateur de progression ("Question 2/10")

        Chronomètre par question

    Affichage instantané des réponses correctes/incorrectes après sélection.

    Score final affiché à la fin avec option de recommencer ou de retourner à l’accueil.

    Sauvegarde automatique des résultats dans localStorage après chaque quiz.

3️⃣ Historique – Page "My History"

    Tableau affichant :

        Nom du quiz

        Date et heure

        Score obtenu

    Bouton pour effacer l’historique.

    Bouton de retour à l’accueil.

✨ Bonus Réalisés

✅ Dark Mode avec toggle, sauvegardé dans localStorage.
✅ Transitions CSS sur les boutons et les cartes.
✅ Affichage des réponses correctes/incorrectes après sélection.
✅ Timer par question avec gestion automatique en cas d'expiration.
🗂️ Structure du Projet

quizz-app/
│
├── index.html              # Page d'accueil (liste des quiz)
├── history.html            # Historique des résultats
├── quiz.html               # Passage des quiz
│
├── assets/
│   ├── css/
│   │   └── style.css       # Style global
│   │
│   ├── img/
│   │   ├── character_quotes.jpg
│   │   ├── hogwarts_trivia.jpg
│   │   ├── spells.jpg
│   │   ├── creatures.jpg
│   │   ├── events.jpg
│   │   └── potions.jpg
│   │
│   └── js/
│       ├── data.js         # Contient les quiz et leurs questions
│       ├── main.js         # Gestion affichage des quiz dans index.html
│       ├── quiz.js         # Logique de passage de quiz + timer
│       └── history.js      # Gestion de l'historique
│
└── utils/
    └── storage.js          # Fonctions saveHistoryEntry, getHistory, clearHistory

📊 Tests Réalisés

✅ Navigation entre accueil, quiz et historique.
✅ Fonctionnement du timer par question et blocage des réponses après expiration.
✅ Sauvegarde et affichage de l’historique des scores.
✅ Fonctionnement complet du Dark Mode sur toutes les pages.
🚩 Problèmes Rencontrés

    Ajustement de la taille uniforme des cartes de quiz.

    Gestion du toggle Dark/Light mode sur toutes les pages.

    Blocage correct des boutons après réponse.

    Alignement des boutons de navigation.

    Alignement responsive des éléments sur mobile.

✅ Résultats Obtenus

    Application fonctionnelle et fluide, respectant le cahier des charges.

    Interface esthétique et épurée, aux couleurs Harry Potter.

    Code structuré, commenté, facile à maintenir.

💡 Perspectives d'Amélioration

    Ajouter un système de classement global ou de scores élevés.

    Permettre à l’utilisateur de créer ses propres quiz.

    Ajouter une barre de progression graphique pendant le quiz.

    Implémenter un mode multijoueur local.

🚀 Lien

    Live :http://127.0.0.1:5500/jsProjects/quizz-app/pages/index.html
