import { Sidenav, initTE } from "/node_modules/tw-elements";
console.log("This is the start of navbar.js");
initTE({ Sidenav });

document.getElementById("slim-toggler").addEventListener("click", () => {
  const instance = Sidenav.getInstance(document.getElementById("sidenav-4"));
  instance.toggleSlim();
});
