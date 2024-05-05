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


function LightMode(){
    var SetTheme = document.body;
    SetTheme.classList.toggle("light")
    var theme;
    if(SetTheme.classList.contains("light")){
        console.log("Light mode");
        theme = "Light";
    }else{
        console.log("Dark mode");
        theme = "Dark";
    }
    // save to localStorage
    localStorage.setItem("PageTheme", JSON.stringify(theme));
    // ensure you convert to JSON like i have done -----JSON.stringify(theme)
}

setInterval(() => {
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
    console.log(GetTheme);
    if(GetTheme === "Light"){
        document.body.classList = "light";
        icon.querySelector("i").classList.add("fa-moon");
    }else{
        document.body.classList = "";
        icon.querySelector("i").classList.add("fa-sun");
    }
}, 5);

