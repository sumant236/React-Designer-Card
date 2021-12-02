import React from "react";
import styles from "./styling.module.css";

const FunctionCard = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.pizzaImg}
        src="https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=612x612&w=0&h=X5AlEERlt4h86X7U7vlGz3bDaDDGQl4C3MuU99u2ZwQ="
      />
      <div className={styles.innerBox}>
        <h3>Pepperoni Pizza</h3>
        <p style={{ color: "grey" }}>
          Premium pepperoni and cheese is made with real mozzarella on original
          hand-tossed crust.
        </p>
        <div className={styles.details}>
          <p>265 Cal</p>
          <p>P/F/C: 12/10/31</p>
          <p>53.8 &#8451;</p>
        </div>
        <div className={styles.details}>
          <div className={styles.details}>
            <h2>$23.90</h2>
            <h4
              style={{
                textDecoration: "red solid line-through",
                color: "red",
                marginLeft: "10px"
              }}
            >
              $29.90
            </h4>
          </div>
          <button className={styles.btn}>Order</button>
        </div>
      </div>
    </div>
  );
};

export default FunctionCard;
