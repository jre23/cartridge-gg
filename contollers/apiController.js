const axios = require("axios");

const APIKey = "ktRl6hM5PH2xVxYouRQctIN7phpaRjMr";
const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";

module.exports = {
  getGiphy: () => {
    axios.get(BASEURL + query + "&api_key=" + APIKey + "&limit=23");
  },
};
