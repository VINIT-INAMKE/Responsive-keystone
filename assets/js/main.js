/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    // Add show-menu class to nav menu
    nav.classList.toggle("show-menu");
    // Add show-icon to show and hide menu icon
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll(".dropdown__item");

// 1. Select each dropdown item
dropdownItems.forEach((item) => {
  const dropdownButton = item.querySelector(".dropdown__button");

  // 2. Select each button click
  dropdownButton.addEventListener("click", () => {
    // 7. Select the current show-dropdown class
    const showDropdown = document.querySelector(".show-dropdown");

    // 5. Call the toggleItem function
    toggleItem(item);

    // 8. Remove the show-dropdown class from other items
    if (showDropdown && showDropdown !== item) {
      toggleItem(showDropdown);
    }
  });
});

// 3. Create a function to display the dropdown
const toggleItem = (item) => {
  // 3.1. Select each dropdown content
  const dropdownContainer = item.querySelector(".dropdown__container");

  // 6. If the same item contains the show-dropdown class, remove
  if (item.classList.contains("show-dropdown")) {
    dropdownContainer.removeAttribute("style");
    item.classList.remove("show-dropdown");
  } else {
    // 4. Add the maximum height to the dropdown content and add the show-dropdown class
    dropdownContainer.style.height = dropdownContainer.scrollHeight + "px";
    item.classList.add("show-dropdown");
  }
};

/*=============== DELETE DROPDOWN STYLES ===============*/
const mediaQuery = matchMedia("(min-width: 1118px)"),
  dropdownContainer = document.querySelectorAll(".dropdown__container");

// Function to remove dropdown styles in mobile mode when browser resizes
const removeStyle = () => {
  // Validate if the media query reaches 1118px
  if (mediaQuery.matches) {
    // Remove the dropdown container height style
    dropdownContainer.forEach((e) => {
      e.removeAttribute("style");
    });

    // Remove the show-dropdown class from dropdown item
    dropdownItems.forEach((e) => {
      e.classList.remove("show-dropdown");
    });
  }
};

addEventListener("resize", removeStyle);

/*=============== Association slider STYLES ===============*/
let swiperCards = new Swiper(".memcard__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

/*=============== syllabus ===============*/

function AI_ML_Honor() {
  document.getElementById("syllabus").innerHTML = `
  <iframe
  src="https://drive.google.com/file/d/1FxELEEYq-UlUNIruCiGGmziwxzN7HboH/preview#toolbar=0"
  allow="autoplay"
  width="100%"
  height="100%"
  class="syllembed"
></iframe>
`;
}
function TE_Computer_Syllabus_2019() {
  document.getElementById("syllabus").innerHTML = `
  <iframe
  src="https://drive.google.com/file/d/1a8-1FdeCoCro2ym42oE9vjFODyxdtm5E/preview#toolbar=0"
  allow="autoplay"
  width="100%"
  height="100%"
  class="syllembed"
></iframe>
  `;
}
function BE_Computer_Syllabus_2019() {
  document.getElementById("syllabus").innerHTML = `
  <iframe
  src="https://drive.google.com/file/d/11Pt-sYTxifNGLWNrNHbJBQh4NmA67w5n/preview#toolbar=0"
  allow="autoplay"
  width="100%"
  height="100%"
  class="syllembed"
></iframe>
  `;
}
function Data_Science_Honor() {
  document.getElementById("syllabus").innerHTML = `
  <iframe
  src="https://drive.google.com/file/d/1SIckrm_03xBYlsk3xrq_uVMHfS-vO59B/preview#toolbar=0"
  allow="autoplay"
  width="100%"
  height="100%"
  class="syllembed"
></iframe>
`;
}
function SE_Computer_Syllabus_2019() {
  document.getElementById("syllabus").innerHTML = `
  <iframe
  src="https://drive.google.com/file/d/1ARuyhI2a65tkeHACMcp8dirkqWanSfil/preview#toolbar=0"
  allow="autoplay"
  width="100%"
  height="100%"
  class="syllembed"
></iframe>
`;
}
function Cyber_Security_Honor() {
  document.getElementById("syllabus").innerHTML = `
  <iframe
  src="https://drive.google.com/file/d/1Hrzd59oNXaLxfOFq-OnMj-9xHjSBLiub/preview#toolbar=0"
  allow="autoplay"
  width="100%"
  height="100%"
  class="syllembed"
></iframe>
  `;
}
function syllClear() {
  document.getElementById("syllabus").innerHTML = " ";
}
