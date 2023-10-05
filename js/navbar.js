import { Sidenav, initTE } from "tw-elements";

initTE({ Sidenav });

document.getElementById("slim-toggler").addEventListener("click", () => {
  const instance = Sidenav.getInstance(document.getElementById("sidenav-4"));
  instance.toggleSlim();
});
