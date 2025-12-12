(function () {
    onUiLoaded(() => {
        const box = document.getElementById("ollama-mdl-dl");
        box.querySelector("label").querySelector("div").innerHTML =
            'refer to the <a href="https://ollama.com/library">Library</a> for available models';
    });
})();
