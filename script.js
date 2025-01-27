// Sélection des éléments DOM
const analyzeButton = document.getElementById("analyze-btn");
const resultsContainer = document.getElementById("results");
const resultList = document.getElementById("result-list");

// Fonction pour simuler le chargement
const simulateLoading = async (duration) => {
    let progress = 0;
    const interval = 100; // Intervalle en millisecondes
    const steps = duration / interval;

    return new Promise((resolve) => {
        const loadingInterval = setInterval(() => {
            progress += 100 / steps;
            console.log(`Chargement : ${Math.min(Math.round(progress), 100)}%`);
            if (progress >= 100) {
                clearInterval(loadingInterval);
                resolve();
            }
        }, interval);
    });
};

// Fonction pour ajouter un résultat à l'interface
const addResult = (text) => {
    const li = document.createElement("li");
    li.textContent = text;
    resultList.appendChild(li);
};

// Fonction principale d'analyse
const startAnalysis = async () => {
    // Réinitialiser l'état
    resultsContainer.style.opacity = "0";
    resultList.innerHTML = "";

    // Simuler l'analyse étape par étape
    addResult("Début de l'analyse...");
    await simulateLoading(2000);

    // Informations système
    addResult("Système d'exploitation détecté : " + navigator.platform);
    await simulateLoading(2000);

    // Adresse IP
    try {
        const response = await fetch("https://api.ipify.org?format=json");
        const { ip } = await response.json();
        addResult("Adresse IP publique : " + ip);
    } catch (error) {
        addResult("Erreur lors de la récupération de l'adresse IP.");
    }
    await simulateLoading(2000);

    // Détection des anomalies
    addResult("Recherche d'activités suspectes...");
    await simulateLoading(2500);

    // Simuler quelques anomalies détectées
    const anomalies = [
        "Connexion suspecte détectée : 192.168.0.45",
        "Application non autorisée accédant au microphone.",
        "Utilisation CPU anormale détectée (95%)."
    ];
    anomalies.forEach(anomaly => addResult("Anomalie : " + anomaly));
    await simulateLoading(3000);

    // Réparation simulée
    addResult("Tentative de réparation des anomalies...");
    await simulateLoading(3000);
    addResult("Réparation terminée : Toutes les anomalies corrigées.");

    // Recommandation basée sur IA
    addResult("Recommandation IA : Vérifiez les autorisations des applications sensibles.");
    addResult("Recommandation IA : Désactivez les connexions inutilisées pour optimiser la sécurité.");

    // Afficher les résultats
    resultsContainer.style.opacity = "1";
};

// Lancer l'analyse au clic du bouton
analyzeButton.addEventListener("click", startAnalysis);
