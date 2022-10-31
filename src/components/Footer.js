import React from "react";
import "../styles/Footer.css";
import {
  ImCreditCard,
  ImQrcode,
  ImCoinDollar,
  ImBarcode,
  ImFacebook2,
  ImInstagram,
  ImTwitter,
  ImMail2,
} from "react-icons/im";

function Footer() {
  return (
    <div className="containerFooter">
      <div className="footerColunas">
        <div className="footerAtendimento">
          <p className="footerTitle">Atendimento</p>
          <p className="footerSubTitle1">Central de ajuda </p>
          <p className="footerSubTitle1">Como comprar </p>
          <p className="footerSubTitle1">Métodos de pagamento </p>
          <p className="footerSubTitle1">Garantia </p>
          <p className="footerSubTitle1">Devoluções </p>
          <p className="footerSubTitle1">Falar com a gente </p>
        </div>
        <div className="footerSobre">
          <p className="footerTitle">Sobre</p>
          <p className="footerSubTitle1">Sobre nós </p>
          <p className="footerSubTitle1">Politicas </p>
          <p className="footerSubTitle1">Shop </p>
          <p className="footerSubTitle1">Ofertas </p>
        </div>
        <div className="footerPagamento">
          <p className="footerTitle">Pagamento</p>
          <p className="footerSubTitle2">
            <ImCreditCard /> Visa
          </p>
          <p className="footerSubTitle2">
            <ImCreditCard /> Mastercard
          </p>
          <p className="footerSubTitle2">
            <ImQrcode /> Pix
          </p>
          <p className="footerSubTitle2">
            <ImBarcode /> Boleto
          </p>
          <p className="footerSubTitle2">
            <ImCoinDollar /> Crypto
          </p>
        </div>
        <div className="footerRedes">
          <p className="footerTitle">Redes Sociais </p>
          <p className="footerSubTitle2">
            <ImFacebook2 /> Facebook
          </p>
          <p className="footerSubTitle2">
            <ImInstagram /> Instagram
          </p>
          <p className="footerSubTitle2">
            <ImTwitter /> Twitter
          </p>
          <p className="footerSubTitle2">
            <ImMail2 /> E-Mail
          </p>
        </div>
      </div>
      <div className="footerCredit">
        © GoDev Shop Project| GoDev
        <br />
        Compra 100% Segura
      </div>
    </div>
  );
}

export default Footer;
