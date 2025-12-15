document.getElementById("btn-nieuwe-rekening").addEventListener("click", function () {

    const voornaam = document.getElementById("voornaam").value.trim();
    const achternaam = document.getElementById("achternaam").value.trim();

    if (!voornaam || !achternaam) {
        alert("Vul je voornaam en achternaam in");
        return;
    }

    const types = ["Saldo", "Spaarrekening", "Creditcard"];
    const type = types[Math.floor(Math.random() * types.length)];
    
    const iban =
        "NL" +
        Math.floor(Math.random() * 90 + 10) +
        "BANK" +
        Math.floor(Math.random() * 10000000000);

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const pasnummer =
        Math.floor(Math.random() * 900 + 100) +
        letters[Math.floor(Math.random() * letters.length)] +
        Math.floor(Math.random() * 900 + 100);

    const maand = (Math.floor(Math.random() * 12) + 1).toString().padStart(2, "0");
    const jaar = new Date().getFullYear() + Math.floor(Math.random() * 6) + 1;
    const geldig = maand + "-" + jaar;

    const overzicht = document.getElementById("saldo-overzicht");
    const item = document.createElement("div");
    item.className = "saldo-item";

    item.innerHTML = `
        <div class="saldo-links">
            <span>${type}</span>
            <p>€0,00</p>
            <small>${voornaam} ${achternaam}</small>
        </div>

        <div class="saldo-rechts">
            <small>IBAN: ${iban}</small>
            <small>Pasnummer: ${pasnummer}</small>
            <small>Geldig t/m: ${geldig}</small>
        </div>
    `;

    overzicht.appendChild(item);

    document.getElementById("voornaam").value = "";
    document.getElementById("achternaam").value = "";
});
