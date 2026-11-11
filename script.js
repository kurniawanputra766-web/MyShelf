const button =
  document.querySelector(".menu");
const sidebar =
  document.querySelector(".sidebar");
const backdrop = 
  document.querySelector(".backdrop");

function closeSidebar() {
  sidebar.classList.remove("open");
  backdrop.classList.remove("open");
  button.setAttribute("aria-expanded", "false");
}

button.addEventListener("click", function () {
  const isOpen = sidebar.classList.toggle("open");

  backdrop.classList.toggle("open", isOpen);
  button.setAttribute("aria-expanded", isOpen);
});

backdrop.addEventListener("click", closeSidebar)