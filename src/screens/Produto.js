import { useParams } from "react-router-dom";
import ButtonAddCart from "../components/ButtonAddCart";
import CardHome from "../components/CardHome";
import { useFetch } from "../hooks/useFetch";
import "../styles/Produto.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 9,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

function Produto({ handleAddCart }) {
  const { id } = useParams();
  const produtoItem = useFetch("http://localhost:3000/products/" + id);
  const data = useFetch("http://localhost:3000/products");
  const roupas = data
    .filter((e) => {
      return (
        e.id !== parseInt(id) &&
        e.categoria === produtoItem.categoria &&
        e.genero === produtoItem.genero
      );
    })
    .slice(0, 12);
  return (
    <div className="containerProduto">
      <div className="produtoItem">
        <div className="produtoDivImg">
          <img className="produtoImg" src={produtoItem.img} alt="img" />
        </div>
        <div className="produtoInfo">
          <p className="produtoNome">{produtoItem.titulo}</p>
          <p className="produtoDescricao">{produtoItem.descricao}</p>
          Cor: {produtoItem.cor}
          <div className="produtoPreco">
            Preço: R${" "}
            <strong className="precoProduto">
              {produtoItem.preco?.toFixed(2)}
            </strong>
          </div>
          <div className="produtoButtons">
            <ButtonAddCart item={produtoItem} handleAddCart={handleAddCart} />
          </div>
        </div>
      </div>
      <div className="produtosRecomendados">
        <p className="recomendadosTitle">Veja também</p>
        <div className="recomendadosCards">
          <Carousel
            infinite={true}
            containerClass="carousel-container"
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {roupas.map((item) => {
              return (
                <CardHome
                  key={item.id}
                  item={item}
                  handleClick={handleAddCart}
                  hiddenButton={true}
                  className="cardProdutoRecomendado"
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default Produto;
