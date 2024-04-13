<?php include_once("./connect.php"); ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Karid</title>

    <!-- Stylesheets -->
    <link href="assets/css/bootstrap.css" rel="stylesheet">
    <link href="assets/css/style.css" rel="stylesheet">

    <!-- Responsive File -->
    <link href="assets/css/responsive.css" rel="stylesheet">

    <!-- Color File -->
    <link href="assets/css/color.css" rel="stylesheet">

    <!-- Font File -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet">

    <link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon">
    <link rel="icon" href="assets/images/favicon.png" type="image/x-icon">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>

    <div class="page-wrapper page-wrapper-1">

        <!-- preloader -->
        <div class="loader-wrap">
            <div class="preloader">
                <div class="preloader-close">x</div>
                <div id="handle-preloader" class="handle-preloader">
                    <div class="animation-preloader">
                        <div class="spinner"></div>
                        <div class="txt-loading">
                            <span data-text-preloader="k" class="letters-loading">
                                k
                            </span>
                            <span data-text-preloader="a" class="letters-loading">
                                a
                            </span>
                            <span data-text-preloader="r" class="letters-loading">
                                r
                            </span>
                            <span data-text-preloader="i" class="letters-loading">
                                i
                            </span>
                            <span data-text-preloader="d" class="letters-loading">
                                d
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- preloader end -->



        <!-- header -->
        <header class="main-header header-style-one">
            <!-- Header Lower -->
            <div class="header-lower">
                <div class="container">
                    <div class="inner-container d-flex align-items-center justify-content-between">

                        <div class="left-column d-flex align-items-center">
                            <div class="logo-box">
                                <div class="logo"><a href="index.php"><img src="assets/images/logo.png" alt="logo"></a>
                                </div>
                            </div>
                        </div>

                        <div class="middle-column d-flex align-items-center">
                            <div class="nav-outer">
                                <div class="mobile-nav-toggler"><img src="assets/images/icons/icon-bar-two.png"
                                        alt="icon"></div>
                                <nav class="main-menu navbar-expand-md navbar-light">
                                    <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <ul class="navigation">
                                            <li class="ư"><a href="./index.php">Home</a>
                                            </li>
                                            <?php if (!isset($_SESSION['username'])) {
                                            ?>
                                            <li><a href="./login.php">Login</a></li>
                                            <li><a href="./register.php">Register</a></li>
                                            <?php
                                            } else {
                                            ?>
                                            <li><a>Hello: <?php echo $_SESSION['username']; ?> </a></li>
                                            <li><a href="./index.php?logout=true"> Logout </a></li>
                                            <?php
                                            }; ?>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Header Lower -->


            <!-- sticky header -->
            <div class="sticky-header">
                <div class="header-upper">
                    <div class="container">
                        <div class="inner-container d-flex align-items-center justify-content-between">
                            <div class="left-column d-flex align-items-center">
                                <div class="logo-box">
                                    <div class="logo"><a href="index.php"><img src="assets/images/logo.png"
                                                alt="logo"></a></div>
                                </div>
                            </div>
                            <div class="nav-outer">
                                <div class="mobile-nav-toggler"><img src="assets/images/icons/menu.svg" alt=""></div>
                                <nav class="main-menu navbar-expand-md navbar-light">
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- sticky header -->


            <!-- mobile menu -->
            <div class="mobile-menu">
                <div class="menu-backdrop"></div>
                <div class="close-btn"><span class="fal fa-times"></span></div>

                <nav class="menu-box">
                    <div class="nav-logo"><a href="index.php"><img src="assets/images/logo.png" alt="logo"></a></div>
                    <div class="menu-outer">
                        <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                    </div>
                    <!--Social Links-->
                    <div class="social-links">
                        <ul class="clearfix">
                            <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                            <li><a href="#"><span class="fab fa-facebook-square"></span></a></li>
                            <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                            <li><a href="#"><span class="fab fa-instagram"></span></a></li>
                            <li><a href="#"><span class="fab fa-youtube"></span></a></li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div class="nav-overlay">
                <div class="cursor"></div>
                <div class="cursor-follower"></div>
            </div>
        </header>