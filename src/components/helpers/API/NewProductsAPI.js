import axios from "axios";

const nyeProdukterAPI = {
  baseUrl: "http://localhost:5033/produkter",
};

// Hent et specielt antal nye produkter
export const hentAntalNyeProdukter = async (antal) => {
    try {
      let res = await axios.get(nyeProdukterAPI.baseUrl + "/antal/" + antal);
      return res.data;
    } catch (error) {
      console.log(" Kunne ikke hente nyheder ", error);
    }
  };