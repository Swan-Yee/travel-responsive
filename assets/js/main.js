// catch item to contorl the nav at mobile side
let navList = document.getElementById("navbarNavDropdown"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

// to show nav when click the button
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navList.classList.add("show-menu")
    })
}

// to close when click the close
if (navClose) {
    navClose.addEventListener("click", () => {
        navList.classList.remove("show-menu")
    })
}

// close when clicked of the list

const navLink = document.querySelectorAll('.navbar-nav')

function linkAction(){
    // When we click on each navbar-nav, we remove the show-menu class
    navList.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// swiper js for discover section

      var swiper = new Swiper(".discover-swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
          loop: true,
        spaceBetween: 32,
        coverflowEffect: {
          rotate: 0,
        },
      });