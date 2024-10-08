const menuIcon = document.querySelector(".menu-icon");
const list = document.querySelector(".list");

menuIcon.addEventListener("click", () => {
    list.classList.toggle("show");
    if (list.classList.contains("show")) {
        menuIcon.innerHTML = `
            <ion-icon name="close-outline"  class="mobile-icons"></ion-icon>
        `;
    } else {
        menuIcon.innerHTML = `
         <ion-icon name="menu-outline"  class="mobile-icons"></ion-icon>
        `;
    }
});  