function on_glitchyload_click() {
    // wipes the screen
    document.body.innerHTML = "<h1 class='forbiddentext'>Waiting for authentication...</h1>";

    //plays error beep sound
    var audio = new Audio(Flask.url_for("static", {filename: "sfx/staticnoise.mp3"}));
    audio.play();

    setTimeout(function() {
        // fits console hacking gif across whole screen
        document.body.innerHTML = "<img class='consoletext' src=" + Flask.url_for("static", {filename: "img/consoletext.gif"}) + ">";        
    }, 1000);

    setTimeout(function() {
            audio.pause();
            window.location.href = window.location.href + "film";
    }, 3000)

}