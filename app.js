// دالة لعرض صفحة الحجز
function showBookingPage(matchId) {
    document.getElementById('booking-page').style.display = 'block';
    document.querySelector('.matches-section').style.display = 'none';
    document.querySelector('.hero').style.display = 'none';
    document.getElementById('confirmation-page').style.display = 'none';
    
    // التمرير إلى أعلى الصفحة
    window.scrollTo(0, 0);
}

// دالة لإخفاء صفحة الحجز
function hideBookingPage() {
    document.getElementById('booking-page').style.display = 'none';
    document.querySelector('.matches-section').style.display = 'block';
    document.querySelector('.hero').style.display = 'block';
    document.getElementById('confirmation-page').style.display = 'none';
}

// دالة للعودة إلى الصفحة الرئيسية
function goToHomePage() {
    document.getElementById('confirmation-page').style.display = 'none';
    document.querySelector('.matches-section').style.display = 'block';
    document.querySelector('.hero').style.display = 'block';
    document.getElementById('booking-page').style.display = 'none';
}

// معالجة إرسال النموذج
document.getElementById('ticketForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // إخفاء صفحة الحجز وإظهار صفحة التأكيد
    document.getElementById('booking-page').style.display = 'none';
    document.getElementById('confirmation-page').style.display = 'block';
    
    // التمرير إلى أعلى الصفحة
    window.scrollTo(0, 0);
});

// العد التنازلي للمباراة
function updateCountdown() {
    // تاريخ المباراة: 29 أغسطس 2025، الساعة 16:30 بتوقيت القاهرة (المتصفح يستخدم التوقيت المحلي)
    const matchDate = new Date('2025-08-29T16:30:00');
    const now = new Date();
    
    const diff = matchDate - now;
    
    if (diff <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// تحديث العد التنازلي كل ثانية
setInterval(updateCountdown, 1000);
updateCountdown(); // التهيئة الأولية

// تهيئة الشعار النصي افتراضيًا عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    const logoImg = document.querySelector('.logo-img');
    if (!logoImg) return;
    logoImg.innerHTML = '';
    
    // إنشاء العناصر النصية للشعار
    const mansouraText = document.createElement('div');
    mansouraText.textContent = 'MANSOURA SC';
    mansouraText.style.position = 'absolute';
    mansouraText.style.top = '15%';
    mansouraText.style.fontSize = '10px';
    mansouraText.style.fontWeight = 'bold';
    mansouraText.style.color = 'white';
    
    const yearText = document.createElement('div');
    yearText.textContent = '1932';
    yearText.style.position = 'absolute';
    yearText.style.bottom = '15%';
    yearText.style.fontSize = '12px';
    yearText.style.fontWeight = 'bold';
    yearText.style.color = 'white';
    
    logoImg.appendChild(mansouraText);
    logoImg.appendChild(yearText);
});
