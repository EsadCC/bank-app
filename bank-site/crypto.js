let saldo = 760;

let btcPrijs = 30000;
let ethPrijs = 1800;
let ltcPrijs = 90;

let btcBez = 0.5;
let ethBez = 3;
let ltcBez = 10;

/* ELEMENTEN */
const saldoEl = document.getElementById("saldo");

const btcPrijsEl = document.getElementById("btcPrijs");
const ethPrijsEl = document.getElementById("ethPrijs");
const ltcPrijsEl = document.getElementById("ltcPrijs");

const btcBezEl = document.getElementById("btcBez");
const ethBezEl = document.getElementById("ethBez");
const ltcBezEl = document.getElementById("ltcBez");

const crypto = document.getElementById("crypto");
const bedrag = document.getElementById("bedrag");
const melding = document.getElementById("melding");

/* VORIGE PRIJZEN (voor groen/rood) */
let oudeBtc = btcPrijs;
let oudeEth = ethPrijs;
let oudeLtc = ltcPrijs;

/* START */
update();

/* PRIJZEN BEWEGEN (REALISTISCHER) */
setInterval(function ()
{
    oudeBtc = btcPrijs;
    oudeEth = ethPrijs;
    oudeLtc = ltcPrijs;

    btcPrijs += Math.random() * 600 - 300;
    ethPrijs += Math.random() * 80 - 40;
    ltcPrijs += Math.random() * 6 - 3;

    update();
    updateKleur();
    updateGrafiek();
}, 4000);

/* KOPEN */
document.getElementById("koop").onclick = function ()
{
    let geld = Number(bedrag.value);

    if (geld <= 0 || geld > saldo)
    {
        melding.textContent = "Ongeldig bedrag.";
        melding.style.color = "red";
        return;
    }

    if (crypto.value === "btc") btcBez += geld / btcPrijs;
    if (crypto.value === "eth") ethBez += geld / ethPrijs;
    if (crypto.value === "ltc") ltcBez += geld / ltcPrijs;

    saldo -= geld;

    melding.textContent = "Crypto gekocht.";
    melding.style.color = "green";

    update();
};

/* VERKOPEN */
document.getElementById("verkoop").onclick = function ()
{
    let geld = Number(bedrag.value);

    if (geld <= 0)
    {
        melding.textContent = "Vul een bedrag in.";
        melding.style.color = "red";
        return;
    }

    if (crypto.value === "btc")
    {
        let hoeveelheid = geld / btcPrijs;
        if (hoeveelheid > btcBez) return fout();
        btcBez -= hoeveelheid;
        saldo += geld;
    }

    if (crypto.value === "eth")
    {
        let hoeveelheid = geld / ethPrijs;
        if (hoeveelheid > ethBez) return fout();
        ethBez -= hoeveelheid;
        saldo += geld;
    }

    if (crypto.value === "ltc")
    {
        let hoeveelheid = geld / ltcPrijs;
        if (hoeveelheid > ltcBez) return fout();
        ltcBez -= hoeveelheid;
        saldo += geld;
    }

    melding.textContent = "Crypto verkocht.";
    melding.style.color = "green";

    update();
};

function fout()
{
    melding.textContent = "Niet genoeg crypto.";
    melding.style.color = "red";
}

/* UPDATE SCHERM */
function update()
{
    saldoEl.textContent = saldo.toFixed(2);

    btcPrijsEl.textContent = btcPrijs.toFixed(2);
    ethPrijsEl.textContent = ethPrijs.toFixed(2);
    ltcPrijsEl.textContent = ltcPrijs.toFixed(2);

    btcBezEl.textContent = btcBez.toFixed(4);
    ethBezEl.textContent = ethBez.toFixed(4);
    ltcBezEl.textContent = ltcBez.toFixed(2);
}

/* GROEN / ROOD */
function updateKleur()
{
    btcPrijsEl.style.color = btcPrijs > oudeBtc ? "green" : "red";
    ethPrijsEl.style.color = ethPrijs > oudeEth ? "green" : "red";
    ltcPrijsEl.style.color = ltcPrijs > oudeLtc ? "green" : "red";
}
