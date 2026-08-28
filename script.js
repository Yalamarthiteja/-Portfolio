const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      const id = entry.target.getAttribute("id");
      navItems.forEach(item => {
        item.classList.toggle("active", item.getAttribute("href") === `#${id}`);
      });
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

window.addEventListener("load", () => {
  document.querySelectorAll(".hero .reveal").forEach(el => el.classList.add("visible"));
});

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".placeholder-link").forEach(link => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();
      alert("Replace this placeholder with your actual GitHub or certificate link.");
    }
  });
});
