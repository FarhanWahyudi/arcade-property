const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link-current");

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        navbar.classList.add('shadow-md');
    } else {
        navbar.classList.remove('shadow-md');
    }
});



window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-blue-500");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("text-blue-500");
    }
  });
});