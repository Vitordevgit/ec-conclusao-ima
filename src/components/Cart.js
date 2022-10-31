import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

export default function Cart({ listaCart }) {
  const navigateCartToCheckout = useNavigate();
  const cartQuantidade = listaCart.length;
  console.log("lista cart: ", cartQuantidade);
  return (
    <div
      onClick={() => {
        cartQuantidade === 0
          ? alert("Seu carrinho está vazio!")
          : navigateCartToCheckout("/checkout");
      }}
    >
      <div>
        <Badge
          className="badgeCart"
          color="success"
          badgeContent={cartQuantidade}
        >
          <ShoppingCart className="cartIcon" />{" "}
        </Badge>
      </div>
    </div>
  );
}
