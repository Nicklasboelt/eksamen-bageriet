import axios from "axios";

const ProdukterAPI = {
  baseUrl: "http://localhost:5033/produkter",
  kommentarUrl: "http://localhost:5033/kommentar",
  // secondUrl: "http://localhost:5021/event",
};

//--------------- Produtker -----------------

// Hent alle produkter
export const hentAlleProdukter = async () => {
  try {
    let res = await axios.get(ProdukterAPI.baseUrl);
    return res.data;
  } catch (error) {
    console.log(" Kunne ikke hente produkterne ", error);
  }
};

// Hent et specielt antal nye produkter
export const hentAntalNyeProdukter = async (antal) => {
  try {
    let res = await axios.get(ProdukterAPI.baseUrl + "/antal/" + antal);
    return res.data;
  } catch (error) {
    console.log(" Kunne ikke hente de nye produkter ", error);
  }
};

// GET produkt ud fra ID
export const hentUdvalgtProdukt = async (id) => {
  try {
    let res = await axios.get(ProdukterAPI.baseUrl + "/" + id);
    return res.data;
  } catch (error) {
    console.log("Kan ikke hente det udvalge event", error);
  }
};

// PATCH - Giv et "like" til produktet
export const likeProdukt = async (id) => {

  try{
      let res = await axios.patch(ProdukterAPI.baseUrl + "/likes/" + id);
      return res.data;
  }
  catch(error) {
      console.log("Kan ikke like produktet", error)
  }
}

//--------------- Kommentar -----------------
// POST kommentar
export const opretKommentar = async (kommentar) => {


  let response = await axios.post(ProdukterAPI.kommentarUrl + "/admin", kommentar);
  return response.data; //output
};