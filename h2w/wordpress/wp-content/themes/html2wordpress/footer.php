<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Master_HTML_to_WordPress
 */

?>

<!-- Footer Section -->
	<footer id="footer-section" class="footer-section">
		<div class="footer-item">
			<i class="icon_mail_alt"></i>
			<div class="footer-inner">
				<p class="footer-item-title">email</p>
				<a class="footer-item-desc">Hello@maximum.com</a>
			</div>
		</div>
		<div class="footer-item">
			<i class="icon_mobile"></i>
			<div class="footer-inner">
				<p class="footer-item-title">phone</p>
				<p class="footer-item-desc">(012)3456789</p>
			</div>
		</div>
		<a id="back-to-top" class="back-top pull-right"><i class="arrow_up"></i> Go on top</a>
	</footer>
	<!-- Footer Section -->
	
	<!-- Light Box -->
	<div class="modal light-box fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="false">
	<!-- Modal -->
		<div class="container">
			<div class="col-md-1"></div>
			<div class="col-md-10">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close icon_close" data-dismiss="modal" aria-label="Close"></button>
							<div class="popup-heading">
								<p>Let’s take the next step togeder</p>
								<h1>start your project</h1>
							</div>
						</div>
						<div id="contact" class="modal-body">
							<div class="popup-form">
							<form action="./contact.php" target="hidden" method="post">
								<div id="alert-msg" class="alert-msg"></div>
								<div class="form-group col-md-6 col-sm-6">
									<input type="text" class="form-control"  id="input_name" name="contact-name" placeholder="Name*" required="required"/>
								</div>
								<div class="form-group col-md-6 col-sm-6">
									<input type="text" class="form-control" id="input_compnay_name" name="contact-company-name" placeholder="Company"/>
								</div>
								<div class="form-group col-md-6 col-sm-6">
									<input type="email" class="form-control" id="input_email" name="contact-email" placeholder="Email*" required="required"/>
								</div>
								<div class="form-group col-md-6 col-sm-6">
									<input type="text" class="form-control" id="input_phone" name="contact-phone" placeholder="Telephone"/>
								</div>
								<div class="form-group col-md-6 col-sm-6">
									<input type="text" class="form-control" id="input_budget" name="contact-budget" placeholder="Budget*" required="required"/>
								</div>
								<div class="form-group col-md-6 col-sm-6">
									<input type="text" class="form-control" id="input_type" name="contact-type" placeholder="Type*" required="required"/>
								</div>
								<div class="form-group col-md-12 col-sm-12">
									<input type="text" class="form-control" id="textarea_message" name="contact-message" placeholder="Objectives"/>
								</div>
								<input type="submit" value="SEND" class="send" />
							</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-1"></div>
		</div>
	</div>
	<!-- Light Box -->
	
	<!-- Hidden iframe for submitting forms -->
	<iframe src="about:blank" name="hidden" class="hide"></iframe>
	
	<!-- jQuery Include -->
	<script src="<?php bloginfo('tempale_directory');?>/libraries/jquery.min.js"></script>	
	<script src="<?php bloginfo('tempale_directory');?>/libraries/modernizr/modernizr.custom.13711.js"></script>
	<script src="<?php bloginfo('tempale_directory');?>/libraries/jquery.easing.min.js"></script><!-- Easing Animation Effect -->

	<script src="<?php bloginfo('tempale_directory');?>/libraries/bootstrap/bootstrap.min.js"></script> <!-- Core Bootstrap v3.2.0 -->
	<script src="<?php bloginfo('tempale_directory');?>/libraries/bootstrap/ie-emulation-modes-warning.js"></script> <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
	<script src="<?php bloginfo('tempale_directory');?>/libraries/bootstrap/ie10-viewport-bug-workaround.js"></script> <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
	<!-- Font Elegant -->
		<!--[if lte IE 7]><script src="libraries/fonts/elegant/lte-ie7.js"></script><![endif]-->
	
	<script src="<?php bloginfo('tempale_directory');?>/libraries/portfolio-filter/jquery.quicksand.js"></script> <!-- Quicksand v1.4 -->
	<script src="<?php bloginfo('tempale_directory');?>/libraries/jquery.superslides.min.js"></script> <!-- Superslides - v0.6.3-wip -->

	<script src="<?php bloginfo('tempale_directory');?>/libraries/roundabout.js"></script> <!-- service Rounded slider -->
	<script src="<?php bloginfo('tempale_directory');?>/libraries/roundabout_shapes.js"></script> <!-- service Rounded slider -->
	
	<script src="<?php bloginfo('tempale_directory');?>/libraries/jquery.animateNumber.min.js"></script> <!-- Used for Animated Numbers -->
	<script src="<?php bloginfo('tempale_directory');?>/libraries/jquery.appear.js"></script> <!-- It Loads jQuery when element is appears -->
	<script src="<?php bloginfo('tempale_directory');?>/libraries/jquery.knob.js"></script> <!-- Used for Loading Circle -->
	
	<script src="<?php bloginfo('tempale_directory');?>/libraries/wow.min.js"></script>
	
	<script src="<?php bloginfo('tempale_directory');?>/libraries/owl-carousel/owl.carousel.min.js"></script> <!-- Core Owl Carousel CSS File  *	v1.3.3 -->
	<script src="<?php bloginfo('tempale_directory');?>/libraries/video/jquery.mb.YTPlayer.js"></script>

	<script src="<?php bloginfo('tempale_directory');?>/libraries/lightbox2/js/lightbox.min.js"></script>
	
	<!-- Customized Scripts -->
	<script src="<?php bloginfo('tempale_directory');?>/js/functions.js"></script>	

<?php wp_footer(); ?>

</body>
</html>
