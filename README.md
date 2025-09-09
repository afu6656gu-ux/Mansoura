<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نادي المنصورة - حجز تذاكر المباريات</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary-color: #FF8C00;
            --secondary-color: #000000;
            --accent-color: #FFFFFF;
            --text-color: #333333;
            --light-bg: #FFF5E6;
            --border-radius: 12px;
            --box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
            --transition: all 0.3s ease;
        }
        
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Cairo', sans-serif;
        }
        
        body {
            background-color: var(--light-bg);
            color: var(--text-color);
            line-height: 1.6;
            transition: var(--transition);
        }
        
        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        header {
            background: linear-gradient(135deg, var(--secondary-color) 0%, var(--secondary-color) 70%, var(--primary-color) 100%);
            color: var(--accent-color);
            padding: 1rem 0;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
        }
        
        .logo img {
            height: 80px;
        }
        
        .hero {
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 4rem 0;
            text-align: center;
            border-radius: var(--border-radius);
            margin: 20px 0;
        }
        
        .hero h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
        }
        
        .hero p {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .matches {
            padding: 3rem 0;
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 2rem;
            color: var(--secondary-color);
            position: relative;
            padding-bottom: 15px;
            font-weight: 700;
            font-size: 2rem;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 4px;
            background: var(--primary-color);
            border-radius: 2px;
        }
        
        .match-card {
            background: white;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            padding: 25px;
            margin-bottom: 30px;
            transition: var(--transition);
            border-top: 5px solid var(--primary-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        
        .match-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
        }
        
        .match-header {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            margin-bottom: 20px;
            width: 100%;
        }
        
        .team {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
        }
        
        .team-logo {
            width: 100px;
            height: 100px;
            background: var(--light-bg);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
            border: 2px solid var(--primary-color);
            overflow: hidden;
            padding: 5px;
        }
        
        .team-logo img {
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
        }
        
        .vs {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--primary-color);
            margin: 0 15px;
        }
        
        .match-details {
            width: 100%;
            background: var(--light-bg);
            padding: 15px;
            border-radius: var(--border-radius);
            margin: 15px 0;
        }
        
        .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px dashed #ddd;
        }
        
        .detail-row:last-child {
            border-bottom: none;
        }
        
        .booking-btn {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 30px;
            cursor: pointer;
            font-size: 1.1rem;
            font-weight: 600;
            transition: var(--transition);
            margin-top: 15px;
        }
        
        .booking-btn:hover {
            background-color: #e67e00;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(230, 126, 0, 0.3);
        }
        
        /* صفحات الحجز */
        .booking-section {
            display: none;
            background: white;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            padding: 30px;
            margin: 2rem 0;
            animation: fadeIn 0.5s ease;
        }
        
        .booking-section.active {
            display: block;
        }
        
        .form-header {
            text-align: center;
            margin-bottom: 25px;
            color: var(--secondary-color);
        }
        
        .form-steps {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
            position: relative;
        }
        
        .form-steps::before {
            content: '';
            position: absolute;
            top: 20px;
            left: 0;
            right: 0;
            height: 2px;
            background: #ddd;
            z-index: 1;
        }
        
        .step {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 2;
        }
        
        .step-number {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #ddd;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-bottom: 8px;
            transition: var(--transition);
        }
        
        .step.active .step-number {
            background: var(--primary-color);
        }
        
        .step-text {
            font-size: 0.9rem;
            color: #777;
        }
        
        .step.active .step-text {
            color: var(--primary-color);
            font-weight: 600;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--secondary-color);
        }
        
        input, select {
            width: 100%;
            padding: 14px 16px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            transition: var(--transition);
        }
        
        input:focus, select:focus {
            border-color: var(--primary-color);
            outline: none;
            box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.2);
        }
        
        .form-navigation {
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
        }
        
        .nav-btn {
            padding: 12px 25px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            border: 2px solid var(--primary-color);
        }
        
        .btn-prev {
            background: white;
            color: var(--primary-color);
        }
        
        .btn-next, .btn-submit {
            background: var(--primary-color);
            color: white;
        }
        
        .nav-btn:hover {
            opacity: 0.9;
            transform: translateY(-2px);
        }
        
        .confirmation-page {
            text-align: center;
            padding: 60px 20px;
            background: white;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            margin: 2rem 0;
            display: none;
        }
        
        .confirmation-page.active {
            display: block;
            animation: fadeIn 0.5s ease;
        }
        
        .checkmark {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: var(--primary-color);
            margin: 0 auto 30px;
            position: relative;
            animation: scaleIn 0.5s ease;
        }
        
        .checkmark::after {
            content: '';
            position: absolute;
            left: 28px;
            top: 45px;
            width: 25px;
            height: 10px;
            border: solid white;
            border-width: 0 0 4px 4px;
            transform: rotate(-45deg);
        }
        
        .confirmation-message {
            margin-bottom: 30px;
        }
        
        .confirmation-message h2 {
            color: var(--primary-color);
            margin-bottom: 15px;
            font-size: 2rem;
        }
        
        .ticket-details {
            background: var(--light-bg);
            padding: 20px;
            border-radius: var(--border-radius);
            margin: 25px auto;
            max-width: 500px;
            text-align: right;
        }
        
        .ticket-row {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px dashed #ddd;
        }
        
        .ticket-row:last-child {
            border-bottom: none;
        }
        
        footer {
            background: linear-gradient(135deg, var(--secondary-color) 0%, var(--secondary-color) 70%, var(--primary-color) 100%);
            color: white;
            text-align: center;
            padding: 2rem 0;
            margin-top: 3rem;
            border-radius: var(--border-radius) var(--border-radius) 0 0;
        }
        
        .social-icons {
            margin: 20px 0;
        }
        
        .social-icons a {
            color: white;
            font-size: 1.5rem;
            margin: 0 10px;
            transition: var(--transition);
        }
        
        .social-icons a:hover {
            color: var(--primary-color);
            transform: translateY(-3px);
        }
        
        /* شريط القائمة للهواتف */
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            position: absolute;
            left: 20px;
            top: 20px;
        }
        
        /* تحسينات للهواتف */
        @media (max-width: 768px) {
            .container {
                width: 95%;
                padding: 10px;
            }
            
            .mobile-menu-btn {
                display: block;
            }
            
            .logo {
                flex-direction: column;
                gap: 10px;
            }
            
            .logo img {
                height: 60px;
            }
            
            .hero {
                padding: 2rem 0;
                margin: 10px 0;
            }
            
            .hero h2 {
                font-size: 1.8rem;
            }
            
            .hero p {
                font-size: 1rem;
                padding: 0 10px;
            }
            
            .section-title {
                font-size: 1.5rem;
                margin-bottom: 1.5rem;
            }
            
            .match-header {
                flex-direction: column;
                gap: 15px;
            }
            
            .team-logo {
                width: 80px;
                height: 80px;
            }
            
            .vs {
                margin: 10px 0;
                font-size: 1.2rem;
            }
            
            .match-details {
                padding: 10px;
            }
            
            .detail-row {
                flex-direction: column;
                text-align: center;
                gap: 5px;
            }
            
            .booking-btn {
                width: 100%;
                padding: 15px;
                font-size: 1rem;
            }
            
            .booking-section {
                padding: 20px 15px;
                margin: 1rem 0;
            }
            
            .form-steps {
                flex-direction: column;
                gap: 20px;
            }
            
            .form-steps::before {
                display: none;
            }
            
            .step {
                flex-direction: row;
                gap: 10px;
            }
            
            .step-number {
                margin-bottom: 0;
            }
            
            .form-navigation {
                flex-direction: column;
                gap: 10px;
            }
            
            .nav-btn {
                width: 100%;
                margin: 5px 0;
                padding: 15px;
            }
            
            .confirmation-page {
                padding: 40px 15px;
            }
            
            .checkmark {
                width: 80px;
                height: 80px;
            }
            
            .checkmark::after {
                left: 22px;
                top: 35px;
                width: 20px;
                height: 8px;
            }
            
            .confirmation-message h2 {
                font-size: 1.5rem;
            }
            
            .ticket-details {
                padding: 15px;
                margin: 15px auto;
            }
            
            .ticket-row {
                flex-direction: column;
                text-align: center;
                gap: 5px;
            }
            
            footer {
                padding: 1.5rem 0;
                margin-top: 2rem;
            }
            
            .social-icons a {
                font-size: 1.2rem;
                margin: 0 8px;
            }
        }
        
        /* تحسينات للأجهزة اللوحية */
        @media (min-width: 769px) and (max-width: 1024px) {
            .container {
                width: 90%;
            }
            
            .match-header {
                gap: 15px;
            }
            
            .team-logo {
                width: 90px;
                height: 90px;
            }
            
            .form-steps {
                gap: 30px;
            }
            
            .step {
                flex: 1;
            }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
            from { transform: scale(0); }
            to { transform: scale(1); }
        }
        
        /* مؤشر حجم الشاشة لأغراض التصميم */
        .screen-size-indicator {
            position: fixed;
            bottom: 10px;
            right: 10px;
            background: var(--primary-color);
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 12px;
            z-index: 1000;
            display: none; /* يمكنك تفعيله لمعرفة حجم الشاشة أثناء التطوير */
        }
        
        @media (max-width: 576px) {
            .screen-size-indicator::after {
                content: "صغير جداً (xs)";
            }
        }
        
        @media (min-width: 577px) and (max-width: 768px) {
            .screen-size-indicator::after {
                content: "هاتف (sm)";
            }
        }
        
        @media (min-width: 769px) and (max-width: 992px) {
            .screen-size-indicator::after {
                content: "لوحي (md)";
            }
        }
        
        @media (min-width: 993px) and (max-width: 1200px) {
            .screen-size-indicator::after {
                content: "كمبيوتر (lg)";
            }
        }
        
        @media (min-width: 1201px) {
            .screen-size-indicator::after {
                content: "شاشة كبيرة (xl)";
            }
        }
    </style>
