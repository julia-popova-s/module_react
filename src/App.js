import "./components/reset.css";
import "./index.scss";

import Card from "./components/card.js";
import BasketShop from "./components/basket.js";

function App() {
  return (
    <main className="main">
      <div className="container">
        <header className="header">
          <h1 className="header__title">наша продукция</h1>
          <BasketShop url={"images/basket.svg"} counter={3} sum={3500} />
        </header>
        <div className="menu">
          <Card
            url={"images/1.png"}
            title={"Устрицы по рокфеллеровски"}
            description={"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"}
            price={2700}
            weight={500}
            unit={"г."}
          />
          <Card
            url={"images/2.png"}
            title={"Свиные ребрышки на гриле с зеленью"}
            description={"Не следует, однако забывать, что реализация намеченных плановых"}
            price={1600}
            weight={750}
            unit={"г."}
          />
          <Card
            url={"images/3.png"}
            title={"Креветки по-королевски в лимонном соке"}
            description={
              "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
            }
            price={1820}
            count={7}
            unit={"шт."}
          />
          <Card
            url={"images/4.png"}
            title={"Устрицы по рокфеллеровски"}
            description={"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"}
            price={2700}
            weight={500}
            unit={"г."}
          />
          <Card
            url={"images/5.png"}
            title={"Устрицы по рокфеллеровски"}
            description={"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"}
            price={2700}
            weight={500}
            unit={"г."}
          />
          <Card
            url={"images/6.png"}
            title={"Свиные ребрышки на гриле с зеленью"}
            description={"Не следует, однако забывать, что реализация намеченных плановых"}
            price={1600}
            weight={750}
            unit={"г."}
          />
          <Card
            url={"images/7.png"}
            title={"Креветки по-королевски в лимонном соке"}
            description={
              "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
            }
            price={1820}
            count={7}
            unit={"шт."}
          />
          <Card
            url={"images/8.png"}
            title={"Устрицы по рокфеллеровски"}
            description={"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"}
            price={2700}
            weight={500}
            unit={"г."}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
