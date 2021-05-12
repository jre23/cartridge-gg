import axios from "axios";

const API = {
  // function to search for a random giphy based off of what the button data-target is. initial value is set to "english bulldog"
  search: (query) => {
    return axios.get("/api/giphy");
  },
};

export default API;
