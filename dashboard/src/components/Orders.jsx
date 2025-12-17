import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Orders = () => {
  let [allOrders, setAllOrders] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/allOrders").then((res) => {
      // console.log(res.data);
      setAllOrders(res.data);
    });
  }, []);

  console.log(allOrders);
  return (
    <div className="orders">
      {!allOrders ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div>
          <table border="">
            <tr>
              <th>Stock Name</th>
              <th>Qty.</th>
              <th>Price</th>
            </tr>
            {allOrders.map((item) => {
              const name = item.name;
              const qty = item.qty;
              const price = item.price;

              return (
                <tr>
                  <td>{name}</td>
                  <td>{qty}</td>
                  <td>{price}</td>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
