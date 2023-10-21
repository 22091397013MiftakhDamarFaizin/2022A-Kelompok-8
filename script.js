window.addEventListener("scroll", function () {
        var backToTop = document.getElementById("back-to-top");
        var containernavbar = document.querySelector(".containernavbar");
        if (window.scrollY > containernavbar.clientHeight) {
            backToTop.style.display = "inline";
        } else {
            backToTop.style.display = "none";
        }
    });


var openButtons = document.querySelectorAll(".openVideo");
var videoPopup = document.getElementById("videoPopup");
var videoIframe = document.getElementById("videoIframe");
var closeVideo = document.getElementById("closeVideo");
        
openButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var youtubeURL = this.getAttribute("data-video");
        videoIframe.src = youtubeURL;
        videoPopup.style.display = "block";
    });
});

closeVideo.addEventListener("click", function() {
    videoPopup.style.display = "none";
});
