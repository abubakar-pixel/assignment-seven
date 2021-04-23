import "./App.css";
import { useState } from "react";
import { useStore, useCart } from "./context/state";

function App() {
  const addToCart = useCart((state) => state.addToCart);
  const items = useCart((state) => state.items);
  const totalPrice = useCart((state) => state.totalPrice);
  const removeFromCart = useCart((state) => state.removeFromCart);

  const [products, setProducts] = useState([
    { id: 1, name: "Bel-Aqua", price: 1.5 },
    { id: 2, name: "Exercise Book", price: 2 },
    { id: 3, name: "Voltic", price: 3 },
    { id: 4, name: "Marker", price: 1 },
    { id: 5, name: "Gobe", price: 5 },
  ]);

  return (
    <div className="App">
      {products.map((product) => (
        <p>
          {product.name} - {product.price}
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </p>
      ))}
      <h1>Cart</h1>
      <h3>Total Price: {totalPrice}</h3>
      <hr />
      {items.lenght === 0 ? (
        <p>No items in cart</p>
      ) : (
        items.map((item) => (
          <p>
            {item.name} - {item.price} - {item.qty}
            <button onClick={() => removeFromCart(item.id)}>remove</button>
          </p>
        ))
      )}
    </div>
  );
}

export default App;
