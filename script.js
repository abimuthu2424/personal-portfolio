function changeTheme(){
    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){
        document.querySelector("button").textContent = "Dark";
    }

    else{
        document.querySelector("button").textContent = "Light";
    }
}
