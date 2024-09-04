document.addEventListener("DOMContentLoaded", function () {
    let goToTopButton = document.getElementById("goToTop");
    let scrollProgress = document.getElementById("envelop");

    window.addEventListener("scroll", function () {
        let scrollValue = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

        if (window.scrollY > 100) {
            goToTopButton.style.display = "flex";
            scrollProgress.style.display = "flex";
        } else {
            goToTopButton.style.display = "none";
            scrollProgress.style.display = "none";
        }
        scrollProgress.style.background = `conic-gradient(yellow ${scrollValue}%, #000000 ${scrollValue}%)`;
    });

    goToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    let menuBtn = document.getElementById("menu-btn");
    let closeBtn = document.querySelector(".close-btn");
    let nav = document.querySelector("nav#menu");
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav#menu a");

    menuBtn.addEventListener("click", function() {
        nav.classList.add("open"); // Mở menu
    });

    closeBtn.addEventListener("click", function() {
        nav.classList.remove("open"); // Đóng menu
    });

    function changeActiveLink() {
        let index = sections.length;
        while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

        for(let link of navLinks){
            link.parentElement.classList.remove("active");

        }
        if (index > 0) {
            navLinks[index-1].parentElement.classList.add('active');
        }
    }

    changeActiveLink();
    window.addEventListener("scroll", changeActiveLink);
    for(let link of navLinks) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            // Ẩn menu
            nav.classList.remove('open');
        });
    }
});