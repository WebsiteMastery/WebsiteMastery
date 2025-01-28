// Simuler les données de l'analyse
const simulatedData = {
  deviceName: "iPhone 14",
  osVersion: "iOS 17.2",
  currentDate: new Date().toLocaleString(),
  updateStatus: "À jour",
  ipAddress: "192.168.1.100",
  networkType: "Wi-Fi"
};

// Gérer le bouton d'analyse
document.getElementById("analyze-btn").addEventListener("click", () => {
  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = "0%";
  progressBar.textContent = "0%";

  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = progress + "%";
    progressBar.textContent = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      displayResults();
    }
  }, 300);
});

// Afficher les résultats
function displayResults() {
  document.getElementById("device-name").textContent = simulatedData.deviceName;
  document.getElementById("os-version").textContent = simulatedData.osVersion;
  document.getElementById("current-date").textContent = simulatedData.currentDate;
  document.getElementById("update-status").textContent = simulatedData.updateStatus;
  document.getElementById("ip-address").textContent = simulatedData.ipAddress;
  document.getElementById("network-type").textContent = simulatedData.networkType;
}
