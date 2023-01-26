import { getCountry } from "./getCountry.js";
import { setCountryImage } from "./getCountryImage.js";

let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
  let countryValue = countryInp.value;
  getCountry(countryValue);
  setCountryImage(countryValue);
});
