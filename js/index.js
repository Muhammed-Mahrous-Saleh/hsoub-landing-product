function playVid() {
    let vid = document.getElementById("video");

    if (vid.paused) {
        vid.play();
    } else {
        vid.pause();
    }
}

let player = document.getElementById("videoPlayer");
player.addEventListener("click", playVid);

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

function reserveRights(dateId) {
    document.getElementById(dateId).innerText = new Date().getFullYear();
}

reserveRights("full-year");
