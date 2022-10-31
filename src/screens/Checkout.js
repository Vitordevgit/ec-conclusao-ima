import React, { useState } from "react";
import "../styles/Checkout.css";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import PixIcon from "@mui/icons-material/Pix";
import CreditCardIcon from "@mui/icons-material/CreditCard";

function Checkout({ cart }) {
  const [formaEnvio, setFormaEnvio] = useState("pac");
  const subTotal = cart
    .map((item) => item.preco)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  const tipoEnvio = {
    sedex: 45.5,
    pac: 29,
    maxset: 59,
    azul: 32.5,
  };
  const total = subTotal + tipoEnvio[formaEnvio];
  const cartGroup = cart
    .map((item) => {
      const qtd = cart.filter((e) => e.id === item.id).length;
      return {
        ...item,
        qtd,
        total: qtd * item.preco,
      };
    })
    .filter(
      (e, index, self) => self.map((ele) => ele.id).indexOf(e.id) === index
    );
  return (
    <div class="containerCheckout">
      <div className="checkoutPedido">
        <p className="checkoutSubTitle">Seu Pedido</p>
        <table className="tbPedidos">
          <tr>
            <td className="checkoutTitleTable pedidoProduto">Produto</td>
            <td className="checkoutTitleTable pedidoQuantidade">Quantidade</td>
            <td className="checkoutTitleTable pedidoPreco">Preço Unit. (R$)</td>
            <td className="checkoutTitleTable pedidoTotal">Total (R$)</td>
          </tr>
          {cartGroup.map((item) => {
            return (
              <tr key={item.id}>
                <td className="checkoutItemTable">{item.titulo}</td>
                <td className="checkoutItemTable">{item.qtd}</td>
                <td className="checkoutItemTable">{item.preco.toFixed(2)}</td>
                <td className="checkoutItemTable">{item.total.toFixed(2)}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="checkoutDestinoEnvio">
        <div className="checkoutDestino">
          <p className="checkoutSubTitle">Destino</p>
          <div class="endereco">
            <div class="endCadastrado">
              <strong>Três Porquinhos</strong> <br />
              Rua 01 Qd 02 Lt 03 - SN Jd. Floresta <br />
              Goiânia GO <br /> (62) 98877-6655
            </div>
          </div>
        </div>
        <div className="checkoutFormaEnvio">
          <p className="checkoutSubTitle">Forma de Envio</p>
          <div class="envio">
            <div class="formaEnvio">
              <input
                type="radio"
                value="pac"
                checked={"pac" === formaEnvio}
                onClick={() => {
                  setFormaEnvio("pac");
                }}
              />
              <div class="envioBadge">
                <strong>PAC</strong> - R$ 29,00 <br /> 3 a 7 dias
              </div>
            </div>
            <div class="formaEnvio">
              <input
                type="radio"
                value="sedex"
                checked={"sedex" === formaEnvio}
                onClick={() => {
                  setFormaEnvio("sedex");
                }}
              />
              <div class="envioBadge">
                <strong>SEDEX</strong> - R$ 45,50 <br />2 a 3 dias
              </div>
            </div>
            <div class="formaEnvio">
              <input
                type="radio"
                value="azul"
                checked={"azul" === formaEnvio}
                onClick={() => {
                  setFormaEnvio("azul");
                }}
              />
              <div class="envioBadge">
                <strong>AZUL</strong> - R$ 32,50 <br />4 a 6 dias
              </div>
            </div>
            <div class="formaEnvio">
              <input
                type="radio"
                value="maxset"
                checked={"maxset" === formaEnvio}
                onClick={() => {
                  setFormaEnvio("maxset");
                }}
              />
              <div class="envioBadge">
                <strong>MAXSET</strong> - R$ 59,00 <br />
                daqui a pouco
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkoutResumo">
        <p className="checkoutSubTitle">Resumo</p>
        <div class="resumo">
          <table class="tb1">
            <tr class="linhaTb">
              <td class="linha0">Sub-total</td>
              <td class="linha1">R$ {subTotal.toFixed(2)}</td>
            </tr>
            <tr class="linhaTb">
              <td class="linha0">{formaEnvio.toUpperCase()}</td>
              <td class="linha1">R$ {tipoEnvio[formaEnvio].toFixed(2)}</td>
            </tr>
            <tr class="linhaTb">
              <td class="linha0">
                <strong>Total</strong>
              </td>
              <td class="linha1">
                <strong>R$ {total.toFixed(2)}</strong>
              </td>
            </tr>
          </table>
          <div class="txtObs">
            <p class="obsPgto">
              <i>
                em até 3 x R$ 122,67 ou R$ 330,80 com 15% de desconto no pix ou
                boleto.
              </i>
            </p>
          </div>
        </div>
      </div>
      <div className="checkoutFormaPagamento">
        <p class="checkoutSubTitle">Forma de pagamento</p>
        <div class="formaPgto">
          <div class="tipoPgto">
            <input type="radio" />
            <SubtitlesIcon className="iconeFormaPagamento" />
            <p class="txtPgto">BOLETO</p>
          </div>
          <div class="tipoPgto">
            <input type="radio" />
            <PixIcon className="iconeFormaPagamento" />
            <p class="txtPgto">PIX</p>
          </div>
          <div class="tipoPgto">
            <input type="radio" />
            <CreditCardIcon className="iconeFormaPagamento" />
            <p class="txtPgto">CARTÃO</p>
          </div>
        </div>
      </div>
      <button className="checkoutButtonComprar">COMPRAR</button>
    </div>
  );
}
export default Checkout;
