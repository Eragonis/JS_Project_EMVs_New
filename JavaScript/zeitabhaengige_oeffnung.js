document.querySelector('button').onclick = function randomsite() {
    let randomIndex = Math.floor(Math.random() * 7);  // Use Math.floor for better randomness
    console.log("Selected site index:", randomIndex);

    const websites = [
        "https://lichess.org/?hook=1&time=1&increment=0&rated=false&variant=standard&clock.limit=60&clock.increment=0",
        "https://at.e-guide.renault.com/sites/default/files/pdfs/deu/BFB/Megane-1163-9_DEU.pdf",
        "https://de.wikipedia.org/wiki/K%C3%BChlschrank",
        "https://www.berufsbildung-vs.ch/",
        "https://crypto.com/price",
        "https://aur.archlinux.org/packages",
        "https://www.youtube.com/watch?v=wjXUBG15eZ8"
    ];

    // Generate random delay between 1 and 30 minutes (in milliseconds)
    let randomDelay = Math.floor(Math.random() * (30 - 1 + 1) + 1) * 60 * 1000;  // Between 60,000ms and 1,800,000ms
    console.log(`Opening website in ${randomDelay / 60000} minute(s).`);

    setTimeout(function() {
        window.open(websites[randomIndex], "_blank");
    }, randomDelay);
};