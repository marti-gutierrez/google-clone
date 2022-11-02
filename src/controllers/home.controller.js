import home from "../views/home.html?raw";

export default () => {
  const toggleDay = () => {
    if (!document.documentElement.className) {
      document.documentElement.classList.add("dark");
      logoGoogle.src = "./logo_light.png";
    } else {
      document.documentElement.classList.remove("dark");
      logoGoogle.src = "./GoogleLogo.png";
    }
  };
  const nodeRef = document.createElement("div");
  nodeRef.innerHTML = home;
  const logoGoogle = nodeRef.querySelector("img#logo");
  // btn of dark mode
  const btn = nodeRef.querySelector("#dark");
  btn.addEventListener("click", toggleDay);
  return nodeRef;
};
