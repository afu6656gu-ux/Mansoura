// الانتقال بين الصفحات
document.addEventListener('DOMContentLoaded', function() {
    // إضافة مستمعي الأحداث للأزرار
    document.getElementById('bookingBtn').addEventListener('click', showBookingPage);
    document.getElementById('backBtn').addEventListener('click', hideBookingPage);
    document.getElementById('nextBtn').addEventListener('click', goToStep2);
    document.getElementById('prevBtn').addEventListener('click', backToStep1);
    document.getElementById('submitBtn').addEventListener('click', submitBooking);
    document.getElementById('homeBtn').addEventListener('click', goToHomePage);
    
    // إضافة زر القائمة للهواتف
    document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
        alert('قائمة الموقع ستظهر هنا');
    });
});

// عرض صفحة الحجز
function showBookingPage() {
    document.getElementById('bookingStep1').classList.add('active');
    window.scrollTo({
        top: document.getElementById('bookingStep1').offsetTop - 50,
        behavior: 'smooth'
    });
}

// إخفاء صفحة الحجز والعودة للرئيسية
function hideBookingPage() {
    document.getElementById('bookingStep1').classList.remove('active');
    document.getElementById('bookingStep2').classList.remove('active');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// الانتقال إلى الخطوة الثانية من الحجز
function goToStep2() {
    // التحقق من صحة البيانات في الخطوة الأولى
    const fullName = document.getElementById('fullName').value;
    const nationalId = document.getElementById('nationalId').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    
    if (!fullName || !nationalId || !phone || !email) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    // تعبئة بيانات التأكيد
    document.getElementById('confirmName').textContent = fullName;
    document.getElementById('confirmPhone').textContent = phone;
    
    // الانتقال إلى الخطوة الثانية
    document.getElementById('bookingStep1').classList.remove('active');
    document.getElementById('bookingStep2').classList.add('active');
    
    window.scrollTo({
        top: document.getElementById('bookingStep2').offsetTop - 50,
        behavior: 'smooth'
    });
}

// العودة إلى الخطوة الأولى من الحجز
function backToStep1() {
    document.getElementById('bookingStep2').classList.remove('active');
    document.getElementById('bookingStep1').classList.add('active');
    
    window.scrollTo({
        top: document.getElementById('bookingStep1').offsetTop - 50,
        behavior: 'smooth'
    });
}

// تأكيد الحجز النهائي
function submitBooking() {
    const fullName = document.getElementById('fullName').value;
    
    // تعبئة بيانات التذكرة
    document.getElementById('ticketName').textContent = fullName;
    
    // إخفاء صفحة الحجز وإظهار صفحة التأكيد
    document.getElementById('bookingStep2').classList.remove('active');
    document.getElementById('confirmationPage').classList.add('active');
    
    window.scrollTo({
        top: document.getElementById('confirmationPage').offsetTop - 50,
        behavior: 'smooth'
    });
    
    // في التطبيق الحقيقي، هنا سيتم إرسال البيانات إلى الخادم
    console.log('تم تأكيد الحجز بنجاح!');
}

// العودة إلى الصفحة الرئيسية
function goToHomePage() {
    document.getElementById('confirmationPage').classList.remove('active');
    
    // إعادة تعيين النموذج
    document.getElementById('personalInfoForm').reset();
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}