import logo from "./photos/logo.png";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="contact">
        <img id="logo" src={logo} alt="" />
        <a href="https://www.instagram.com/rifkus.chips/" target="_blank">
          <img
            className="social instagram"
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="Instagram"
            width="24"
          ></img>
        </a>
        <a href="https://www.tiktok.com/@chipsrifkus" target="_blank">
          <img
            className="social tiktok"
            src="https://static.vecteezy.com/system/resources/previews/016/716/450/non_2x/tiktok-icon-free-png.png"
            alt="TikTok"
            width="24"
          ></img>
        </a>
      </div>
      <div className="section">
        <a className="contactez" href="#">
          Contactez-Nous
        </a>
        <a className="politique" href="#">
          Politique de confidentialité
        </a>
        <a className="conditions" href="#">
          Conditions générales d'utilisation
        </a>
      </div>
    </div>
  );
}
