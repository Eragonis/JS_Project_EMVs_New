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

// Tastatur lokierung
document.addEventListener('keydown', function(e) {
   e.preventDefault(); // Verhindert jegliche Tastatureingabe
});

document.addEventListener('wheel', function(e) {
   e.preventDefault(); // Verhindert das Scrollen mit der Maus
}, { passive: false });

// taskleiste deaktivieren
function goFullscreen() {
   if (document.documentElement.requestFullscreen) {
       document.documentElement.requestFullscreen();
   } else if (document.documentElement.mozRequestFullScreen) { // Firefox
       document.documentElement.mozRequestFullScreen();
   } else if (document.documentElement.webkitRequestFullscreen) { // Chrome/Safari
       document.documentElement.webkitRequestFullscreen();
   } else if (document.documentElement.msRequestFullscreen) { // Edge
       document.documentElement.msRequestFullscreen();
   }
}

goFullscreen();

document.querySelectorAll('input, button, a, textarea').forEach(function(el) {
   el.setAttribute('tabindex', '-1');  // Entfernt die Fokussierung durch die Tastatur
});

// Rechsklick maus verhindern
document.addEventListener('contextmenu', function(e) {
   e.preventDefault();  // Verhindert das Öffnen des Kontextmenüs
});


        // Funktion, um die Benachrichtigung anzuzeigen
        function showNotification(message) {
         var notification = document.getElementById('notification');
         notification.textContent = message;
         notification.style.display = 'block';  // Zeigt die Benachrichtigung an

         // Benachrichtigung nach 2 Sekunden ausblenden
         setTimeout(function() {
             notification.style.display = 'none';
         }, 2000);
     }

     document.addEventListener('keydown', function(e) {
      // Verhindert "Ctrl + W" (Schließen des Tabs)
      if (e.ctrlKey && e.key === 'w') {
          e.preventDefault();
          showNotification("Funktioniert nicht!");
      }
  
      // Verhindert "F11" (Vollbildmodus)
      document.addEventListener('keydown', function(e) {
         if (e.key === 'F11') {
             e.preventDefault();
             var password = prompt("Bitte gib das Passwort ein, um diese Funktion zu aktivieren:");
             if (password === 'deinPasswort') {
                 alert("Funktion aktiviert!");
             } else {
                 alert("Funktion blockiert!");
             }
         }
     });
  
      // Verhindert "F5" (Neuladen)
      if (e.key === 'F5') {
          e.preventDefault();
          showNotification("Funktioniert nicht!");
      }
  });

  if (screen.orientation && screen.orientation.lock) {
   screen.orientation.lock('landscape').then(function() {
       console.log("Vollbildmodus wurde blockiert.");
   }).catch(function(error) {
       console.log("Fehler beim Blockieren des Vollbildmodus:", error);
   });
}

window.addEventListener('beforeunload', function (e) {
   // Browser fordert den Benutzer auf, bevor er die Seite verlässt
   e.preventDefault();  // Dies ist notwendig, um das Standardverhalten zu verhindern
   e.returnValue = '';   // Einige Browser benötigen dies, um eine Warnung anzuzeigen
});