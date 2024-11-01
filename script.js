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
document.getElementById('openPopupBtn').onclick = function() {
    document.getElementById('cvPopup').style.display = 'block';
};

document.getElementById('closePopup').onclick = function() {
    document.getElementById('cvPopup').style.display = 'none';
};

window.onclick = function(event) {
    const popup = document.getElementById('cvPopup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
};

// Form submission handling (you can adjust this part later)
document.getElementById('cvForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    const fileInput = document.getElementById('cvFile');
    if (fileInput.files.length > 0) {
        // You can add your file upload logic here (e.g., using FormData to send to your server)
        alert('CV uploaded successfully!'); // Placeholder for successful submission logic
        document.getElementById('cvPopup').style.display = 'none'; // Close the popup after submission
    } else {
        alert('Please select a file to upload.');
    }
};
// Open job offer popup
document.getElementById("openEmployeePopupBtn").onclick = function() {
    document.getElementById("jobOfferPopup").style.display = "block";
}

// Close job offer popup
document.getElementById("closeEmployeePopup").onclick = function() {
    document.getElementById("jobOfferPopup").style.display = "none";
}

// Close the popup when clicking outside of the popup content
window.onclick = function(event) {
    if (event.target === document.getElementById("jobOfferPopup")) {
        document.getElementById("jobOfferPopup").style.display = "none";
    }
}

// Handle form submission
document.getElementById("jobOfferForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission
    // Handle the file upload logic here (e.g., using AJAX or form submission)
    alert("Job offer file submitted!");
    document.getElementById("jobOfferPopup").style.display = "none"; // Close the popup
};
