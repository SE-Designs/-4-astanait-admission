// MOBILE MENU:
function toggleMobileMenu() {
  var x = document.getElementById("mobile-nav");
  var proper = window.getComputedStyle(x, null);
  var y = document.getElementById("burger");
  if (proper.display === "none"){
    x.style.display = "flex";
    y.classList.add("burger-active");
    document.getElementById("hero").style.display = "none"
    document.getElementById("main").style.display = "none"
    document.getElementById("footer").style.display = "none"
  } else {
    x.style.display = "none";
    y.classList.remove("burger-active");
    document.getElementById("hero").style.display = "block"
    document.getElementById("main").style.display = "block"
    document.getElementById("footer").style.display = "block"
  }
} 

// FAQ:
let answers = document.querySelectorAll(".faq-block");
answers.forEach((event) => {
  event.addEventListener("click", () => {
    // let event = document.getElementById("faq-plus");
    // let event = document.getElementById("faq-answ");
    if (event.classList.contains("active-faq")) {
        event.classList.remove("active-faq");
        event.classList.remove("cancel-faq")
    } else {
        event.classList.add("active-faq");
        event.classList.add("cancel-faq")
    }
  });
});