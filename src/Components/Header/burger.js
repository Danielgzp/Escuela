var btnMenu = document.querySelector('logo-container');

let open = false;

btnMenu.addEventListener('click', () => {
  if (!open) {
    btnMenu.classList.add("open");
  } else {
    btnMenu.classList.remove("open");
    open = false;
  }
});
