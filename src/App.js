import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
import { Route } from 'react-router-dom'
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


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
      .then((res) => {
        setItems(res.data);
      });
    axios.get('https://617820779c328300175f5e2d.mockapi.io/cart')
      .then((res) => {
        setCardItems(res.data);
      });
    axios.get('https://617820779c328300175f5e2d.mockapi.io/favorites')
      .then((res) => {
        setFavorites(res.data);
      });
  }, [])

  //добавление товаров в корзину
  const onAddToCart = (obj) => {
    axios.post('https://617820779c328300175f5e2d.mockapi.io/cart', obj);
    setCardItems((prev) => [...prev, obj]);
  };
  //добавление товаров в избранное
  const onAddToFavorite = async (obj) => {
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(`https://617820779c328300175f5e2d.mockapi.io/favorites/${obj.id}`);
    } else {
      const {data} = await axios.post('https://617820779c328300175f5e2d.mockapi.io/favorites', obj);//дожидаемся ответа сервера и только потом передаем данные
      setFavorites((prev) => [...prev, data]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://617820779c328300175f5e2d.mockapi.io/cart/${id}`);
    setCardItems((prev) => prev.filter((item) => item.id !== id));
  }

  //добавление данных в строку поиска
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {cartOnened && <Drawer items={cardItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites
          items={favorites}
          onAddToFavorite={onAddToFavorite} />
      </Route>

    </div>
  )
}

export default App;
