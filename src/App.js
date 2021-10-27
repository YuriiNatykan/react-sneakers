import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import React from "react";


function App() {
  //отслеживание загрузка товаров
  const [items, setItems] = React.useState([]);

  const [cardItems, setCardItems] = React.useState([]);

  //отслеживание открытия, закрытия корзины
  const [cartOnened, setCartOpened] = React.useState(false);

  //апи, получение данных (useEffect для отслеживания, что загрузка данных 1 раз)
  React.useEffect(() => {
    fetch('https://617820779c328300175f5e2d.mockapi.io/items')
    .then(res => {
      return res.json();
    }).then((json) => {
      setItems(json);
    });
  }, [])

  const onAddToCart = (obj) => {
    setCardItems(prev => [...prev, obj]);
    setCardItems(!cardItems)
  };


  return (
    <div className="wrapper clear">
      {cartOnened && <Drawer items={cardItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)}
      />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">

          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log('Добавили в закладки')}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}

        </div>
      </div>
    </div>
  )
}

export default App;
