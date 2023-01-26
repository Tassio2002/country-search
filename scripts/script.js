import { getCountry } from "./functions/getCountry.js";
import { setCountryImage } from "./functions/getCountryImage.js";

let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
  let countryValue = countryInp.value;
  getCountry(countryValue);
  setCountryImage(countryValue);
});
