function film_init() {
    var view_text = document.getElementById("view_text");
    var view_button = document.getElementById("view_button");
    view_text.classList.toggle("hide");
    view_button.classList.toggle("hide");
}

function on_view_button_click() {
    var view_text = document.getElementById("view_text");
    var view_button = document.getElementById("view_button");
    var mainimage_synopsis = document.getElementById("mainimage_synopsis");
    view_text.classList.toggle("hide");
    view_button.classList.toggle("hide");
    mainimage_synopsis.classList.toggle("hide")
}