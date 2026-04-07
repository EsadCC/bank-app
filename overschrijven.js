document.addEventListener("DOMContentLoaded", () => {

  // User DropDown
  const dropDown = document.getElementById("dropDown");
  const userToggle = document.getElementById("userToggle");

  if (dropDown && userToggle) {
  userToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    dropDown.classList.toggle("active");
  });

  document.addEventListener("click", () => {
    dropDown.classList.remove("active");
  });
}

// Overschrijven

  const form = document.getElementById("transferForm");
  const bedragInput = document.getElementById("bedragInput");
  const msg = document.getElementById("transferMessage");

  const rekeningen = 
  {
    betaal: document.getElementById("bal-betaal"),
    spaar:  document.getElementById("bal-spaar"),
    cc:     document.getElementById("bal-cc"),
  };

  const naam = 
  {
    betaal: "Betaalrekening",
    spaar: "Spaarrekening",
    cc: "Creditcard",
  };

  function toon(tekst, type) 
  {
    msg.className = "transfer-message " + type;
    msg.textContent = tekst;
    msg.style.display = "block";
  }

  function euroNaarGetal(text) 
  {
    return parseFloat(text.replace("€", "").replace(".", "").replace(",", "."));
  }

  function getalNaarEuro(n) 
  {
    return "€" + n.toFixed(2).replace(".", ",");
  }

  function gekozen(name) 
  {
  return document.querySelector(`input[name="${name}"]:checked`)?.value;
  }


  form.addEventListener("submit", (e) => 
    {
    e.preventDefault();

    const from = gekozen("from");
    const to = gekozen("to");
    const bedrag = parseFloat(bedragInput.value.replace(",", "."));

    if (!from || !to) return toon("Kies van en naar.", "error");
    if (!bedrag || bedrag <= 0) return toon("Vul een geldig bedrag in.", "error");
    if (from === to) return toon("Kies twee verschillende rekeningen.", "error");

    const fromSaldo = euroNaarGetal(rekeningen[from].textContent);
    if (bedrag > fromSaldo) return toon("Onvoldoende saldo.", "error");

    const toSaldo = euroNaarGetal(rekeningen[to].textContent);

    rekeningen[from].textContent = getalNaarEuro(fromSaldo - bedrag);
    rekeningen[to].textContent = getalNaarEuro(toSaldo + bedrag);

    toon(`${getalNaarEuro(bedrag)} overgeschreven van ${naam[from]} naar ${naam[to]}.`, "success");
    bedragInput.value = "";
  });
});