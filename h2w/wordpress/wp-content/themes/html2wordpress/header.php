<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Master_HTML_to_WordPress
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">

<link href="images/favicon.png" rel="icon"/>
    <link href="<?php bloginfo('stylesheet_directory');?>/libraries/bootstrap/bootstrap.min.css" rel="stylesheet"/>
    <linK href="<?php bloginfo('stylesheet_directory');?>/libraries/owl-carousel/owl.carousel.css" rel="stylesheet"/> <!-- Core Owl Carousel CSS File  *	v1.3.3 -->
    <linK href="<?php bloginfo('stylesheet_directory');?>/libraries/owl-carousel/owl.theme.css" rel="stylesheet"/> <!-- Core Owl Carousel CSS Theme  File  *	v1.3.3 -->
	<link href="<?php bloginfo('stylesheet_directory');?>/libraries/fonts/font-awesome.min.css" rel="stylesheet"/>
	<link href="<?php bloginfo('stylesheet_directory');?>/libraries/fonts/elegant/elegant-icon.css" rel="stylesheet"/>
	<link href="<?php bloginfo('stylesheet_directory');?>/libraries/animate/animate.min.css" rel="stylesheet"/>
	<link href="<?php bloginfo('stylesheet_directory');?>/libraries/lightbox2/css/lightbox.css" rel="stylesheet"/>

	<link href="<?php bloginfo('stylesheet_directory');?>/libraries/video/YTPlayer.css" rel="stylesheet"/>

    <link href="<?php bloginfo('stylesheet_directory');?>/css/components.css" rel="stylesheet"/>
	<link href="<?php bloginfo('stylesheet_directory');?>/css/header.css" rel="stylesheet"/>
	<!-- <link href="style.css" rel="stylesheet"/> -->
	<!--link id="color" href="css/color-schemes/default.css" rel="stylesheet"/-->
    <link href="<?php bloginfo('stylesheet_directory');?>/css/media.css" rel="stylesheet"/>

	<link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Roboto:400,300italic,300,100italic,100,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>

<?php wp_head(); ?>
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="js/html5/html5shiv.min.js"></script>
      <script src="js/html5/respond.min.js"></script>
    <![endif]-->
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'html2wordpress' ); ?></a>

		<!-- Header Section -->
	<header id="header-section" class="header-section">
		<div class="col-md-2 col-sm-2 col-xs-6 logo-block">
			<a href="#top"><img src="<?php bloginfo('stylesheet_directory');?>/images/logo.png" alt="logo"/></a>
		</div>
		<div class="col-md-10 col-sm-12 col-xs-12 menu-block">
			<nav class="navbar navbar-default primary-navigation" role="navigation">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				</div>
				<!--
                        If the menu (WP admin area) is not set,
                        then the "menu_class" is applied to "container".
                        In other words, it overwrites the "container_class".
                        Ref: http://wordpress.org/support/topic/wp_nav_menu-menu_class-usage-bug?replies=4
                        -->

                        <?php
                        wp_nav_menu(array(
                                'theme_location' => 'primary',
                                'container'      => 'nav',
                                'container_class'=> 'navbar-collapse collapse',
                                'menu_class'     => 'nav navbar-nav pull-right'
                            )
                        );
                        ?>
				<div id="navbar" class="navbar-collapse collapse">
					<ul class="nav navbar-nav pull-right">
						<li><a href="#top">Home</a></li>
						<li><a href="#service-section">Services</a></li>
						<li><a href="#our-work">Work</a></li>
						<li><a href="#our-genius">Team</a></li>
						<li><a href="blog.html">Blog</a></li>
						<li><a href="#project-section">Contact</a></li>
					</ul>
				</div><!--/.nav-collapse -->
			</nav>
		</div>
	</header>
	<!-- Header Section Over -->
