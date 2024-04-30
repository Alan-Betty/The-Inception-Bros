// Toggle light and dark mode
const icon = document.querySelector('.theme');
icon.addEventListener("click", () => {
    icon.querySelector("i").classList.toggle("fa-moon");
    icon.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("light")
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("light"))
    {
        icon.querySelector("i").classList.add("fa-moon");
    }
    else
    {
        icon.querySelector("i").classList.add("fa-sun");
    }
})


