//--------------------------------------------------------------------------------------------------26---------------------------------------------------------------------------------------------//
class Arvosana {
  constructor(oppiaine, arvosana, suorituspvm) {
    this.oppiaine = oppiaine;
    this.arvosana = arvosana;
    this.suorituspvm = new Date(suorituspvm);
  }
}

class Oppilas {
  constructor(nimi, syntymavuosi, osoite, puhelin) {
    this._nimi = nimi;
    this._syntymavuosi = new Date(syntymavuosi, 0, 1);
    this._osoite = osoite;
    this._puhelin = puhelin;
    this._arvosanat = [];
  }

  get nimi() {
    return this._nimi;
  }

  set nimi(value) {
    this._nimi = value;
  }

  get syntymavuosi() {
    return this._syntymavuosi.getFullYear();
  }

  set syntymavuosi(value) {
    this._syntymavuosi = new Date(value, 0, 1);
  }

  get osoite() {
    return this._osoite;
  }

  set osoite(value) {
    this._osoite = value;
  }

  get puhelin() {
    return this._puhelin;
  }

  set puhelin(value) {
    this._puhelin = value;
  }

  tulosta() {
    return `${this.nimi},${this.syntymavuosi},${this.osoite},${this.puhelin}`;
  }

  laskeIka() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.syntymavuosi;
  }

  lisaaArvosana(arvosana) {
    if (arvosana instanceof Arvosana && arvosana.arvosana >= 0 && arvosana.arvosana <= 10) {
      this._arvosanat.push(arvosana);
    }
  }

  printArvosanat() {
    return this._arvosanat.map(a => `${a.oppiaine},${a.arvosana},${a.suorituspvm}`).join('-');
  }

  get HyvaOppilas() {
    return this._arvosanat.some(a => a.arvosana >= 5);
  }

  get KurssitLapi() {
    return this._arvosanat.every(a => a.arvosana >= 1);
  }

  MuutaAsteikko() {
    let asteikko = ["I", "I", "II", "II", "III", "III", "IV", "IV", "V", "V"];
    return this._arvosanat.map(a => asteikko[a.arvosana - 1]);
  }
}

let oppilas = new Oppilas("Maija", 1990, "Opistotie 2", "044-7855512");
console.log(oppilas.tulosta());
console.log(oppilas.laskeIka());
oppilas.lisaaArvosana(new Arvosana("Fysiikka", 8, "2020-09-23"));
oppilas.lisaaArvosana(new Arvosana("Matematiikka", 5, "2020-11-12"));
oppilas.lisaaArvosana(new Arvosana("Englanti", 3, "2020-08-01"));
console.log(oppilas.printArvosanat());
console.log(oppilas.HyvaOppilas);
console.log(oppilas.KurssitLapi);
console.log(oppilas.MuutaAsteikko());


//--------------------------------------------------------------------------------------------------27---------------------------------------------------------------------------------------------//

function Oppilas_27(nimi, syntymavuosi, osoite, puhelin) {
  this._nimi = nimi;
  this._syntymavuosi = new Date(syntymavuosi, 0, 1);
  this._osoite = osoite;
  this._puhelin = puhelin;

  this.tulosta = function () {
    return `${this._nimi},${this._syntymavuosi.getFullYear()},${this._osoite},${this._puhelin}`;
  };

  this.laskeIka = function () {
    let nykyinenVuosi = new Date().getFullYear();
    return nykyinenVuosi - this._syntymavuosi.getFullYear();
  };
}

let oppilas1 = new Oppilas_27('Maaaatti', '2000', 'Osoitekatu 1', '0401234567');
console.log(oppilas1.tulosta());
console.log(oppilas1.laskeIka());

//--------------------------------------------------------------------------------------------------30---------------------------------------------------------------------------------------------//

function varasto() {
  let laskuri = 0;

  function lisaa(n) {
    laskuri += n;
  }

  function tyhjenna() {
    laskuri = 0;
  }

  function saldo() {
    return laskuri;
  }

  return {
    add: lisaa,
    clear: tyhjenna,
    saldo: saldo
  };
}

let omavarasto = varasto();
omavarasto.add(5);
console.log(omavarasto.saldo()); // 5
omavarasto.add(5);
console.log(omavarasto.saldo()); // 10
omavarasto.add(1000);
console.log(omavarasto.saldo()); // 1010
omavarasto.add(-1500);
console.log(omavarasto.saldo()); // -490



module.exports = {
  Arvosana,
  Oppilas,
  Oppilas_27,
  varasto,
};