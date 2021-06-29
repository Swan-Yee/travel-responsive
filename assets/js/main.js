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