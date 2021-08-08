import axios from "axios";

const facebookLogin = (accesstoken) => {
  console.log(accesstoken);
  axios
    .post("http://192.168.0.8:8000/auth/convert-token", {
      token: accesstoken,
      backend: "facebook",
      grant_type: "convert_token",
      client_id: "izLoYQ9jK6nQwLYZyVKG8onHGyFeyYv2UuBfyXkL",
      client_secret:
        "mFaakChnt6TUeHaUjJ7hbtXkmop2SMW3IbV7oS2laBZ3xp5xuDStQMQPKLzaEKMjHmIKPJ5IP8xOn5sd51JQhrv51NIUEX8HS2OmYOC20C8vkHcVG98d8mS8rN1PVjta",
    })
    .then((res) => {
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
      const expirationDate = res.data.expires_in;
      localStorage.setItem("expirationDate", expirationDate);
    });
};

export default facebookLogin;
