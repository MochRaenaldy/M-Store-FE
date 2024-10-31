import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { productDetailFetch } from "../../store/product/produkFetch";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addCart, ICart, saveCart } from "../../store/cart/cartSlice";

const detail = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { dataDetail, errorDetail, isLoadingDetail } = useAppSelector(
    (state) => state.productDetailState
  );

  const { dataCart } = useAppSelector((state) => state.cartState);

  const fetchDetailProduct = async () => {
    try {
      dispatch(productDetailFetch(Number(params.id)));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetailProduct();
  }, []);

  const handleAddCart = () => {
    {
      const data: ICart = {
        idProduct: dataDetail?.id,
        name: dataDetail?.name,
        price: dataDetail?.price,
        image: dataDetail?.image,
        quantity: 1,
        totalPrice: dataDetail?.price * 1,
      };
      dispatch(addCart(data));
      dispatch(saveCart());
    }
  };

  console.log(dataCart);

  if (isLoadingDetail) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  if (errorDetail) {
    return (
      <div>
        <h1>{errorDetail}</h1>
      </div>
    );
  }

  if (!dataDetail) {
    return (
      <div>
        <h1>No Product Detail Found</h1>
      </div>
    );
  }

  return (
    <div
      className="container"
      style={{
        marginTop: "50px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
      }}>
      <div className="card" style={{ width: "18rem" }}>
        <img src={dataDetail?.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "black" }}>
            {dataDetail?.name}
          </h5>
         
            <p className="mb-1">
              Rp.{dataDetail.price.toLocaleString("id-ID")}
            </p>
          
          <p className="card-text " style={{ color: "black" }}>
            {dataDetail?.desc}
          </p>
          <a className="btn btn-primary" onClick={handleAddCart}>
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default detail;
