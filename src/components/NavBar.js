import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import Cart from "./Cart";
import InputSearch from "./InputSearch";
function NavBar({ cart2 }) {
  return (
    <>
      <nav className="containerMenu">
        <Link className="linkTitleNavBar" to="/">
          GoDev<strong>Shop</strong>
        </Link>
        {/* <div className="navBarLinkCategorias"> */}
        <Link className="linkNavBar" to="/">
          Roupas
        </Link>{" "}
        <Link className="linkNavBar" to="/acessorios">
          Acessórios
        </Link>
        {/* </div> */}
        {/* <div className="navBarSearchCart"> */}
        <InputSearch />
        <Cart listaCart={cart2} />
        {/* </div> */}
        {/* <div>
          <Link className="linkNavBar" to="/">
            Entre ou cadastre-se
          </Link>
        </div> */}
      </nav>
    </>
  );
}
export default NavBar;