</head>
<body>
    <div class="screen-size-indicator"></div>
    
    <header>
        <button class="mobile-menu-btn">
            <i class="fas fa-bars"></i>
        </button>
        <div class="container">
            <div class="logo">
                <img src="https://i.postimg.cc/5NhfJLmz/Picsart-25-09-09-10-11-27-997.png" alt="شعار نادي المنصورة">
                <h1>نادي المنصورة</h1>
            </div>
        </div>
    </header>
    
    <div class="container">
        <section class="hero">
            <h2>مرحباً بجماهير نادي المنصورة العريقة</h2>
            <p>يمكنك الآن حجز تذكرتك لحضور المباريات على أرض الملعب وفقًا للتصريح الرسمي بعدد 250 متفرج فقط</p>
        </section>
        
        <section class="matches">
            <h2 class="section-title">المباريات القادمة</h2>
            <div class="match-card">
                <div class="match-header">
                    <div class="team">
                        <div class="team-logo">
                            <img src="https://i.postimg.cc/5NhfJLmz/Picsart-25-09-09-10-11-27-997.png" alt="شعار نادي المنصورة">
                        </div>
                        <h3>المنصورة</h3>
                        <a href="https://ar.wikipedia.org/wiki/%D9%86%D8%A7%D0%AF%D9%8A_%D8%A7%D9%84%D9%85%D9%86%D8%B5%D9%88%D8%B1%D8%A9" target="_blank" style="color: var(--primary-color); text-decoration: none; margin-top: 5px; font-size: 0.9rem;">
                            <i class="fas fa-info-circle"></i> معلومات النادي
                        </a>
                    </div>
                    <div class="vs">VS</div>
                    <div class="team">
                        <div class="team-logo">
                            <img src="https://i.postimg.cc/05ZhyP5C/Picsart-25-09-09-09-43-51-060.png" alt="شعار نادي مصر">
                        </div>
                        <h3>مسار</h3>
                        <a href="https://www.kooora.com/?team=11136" target="_blank" style="color: var(--primary-color); text-decoration: none; margin-top: 5px; font-size: 0.9rem;">
                            <i class="fas fa-info-circle"></i> معلومات النادي
                        </a>
                    </div>
                </div>
                
                <div class="match-details">
                    <div class="detail-row">
                        <span>التاريخ:</span>
                        <span>السبت 15 ديسمبر 2023</span>
                    </div>
                    <div class="detail-row">
                        <span>الوقت:</span>
                        <span>7:00 مساءً</span>
                    </div>
                    <div class="detail-row">
                        <span>المكان:</span>
                        <span>ملعب المنصورة الرئيسي</span>
                    </div>
                    <div class="detail-row">
                        <span>التذاكر المتاحة:</span>
                        <span>250 تذكرة فقط</span>
                    </div>
                </div>
                
                <button class="booking-btn" onclick="showBookingPage()">احجز تذكرتك الآن</button>
            </div>
        </section>
        
        <!-- صفحة الحجز - الخطوة 1 -->
        <section id="bookingStep1" class="booking-section">
            <div class="form-header">
                <h2>حجز تذكرة مباراة المنصورة × مسار</h2>
                <p>الخطوة 1 من 2: معلومات الحضور</p>
            </div>
            
            <div class="form-steps">
                <div class="step active">
                    <div class="step-number">1</div>
                    <div class="step-text">المعلومات الشخصية</div>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-text">تأكيد الحجز</div>
                </div>
            </div>
            
            <form id="personalInfoForm">
                <div class="form-group">
                    <label for="fullName">الاسم بالكامل</label>
                    <input type="text" id="fullName" required>
                </div>
                
                <div class="form-group">
                    <label for="nationalId">رقم البطاقة الشخصية</label>
                    <input type="text" id="nationalId" required>
                </div>
                
                <div class="form-group">
                    <label for="phone">رقم الهاتف</label>
                    <input type="tel" id="phone" required>
                </div>
                
                <div class="form-group">
                    <label for="email">البريد الإلكتروني</label>
                    <input type="email" id="email" required>
                </div>
                
                <div class="form-navigation">
                    <button type="button" class="nav-btn btn-prev" onclick="hideBookingPage()">عودة</button>
                    <button type="button" class="nav-btn btn-next" onclick="goToStep2()">التالي</button>
                </div>
            </form>
        </section>
        
        <!-- صفحة الحجز - الخطوة 2 -->
        <section id="bookingStep2" class="booking-section">
            <div class="form-header">
                <h2>حجز تذكرة مباراة المنصورة × مسار</h2>
                <p>الخطوة 2 من 2: تأكيد الحجز</p>
            </div>
            
            <div class="form-steps">
                <div class="step active">
                    <div class="step-number">1</div>
                    <div class="step-text">المعلومات الشخصية</div>
                </div>
                <div class="step active">
                    <div class="step-number">2</div>
                    <div class="step-text">تأكيد الحجز</div>
                </div>
            </div>
            
            <div class="ticket-details">
                <h3>تفاصيل الحجز</h3>
                <div class="ticket-row">
                    <span>المباراة:</span>
                    <span>المنصورة × مسار</span>
                </div>
                <div class="ticket-row">
                    <span>التاريخ:</span>
                    <span>السبت 15 ديسمبر 2023</span>
                </div>
                <div class="ticket-row">
                    <span>الوقت:</span>
                    <span>7:00 مساءً</span>
                </div>
                <div class="ticket-row">
                    <span>الاسم:</span>
                    <span id="confirmName"></span>
                </div>
                <div class="ticket-row">
                    <span>رقم الهاتف:</span>
                    <span id="confirmPhone"></span>
                </div>
            </div>
            
            <div class="form-navigation">
                <button type="button" class="nav-btn btn-prev" onclick="backToStep1()">السابق</button>
                <button type="button" class="nav-btn btn-submit" onclick="submitBooking()">تأكيد الحجز</button>
            </div>
        </section>
        
        <!-- صفحة التأكيد -->
        <section class="confirmation-page" id="confirmationPage">
            <div class="checkmark"></div>
            <div class="confirmation-message">
                <h2>تم الحجز بنجاح!</h2>
                <p>شكراً لك على حجز تذكرتك لمباراة المنصورة × مسار</p>
                <p>سيتم التواصل معك للتأكيد النهائي وحين قبولك للدخول إلى المباراة</p>
            </div>
            
            <div class="ticket-details">
                <h3>تفاصيل التذكرة</h3>
                <div class="ticket-row">
                    <span>رقم الحجز:</span>
                    <span id="bookingNumber">MNZ-2023-7584</span>
                </div>
                <div class="ticket-row">
                    <span>المباراة:</span>
                    <span>المنصورة × مسار</span>
                </div>
                <div class="ticket-row">
                    <span>التاريخ:</span>
                    <span>السبت 15 ديسمبر 2023</span>
                </div>
                <div class="ticket-row">
                    <span>الوقت:</span>
                    <span>7:00 مساءً</span>
                </div>
                <div class="ticket-row">
                    <span>الاسم:</span>
                    <span id="ticketName"></span>
                </div>
            </div>
            
            <button class="booking-btn" onclick="goToHomePage()">العودة إلى الصفحة الرئيسية</button>
        </section>
    </div>
    
    <footer>
        <div class="container">
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
            <p>© 2023 نادي المنصورة - جميع الحقوق محفوظة</p>
            <p>للاستفسار: info@almansouraclub.com - 01012345678</p>
        </div>
    </footer>

    <script>
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
        
        // إضافة زر القائمة للهواتف
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            alert('قائمة الموقع ستظهر هنا');
        });
    </script>
</body>
</html>
