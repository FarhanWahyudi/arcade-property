const navLinksMobile = document.querySelectorAll(".nav-link-current-mobile");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinksMobile.forEach((link) => {
    link.classList.remove("text-white");
    link.closest('li').classList.remove('bg-blue-500');
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("text-white");
      link.closest('li').classList.add('bg-blue-500');
    }
  });
});