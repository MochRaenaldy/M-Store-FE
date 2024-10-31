import { useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { productSearchFetch } from "../store/product/produkFetch";

export default function category() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { dataSearch, isLoadingSearch, errorSearch } = useAppSelector(
    (state) => state.productSearchState
  );

  useEffect(() => {
    dispatch(productSearchFetch(params.name as string));
  }, [params.name]);

  if (isLoadingSearch) {
    return <div>Loading...</div>;
  }
  if (errorSearch) {
    return <div>Error: {errorSearch}</div>;
  }

  // const [products, setProducts] = useState<object[]>([]);
  // const { name } = useParams();
  // const location = useLocation();

  // async function getProducts() {
  //   const x: { data: object[] } = await apiFetch.get(
  //     `/product/search/${name}`
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
      {dataSearch?.length === 0 ? (
        <h2>no products here!</h2>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            padding: "20px",
          }}>
          {dataSearch?.length > 0 &&
            dataSearch?.map((product: any) => (
              <Link
                style={{ textDecoration: "none" }}
                to={`/detail/${product.id}`}>
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
