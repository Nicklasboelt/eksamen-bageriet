import axios from "axios";

const nyhederAPI = {
  baseUrl: "http://localhost:5033/nyheder",
};

// Hent et specielt antal nyheder
export const hentAlleNyheder = async () => {
  try {
    let res = await axios.get(nyhederAPI.baseUrl);
    return res.data;
  } catch (error) {
    console.log(" Kunne ikke hente nyheder ", error);
  }
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


// Hent udvalgt nyhed
export const hentUdvalgtNyhed = async (id) => {
  try{                                                        
      let res = await axios.get(nyhederAPI.baseUrl + "/" + id);
      return res.data; // Send data retur til "spørgeren"
  }
  catch(error) {
      console.log("Fejl - ", error)
  }
}

// Ret en eksisterende nyhed
export const retNyhed = async (id, nyhed) => {

  try{
      let res = await axios.put(nyhederAPI.baseUrl + "/admin/" + id, nyhed);
      return res.data;
  }
  catch(error) {
      console.log(error)
  }
}