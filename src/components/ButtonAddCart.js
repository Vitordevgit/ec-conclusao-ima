import "../styles/ButtonAddCart.css";

function ButtonAddCart({ item, handleAddCart }) {
  return (
    <>
      <button
        className="buttonAddCart"
        onClick={(e) => {
          handleAddCart(item);
          e.stopPropagation();
        }}
      >
        Carrinho
      </button>
    </>
  );
}
export default ButtonAddCart;
