(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll("[data-animate]");
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.isIntersecting) {
            el.classList.add("is-visible");
          } else {
            el.classList.remove("is-visible"); // Reset when leaving viewport
          }
        });
      },
      {
        threshold: 0.1, // triggers when 10% visible
        rootMargin: "0px 0px -10px 0px",
      }
    );

    items.forEach((el) => observer.observe(el));
  });
})();
