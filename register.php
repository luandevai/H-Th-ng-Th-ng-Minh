<?php include_once("./header.php"); ?>
<!-- Header eand -->


<!-- search popup -->
<div id="search-popup" class="search-popup">
    <div class="close-search theme-btn"><span class="fal fa-times"></span></div>
    <div class="popup-inner">
        <div class="overlay-layer"></div>
        <div class="search-form">
            <form method="post" action="index.html">
                <div class="form-group">
                    <fieldset>
                        <input type="search" class="form-control" name="search-input" value="" placeholder="Search Here"
                            required>
                        <input type="submit" value="Search Now!" class="theme-btn">
                    </fieldset>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- search popup -->


<!-- common banner -->
<section class="common-banner">
    <div class="common-banner-bg" style="background: url('assets/images/banner/common-banner.jpg');"></div>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="common-banner-content">
                    <div class="common-banner-title">
                        <p>We Care Our Customer </p>
                        <h2>Register</h2>
                    </div>
                    <div class="common-banner-btn">
                        <a href="index.html">Home</a>
                        <div class="border"></div>
                        <h6>Register</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- common banner -->


<!-- contact page -->
<section class="contact-page">
    <div class="container">
        <div class="row">
            <div class="col-lg-7">
                <div class="contact-page-form">
                    <form name="register" method="POST" enctype="multipart/form-data">
                        <div class="input-group">
                            <input type="text" name="username" placeholder="Your Name" required>
                            <input type="email" name="email" placeholder="Your Email" required>
                        </div>
                        <div class="input-group">
                            <input type="text" name="phone" placeholder="Phone Number" required>
                            <input type="text" name="address" placeholder="Address" required>
                        </div>
                        <div class="input-group">
                            <input type="password" name="password" placeholder="Password" required>
                            <input type="password" name="confirmpassword" placeholder="Confirm Password" required>
                        </div>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="address">
                    <h3 class="">Our Address</h3>
                    <ul class="link-widget-1-list">
                        <li><a href="javascript:void(0);"><i class="fa-sharp fa-light fa-location-dot"></i> 1867
                                Fire Access <br> RoadDenton, NC 27239</a></li>
                        <li><a href="mailto:karid.info@email.com"><i class="fa-light fa-envelope"></i>
                                karid.info@email.com</a></li>
                        <li><a href="tel:+12345678900"><i class="fa-light fa-phone"></i> +1 234 5678 900</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="contact-map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.8891687869805!2d-97.10482491714345!3d33.183626297215746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dcb2663258e9f%3A0x69158d6ee6d49eee!2zMjMxMSBTIEludGVyc3RhdGUgMzUsIERlbnRvbiwgVFggNzYyMTAsIOCmruCmvuCmsOCnjeCmleCmv-CmqCDgpq_gp4HgppXgp43gpqTgprDgpr7gprfgp43gpp_gp43gprA!5e0!3m2!1sbn!2sbd!4v1709645577590!5m2!1sbn!2sbd"
            style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</section>
<!-- contact page -->
<?php include_once("./footer.php"); ?>