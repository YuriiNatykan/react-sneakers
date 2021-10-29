import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
import { Route } from 'react-router-dom'
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context"
import Orders from "./pages/Orders";


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
      try {
        const [itemsResponse, cartResponse, favoritesResponse] = await Promise.all([
          axios.get('https://617820779c328300175f5e2d.mockapi.io/items'),
          axios.get('https://617820779c328300175f5e2d.mockapi.io/cart'),
          axios.get('https://617820779c328300175f5e2d.mockapi.io/favorites')
        ])
        
        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных ;(')
        console.error(error)

      }
    }
    fetchData();
  }, [])

  //добавление товаров в корзину
  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://617820779c328300175f5e2d.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const {data} = await axios.post('https://617820779c328300175f5e2d.mockapi.io/cart', obj);
        setCartItems((prev) => prev.map(item => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            };
          }
          return item;
        }))
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину');
      console.error(error);
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
      console.error(error)

    }
  };

  const onRemoveItem = (id) => {
  try {
    axios.delete(`https://617820779c328300175f5e2d.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)))
  } catch (error) {
    alert('Ошибка при удалении из корзины ')
    console.error(error)

  } 
  }

  //добавление данных в строку поиска
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.parentId) === Number(id))
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened, setCartItems, onAddToCart }}>
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOnened} />
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
        <Route path="/orders" exact>
          <Orders />
        </Route>

      </div>
    </AppContext.Provider>
  )
}

export default App;
