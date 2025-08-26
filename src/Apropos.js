import red from "./photos/red.png";
export default function Apropos() {
  return (
    <div id="Apropos">
      <div className="Apropos">
        <img src={red} alt="" />
        <p>
          <span style={{ color: "red" }}>Rifkus</span> est une marque 100 %
          algérienne de chips, lancée en novembre 2024 par Farouk Boudjemline,
          plus connu sous le nom de Rifka. Grâce à une vision innovante et une
          approche jeune et décalée, Rifkus s’est imposée comme une référence
          incontournable dans le monde du snack en Algérie.
        </p>
      </div>
    </div>
  );
}
