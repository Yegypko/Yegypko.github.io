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
    <link type="text/css" rel="stylesheet" href="css/style.css"/>
</head>
<body style="height: auto;">

<div class="container-fluid">

    <!--HEADER                                          HEADER                              HEADER-->

    <div class="page-header-one" id="wrapContactUs">
        <div class="row">
            <div class="nav">
                <div class="col-xs-8">
                    <img src="img/logo.png" alt="logo" class="logo"/>
                </div>
                <!-- /.col-xs-6 -->
                <div class="col-xs-2 col-xs-offset-2">
                    
                </div>
                <!-- /.col-xs-6 -->
            </div>
            <!-- /.nav -->
        </div>
        <!-- /.row -->
        <div class="row">
            
            <!-- /.row -->
        </div>

    </div>
    <!-- /.page-header -->

    <!--END HEADER                                      END HEADER                          END HEADER-->

</div>
<!-- /.container-fluid -->

<!--OUR PRODUCTION                                      OUR PRODUCTION                      OUR PRODUCTION-->
<div class="our-production" id="ArrowDown">

    <h4 class="composition text-left">
        Заявка отправлена успешно!
    </h4>


    <ul class="item" style="padding: 20px;">
        <li class="items text-left">
                <h4 class="description-material" style="font-size: 20px;">
                    Наш специалист свяжется с вами в кратчайшие сроки!
                </h4>
        </li>
        <li class="items text-left">
                <h4 class="description-material" style="font-size: 20px;">
                    
                </h4>
        </li>
        <li class="items text-left">
                <h4 class="description-material" style="font-size: 20px;">
                    <a href="http://cubeton.com.ua/m/">Вернуться</a>
                </h4>
        </li>
        
    </ul>
</div>
<!-- /.our-production -->

    

    <!-- FOOTER 							FOOTER 				FOOTER -->
    <div class="footer-wrap">
        <div class="footer-wrap">
        <footer class="footer">
            <div class="contact-all-number">
                <h4 class="contact-footer-number">
                    Контакты
                </h4>
                <ul class="all-number">
                    <li class="contac-item-footer">
                        +380 (95) 144 67 66
                    </li>
                    <li class="contac-item-footer">
                        +380 (96) 650 16 62
                    </li>
                </ul>
                <a class="go-to-mail footer-a">
                    cubebeton@gmail.com
                </a>
            </div>


            <div class="contact-all-text">
                <h4 class="contact-footer-text">
                    Адрес
                </h4>
                <ul class="all-number">
                    <li class="contac-item-footer">
                        61030, г. Харьков
                    </li>
                    <li class="contac-item-footer">
                        ул. Диканевская, 50
                    </li>
                </ul>
                <a class="go-to-map footer-a">
                    Показать на карте
                </a>
            </div>
            <div>
            </div>
        </footer>
    </div>
    
<?php
// Check for empty fields
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
// Create the email and send the message
$to = 'cubebeton@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Новая заявка на мобильной версии cubeton.com.ua";
$email_body = "Детали:\n\nИмя: $name\n\nEmail: $email_address\n\nТелефон: $phone\n\n";
$headers = "From: site@cubeton.com.ua/\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
return mail($to,$email_subject,$email_body,$headers);		
?>

<!-- END FOOTER 						END FOOTER 			END FOOTER -->

<script src="js/vendor/jquery-2.2.2.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>