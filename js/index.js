function playVid() {
    let vid = document.getElementById("video");
    let vidOverlay = document.getElementById("video-overlay");
    let vidPlayer = document.getElementById("videoPlayer");
    let vidIcon = document.getElementById("video-icon");
    let vidText = document.getElementById("video-text");

    if (vid.paused) {
        vid.play();
        vidOverlay.style.backgroundColor = "transparent";
        vidPlayer.style.opacity = "0";
        vidIcon.classList.replace("fa-video", "fa-pause");
        vidText.innerHTML = "إيقاف الفيديو";
    } else {
        vid.pause();
        vidOverlay.style.backgroundColor = "rgba(130, 77, 178, 0.9)";
        vidPlayer.style.opacity = "100";
        vidIcon.classList.replace("fa-pause", "fa-video");
        vidText.innerHTML = "مشاهدة الفيديو";
    }
}

let player = document.getElementById("videoPlayer");
player.addEventListener("click", playVid);

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false,
        );
    });
})();

function reserveRights(dateId) {
    document.getElementById(dateId).innerText = new Date().getFullYear();
}

reserveRights("full-year");
