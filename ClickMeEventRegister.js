var button = document.getElementById("clickMeButton");
button.addEventListener("click", function() {
            var messgeToPost = {'ButtonId':'clickMeButton'};
            window.webkit.messageHandlers.buttonClicked.postMessage(messgeToPost);
        },false);