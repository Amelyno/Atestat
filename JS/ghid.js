function calculateResult() {
    const form = document.getElementById("quiz-form");
    const formData = new FormData(form);
    const answers = {};

    // Preia răspunsurile
    formData.forEach((value, key) => {
        answers[key] = value;
    });

    // Scoruri pentru fiecare instrument
    const scores = {
        vioara: 0,
        mandolina: 0,
        harpa: 0,
        flaut: 0,
        trompeta: 0,
        ukulele: 0
    };

    // Adaugă puncte pe baza răspunsurilor
    if (answers.q1 === "A") scores.vioara += 2;
    if (answers.q1 === "B") scores.ukulele += 2;
    if (answers.q1 === "C") scores.trompeta += 2;
    if (answers.q1 === "D") scores.flaut += 2;

    if (answers.q2 === "A") scores.ukulele += 2;
    if (answers.q2 === "B") scores.flaut += 2;
    if (answers.q2 === "C") scores.harpa += 2;

    if (answers.q3 === "A") scores.ukulele += 2;
    if (answers.q3 === "B") scores.vioara += 2;
    if (answers.q3 === "C") scores.harpa += 2;

    if (answers.q4 === "A") scores.mandolina += 2;
    if (answers.q4 === "B") scores.vioara += 2;
    if (answers.q4 === "C") scores.trompeta += 2;
    if (answers.q4 === "D") scores.flaut += 2;

    if (answers.q5 === "A") scores.ukulele += 1;
    if (answers.q5 === "B") scores.vioara += 2;
    if (answers.q5 === "C") scores.harpa += 3;

    if (answers.q6 === "A") scores.ukulele += 2;
    if (answers.q6 === "B") scores.mandolina += 2;
    if (answers.q6 === "C") scores.harpa += 2;

    if (answers.q7 === "A") scores.vioara += 2;
    if (answers.q7 === "B") scores.trompeta += 2;
    if (answers.q7 === "C") scores.flaut += 1;

    if (answers.q8 === "A") scores.harpa += 2;
    if (answers.q8 === "B") scores.trompeta += 2;
    if (answers.q8 === "C") scores.vioara += 1;

    if (answers.q9 === "A") scores.ukulele += 2;
    if (answers.q9 === "B") scores.vioara += 2;
    if (answers.q9 === "C") scores.harpa += 2;

    if (answers.q10 === "A") scores.ukulele += 2;
    if (answers.q10 === "B") scores.vioara += 2;
    if (answers.q10 === "C") scores.harpa += 1;

    // Determină instrumentul cu cel mai mare scor
    const recommendedInstrument = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    // Afișează rezultatul
    const resultDiv = document.getElementById("result");
    const overlay = document.getElementById("overlay");

    resultDiv.innerHTML = `<h2>Instrumentul recomandat este: ${recommendedInstrument.toUpperCase()}</h2>`;
    resultDiv.classList.add("show");
    overlay.classList.add("show");
}

function closeResult() {
    const resultDiv = document.getElementById("result");
    const overlay = document.getElementById("overlay");

    resultDiv.classList.remove("show");
    overlay.classList.remove("show");
}

document.getElementById("overlay").addEventListener("click", closeResult);