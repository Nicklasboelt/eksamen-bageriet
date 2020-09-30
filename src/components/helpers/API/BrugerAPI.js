import axios from "axios";

const brugerAPI = {
  baseUrl: "http://localhost:5033/bruger",
};

// POST opret bruger
export const opretBruger = async (nybruger) => {
  // let brugerobjekt = Object.fromEntries(new FormData(nybruger))

  console.log(nybruger)

//   const formdata = new FormData();
//   formdata.append("bruger", JSON.stringify(nybruger));

  let response = await axios.post(brugerAPI.baseUrl, nybruger);
  return response.data; //output
};
