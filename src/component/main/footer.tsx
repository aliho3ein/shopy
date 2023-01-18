import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <div className="footerTop">
        <h2>Keine Aktion mehr verpassen</h2>
        <span>
          Melde dich jetzt zu unserem Newsletter an und wir informieren dich
          über die besten Aktionen & Angebote.
        </span>
        <input type="text" placeholder="Deine Email adresse" />
        <button>submit</button>
      </div>
      <div className="footerBottom">
        <div className="deliveryPartner">
          <h3>Unsere Versandpartner</h3>
          <i className="fa-brands fa-dhl" title="DHL"></i>
          <i className="fa-brands fa-ups" title="UPS"></i>
        </div>
        <div className="payment">
          <h3>Einfach bezahlen</h3>
          <i className="fa-brands fa-paypal" title="Paypal"></i>
          <i className="fa-brands fa-cc-mastercard" title="MasterCard"></i>
          <i className="fa-brands fa-bitcoin" title="Bitcoin"></i>
          <i className="fa-brands fa-cc-visa" title="Visa Card"></i>
          <i className="fa-brands fa-google-pay" title="Google Pay"></i>
          <i className="fa-brands fa-cc-amex" title="American Express"></i>
          <i className="fa-brands fa-amazon-pay" title="Amazon Pay"></i>
          <i className="fa-brands fa-apple-pay" title="Apple Pay"></i>
        </div>
        <div className="footerColumn">
          <div className="column">
            <h3>Kontakt</h3>
            <ul>
              <li>Fragen und Antworten</li>
              <li>Shreiben Sie uns</li>
            </ul>
          </div>
          <div className="column">
            <h3>Shopy</h3>
            <ul>
              <li>Über uns</li>
              <li>Jobs & Karriere</li>
              <li>Geschäftskunden</li>
              <li>unsere Marken</li>
              <li>Marken übersicht</li>
              <li>Presse</li>
              <li>Partnervorteile</li>
              <li>Verkaufen auf Shopy</li>
              <li>Reteil Media</li>
            </ul>
          </div>
          <div className="column">
            <h3>Service</h3>
            <ul>
              <li>Übersicht alle Service</li>
              <li>Hilfe & FAQ</li>
              <li>Smartphone Reparatur</li>
              <li>Versandkosten</li>
              <li>Bestellservice</li>
              <li>Technikberatung</li>
              <li>Live-Bratung</li>
              <li>Newsletter Abmeldung</li>
              <li>Mietservice</li>
              <li>Rückgabe</li>
            </ul>
          </div>
          <div className="column">
            <h3>Aktuell Bliebt</h3>
            <ul>
              <li>Playstation</li>
              <li>SmartWatch</li>
              <li>NoteBook</li>
              <li>Smartphone</li>
              <li>Headset</li>
            </ul>
          </div>
        </div>
        <div className="footerSocial">
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-square-twitter"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
