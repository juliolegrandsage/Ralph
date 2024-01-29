// Fonction pour changer l'expression de Ralph
function changeRalphExpression(expression) {
    var ralphElement = document.getElementById("ralph");
    ralphElement.style.backgroundImage = `url('ralph_${expression}.svg')`;
}

// Fonction pour changer l'expression de Ralph en fonction de la valeur de love
function changeRalphExpressionBasedOnLove(value) {
    let expression = "";

    if (value >= 50 && value <= 100) {
        expression = "happy";
    } else if (value === 50) {
        expression = "neutral";
    } else if (value >= 25 && value < 50) {
        expression = "tired";
    } else if (value < 25) {
        expression = "sad";
    }

    // Change l'expression de Ralph
    changeRalphExpression(expression);
}

// Fonction pour obtenir la valeur de love
function getLoveValue() {
    // Simulez ici la récupération de la valeur de love (par exemple, à partir d'un slider)
    // Remplacez cette partie avec la logique réelle pour obtenir la valeur de love
    return parseFloat(document.getElementById('love-bar').value);
}

// Vérifie périodiquement la valeur de love
setInterval(function () {
    const loveValue = getLoveValue();
    // Change l'expression de Ralph basée sur la valeur de love
    changeRalphExpressionBasedOnLove(loveValue);
}, 1000); // Vérifie toutes les 1000 millisecondes (1 seconde)

// Obtenez les éléments des barres
const loveBar = document.getElementById('love-bar');
const hungerBar = document.getElementById('hunger-bar');

// Ajoutez des écouteurs d'événements pour détecter les changements en temps réel
loveBar.addEventListener('input', updateBars);
hungerBar.addEventListener('input', updateBars);

// Fonction pour mettre à jour les barres
function updateBars() {
    // Obtenez les valeurs en pourcentage
    const loveValue = loveBar.value + '%';
    const hungerValue = hungerBar.value + '%';

    // Appliquez les dégradés linéaires pour les barres
    loveBar.style.background = `linear-gradient(to right, white ${loveValue}, transparent ${loveValue})`;
    hungerBar.style.background = `linear-gradient(to right, white ${hungerValue}, transparent ${hungerValue})`;
}

// Appel initial pour mettre à jour les barres et l'expression de Ralph
updateBars();
