document.querySelectorAll(".menu-toggle").forEach(button=>button.addEventListener("click",()=>button.closest(".site-header").classList.toggle("menu-open")));
document.querySelectorAll("nav a").forEach(link=>link.addEventListener("click",()=>document.querySelector(".site-header")?.classList.remove("menu-open")));
