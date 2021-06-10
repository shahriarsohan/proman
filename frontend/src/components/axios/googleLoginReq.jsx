import axios from "axios";

const facebookLogin = (accesstoken) => {
  axios
    .post("http://127.0.0.1:8000/auth/convert-token", {
      token: accesstoken,
      backend: "google-oauth2",
      grant_type: "convert_token",
      client_id: "izLoYQ9jK6nQwLYZyVKG8onHGyFeyYv2UuBfyXkL",
      client_secret:
        "mFaakChnt6TUeHaUjJ7hbtXkmop2SMW3IbV7oS2laBZ3xp5xuDStQMQPKLzaEKMjHmIKPJ5IP8xOn5sd51JQhrv51NIUEX8HS2OmYOC20C8vkHcVG98d8mS8rN1PVjta",
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
