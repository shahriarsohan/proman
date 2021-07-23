import axios from "axios";

const facebookLogin = (accesstoken) => {
  axios
    .post("http://127.0.0.1:8000/social/auth/convert-token/", {
      token: accesstoken,
      backend: "google-oauth2",
      grant_type: "convert_token",
      client_id: "aWk4jv6U0XZOa0QYNRKZvgUMrNXyDKaJK5Awz2w2",
      client_secret:
        "meJFBCbcRibH7PaAsCwnCBmX3FVeBfuNCj0nXuQUvp75WQcs4Mi8rmVEsF9BqXmqcRFOuzyzpPEIEGJgYKmr5eXIOlRrdZ92CAPJE9vai6G2g0nOhbyy8GM5odDtfBo4",
    })
    .then((res) => {
      localStorage.setItem("access_token", res.data.access_token);
      var now = new Date();
      var expire_date = new Date(now.getTime() + res.data.expires_in * 1000);
      console.log(expire_date);
      localStorage.setItem("expires_in", expire_date);
      localStorage.setItem("refresh_token", res.data.refresh_token);
    });
};

export default facebookLogin;
