import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import { deleteCart, saveCart, updateCart } from "../../store/cart/cartSlice";

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { dataCart } = useAppSelector((state: RootState) => state.cartState);
  const totalPrice =
    dataCart?.length > 0
      ? dataCart?.reduce((total: number, item: any) => {
          return total + item.price * item.quantity;
        }, 0)
      : 0;

  console.log(totalPrice);

  const handleQuantityChange = (
    type: "increment" | "decrement" | "delete",
    item: any
  ) => {
    if (type === "increment") {
      dispatch(updateCart({ id: item.idProduct, qty: item.quantity + 1 }));
    } else if (type === "decrement" && item.quantity > 1) {
      dispatch(updateCart({ id: item.idProduct, qty: item.quantity - 1 }));
    } else if (type === "delete") {
      dispatch(deleteCart({ id: item.idProduct }));
    }

    dispatch(saveCart());
  };

  if (!dataCart || dataCart.length === 0) {
    return (
      <div className="text-center my-5">
        <h2>Your cart is empty</h2>
        <Button
          variant="primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Shop Now
        </Button>
      </div>
    );
  }

 return (
   <Container className="cart-container py-4">
     <h2 className="mb-3">My Cart</h2>
     <h5 className="mb-4">Review Your Order</h5>

     {dataCart?.length > 0 &&
       dataCart.map((item :any, index : number) => {
         const subTotal = item.price * item.quantity;
         return (
           <Card className="cart-item mb-3" key={index}>
             <Row className="g-0 align-items-center">
               <Col xs={3} className="p-1">
                 <img 
                   src={item.image || "defaultImage.jpg"}
                   alt={item.name}
                   className="img-fluid cart-img w-50 h-100"
                 />
               </Col>
               <Col xs={5} className="p-3">
                 <h6 className="mb-1">{item.name}</h6>
                 <p className="mb-1">Rp.{item.price.toLocaleString("id-ID")}</p>
               </Col>
               <Col
                 xs={2}
                 className="d-flex align-items-center justify-content-center">
                 <Button
                   variant="outline-secondary"
                   onClick={() => handleQuantityChange("decrement", item)}>
                   -
                 </Button>
                 <span className="mx-2">{item.quantity}</span>
                 <Button
                   variant="outline-secondary"
                   onClick={() => handleQuantityChange("increment", item)}>
                   +
                 </Button>
               </Col>
               <Col xs={2} className="text-center">
                 <Button
                   variant="danger"
                   onClick={() => handleQuantityChange("delete", item)}>
                   <FaTrashAlt />
                 </Button>
                 <p className="subtotal mt-2">
                   Subtotal: Rp.{subTotal.toLocaleString("id-ID")}
                 </p>
               </Col>
             </Row>
           </Card>
         );
       })}

     <Row className="justify-content-end mt-4">
       <Col xs={6}>
         <p>Qty: {dataCart?.length}</p>
         <h6>Total: Rp.{totalPrice?.toLocaleString("id-ID")}</h6>
       </Col>
     </Row>

     <Button variant="primary" className="checkout-btn mt-3">
       Proceed To Checkout
     </Button>
   </Container>
 );
};

export default Cart;
