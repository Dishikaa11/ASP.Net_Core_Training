// pages/ProductDetails.js
import { Outlet, Link, useParams } from "react-router-dom";

export default function ProductDetails() {
  const { productId } = useParams();

  return (
    <div>
      <h2>Product ID: {productId}</h2>

      <Link to="reviews">Reviews</Link> | 
      <Link to="specs">Specs</Link>

      <Outlet />
    </div>
  );
}