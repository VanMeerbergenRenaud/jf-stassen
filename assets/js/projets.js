/* -------------------------------------------
Nom Complet: 	Renaud Van Meerbergen
------------------------------------------- */
const tabs = document.querySelectorAll('[role="tab"]');
const tabList = document.querySelector('[role="tablist"]');

window.addEventListener("DOMContentLoaded", () => {
    tabs.forEach((tab) => {
        tab.addEventListener("click", changeTabs);
    });
    let tabFocus = 0;
    tabList.addEventListener("keydown", (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            tabs[tabFocus].setAttribute("tabindex", '-1');
            if (e.key === 'ArrowRight') {
                tabFocus++;
                if (tabFocus >= tabs.length) {
                    tabFocus = 0;
                }
            } else if (e.key === 'ArrowLeft') {
                tabFocus--;
                if (tabFocus < 0) {
                    tabFocus = tabs.length - 1;
                }
            }
            tabs[tabFocus].setAttribute("tabindex", '0');
            tabs[tabFocus].focus();
        }
    });
});

function changeTabs(e) {
    const target = e.target;
    const parent = target.parentNode;
    const grandparent = parent.parentNode;
    parent
        .querySelectorAll('[aria-selected="true"]')
        .forEach((t) => t.setAttribute("aria-selected", false));
    target.setAttribute("aria-selected", true);
    grandparent
        .querySelectorAll('[role="tabpanel"]')
        .forEach((p) => p.setAttribute("hidden", true));
    grandparent.parentNode
        .querySelector(`#${target.getAttribute("aria-controls")}`)
        .removeAttribute("hidden");
}

//Javacript pour les boutons projets
const callToActionBtns = document.querySelectorAll('button');
callToActionBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        callToActionBtns.forEach(f => f.classList.remove('active'));
        e.currentTarget.classList.toggle("active");
    });
});