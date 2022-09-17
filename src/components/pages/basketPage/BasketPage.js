import styles from "./index.module.scss";
import OrderAmount from "../../elements/orderAmount";
import ButtonForOrder from "../../ui/buttonForOrder";
import BasketList from "../../elements/basketList";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ButtonToBack from "../../ui/buttonToBack";
import { useNavigate } from "react-router-dom";

function BasketPage() {
  const basket = useSelector((state) => state.basket.basket);
  const amount = useSelector((state) => state.basket.totalAmount);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className={styles.basket}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerBlock}>
            {/* <Link to="/" className={styles.headerBlock__link}> */}
            <ButtonToBack handleGoBack={goBack} />
            {/* </Link> */}
            <h2 className={styles.headerBlock__title}>
              корзина с выбранными товарами
            </h2>
          </div>
        </div>
      </header>
      <BasketList products={basket} />
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerBlock}>
            <OrderAmount sum={amount} />
            <ButtonForOrder type={"submit"} name={"Оформить заказ"} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BasketPage;
