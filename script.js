
function showBookingPage() {
    document.querySelector(".matches").style.display = "none";
    document.getElementById("bookingStep1").classList.add("active");
    window.scrollTo(0, 0);
}

function hideBookingPage() {
    document.querySelector(".matches").style.display = "block";
    document.getElementById("bookingStep1").classList.remove("active");
}

function goToStep2() {
    const name = document.getElementById("fullName").value;
    const phone = document.getElementById("phone").value;

    if (!name || !phone) {
        alert("من فضلك أدخل الاسم ورقم الهاتف");
        return;
    }

    document.getElementById("confirmName").innerText = name;
    document.getElementById("confirmPhone").innerText = phone;

    document.getElementById("bookingStep1").classList.remove("active");
    document.getElementById("bookingStep2").classList.add("active");
    window.scrollTo(0, 0);
}

function backToStep1() {
    document.getElementById("bookingStep2").classList.remove("active");
    document.getElementById("bookingStep1").classList.add("active");
    window.scrollTo(0, 0);
}

function submitBooking() {
    const name = document.getElementById("fullName").value;
    document.getElementById("bookingStep2").classList.remove("active");
    document.getElementById("confirmationPage").classList.add("active");
    document.getElementById("ticketName").innerText = name;
    window.scrollTo(0, 0);
}

function goToHomePage() {
    document.getElementById("confirmationPage").classList.remove("active");
    document.querySelector(".matches").style.display = "block";
    window.scrollTo(0, 0);
}
