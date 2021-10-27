import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";


function App() {
  //отслеживание загрузка товаров
  const [items, setItems] = React.useState([]);
  //отслеживание товаров в корзине
  const [cardItems, setCardItems] = React.useState([]);
  //отслеживание строки поиска
  const [searchValue, setSearchValue] = React.useState('');
  //отслеживание товаров в избранном
  const [favorites, setFavorites] = React.useState([]);

  //отслеживание открытия, закрытия корзины
  const [cartOnened, setCartOpened] = React.useState(false);

  //апи, получение данных (useEffect для отслеживания, что загрузка данных 1 раз)
  React.useEffect(() => {
    axios.get('https://617820779c328300175f5e2d.mockapi.io/items')
    .then ((res) => {
      setItems(res.data);
    });
    axios.get('https://617820779c328300175f5e2d.mockapi.io/cart')
    .then ((res) => {
      setCardItems(res.data);
    });
    axios.get('https://617820779c328300175f5e2d.mockapi.io/favorite')
    .then ((res) => {
      setFavorites(res.data);
    });
  }, [])

  //добавление товаров в корзину
  const onAddToCart = (obj) => {
    axios.post('https://617820779c328300175f5e2d.mockapi.io/cart', obj);
    setCardItems((prev) => [...prev, obj]);
  };
  //добавление товаров в избранное
  const onAddToFavorite = (obj) => {
    axios.post('https://617820779c328300175f5e2d.mockapi.io/favorite', obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://617820779c328300175f5e2d.mockapi.io/cart/${id}`);
    setCardItems((prev) => prev.filter(item => item.id !== id));
  }

  //добавление данных в строку поиска
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {cartOnened && <Drawer items={cardItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)}
      />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
            <img onClick={() => setSearchValue('')} 
            className="clear cu-p" 
            src="/img/btn-remove.svg" 
            alt="Clear" 
            />)}
            <input onChange = {onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">

          {items
          //поиск и с большой и с маленькой буквы (все в нижнем регистре)
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}

        </div>
      </div>
    </div>
  )
}

export default App;
