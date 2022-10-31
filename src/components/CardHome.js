import { useNavigate } from "react-router-dom";
import "../styles/CardHome.css";
import ButtonAddCart from "./ButtonAddCart";

function CardHome({ item, handleClick, hiddenButton }) {
  const navigate = useNavigate();
  return (
    <div
      className="containerCardItem"
      onClick={() => navigate("/produto/" + item.id)}
    >
      <img className="imageCardItem" src={item.img} alt="" />
      <div className="details">
        <p className="titleCardItem">{item.titulo}</p>
        <p className="priceCardItem">{item.preco.toFixed(2)}</p>
      </div>
      <div className="buttonCardHome" hidden={hiddenButton}>
        <ButtonAddCart item={item} handleAddCart={handleClick} />
      </div>
    </div>
  );
}
export default CardHome;
