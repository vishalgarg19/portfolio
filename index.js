document.querySelector(".nav_right").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("hello");
  // Matching strategy
  if (e.target.classList.contains("nav-right")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const nav = document.querySelector(".nav");

// Sticky navigation: Intersection Observer API

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
