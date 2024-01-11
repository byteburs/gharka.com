var menuOpen = false; // Variable to check if the menu is open

function toggleMenu() {
  window.location.href = "m.html";
  // var menu = document.getElementById("menu");
  // if (!menuOpen) {
  //   menu.classList.add("active");
  // } else {
  //   menu.classList.remove("active");
  // }
  // menuOpen = !menuOpen;
}

var stickyContainer = false;

window.onscroll = function () {
  showBackToTopButton();
  var container = document.querySelector(".container");
  if (window.pageYOffset > 50) {
    if (!stickyContainer) {
      container.classList.add("sticky");
      document.querySelector(".brand-menu-container").classList.add("sticky");
      stickyContainer = true;
    }
  } else {
    container.classList.remove("sticky");
    document.querySelector(".brand-menu-container").classList.remove("sticky");
    stickyContainer = false;
  }
};

let player;

// Function to generate a random YouTube video ID
function getRandomVideoId() {
  const videoIds = [
    // "eFmu-lE7l1I",
    // "Ah-_J0MH8iQ",
    // "fOBpBGlr36o",
    // Add more YouTube video IDs as needed
  ];
  const randomIndex = Math.floor(Math.random() * videoIds.length);
  return videoIds[randomIndex];
}

// Function to initialize the YouTube player
function onYouTubeIframeAPIReady() {
  const randomVideoId = getRandomVideoId();
  player = new YT.Player("player", {
    height: "500",
    width: "800",
    videoId: randomVideoId,
    playerVars: {
      autoplay: 1, // Autoplay the video
      controls: 1, // Show video controls
      rel: 0, // Don't show related videos at the end
      showinfo: 0, // Don't show video title and uploader
      fs: 1, // Show fullscreen button
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

// Function to start playing the video once the player is ready
function onPlayerReady(event) {
  event.target.playVideo();
}

// window.onscroll = function () {
//   showBackToTopButton();
// };

function showBackToTopButton() {
  var button = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// Scroll to the top of the page when the button is clicked
document.getElementById("backToTopBtn").addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 300); // Adjust the desired scroll position
  }, 20000); // Adjust the delay time
};
