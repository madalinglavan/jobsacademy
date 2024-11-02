let currentType = 'jobseeker'; // Implicit setat pe JobSeeker

function switchUserType(userType) {
    if (userType === currentType) return;

    const indicator = document.getElementById("activeIndicator");
    const jobseekerBtn = document.querySelectorAll(".toggle-btn")[0];
    const employerBtn = document.querySelectorAll(".toggle-btn")[1];
    const jobseekerContent = document.getElementById("jobseekerContent");

    if (userType === "jobseeker") {
        indicator.style.left = "0";
        jobseekerContent.classList.add("active");
        employerContent.classList.remove("active");
        jobseekerBtn.classList.add("active");
        employerBtn.classList.remove("active");
    } else {
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
    mobileMenu.classList.toggle("open"); // Toggle the open class
    burger.classList.toggle("open", mobileMenu.classList.contains("open"));
}

window.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById("mobileMenu");
    const burger = document.querySelector('.burger-menu');
    if (mobileMenu.classList.contains("open") && !mobileMenu.contains(event.target) && !burger.contains(event.target)) {
        toggleMobileMenu(burger);
    }
});


function navigateTo(event, target) {
    event.preventDefault();
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    toggleMobileMenu(document.querySelector('.burger-menu')); // Închide meniul mobil
}



function handleJobSeekerSubmit(event) {
    event.preventDefault();
    document.getElementById('confirmationMessage').classList.remove('hidden');
    event.target.reset(); // Resetează formularul
}

function handleJobOfferSubmit(event) {
    event.preventDefault();
    alert("Job offer file submitted!");
    document.getElementById("jobOfferPopup").style.display = "none"; // Close the popup
}
function handleEmployerSubmit(event) {
    event.preventDefault();
    document.getElementById('confirmationMessageEmployer').classList.remove('hidden');
    event.target.reset(); // Resetează formularul
}
