function calculateResult() {
    const form = document.getElementById("quiz-form");
    const formData = new FormData(form);
    const answers = {};

    formData.forEach((value, key) => {
        answers[key] = value;
    });

    const scores = {
        vioara: 0,
        mandolina: 0,
        tobe: 0,
        flaut: 0,
        trompeta: 0,
        marimba: 0
    };

    if (answers.q1 === "A") {
        scores.vioara += 2;
        scores.mandolina += 2;
      }
      if (answers.q1 === "B") {
        scores.trompeta += 2;
        scores.vioara += 1;
      }
      if (answers.q1 === "C") {
        scores.tobe += 2;
        scores.marimba += 2;
      }
      if (answers.q1 === "D") {
        scores.flaut += 2;
        scores.marimba += 1;
      }
      
      if (answers.q2 === "A") {
        scores.flaut += 2;
        scores.mandolina += 2;
      }
      if (answers.q2 === "B") {
        scores.vioara += 2;
        scores.trompeta += 2;
      }
      if (answers.q2 === "C") {
        scores.tobe += 2;
        scores.marimba += 2;
      }
      if (answers.q2 === "D") {
        scores.marimba += 1;
        scores.tobe += 1;
      }
      
      if (answers.q3 === "A") {
        scores.mandolina += 2;
        scores.flaut += 2;
      }
      if (answers.q3 === "B") {
        scores.vioara += 2;
        scores.trompeta += 2;
      }
      if (answers.q3 === "C") {
        scores.tobe += 2;
        scores.marimba += 2;
      }
      
      if (answers.q4 === "A") {
        scores.mandolina += 2;
        scores.vioara += 1;
      }
      if (answers.q4 === "B") {
        scores.vioara += 2;
        scores.flaut += 2;
      }
      if (answers.q4 === "C") {
        scores.trompeta += 2;
        scores.tobe += 1;
      }
      if (answers.q4 === "D") {
        scores.flaut += 2;
        scores.marimba += 2;
      }
      
      if (answers.q5 === "A") {
        scores.mandolina += 2;
      }
      if (answers.q5 === "B") {
        scores.flaut += 2;
        scores.vioara += 1;
      }
      if (answers.q5 === "C") {
        scores.vioara += 2;
        scores.marimba += 2;
      }
      
      if (answers.q6 === "A") {
        scores.mandolina += 2;
        scores.flaut += 1;
      }
      if (answers.q6 === "B") {
        scores.flaut += 2;
        scores.vioara += 1;
      }
      if (answers.q6 === "C") {
        scores.marimba += 2;
        scores.tobe += 2;
      }
      
      if (answers.q7 === "A") {
        scores.vioara += 2;
        scores.flaut += 2;
        scores.mandolina += 2;
      }
      if (answers.q7 === "B") {
        scores.marimba += 2;
        scores.tobe += 2;
      }
      if (answers.q7 === "C") {
        scores.trompeta += 1;
        scores.flaut += 1;
      }
      
      if (answers.q8 === "A") {
        scores.marimba += 2;
        scores.flaut += 1;
      }
      if (answers.q8 === "B") {
        scores.trompeta += 2;
        scores.tobe += 2;
      }
      if (answers.q8 === "C") {
        scores.vioara += 1;
        scores.mandolina += 1;
      }
      
      if (answers.q9 === "A") {
        scores.flaut += 2;
        scores.mandolina += 2;
      }
      if (answers.q9 === "B") {
        scores.vioara += 2;
        scores.trompeta += 1;
      }
      if (answers.q9 === "C") {
        scores.marimba += 2;
        scores.tobe += 2;
      }
      
      if (answers.q10 === "A") {
        scores.mandolina += 2;
        scores.flaut += 1;
      }
      if (answers.q10 === "B") {
        scores.vioara += 2;
        scores.tobe += 1;
      }
      if (answers.q10 === "C") {
        scores.marimba += 1;
        scores.trompeta += 1;
      }      

    const recommendedInstrument = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

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
