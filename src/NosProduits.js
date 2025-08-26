import { useState, useEffect } from "react";
import red from "./photos/red.png";
import black from "./photos/black.png";
import blue from "./photos/blue.png";
import yellow from "./photos/yellow.png";
import harissa from "./photos/harissa.webp";

export default function NosProduits() {
  const [positions, setPosition] = useState({
    red: 5,
    black: 2,
    blue: 3,
    yellow: 4,
    harissa: 1,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const { red, black, blue, yellow, harissa } = prev;

        if (red === 5) {
          return {
            ...prev,
            red: 1,
            black: black + 1,
            blue: blue + 1,
            yellow: yellow + 1,
            harissa: harissa + 1,
          };
        }
        if (black === 5) {
          return {
            ...prev,
            black: 1,
            red: red + 1,
            blue: blue + 1,
            yellow: yellow + 1,
            harissa: harissa + 1,
          };
        }
        if (blue === 5) {
          return {
            ...prev,
            blue: 1,
            black: black + 1,
            red: red + 1,
            yellow: yellow + 1,
            harissa: harissa + 1,
          };
        }
        if (yellow === 5) {
          return {
            ...prev,
            yellow: 1,
            black: black + 1,
            blue: blue + 1,
            red: red + 1,
            harissa: harissa + 1,
          };
        }
        if (harissa === 5) {
          return {
            ...prev,
            harissa: 1,
            black: black + 1,
            blue: blue + 1,
            yellow: yellow + 1,
            red: red + 1,
          };
        }

        return prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div id="nosProduits">
      <h1>NOS PRODUITS</h1>
      <div className="nosProduits">
        {positions.red === 1 && (
          <img className={`product-${positions.red}`} src={red} alt=""></img>
        )}
        {positions.black === 1 && (
          <img
            className={`product-${positions.black}`}
            src={black}
            alt=""
          ></img>
        )}
        {positions.blue === 1 && (
          <img className={`product-${positions.blue}`} src={blue} alt=""></img>
        )}
        {positions.yellow === 1 && (
          <img
            className={`product-${positions.yellow}`}
            src={yellow}
            alt=""
          ></img>
        )}
        {positions.harissa === 1 && (
          <img
            className={`product-${positions.harissa}`}
            src={harissa}
            alt=""
          ></img>
        )}

        {positions.red === 2 && (
          <img className={`product-${positions.red}`} src={red} alt=""></img>
        )}
        {positions.black === 2 && (
          <img
            className={`product-${positions.black}`}
            src={black}
            alt=""
          ></img>
        )}
        {positions.blue === 2 && (
          <img className={`product-${positions.blue}`} src={blue} alt=""></img>
        )}
        {positions.yellow === 2 && (
          <img
            className={`product-${positions.yellow}`}
            src={yellow}
            alt=""
          ></img>
        )}
        {positions.harissa === 2 && (
          <img
            className={`product-${positions.harissa}`}
            src={harissa}
            alt=""
          ></img>
        )}
        {positions.red === 3 && (
          <img className={`product-${positions.red}`} src={red} alt=""></img>
        )}
        {positions.black === 3 && (
          <img
            className={`product-${positions.black}`}
            src={black}
            alt=""
          ></img>
        )}
        {positions.blue === 3 && (
          <img className={`product-${positions.blue}`} src={blue} alt=""></img>
        )}
        {positions.yellow === 3 && (
          <img
            className={`product-${positions.yellow}`}
            src={yellow}
            alt=""
          ></img>
        )}
        {positions.harissa === 3 && (
          <img
            className={`product-${positions.harissa}`}
            src={harissa}
            alt=""
          ></img>
        )}
        {positions.red === 4 && (
          <img className={`product-${positions.red}`} src={red} alt=""></img>
        )}
        {positions.black === 4 && (
          <img
            className={`product-${positions.black}`}
            src={black}
            alt=""
          ></img>
        )}
        {positions.blue === 4 && (
          <img className={`product-${positions.blue}`} src={blue} alt=""></img>
        )}
        {positions.yellow === 4 && (
          <img
            className={`product-${positions.yellow}`}
            src={yellow}
            alt=""
          ></img>
        )}
        {positions.harissa === 4 && (
          <img
            className={`product-${positions.harissa}`}
            src={harissa}
            alt=""
          ></img>
        )}
        {positions.red === 5 && (
          <img className={`product-${positions.red}`} src={red} alt=""></img>
        )}
        {positions.black === 5 && (
          <img
            className={`product-${positions.black}`}
            src={black}
            alt=""
          ></img>
        )}
        {positions.blue === 5 && (
          <img className={`product-${positions.blue}`} src={blue} alt=""></img>
        )}
        {positions.yellow === 5 && (
          <img
            className={`product-${positions.yellow}`}
            src={yellow}
            alt=""
          ></img>
        )}
        {positions.harissa === 5 && (
          <img
            className={`product-${positions.harissa}`}
            src={harissa}
            alt=""
          ></img>
        )}
      </div>
    </div>
  );
}
