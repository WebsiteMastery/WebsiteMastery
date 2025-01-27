(async () => {
    console.log("Début de l'analyse système et réseau...");

    // 1. Informations système
    const detectSystemInfo = async () => {
        console.log("Analyse des informations système...");
        try {
            const os = navigator.platform;
            const userAgent = navigator.userAgent;
            const isOnline = navigator.onLine ? "Connecté" : "Hors ligne";

            console.log(`Système d'exploitation : ${os}`);
            console.log(`Navigateur : ${userAgent}`);
            console.log(`Statut réseau : ${isOnline}`);
        } catch (error) {
            console.error("Erreur lors de l'analyse système :", error);
        }
    };

    // 2. Analyse réseau
    const analyzeNetwork = async () => {
        console.log("Analyse réseau...");
        try {
            const response = await fetch("https://api.ipify.org?format=json");
            const { ip } = await response.json();
            console.log(`Adresse IP publique : ${ip}`);
        } catch (error) {
            console.error("Erreur lors de la récupération de l'adresse IP :", error);
        }
    };

    // 3. Détection d'anomalies (simulées)
    const detectAnomalies = () => {
        console.log("Détection des anomalies...");
        const anomalies = [
            "Connexion suspecte détectée (192.168.0.45)",
            "Application non autorisée accédant au microphone.",
            "Utilisation CPU anormalement élevée (95%)"
        ];
        anomalies.forEach((anomaly) => {
            console.warn(`Anomalie détectée : ${anomaly}`);
        });
    };

    // 4. Réparation et optimisation (simulées)
    const repairSystem = () => {
        console.log("Réparation et optimisation du système...");
        setTimeout(() => {
            console.log("Réparation terminée : Toutes les anomalies corrigées.");
        }, 3000);
    };

    // Appeler les fonctions
    await detectSystemInfo();
    await analyzeNetwork();
    detectAnomalies();
    repairSystem();

    console.log("Analyse terminée.");
})();
