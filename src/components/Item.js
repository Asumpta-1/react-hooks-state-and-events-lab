import React, {useState} from "react";

function Item({ name, category }) {
  const [insideCart, setInsideCart] = useState(false)
const addToCart = () => {
  setInsideCart(insideCart => !insideCart)
}
  return (
    <li className={insideCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={insideCart ? "remove" : "add"} onClick={addToCart}>{insideCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
