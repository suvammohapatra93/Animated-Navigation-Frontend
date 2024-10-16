let toggleBtn = document.querySelector('.toggleBtn');
let menu = document.querySelector('.menu');
let themeToggle = document.getElementById('theme-toggle');
let body = document.body;

// Toggle Menu Open/Close
toggleBtn.onclick = function () {
    menu.classList.toggle('active');
};

// Click Outside to Close Menu
document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
        menu.classList.remove('active');
    }
});

// Toggle Light/Dark Theme
themeToggle.onclick = function () {
    body.classList.toggle('light-theme');
};
