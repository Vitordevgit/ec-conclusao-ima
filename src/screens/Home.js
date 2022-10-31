import CardHome from "../components/CardHome";
import { useFetch } from "../hooks/useFetch";
import "../styles/Home.css";

function Home({ handleAddCart }) {
  const data = useFetch("http://localhost:3000/products");
  const roupas = data.slice(0, 12);
  return (
    <div className="containerHome">
      {roupas.map((item) => {
        return (
          <CardHome key={item.id} item={item} handleClick={handleAddCart} />
        );
      })}
    </div>
  );
}
export default Home;
