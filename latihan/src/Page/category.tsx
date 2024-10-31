import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { productCategoryFetch } from "../store/product/produkFetch";

export default function category() {
    const dispatch = useAppDispatch();
    const params = useParams();
    const { dataCategory, isloadingCategory, errorCategory } = useAppSelector(
      (state) => state.productCategoryState
    );

    useEffect(() => {
      dispatch(productCategoryFetch(params.category as string));
    }, [params.category]);

    if (isloadingCategory) {
      return <div>Loading...</div>;
    }
    if (errorCategory) {
      return <div>Error: {errorCategory}</div>;
    }

  // const [products, setProducts] = useState<object[]>([]);
  // const { category } = useParams();
  // const location = useLocation();

  // async function getProducts() {
  //   const x: { data: object[] } = await apiFetch.get(
  //     `/product/category/${category}`
  //   );
  //   console.log("asdks", x.data);
  //   setProducts([...x.data]);
  // }

  // useEffect(() => {
  //   getProducts();
  // }, [location]);

  // useMemo(() => {
  //   console.log("products", products);
  // }, [products]);

  return (
    <>
      {dataCategory?.length === 0 ? (
        <h2>no data here!</h2>
      ) : (
       <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}>
      {dataCategory?.length > 0 &&
        dataCategory?.map((product: any) => (
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
                <p className="card-text " style={{ color: "black" }}>
                  {product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
      )}
    </>
  );
}
