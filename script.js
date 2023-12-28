let form = document.querySelector(".form");
let mask = document.querySelector(".mask-form");

function openForm() {
    let windowWidth = window.innerWidth;
    let formWidth = form.offsetWidth;
    let leftPosition = (windowWidth - formWidth) / 2;

    form.style.left = leftPosition + "px";
    mask.style.visibility = "visible";

    setTimeout(() => {
        form.style.transition = "left 1s linear";
    }, 100);

    document.addEventListener("click", closeOnClickOutside);
    document.addEventListener("keydown", closeOnEsc);

}

function closeForm() {
    form.style.left = "-580px";
    mask.style.visibility = "hidden";

    form.style.transition = "none";

    document.removeEventListener("click", closeOnClickOutside);
    document.removeEventListener("keydown", closeOnEsc);
}


function closeOnClickOutside(event) {
    if (mask.style.visibility === "visible" && event.target.classList.contains('mask-form')) {
        closeForm();
    }
}


function closeOnEsc(event) {
    if (event.key === "Escape") {
        closeForm();
    }
}