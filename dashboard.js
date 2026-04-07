document.addEventListener("DOMContentLoaded", () => {
  const dropDown = document.getElementById("dropDown");
  const toggle = document.getElementById("userToggle");
  const logUit = document.getElementById("logUitDrop");

  if (!dropDown || !toggle) return;

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    dropDown.classList.toggle("active");
  });

  document.addEventListener("click", () => {
    dropDown.classList.remove("active");
  });

  logUit.onclick = function()
  {
    alert("U bent uitgelogd!");
    window.location.href = "Home.html";
  }
});
