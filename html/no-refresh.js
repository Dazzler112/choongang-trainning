const button = document.querySelector(".login-button");

function notRefresh(event){
    event.preventDefault();
}
button.addEventListener("click", notRefresh);