// import React, { useContext } from "react";
import styles from "./style.module.css";
// import { MdDelete } from "react-icons/md";

const Cart = () => {

  return (
    <div>
      <div className={styles.header}>
        <p className={styles.CartTitle}>الصوره</p>
        <p className={styles.CartTitle}>العنوان</p>
        <p className={styles.CartPrice}>السعر</p>
        <p className={styles.CartPrice}>العمليات</p>
      </div>
      {/* {state.map((e, index) => (
        <div key={index} className={styles.Carts}>
          <img src={e.img} alt={e.title} className={styles.CartImg} />
          <h1 className={styles.CartTitle}>{e.title}</h1>
          <p className={styles.CartPrice}>{e.price} TL</p>
          <button className="btn btn-info d-flex center text-light">
            <MdDelete />
          </button>
        </div>
      ))} */}
      <button type="button" className={`btn btn-primary ${styles.finishOrder}`}>
        اتمام الطلبيه
      </button>
    </div>
  );
};

export default Cart;
