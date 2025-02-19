const button = document.getElementById("darkModeToggle");
const body = document.body;

// Funktion zum Text des Buttons aktualisieren
function updateButtonText() {
   if (body.classList.contains("dark-mode")) {
      button.innerHTML = "<strong>Light Mode</strong>";
   } else {
      button.innerHTML = "<strong>Dark Mode</strong>";
   }
}

// Dark Mode aktivieren, wenn bereits gespeichert
if (localStorage.getItem("darkMode") === "enabled") {
   body.classList.add("dark-mode");
}
updateButtonText();

// Zufällige Position des Buttons bei jedem Mouseenter (langsamer bewegen)
button.addEventListener("mouseenter", () => {
   // Maximale Breite und Höhe für die Zufallsposition berechnen
   const maxWidth = window.innerWidth - button.offsetWidth;
   const maxHeight = window.innerHeight - button.offsetHeight;

   // Zufällige Position berechnen
   const randomX = Math.random() * maxWidth;
   const randomY = Math.random() * maxHeight;

   // Button an der zufälligen Position platzieren
   button.style.left = `${randomX}px`;
   button.style.top = `${randomY}px`;
});

// Dark Mode Toggle beim Klick
button.addEventListener("click", () => {
   body.classList.toggle("dark-mode");

   // Dark Mode Zustand speichern
   if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
   } else {
      localStorage.setItem("darkMode", "disabled");
   }
   updateButtonText();
});