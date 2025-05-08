const quotes = [
    "Only the prepared survive the storm.",
    "Pain is weakness leaving the body.",
    "If you’re not ready, you're already dead.",
    "You don’t rise to the occasion — you fall to your level of preparation."
];
const jokes = [
    "You bartered your last match for a vape cartridge.",
    "You thought MREs were a rap group.",
    "You screamed 'Alexa, help' and a wild boar came. He wasn’t feeling it.",
    "You asked a survivalist if they take Venmo. They took your boots instead."
];
document.addEventListener("DOMContentLoaded", () => {
    const quoteEl = document.getElementById("grit-quote");
    if (quoteEl) {
        setInterval(() => {
            const i = Math.floor(Math.random() * quotes.length);
            quoteEl.textContent = quotes[i];
        }, 5000);
    }

    const jokeBtn = document.getElementById("joke-btn");
    const jokeBox = document.getElementById("joke-box");
    if (jokeBtn && jokeBox) {
        jokeBtn.addEventListener("click", () => {
            const j = Math.floor(Math.random() * jokes.length);
            jokeBox.textContent = jokes[j];
        });
    }
});