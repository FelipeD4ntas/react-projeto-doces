import React from "react";
import Footer from "../Footer";
import Topo from "../Topo";
import './style.css';

function Orders() {
  return (
    <>
      <section className="body-orders">
        <Topo />
        <div className="box-geral box-orders">
          <h1>My Orders</h1>
        </div>
        <div className="box-lista-orders">
          <ul>
            <li>No List Items</li>
          </ul>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Orders;