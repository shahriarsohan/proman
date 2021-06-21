import { useEffect } from "react";
import Head from "next/head";
import { Provider } from "react-redux";
// import "semantic-ui-css/semantic.min.css";
import "react-notifications/lib/notifications.css";

import "react-phone-number-input/style.css";

import store from "../src/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    authCheckState();
  }, []);

  const authCheckState = () => {
    const token = localStorage.getItem("access_token");
    if (token === undefined) {
      console.log("logging in 1");
      localStorage.removeItem("access_token");
      localStorage.removeItem("expires_in");
    } else {
      const expirationDate = new Date(localStorage.getItem("expires_in"));
      if (expirationDate <= new Date()) {
        console.log(expirationDate);
        localStorage.removeItem("access_token");
        localStorage.removeItem("expires_in");
        console.log("logging in 2");
      } else {
        console.log("logging in 3");
      }
    }
  };

  return (
    <Provider store={store}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://proman-static.s3.ap-south-1.amazonaws.com/css/magnific-popup.min.css"
        />
        <link
          rel="stylesheet"
          href="https://proman-static.s3.ap-south-1.amazonaws.com/css/font-awesome.css"
        />
        <link
          rel="stylesheet"
          href="https://proman-static.s3.ap-south-1.amazonaws.com/css/jquery.fancybox.min.css"
        />
        <link
          rel="stylesheet"
          href="https://proman-static.s3.ap-south-1.amazonaws.com/css/themify-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://proman-static.s3.ap-south-1.amazonaws.com/css/niceselect.css"
        />
        <link
          rel="stylesheet"
          href="https://proman-static.s3.ap-south-1.amazonaws.com/css/animate.css"
        />
        <link
          rel="stylesheet"
          href="https://proman-static.s3.ap-south-1.amazonaws.com/css/flex-slider.min.css"
        />
        <link
          rel="stylesheet"
          href="https://proman-static.s3.ap-south-1.amazonaws.com/css/owl-carousel.css"
        />
        <link
          rel="stylesheet"
          href="https://proman-static.s3.ap-south-1.amazonaws.com/css/slicknav.min.css"
        />
        <link
          rel="stylesheet"
          href="https://proman-static.s3.ap-south-1.amazonaws.com/css/reset.css"
        />
        <link
          rel="stylesheet"
          href="https://proman-static.s3.ap-south-1.amazonaws.com/css/new.css"
        />

        {/* tmart */}

        <link
          rel="stylesheet"
          href="https://proman-static.s3.ap-south-1.amazonaws.com/css/core.css"
        />
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule=""
          src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js"
        ></script>

        {/* end tmart */}

        <link href="../fonts/Themify/themify.woff" />
        <link href="../fonts/Themify/themify.ttf" />
        <link href="../fonts/Themify/themify.svg" />
        <link href="../fonts/Themify/themify.svg" />
        <link
          rel="stylesheet"
          href="https://proman-static.s3.ap-south-1.amazonaws.com/css/responsive.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
          rel="stylesheet"
        ></link>
        <script src="https://proman-static.s3.ap-south-1.amazonaws.com/js/jquery.min.js"></script>
        <script src="https://proman-static.s3.ap-south-1.amazonaws.com/js/jquery-migrate-3.0.0.js"></script>
        <script src="https://proman-static.s3.ap-south-1.amazonaws.com/js/jquery-ui.min.js"></script>
        <script src="https://proman-static.s3.ap-south-1.amazonaws.com/js/popper.min.js"></script>
        <script src="https://proman-static.s3.ap-south-1.amazonaws.com/js/bootstrap.min.js"></script>
        <script src="https://proman-static.s3.ap-south-1.amazonaws.com/js/slicknav.min.js"></script>
        <script src="https://proman-static.s3.ap-south-1.amazonaws.com/js/owl-carousel.js"></script>
        <script src="https://proman-static.s3.ap-south-1.amazonaws.com/js/magnific-popup.js"></script>
        <script src="https://proman-static.s3.ap-south-1.amazonaws.com/js/waypoints.min.js"></script>
        <script src="https://proman-static.s3.ap-south-1.amazonaws.com/js/finalcountdown.min.js"></script>
        <script src="https://proman-static.s3.ap-south-1.amazonaws.com/js/nicesellect.js"></script>
        <script src="https://proman-static.s3.ap-south-1.amazonaws.com/js/flex-slider.js"></script>
        <script src="https://proman-static.s3.ap-south-1.amazonaws.com/js/flex-slider.js"></script>
        <script src="https://proman-static.s3.ap-south-1.amazonaws.com/js/easing.js"></script>
        <script src="https://proman-static.s3.ap-south-1.amazonaws.com/js/active.js"></script>
        <script
          src="https://kit.fontawesome.com/51af182525.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
