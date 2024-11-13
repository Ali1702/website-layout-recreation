let mainHeader = document.getElementById('main-header');
let secondaryHeader = document.getElementById('secondary-header');
let logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        mainHeader.classList.add('small-header');
        secondaryHeader.classList.remove('hidden');
        logo.classList.add('w-[150px]', 'h-[50px]'); // Resize logo for the small header
        mainHeader.appendChild(secondaryHeader); // Move secondary header to the bottom of the main header
    } else {
        mainHeader.classList.remove('small-header');
        secondaryHeader.classList.add('hidden');
        logo.classList.remove('w-[150px]', 'h-[50px]');
        document.body.insertBefore(secondaryHeader, document.body.firstChild); // Move secondary header back to its original position
    }
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));

        const mainHeaderHeight = mainHeader.offsetHeight;
        const secondaryHeaderHeight = secondaryHeader.classList.contains('hidden') ? 0 : secondaryHeader.offsetHeight;
        const totalHeaderHeight = mainHeaderHeight + secondaryHeaderHeight + 60;

        const offsetPosition = section.offsetTop - totalHeaderHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});