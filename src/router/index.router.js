import pages from "../controllers/index";
const nodeFather = document.getElementById("root");

const router = (route) => {
  nodeFather.innerHTML = "";
  switch (route) {
    case "#/":
      return nodeFather.append(pages.home());
    case "#/images":
      return console.log("images");
    case "#/creating":
      return console.log("Lo siento aun no se crea la pagina");
    default:
      return console.log('Error 404!...')
  }
};

export {router};