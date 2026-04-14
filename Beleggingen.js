/* STARTWAARDES */
let saldo = 760;

let producten = {
  aandelen: {
    TechCorp: { prijs: 120, bezit: 2 },
    GreenEnergy: { prijs: 80, bezit: 0 }
  },
  crypto: {
    BTC: { prijs: 30000, bezit: 0 },
    ETH: { prijs: 1800, bezit: 1 },
    LTC: { prijs: 90, bezit: 0 }
  }
};

/* ELEMENTEN */
let categorie = document.getElementById("categorie");
let product = document.getElementById("product");
let saldoEl = document.getElementById("saldo");
let prijsEl = document.getElementById("prijs");
let bezitEl = document.getElementById("bezit");
let bedrag = document.getElementById("bedrag");
let melding = document.getElementById("melding");

let koop = document.getElementById("koopBtn");
let verkoop = document.getElementById("verkoopBtn");

/* SALDO TONEN */
saldoEl.innerHTML = saldo.toFixed(2);

/* PRODUCTEN LADEN */
function laadProducten()
{
  product.innerHTML = "";

  let cat = categorie.value;

  for (let naam in producten[cat])
  {
    let optie = document.createElement("option");
    optie.value = naam;
    optie.innerHTML = naam;
    product.appendChild(optie);
  }

  updateInfo();
}

/* INFO BIJWERKEN */
function updateInfo()
{
  let cat = categorie.value;
  let naam = product.value;

  let data = producten[cat][naam];

  prijsEl.innerHTML = data.prijs.toFixed(2);
  bezitEl.innerHTML = data.bezit;

  if (cat === "crypto")
  {
    melding.innerHTML = "Let op: crypto is risicovol.";
    melding.style.color = "red";
  }
  else
  {
    melding.innerHTML = "";
  }
}

/* PRIJS VERANDERT */
setInterval(function ()
{
  let cat = categorie.value;
  let naam = product.value;

  if (!naam) return;

  let data = producten[cat][naam];

  data.prijs = data.prijs + (Math.random() * 10 - 5);
  if (data.prijs < 10) data.prijs = 10;

  prijsEl.innerHTML = data.prijs.toFixed(2);
}, 4000);

/* KOPEN */
koop.onclick = function ()
{
  let geld = Number(bedrag.value);

  if (geld <= 0)
  {
    melding.innerHTML = "Vul een geldig bedrag in.";
    melding.style.color = "red";
    return;
  }

  if (geld > saldo)
  {
    melding.innerHTML = "Onvoldoende saldo.";
    melding.style.color = "red";
    return;
  }

  let cat = categorie.value;
  let naam = product.value;
  let data = producten[cat][naam];

  let aantal = Math.floor(geld / data.prijs);

  if (aantal === 0)
  {
    melding.innerHTML = "Bedrag te laag.";
    melding.style.color = "red";
    return;
  }

  saldo = saldo - (aantal * data.prijs);
  data.bezit = data.bezit + aantal;

  saldoEl.innerHTML = saldo.toFixed(2);
  bezitEl.innerHTML = data.bezit;

  melding.innerHTML = "Je hebt €" + (aantal * data.prijs).toFixed(2) + " geïnvesteerd.";
  melding.style.color = "green";
};

/* VERKOPEN */
verkoop.onclick = function ()
{
  let cat = categorie.value;
  let naam = product.value;
  let data = producten[cat][naam];

  if (data.bezit <= 0)
  {
    melding.innerHTML = "Je hebt niets om te verkopen.";
    melding.style.color = "red";
    return;
  }

  data.bezit = data.bezit - 1;
  saldo = saldo + data.prijs;

  saldoEl.innerHTML = saldo.toFixed(2);
  bezitEl.innerHTML = data.bezit;

  melding.innerHTML = "Je hebt 1 eenheid verkocht.";
  melding.style.color = "green";
};

/* EVENTS */
categorie.onchange = laadProducten;
product.onchange = updateInfo;

/* START */
laadProducten();


// User DropDown
  const dropDown = document.getElementById("dropDown");
  const userToggle = document.getElementById("userToggle");
  const logUit = document.getElementById("logUitDrop");

  if (dropDown && userToggle) {
  userToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    dropDown.classList.toggle("active");
  });

  document.addEventListener("click", () => {
    dropDown.classList.remove("active");
  });
}

logUit.onclick = function()
{
  alert("U bent uitgelogd!");
  window.location.href = "index.html";
}