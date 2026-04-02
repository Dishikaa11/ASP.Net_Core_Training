// pages/Products.js
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <h2>Products</h2>
      <Link to="/products/1">Product 1</Link><br/>
      <Link to="/products/2">Product 2</Link>
    </div>
  );
}