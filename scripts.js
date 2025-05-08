const quotes = [
    "Only the prepared survive the storm.",
    "Pain is weakness leaving the body.",
    "If you’re not ready, you're already dead.",
    "You don’t rise to the occasion — you fall to your level of preparation."
];
document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("grit-quote");
    setInterval(() => {
        const i = Math.floor(Math.random() * quotes.length);
        el.textContent = quotes[i];
    }, 5000);
});
