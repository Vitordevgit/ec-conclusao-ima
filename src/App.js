import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import NavBar from "./components/NavBar";
import Home from "./screens/Home";
import Checkout from "./screens/Checkout";
import { useState } from "react";
import Produto from "./screens/Produto";
import Footer from "./components/Footer";
// import NavBarMobile from "./components/NavBarMobile";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddCart = (item) => {
    setCart([...cart, item]);
  };
  let tela = window.screen.width;
  let mobile = false;
  if (tela < 500) {
    mobile = true;
  }
  console.log("Cart: ==> ", cart);
  console.log("tela: ", tela);
  const cart2 = cart;
  return (
    <div className="App">
      <BrowserRouter>
        <header className="headerApp">
          <NavBar cart2={cart2} />
          {/* <NavBarMobile /> */}
        </header>
        <section className="containerNavigationApp">
          <Routes>
            <Route path="/" element={<Home handleAddCart={handleAddCart} />} />
            <Route path="/roupas" element={""} />
            <Route path="/checkout" element={<Checkout cart={cart2} />} />
            <Route
              path="/produto/:id"
              element={<Produto handleAddCart={handleAddCart} />}
            />
          </Routes>
        </section>
        <footer hidden={mobile}>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
