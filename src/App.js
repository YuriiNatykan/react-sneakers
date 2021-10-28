import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
import { Route } from 'react-router-dom'
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context"


function App() {
  //отслеживание загрузка товаров
  const [items, setItems] = React.useState([]);
  //отслеживание товаров в корзине
  const [cartItems, setCartItems] = React.useState([]);
  //отслеживание строки поиска
  const [searchValue, setSearchValue] = React.useState('');
  //отслеживание товаров в избранном
  const [favorites, setFavorites] = React.useState([]);

  //отслеживание открытия, закрытия корзины
  const [cartOnened, setCartOpened] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(true);


  //апи, получение данных (useEffect для отслеживания, что загрузка данных 1 раз)
  React.useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get('https://617820779c328300175f5e2d.mockapi.io/items');
      const cartResponse = await axios.get('https://617820779c328300175f5e2d.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://617820779c328300175f5e2d.mockapi.io/favorites');

      setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, [])

  //добавление товаров в корзину
  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://617820779c328300175f5e2d.mockapi.io/cart/${obj.id}`);
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        axios.post('https://617820779c328300175f5e2d.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert('Не удалось найти товары')
    }
  };
  //добавление товаров в избранное
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://617820779c328300175f5e2d.mockapi.io/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post('https://617820779c328300175f5e2d.mockapi.io/favorites', obj);//дожидаемся ответа сервера и только потом передаем данные
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить фавориты')
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://617820779c328300175f5e2d.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  //добавление данных в строку поиска
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened, setCartItems}}>
      <div className="wrapper clear">
        {cartOnened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
        <Header onClickCart={() => setCartOpened(true)} />

        <Route path="/" exact>
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            isLoading={isLoading}
          />
        </Route>

        <Route path="/favorites" exact>
          <Favorites />
        </Route>

      </div>
    </AppContext.Provider>
  )
}

export default App;
