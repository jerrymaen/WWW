function teht18(sade) {
  if (typeof sade !== 'number' || sade <= 0) {
    return 0; // Palautetaan 0 jos säde error
  }

  let pinta_ala = Math.PI * (sade * sade);
  return pinta_ala;
}

let sade = 5; // Ympyrän säde
let pinta_ala = teht18(sade); // Kutsutaan säde
console.log('Ympyrän pinta-ala on:', pinta_ala);

//---------------------------------------------------------------------------------------////---------------------------------------------------------------------------------------//

// Määritellään funktio teht19, joka ottaa parametrina "taulukko""
function teht19(taulukko) {
  // Tarkistetaan, onko taulukko tyhjä
  if (taulukko.length === 0) {
    // Jos taulukko on tyhjä, palautetaan 0
    return {
      min: 0,
      max: 0,
      avg: 0,
      sum: 0
    };
  }

  // Alustetaan muuttujat min, max ja sum 0
  let min = taulukko[0];
  let max = taulukko[0];
  let sum = taulukko[0];

  // Käydään läpi taulukon arvot
  for (let i = 1; i < taulukko.length; i++) {
    // Tarkistetaan, onko nykyinen arvo pienempi kuin nykyinen min
    if (taulukko[i] < min) {
      // Jos on, päivitetään pienin arvo (min)
      min = taulukko[i];
    }
    // Tarkistetaan, onko nykyinen arvo suurempi kuin nykyinen max
    if (taulukko[i] > max) {
      // Jos on, päivitetään max
      max = taulukko[i];
    }
    // Lisätään nykyinen arvo sum
    sum += taulukko[i];
  }

  // Lasketaan avg  jakamalla summa taulukon pituudella
  let avg = sum / taulukko.length;

  // Palautetaan, jossa on lasketut tulokset
  return {
    min: min,
    max: max,
    avg: avg,
    sum: sum
  };
}

// Luodaan taulukko
let taulukko = [23, 45, 67, 100];

// Kutsutaan funktiota teht19 taulukolla ja tallennetaan palautettu objekti muuttujaan "tulokset"
let tulokset = teht19(taulukko);

// Tulostetaan tulokset konsoliin
console.log(tulokset);

//---------------------------------------------------------------------------------------////---------------------------------------------------------------------------------------//

function teht20(rivi, results) {
  for (let i = 0; i < rivi; i++) {
    const number = i + 1;
    const exponent = i * i;
    const result = Math.pow(number, exponent);
    results[i] = result;
  }
}

const rivi = 5;
const results = [];

teht20(rivi, results);

console.log(results);

//---------------------------------------------------------------------------------------////---------------------------------------------------------------------------------------//

function teht21(pvm) {
  // se ei ole tyhjä
  if (pvm.length === 0) {
    return false;
  }

  // se sisältää vain numeroita (siis dd.mm.yyyy osat)
  if (!/^\d{2}\.\d{2}\.\d{4}$/.test(pvm)) {
    return false;
  }

  // pvm:n pituus on oikea (siis tasan 10 merkkiä)
  if (pvm.length !== 10) {
    return false;
  }

  // pura päivä, kuukausi ja vuosi päivämäärämerkkijonosta
  let day = parseInt(pvm.substring(0, 2), 10);
  let month = parseInt(pvm.substring(3, 5), 10);
  let year = parseInt(pvm.substring(6, 10), 10);

  // dd on välillä 1-31
  if (day < 1 || day > 31) {
    return false;
  }

  // mm on välillä 1-12
  if (month < 1 || month > 12) {
    return false;
  }

  // yyyy on välillä 1900-2020
  if (year < 1900 || year > 2020) {
    return false;
  }

  // kun kaikki tarkastukset läpäisty, päivämäärä on oikeassa muodossa = palaura true
  // 31.04.2020 läpäisee testin vaikka huhtikuussa ei ole 31 päivää
  return true;
}

function tarkistapvm21() {
  let pvm = document.getElementById("pvm").value;
  let tulosElement = document.getElementById("tulos");
  let tulos = teht21(pvm);
  tulosElement.textContent = tulos ? "true" : "false";
}


module.exports = {
  teht18: teht18,
  teht19: teht19,
  teht20: teht20,
  teht21: teht21,
}