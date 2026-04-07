


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
  window.location.href = "Home.html";
}


/*
  TRANSACTIE ARRAY (DATA)
*/

const transactions = [
  { id: 1, type: "inkomend", datum: "2024-11-01", bedrag: 150.00 },
  { id: 2, type: "uitgaand", datum: "2024-11-03", bedrag: -50.00 },
  { id: 3, type: "inkomend", datum: "2024-11-05", bedrag: 200.00 },
  { id: 4, type: "uitgaand", datum: "2024-11-10", bedrag: -30.00 }
];


/*
  ELEMENTEN OPHALEN UIT HTML
*/

const txList = document.getElementById("txList");
const typeFilter = document.getElementById("typeFilter");
const dateFilter = document.getElementById("dateFilter");
const sortFilter = document.getElementById("sortFilter");
const applyBtn = document.getElementById("applyBtn");
const resetBtn = document.getElementById("resetBtn");


/*
  FUNCTIE OM TRANSACTIES TE TONEN
*/

function updateTransactions()
{
  txList.innerHTML = "";

  // Kopie van de array maken
  let list = transactions.slice();


  /* FILTER OP TYPE */

  if (typeFilter.value !== "alle")
  {
    let nieuweLijst = [];

    for (let i = 0; i < list.length; i++)
    {
      if (list[i].type === typeFilter.value)
      {
        nieuweLijst.push(list[i]);
      }
    }

    list = nieuweLijst;
    
  }


  /* FILTER OP DATUM */

  if (dateFilter.value !== "")
  {
    let nieuweLijst = [];

    for (let i = 0; i < list.length; i++)
    {
      if (list[i].datum === dateFilter.value)
      {
        nieuweLijst.push(list[i]);
      }
    }

    list = nieuweLijst;
  }


  /* SORTEREN OP DATUM */

  list.sort(function(a, b)
  {
    let datumA = new Date(a.datum);
    let datumB = new Date(b.datum);

    if (sortFilter.value === "nieuw-oud")
    {
      return datumB - datumA;
    }
    else
    {
      return datumA - datumB;
    }
  });


  /* ALS ER GEEN TRANSACTIES ZIJN */

  if (list.length === 0)
  {
    txList.innerHTML = "<p class='empty'>Geen transacties gevonden.</p>";
    return;
  }


  /* TRANSACTIES TONEN */

  for (let i = 0; i < list.length; i++)
  {
    let t = list[i];

    let kleur = "out";
    let teken = "-";

    if (t.type === "inkomend")
    {
      kleur = "in";
      teken = "+";
    }

    let bedrag = Math.abs(t.bedrag).toFixed(2).replace(".", ",");

    txList.innerHTML += `
      <article class="tx-row">
        <p>
          <strong class="${kleur}">${t.type}</strong><br>
          <small>${t.datum}</small>
        </p>

        <p class="tx-amount ${kleur}">
          ${teken}€${bedrag}
        </p>
      </article>
    `;
  }
}



/*
  KNOPPEN
*/

applyBtn.addEventListener("click", function()
{
  updateTransactions();
});

resetBtn.addEventListener("click", function()
{
  typeFilter.value = "alle";
  dateFilter.value = "";
  sortFilter.value = "nieuw-oud";

  updateTransactions();
});


/*
  PAGINA START
*/

updateTransactions();



