import { useEffect } from "react";
import { Link } from "react-router-dom";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { productAllFetch } from "../store/product/produkFetch";

const Product = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector(
    (state: RootState) => state.productAllState
  );
  console.log("Products:", products);

 const fetchProduct = () => {
   dispatch(productAllFetch());
 };

   useEffect(() => {
     fetchProduct();
   }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}>
      {products?.length > 0 &&
        products?.map((product: any) => (
          <Link style={{ textDecoration: "none" }} to={`/detail/${product.id}`}>
            <div
              className="card"
              style={{ width: "18rem", textAlign: "center" }}>
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "black" }}>
                  {product.name}
                </h5>
                <p className="card-text " style={{ color: "black" }}>
                  {product.desc}
                </p>
                <p className="mb-1">
                  Rp.{product.price.toLocaleString("id")}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Product;

