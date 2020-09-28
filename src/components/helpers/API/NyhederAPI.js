import axios from "axios";

const nyhederAPI = {
  baseUrl: "http://localhost:5033/nyheder",
};

// Hent et specielt antal nyheder
export const hentAntalNyheder = async (antal) => {
    try {
      let res = await axios.get(nyhederAPI.baseUrl + "/antal/" + antal);
      return res.data;
    } catch (error) {
      console.log(" Kunne ikke hente nyheder ", error);
    }
  };