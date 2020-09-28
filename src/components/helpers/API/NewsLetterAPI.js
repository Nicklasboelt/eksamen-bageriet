import axios from "axios";

const newsLetterAPI = {
  baseUrl: "http://localhost:5033/nyhedsbrevtilmelding/",
};

//--------------- NYHEDSBREV TILMELD -----------------

// POST tilmeld nyedsbrev
export const tilmeldNyhedsbrev = async (tilmelding) => {
    let response = await axios.post(newsLetterAPI.baseUrl, tilmelding);
    return response.data; //output
  };