let availableTickets = 250;

function showBookingPage() {
    document.getElementById('bookingStep1').style.display = 'block';
}

function hideBookingPage() {
    document.getElementById('bookingStep1').style.display = 'none';
    document.getElementById('bookingStep2').style.display = 'none';
}

function goToStep2() {
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (!fullName || !phone || !email) {
        alert('يرجى ملء جميع الحقول');
        return;
    }

    document.getElementById('confirmName').textContent = fullName;
    document.getElementById('confirmPhone').textContent = phone;

    document.getElementById('bookingStep1').style.display = 'none';
    document.getElementById('bookingStep2').style.display = 'block';
}

function backToStep1() {
    document.getElementById('bookingStep2').style.display = 'none';
    document.getElementById('bookingStep1').style.display = 'block';
}

function submitBooking() {
    if (availableTickets <= 0) {
        alert('لا توجد تذاكر متاحة!');
        return;
    }

    availableTickets--;
    document.getElementById('availableTickets').textContent = availableTickets + ' تذكرة فقط';

    const fullName = document.getElementById('fullName').value;
    document.getElementById('ticketName').textContent = fullName;
    document.getElementById('bookingNumber').textContent = generateBookingNumber();

    document.getElementById('bookingStep2').style.display = 'none';
    document.getElementById('confirmationPage').style.display = 'block';
}

function goToHomePage() {
    document.getElementById('confirmationPage').style.display = 'none';
    document.getElementById('personalInfoForm').reset();
}

function generateBookingNumber() {
    return "MNZ-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000);
}