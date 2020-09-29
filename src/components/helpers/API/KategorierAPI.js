import axios from "axios";

const KategorierAPI = {
  baseUrl: "http://localhost:5033/kategorier",
};

//--------------- Kategorier -----------------
// GET alle kategorier
export const hentKategorier = async () => {
    let response = await axios.get(KategorierAPI.baseUrl);
    return response.data; //output
  };

// GET udvalgt kategori
export const hentUdvalgtKategori = async (id) => {
  let response = await axios.get(KategorierAPI.baseUrl + "/" + id);
  return response.data; //output
};