import logo from "./photos/logo.png";
import { useState } from "react";
export default function Header() {
  const [top, setTop] = useState(true);
  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      setTop(true);
    } else {
      setTop(false);
    }
  });

  return (
    <div className={`header-${top ? "top" : "bottom"}`}>
      <img className={`logo-${top ? "top" : "bottom"}`} src={logo} alt="" />
      <a href="#">ACCEUIL</a>
      <a href="#Apropos">À PROPOS</a>
      <a href="#nosProduits">NOS PRODUITS</a>
      <a href="#footer">CONTACTEZ-NOUS</a>
    </div>
  );
}
