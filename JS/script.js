const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            const url = option.querySelector('a').getAttribute('href');
            window.location.href = url;
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});

function toggleMenu() {
  const header = document.querySelector('.header');
  header.style.display = header.style.display === 'flex' ? 'none' : 'flex';
}

const colors = ["#A6C1E1", "#B0D0E3", "#C0E0E8", "#d3d3d347"];
const notes = ["♪", "♫", "♬", "♩", "♭", "♮", "♯"];

function createNote() {
    console.log("Creating note");
    const note = document.createElement("div");
    note.classList.add("note");
    note.style.left = Math.random() * 100 + "vw";
    note.style.top = Math.random() * 100 + "vh";
    note.style.animationDuration = 5 + Math.random() * 5 + "s";
    note.style.color = colors[Math.floor(Math.random() * colors.length)];
    note.innerText = notes[Math.floor(Math.random() * notes.length)];
    note.style.fontSize = (15 + Math.random() * 20) + "px";
    document.getElementById("notes-container").appendChild(note);

    setTimeout(() => {
        note.remove();
    }, 10000);
}

setInterval(createNote, 1000);

const scrollBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = 'flex';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});