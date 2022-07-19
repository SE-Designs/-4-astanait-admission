// MOBILE MENU:
function toggleMobileMenu() {
  let mobileNav = document.getElementById("mobile-nav");
  let proper = window.getComputedStyle(mobileNav, null);
  let burgerMenu = document.getElementById("burger");
  if (proper.display === "none") {
    document.getElementById("mobile-nav").style.display = "flex";
    burgerMenu.classList.add("burger-active");
    document.getElementById("hero").style.display = "none"
    document.getElementById("after-hero").style.display = "none"
    document.getElementById("main").style.display = "none"
    document.getElementById("footer").style.display = "none"
  } else {
    document.getElementById("mobile-nav").style.display = "none";
    burgerMenu.classList.remove("burger-active");
    document.getElementById("hero").style.display = "block"
    document.getElementById("after-hero").style.display = "block"
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

// MODAL:
let modalFormContainer = document.getElementById("modal-form-container");
document.getElementById("modal-form").addEventListener('click', function (event) {
    if (modalFormContainer.contains(event.target)) {
      console.log('clicked inside');
    } else {
      document.getElementById("modal-form").style.display = "none";
      document.body.style.overflowY = "auto";
    }
});
