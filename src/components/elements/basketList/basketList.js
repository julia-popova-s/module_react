import CardForBasket from "../cardBasket";
function BasketList({ products, onDelete }) {
  return (
    <section className="basket-list">
      <div className="container">
        {products.map((key) => {
          const { id, img, name, price } = key;
          return (
            <CardForBasket
              key={id}
              img={img}
              name={name}
              price={price}
              onDelete={() => onDelete(id)}
            />
          );
        })}
      </div>
    </section>
  );
}
export default BasketList;
