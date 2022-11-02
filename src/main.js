import "./style/style.css";
import "./style/normalize.css";
import { router } from "./router/index.router";

const nodeG = document.querySelector("#link");
let mediaquery = window.matchMedia("(min-width: 540px");

function changeTag(event) {
  if (event.matches) {
    nodeG.innerText = "gmail";
    nodeG.href = "#/gmail";
  } else {
    nodeG.innerText = "todos";
    nodeG.href = "#/";
  }
}

mediaquery.addEventListener("change", changeTag);
window.addEventListener("hashchange", () => router(window.location.hash));

router("#/");
