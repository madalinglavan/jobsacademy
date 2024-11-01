let currentType = 'jobseeker'; // Implicit setat pe JobSeeker

function switchUserType(userType) {
    const indicator = document.getElementById("activeIndicator");
    const jobseekerBtn = document.querySelectorAll(".toggle-btn")[0];
    const employerBtn = document.querySelectorAll(".toggle-btn")[1];
    const jobseekerContent = document.getElementById("jobseekerContent");
    const employerContent = document.getElementById("employerContent");

    if (userType === currentType) return;

    if (userType === "jobseeker") {
        indicator.style.left = "0";
        jobseekerContent.classList.add("active");
        employerContent.classList.remove("active");
        jobseekerBtn.classList.add("active");
        employerBtn.classList.remove("active");
    } else if (userType === "employer") {
        indicator.style.left = "50%";
        employerContent.classList.add("active");
        jobseekerContent.classList.remove("active");
        employerBtn.classList.add("active");
        jobseekerBtn.classList.remove("active");
    }

    currentType = userType;
}

function toggleMobileMenu(burger) {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.style.right === "0px") {
        mobileMenu.style.right = "-100%";
        burger.classList.remove("open");
    } else {
        mobileMenu.style.right = "0px";
        burger.classList.add("open");
    }
}

// Închiderea meniului la clic în afară
window.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById("mobileMenu");
    const burger = document.querySelector('.burger-menu');
    if (mobileMenu.style.right === "0px" && !mobileMenu.contains(event.target) && !burger.contains(event.target)) {
        mobileMenu.style.right = "-100%";
        burger.classList.remove("open");
    }
});

// Funcția de navigare cu animație de subliniere
function navigateTo(event, target) {
    event.preventDefault();
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.right = "-100%"; // Închide meniul mobil după navigare
    const burger = document.querySelector('.burger-menu');
    burger.classList.remove("open"); // De asemenea, închide burger menu
}
