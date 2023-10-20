    window.addEventListener("scroll", function () {
            var backToTop = document.getElementById("back-to-top");
            var containernavbar = document.querySelector(".containernavbar");
            if (window.scrollY > containernavbar.clientHeight) {
                backToTop.style.display = "inline";
            } else {
                backToTop.style.display = "none";
            }
        });
