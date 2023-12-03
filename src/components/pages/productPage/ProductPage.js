import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Product } from "../../elements/product/";
import { products } from "../../../store/menuList";
import { ButtonOrder } from "../../ui/buttonOrder";
import { ButtonToBack } from "../../ui/buttonToBack";
import { BasketMini } from "../../elements/basketMini";

import styles from "./index.module.scss";

export function ProductPage() {
  const amount = useSelector((state) => state.basket.totalAmount);
  const quantity = useSelector((state) => state.basket.totalQuantity);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const params = useParams();
  const product = products.filter((item) => item.id === params.id);
  const { img, name, description, price, weight } = product[0];

  const handleExit = () => {
    localStorage.setItem("userAuth", false);
    setTimeout(() => navigate("/login"), 1000);
  };

  const userAuth = JSON.parse(localStorage.getItem("userAuth"));
  const nameBtn = userAuth ? "Выйти" : "Войти";

  return (
    <div className={styles.productDetails}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerBlock}>
            <ButtonToBack
              handleGoBack={goBack}
              classNames={styles.headerBlock__btn}
            />
            <BasketMini
              counter={quantity}
              sum={amount}
              classNames={styles.headerBlock__basket}
            />
            <ButtonOrder
              view={"exit"}
              type={"button"}
              handle={handleExit}
              name={nameBtn}
            />
          </div>
        </div>
      </header>
      <Product
        id={params.id}
        img={img}
        name={name}
        description={description}
        price={price}
        weight={weight}
      />
    </div>
  );
}