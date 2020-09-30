import axios from "axios";

const SoegAPI = {
  baseUrl: "http://localhost:5033/"
};

//--------------- SØGNING -----------------
// GET produkt ud fra søgning/søgeord
export const soegProdukt = async (soegeord) => {
    let response = await axios.get(SoegAPI.baseUrl + "produkter/soeg/" + soegeord); 
    return response.data; //output
  };

// GET nyheder ud fra søgning/søgeord
export const soegNyheder = async (soegeord) => {
    let response = await axios.get(SoegAPI.baseUrl + "nyheder/soeg/" + soegeord); 
    return response.data; //output
  };