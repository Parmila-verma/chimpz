const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("show");
    if (navbar.classList.contains("show")) {
        menuIcon.innerHTML = `
            <ion-icon name="close-outline"  class="mobile-icons"></ion-icon>
        `;
    } else {
        menuIcon.innerHTML = `
         <ion-icon name="menu-outline"  class="mobile-icons"></ion-icon>
        `;
    }
});