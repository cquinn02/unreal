function film_init() {
    var view_text = document.getElementById("view_text");
    var view_button = document.getElementById("view_button");
    view_text.classList.toggle("hide");
    view_button.classList.toggle("hide");
}

function on_view_button_click() {
    var view_text = document.getElementById("view_text");
    var view_button = document.getElementById("view_button");
    var text_container = document.getElementById("text_container");
    var main_image = document.getElementById("main_image");
    view_text.classList.toggle("hide");
    view_button.classList.toggle("hide");
    text_container.classList.toggle("hide");
    main_image.classList.toggle("hide");
}