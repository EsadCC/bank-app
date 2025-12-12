document.getElementById("btn-nieuwe-rekening").addEventListener("click", function() {

    let type = prompt("Voer het type rekening in (bijv. 'Rekening', 'Spaarrekening', 'Creditcard')");
    if (!type) return;

    let iban = prompt("Voer het IBAN in (bijv. NLXX...1234)");
    if (!iban) return;

    let pasnummer = prompt("Voer het pasnummer in (bijv. 746G261)");
    if (!pasnummer) return;

    let geldigheid = prompt("Voer geldigheidsdatum in (bijv. 11-2029)");
    if (!geldigheid) return;

    let saldo = prompt("Voer het saldo in (bijv. 500.00)");
    if (!saldo) return;

    const list = document.getElementById("rekeningen-list");

    const newRegel = document.createElement("div");
    newRegel.classList.add("rekeningen-row");

    newRegel.innerHTML = `
        <p>${iban} - ${type}</p>
        <span class="pasNummer">Pas nummer: ${pasnummer}</span>
        <span class="datum kaart1">Geldig t/m: ${geldigheid}</span>
        <div class="progress-bar"></div>
        <span class="bedrag">€${saldo}</span>
    `;

    list.appendChild(newRegel);
});