<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Cubeton</title>
    <!-- SEO -->
    <meta name="description" content="#"/>
    <meta name="keywords" content="#"/>
    <meta name="author" content="Polyakh Aleksandr"/>
    <!-- CSS -->
    <link type="text/css" rel="stylesheet" href="css/normalize.css"/>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/slick.css"/>
    <link type="text/css" rel="stylesheet" href="css/style.css"/>
    <link rel="shortcut icon" href="img/fav.png" type="image/png">
</head>
<body style="height: auto;">




<div class="wrapHeader">

    <div class="wrapHeaderContacts">
        <div class="header__phones">
            <span class="header__phones__contacts">+380 96 650 16 62</span>
            <span class="header__phones__contacts">+380 95 144 67 66</span>
        </div>
        <!-- /.header__contacts -->
    </div>
    <!-- /.wrapHeaderContacts -->

    <div class="wrapHeaderInner">
        <header class="header clearfix">

            <div class="header__logo hLogo">
                <img src="img/logo-red.png" alt="Логотип" class="hLogo__img">
                <!-- /.hLogo__img -->
            </div>
            <!-- /.header__logo logo -->


        </header>
        <!-- /.header -->
    </div>
    <!-- /.wrapHeaderInner -->

</div>
<!-- /.wrapHeader -->






<!-- /.wrapSlider -->

<div class="wrapAboutUs">
    <section class="aboutUs">

        <h2 class="aboutUs__title">
            <span>Заявка отправлена успешно!</span>
        </h2>
        <!-- /.aboutUs__title-->

        <div class="aboutUs__describe">
            <p class="aboutUs__paragraph">
                Наш специалист свяжется с вами в кратчайшие сроки!

                <a href="http://cubeton.com.ua/">Вернуться</a>
            </p>
        </div>
        <!-- /.aboutUs__describe -->

    </section>
    <!-- /.aboutUs -->
</div>
<!-- /.wrapAboutUs -->


<!-- /.wrapContact -->

<div class="wrapFooter" style="position:absolute;  left: 0px; bottom: 0px;">
    <footer class="footer">

        <p class="footer__block fPhone">
      <span class="fPhone__phone">
        +380 96 650 16 62
      </span>
            <!-- /.fPhone__phone -->
      <span class="fPhone__phone">
        +380 95 144 67 66
      </span>
            <!-- /.fPhone__phone -->
            <!-- /.fPhone__phone -->
        </p>
        <!-- /.footer__block -->
        <p class="footer__block fEmail">
      <span>
        cubebeton@gmail.com
      </span>
        </p>
        <!-- /.footer__block -->
        <p class="footer__block fTown">
          <span class="fTown__elem fTown__elem--street">
            61030, г. Харьков ул. Диканевская, 50
          </span>
            <!-- /.fTown__elem -->
          <span class="fTown__elem fTown__elem--social fTown__elem--vk">
                <a class="all-social-item" href="http://www.vk.com/cubeton" target="_blank"></a>
          </span>
            <!-- /.fTown__elem -->
          <span class="fTown__elem fTown__elem--social fTown__elem--fb">
                <a class="all-social-item" href="http://www.facebook.com/cubebeton" target="_blank"></a>
          </span>
            <!-- /.fTown__elem -->
        </p>
        <!-- /.footer__block -->
        <p class="footer__block">
            <img src="img/logo.png" alt="Логотип" class="fLogo">
            <!-- /.fLogo -->
        </p>
        <!-- /.footer__block -->

    </footer>
    <!-- /.footer -->
</div>
<!-- /.wrapFooter -->


<?php
// Check for empty fields
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
// Create the email and send the message
$to = 'cubebeton@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Новая заявка на cubeton.com.ua";
$email_body = "Детали:\n\nИмя: $name\n\nEmail: $email_address\n\nТелефон: $phone\n\n";
$headers = "From: site@cubeton.com.ua/\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
return mail($to,$email_subject,$email_body,$headers);			
?>


<script src="js/vendor/jquery-2.2.2.min.js"></script>
<script src="js/slick.min.js"></script>
<script src="js/main.js"></script>
<script>
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
        a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-76460669-1', 'auto');
    ga('send', 'pageview');

</script>
</body>
</html>

