/* -------------------------------------------
Nom Complet: 	Renaud Van Meerbergen
------------------------------------------- */
document.documentElement.classList.add('js-enabled');
// Javascript pour le menu
const menuContainer = document.getElementById("menu");
const menuButton = document.querySelector('.menuButton');

menuButton.addEventListener("click", () => {
    menuContainer.classList.toggle("active");
});
//Javacript pour l'astuce d'e-mail
const email = document.getElementById("mail");

email.addEventListener("keyup", () => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Je préfère les e-mails valides 😉");
    } else {
        email.setCustomValidity("");
    }
});
//Javacript pour la scroll-bar
window.addEventListener("scroll", () => {
    const indicatorBar = document.querySelector(".scroll-indicator-bar");
    const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = (pageScroll / height) * 100;
    indicatorBar.style.width = scrollValue + "%";
});
//Javacript pour le boutton lire plus
document.addEventListener('DOMContentLoaded', () => {
    const expandsMore = document.querySelectorAll('[expand-more]')

    function expand() {
        const showContent = document.getElementById(this.dataset.target)
        if (showContent.classList.contains('expand-active')) {
            this.innerHTML = this.dataset.showtext;
        } else {
            this.innerHTML = this.dataset.hidetext;
        }
        showContent.classList.toggle('expand-active')
    }

    expandsMore.forEach(expandMore => {
        expandMore.addEventListener('click', expand)
    });
});
//Javacript pour la Google Map
/* Source : https://developers.google.com/maps/documentation/javascript/examples/webgl/webgl-tilt-rotation#understand_the_code */
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 50.643594864580784,
            lng: 5.647418383744851
        },
        zoom: 17,
        heading: 0,
        tilt: 0,
        mapId: "90f87356969d889c",
        scaleControl: true,
        /* Positionnement des éléments de la carte */
        /*mapTypeControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP,
        },
        fullscreenControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
        }*/
    });
    const myLatLng = {
        lat: 50.643594864580784,
        lng: 5.647418383744851
    };
    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Entreprise Jean-François Stassen!'
    });
    /*const buttons = [
        ["Rotation gauche", "rotate", 20, google.maps.ControlPosition.LEFT_CENTER],
        ["Rotation droite", "rotate", -20, google.maps.ControlPosition.RIGHT_CENTER],
        ["Rotation haut", "tilt", 20, google.maps.ControlPosition.TOP_CENTER],
        ["Rotation bas", "tilt", -20, google.maps.ControlPosition.BOTTOM_CENTER],
    ];
    buttons.forEach(([text, mode, amount, position]) => {
        const controlDiv = document.createElement("div");
        const controlUI = document.createElement("button");

        controlUI.classList.add("ui-button");
        controlUI.innerText = `${text}`;
        controlUI.addEventListener("click", () => {
            adjustMap(mode, amount);
        });
        controlDiv.appendChild(controlUI);
        map.controls[position].push(controlDiv);
    });
    const adjustMap = function (mode, amount) {
        switch (mode) {
            case "tilt":
                map.setTilt(map.getTilt() + amount);
                break;
            case "rotate":
                map.setHeading(map.getHeading() + amount);
                break;
            default:
                break;
        }
    };*/
}
window.initMap = initMap;