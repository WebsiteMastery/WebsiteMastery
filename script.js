// Attente que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {
    // Détection des informations système
    const deviceName = document.getElementById("device-name");
    const os = document.getElementById("os");
    const battery = document.getElementById("battery");
    const ipAddress = document.getElementById("ip-address");
    const networkStatus = document.getElementById("network-status");

    // Simuler la détection d'informations système
    deviceName.innerText = "iPhone 14 Pro Max";
    os.innerText = "iOS 17.2";
    battery.innerText = "85%";
    networkStatus.innerText = "Connecté au Wi-Fi";

    // Simulation pour obtenir l'adresse IP
    setTimeout(() => {
        ipAddress.innerText = "192.168.0.105";
    }, 2000);

    // Activation de la protection réseau
    const networkProtectionBtn = document.getElementById("network-protection-btn");
    const networkStatusMessage = document.getElementById("network-status-message");

    networkProtectionBtn.addEventListener("click", () => {
        networkStatusMessage.style.display = "block";
        networkStatusMessage.innerText = "Protection réseau activée avec succès.";
    });

    // Analyse des virus
    const scanVirusBtn = document.getElementById("scan-virus-btn");
    const virusResults = document.getElementById("virus-results");

    scanVirusBtn.addEventListener("click", () => {
        virusResults.style.display = "block";
        virusResults.innerHTML = `
            <li>Fichier malveillant détecté : trojan.exe</li>
            <li>Aucun virus trouvé sur les fichiers principaux</li>
            <li>Analyse terminée avec succès.</li>
        `;
    });

    // Détection d'activités suspectes
    const activityReport = document.getElementById("activity-report");

    setTimeout(() => {
        activityReport.innerHTML = `
            <li>Connexion suspecte détectée : 185.33.22.45</li>
            <li>Comportement anormal détecté sur l'application WhatsApp.</li>
        `;
    }, 3000);

    // Gestion des autorisations
    const toggleCamera = document.getElementById("toggle-camera");
    const toggleMicrophone = document.getElementById("toggle-microphone");
    const toggleBluetooth = document.getElementById("toggle-bluetooth");

    let cameraEnabled = false;
    let microphoneEnabled = false;
    let bluetoothEnabled = false;

    toggleCamera.addEventListener("click", () => {
        cameraEnabled = !cameraEnabled;
        toggleCamera.innerText = cameraEnabled
            ? "Caméra Activée"
            : "Caméra Désactivée";
    });

    toggleMicrophone.addEventListener("click", () => {
        microphoneEnabled = !microphoneEnabled;
        toggleMicrophone.innerText = microphoneEnabled
            ? "Microphone Activé"
            : "Microphone Désactivé";
    });

    toggleBluetooth.addEventListener("click", () => {
        bluetoothEnabled = !bluetoothEnabled;
        toggleBluetooth.innerText = bluetoothEnabled
            ? "Bluetooth Activé"
            : "Bluetooth Désactivé";
    });

    // Accessoires connectés
    const accessoriesList = document.getElementById("accessories-list");

    setTimeout(() => {
        accessoriesList.innerHTML = `
            <li>AirPods Pro connectés</li>
            <li>Clavier Bluetooth</li>
            <li>Écouteurs Sony</li>
        `;
    }, 2000);

    // Outils d'optimisation
    const clearCacheBtn = document.getElementById("clear-cache");
    const optimizeSystemBtn = document.getElementById("optimize-system");
    const optimizationStatus = document.getElementById("optimization-status");

    clearCacheBtn.addEventListener("click", () => {
        optimizationStatus.style.display = "block";
        optimizationStatus.innerText = "Cache effacé avec succès.";
        setTimeout(() => (optimizationStatus.style.display = "none"), 2000);
    });

    optimizeSystemBtn.addEventListener("click", () => {
        optimizationStatus.style.display = "block";
        optimizationStatus.innerText = "Optimisation du système en cours...";
        setTimeout(() => {
            optimizationStatus.innerText = "Optimisation terminée avec succès.";
            setTimeout(() => (optimizationStatus.style.display = "none"), 2000);
        }, 3000);
    });

    // Rapport des résultats
    const finalReport = document.getElementById("final-report");

    setTimeout(() => {
        finalReport.innerHTML = `
            <li>Analyse système : OK</li>
            <li>Protection réseau activée</li>
            <li>Optimisation effectuée avec succès</li>
        `;
    }, 5000);
});
