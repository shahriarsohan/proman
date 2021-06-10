import { useEffect } from "react";
import Head from "next/head";
import { Provider } from "react-redux";
// import "semantic-ui-css/semantic.min.css";
import "react-phone-number-input/style.css";

import store from "../src/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    authCheckState();
  }, []);

  const authCheckState = () => {
    // const token = localStorage.getItem("access_token");
    // console.log(token);
    // // localStorage.removeItem("access_token");
    // const expirationDate = new Date(localStorage.getItem("expirationDate"));
    // console.log(expirationDate);
    // if (expirationDate <= new Date()) {
    //   console.log("logging out");
    // } else {
    //   (expirationDate.getTime() - new Date().getTime()) / 1000;
    //   console.log("logging in");
    // }

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
          href="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/css/magnific-popup.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/css/font-awesome.css"
        />
        <link
          rel="stylesheet"
          href="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/css/jquery.fancybox.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/css/themify-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/css/niceselect.css"
        />
        <link
          rel="stylesheet"
          href="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/css/animate.css"
        />
        <link
          rel="stylesheet"
          href="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/css/flex-slider.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/css/owl-carousel.css"
        />
        <link
          rel="stylesheet"
          href="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/css/slicknav.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/css/reset.css"
        />
        <link
          rel="stylesheet"
          href="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/modified/styles1.css"
        />

        {/* tmart */}

        <link
          rel="stylesheet"
          href="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/tmart/css/core.css"
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
          href="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/css/responsive.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
          rel="stylesheet"
        ></link>
        <script src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/js/jquery.min.js"></script>
        <script src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/js/jquery-migrate-3.0.0.js"></script>
        <script src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/js/jquery-ui.min.js"></script>
        <script src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/js/popper.min.js"></script>
        <script src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/js/bootstrap.min.js"></script>
        <script src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/js/slicknav.min.js"></script>
        <script src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/js/owl-carousel.js"></script>
        <script src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/js/magnific-popup.js"></script>
        <script src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/js/waypoints.min.js"></script>
        <script src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/js/finalcountdown.min.js"></script>
        <script src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/js/nicesellect.js"></script>
        <script src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/js/flex-slider.js"></script>
        {/* <script src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/js/scrollup.js"></script> */}
        <script src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/js/onepage-nav.min.js"></script>
        <script src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/js/easing.js"></script>
        <script src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/js/active.js"></script>
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
