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

      var swiper = new Swiper(".swiper-container", {
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


      // video

const videoFile = document.getElementById('video-file'),
  videoButton = document.getElementById('video_button'),
  videoIcon = document.getElementById("video-icon");
  
function playPause() {
  if (videoFile.paused) {
    // play video
    videoFile.play()
    // change Icon
    videoIcon.classList.add('ri-pause-line')
    videoIcon.classList.remove('ri-play-line')
  }
  else {
    // pause video
    videoFile.pause()

    // change Icon
    videoIcon.classList.add('ri-play-line')
    videoIcon.classList.remove('ri-pause-line')
  }
}

function finalVideo() {
    // video end icon
    videoIcon.classList.add('ri-play-line')
    videoIcon.classList.remove('ri-pause-line')
}

// ended, 
videoFile.addEventListener("ended",finalVideo)
  
videoButton.addEventListener('click',playPause)

// show scroll up
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');

  // scroll will show when reach next section
  if (this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

// scroll change backgroud of nav
function scrollHeader() {
  const scrollHeader = document.getElementById("scroll-header");

  if (this.scrollY > 100) {
    scrollHeader.classList.add('scrolled-header');
    scrollHeader.classList.remove('nav-bg-color');
  } else {
    scrollHeader.classList.remove("scrolled-header");
    scrollHeader.classList.add('nav-bg-color');
  }
}
window.addEventListener("scroll", scrollHeader);


// scroll up active
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)