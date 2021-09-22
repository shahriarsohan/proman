import { useEffect } from "react";
import Head from "next/head";
import { Provider } from "react-redux";

import mixpanel from "mixpanel-browser";
import AlertTemplate from "react-alert-template-basic";

import { transitions, positions, Provider as AlertProvider } from "react-alert";

// import "semantic-ui-css/semantic.min.css";
import "react-notifications/lib/notifications.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-phone-number-input/style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import TagManager from "react-gtm-module";

import store from "../src/store";
import "../styles/globals.css";
import { Router } from "next/router";

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  containerStyle: {
    zIndex: 1000,
  },
  // you can also just use 'scale'
  transition: transitions.SCALE,
};
const tagManagerArgs = {
  gtmId: "GTM-5Z49FCZ",
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    authCheckState();
    mixpanel.init("1c4b3e842cad38093bba2bd16d1b14cf");
    mixpanel.track("User initiate");
    TagManager.initialize(tagManagerArgs);
  }, []);

  const authCheckState = () => {
    const token = localStorage.getItem("access_token");
    if (token === undefined) {
      //console.log("logging in 1");
      localStorage.removeItem("access_token");
      localStorage.removeItem("expires_in");
    } else {
      const expirationDate = new Date(localStorage.getItem("expires_in"));
      if (expirationDate <= new Date()) {
        //console.log(expirationDate);
        localStorage.removeItem("access_token");
        localStorage.removeItem("expires_in");
        //console.log("logging in 2");
      } else {
        //console.log("logging in 3");
      }
    }
  };

  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <title>Promen || Pure Men Fashion</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/utils.css" />
          <link rel="stylesheet" href="/css/main.css" />
          <link rel="stylesheet" href="/css/magnific-popup.min.css" />

          <link rel="stylesheet" href="/css/jquery.fancybox.min.css" />
          <link rel="stylesheet" href="/css/themify-icons.css" />
          <link rel="stylesheet" href="/css/nice-select.css" />
          <link rel="stylesheet" href="/css/animate.css" />
          <link rel="stylesheet" href="/css/flex-slider.min.css" />
          <link rel="stylesheet" href="/css/owl-carousel.css" />
          <link rel="stylesheet" href="/css/slicknav.min.css" />
          <link rel="stylesheet" href="/css/reset.css" />
          <link rel="stylesheet" href="/css/new.css" />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          />

          {/* tmart */}

          <link rel="stylesheet" href="/css/core.css" />
          <script
            type="module"
            src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            nomodule=""
            src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js"
          ></script>

          {/* end tmart */}

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
          <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
          <script src="https://proman-production.s3.ap-south-1.amazonaws.com/freshpaint.js"></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
          ></script>
          <script src="https://proman-static.s3.ap-south-1.amazonaws.com/offcanvas.js"></script>
          <script
            src="https://kit.fontawesome.com/51af182525.js"
            crossorigin="anonymous"
          ></script>
          <script src="https://proman-production.s3.ap-south-1.amazonaws.com/livechat.js"></script>
          <script src="/test.js"></script>
        </Head>
        <Component {...pageProps} />
      </AlertProvider>
    </Provider>
  );
}

export default MyApp;
