document.addEventListener("DOMContentLoaded", function () {
  const btnNieuweRekening = document.getElementById("btn-nieuwe-rekening");
  const overzicht = document.getElementById("saldo-overzicht");

  if (btnNieuweRekening && overzicht) {
    btnNieuweRekening.addEventListener("click", function () {

      const voornaam = document.getElementById("voornaam").value.trim();
      const achternaam = document.getElementById("achternaam").value.trim();
      const vormKaart = document.getElementById("vormKaart").value.trim();

      if (!voornaam || !achternaam || !vormKaart) {
        alert("Vul alles in!");
        return;
      }

      const iban =
        "NL" + (Math.floor(Math.random() * 90) + 10) +
        "BANK" + Math.floor(Math.random() * 10000000000);

      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const pasnummer =
        (Math.floor(Math.random() * 900) + 100) +
        letters[Math.floor(Math.random() * letters.length)] +
        (Math.floor(Math.random() * 900) + 100);

      const maand = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
      const jaar = new Date().getFullYear() + Math.floor(Math.random() * 6) + 1;
      const geldig = maand + "-" + jaar;

      const item = document.createElement("div");
      item.className = "saldo-item";

      item.innerHTML = `
        <span>${vormKaart}</span>
        <p class="bedrag">€0,00</p>
        <button class="btn-geld-toevoegen">+ Geld toevoegen</button>
        <small>${voornaam} ${achternaam}</small>
        <div class="rekening-info">
          <small>IBAN: ${iban}</small>
          <small>Pasnummer: ${pasnummer}</small>
          <small>Geldig t/m: ${geldig}</small>
        </div>
      `;

      overzicht.appendChild(item);

      document.getElementById("voornaam").value = "";
      document.getElementById("achternaam").value = "";
      document.getElementById("vormKaart").value = "";
    });
  }

  // Geld toevoegen 
  if (overzicht) {
    overzicht.addEventListener("click", function (e) {
      if (!e.target.classList.contains("btn-geld-toevoegen")) return;

      const kaart = e.target.closest(".saldo-item");
      const bedragElement = kaart.querySelector(".bedrag") || kaart.querySelector("p");

      let invoer = prompt("Hoeveel geld wil je toevoegen?");
      if (!invoer) return;

      let bedrag = parseFloat(invoer.replace(",", "."));
      if (isNaN(bedrag) || bedrag <= 0) {
        alert("Vul een geldig bedrag in");
        return;
      }

      let huidig = parseFloat(bedragElement.textContent.replace("€", "").replace(",", "."));
      let nieuw = huidig + bedrag;

      bedragElement.textContent = "€" + nieuw.toFixed(2).replace(".", ",");
    });
  }


  const dropDown = document.getElementById("dropDown");
  const toggle = document.getElementById("userToggle");
  const logUit = document.getElementById("logUitDrop");

  if (dropDown && toggle) {
    toggle.addEventListener("click", (e) => {
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
    window.location.href = "Home.html";
  }

});
