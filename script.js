
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