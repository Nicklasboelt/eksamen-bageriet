import axios from "axios";

const kontaktAPI = {
  baseUrl: "http://localhost:5033/kontakt",
};

//--------------- KONTAKT -----------------

// POST kontakt
export const opretKontakt = async (besked) => {

    let beskedobjekt = Object.fromEntries(new FormData(besked))

    let response = await axios.post(kontaktAPI.baseUrl, beskedobjekt);
    // let response = await axios.post(api.baseUrl + "kontakt", besked);
    return response.data; //output
  };