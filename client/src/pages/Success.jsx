// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
// import { userRequest } from "../requestMethods";
// const Success = () => {
//   const location = useLocation();
//   const data = location.state.stripeData;
//   const cart = location.state.products;
//   const currentUser = useSelector((state) => state.user.currentUser);
//   const [orderId, setOrderId] = useState(null);

//   console.log(cart);
//   console.log(location);
//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       {`Order has been created successfully. Your order number is`}
//       <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
//     </div>
//   );
// };

// export default Success;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userRequest } from "../requestMethods";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state.stripeData;
  const cart = location.state.products;
  //   const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          //   userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <Link to="/" style={{ textDecoration: "none" }}>
        <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      </Link>
    </div>
  );
};

export default Success;
