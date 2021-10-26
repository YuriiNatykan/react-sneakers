import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

const arr = [
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', 
  price: 12999, 
  imageUrl: '/img/sneakers/1.jpg'},
  {title: 'Мужские Кроссовки Nike Air Max 270', 
  price: 15600, 
  imageUrl: '/img/sneakers/2.jpg'},
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', 
  price: 10400, 
  imageUrl: '/img/sneakers/3.jpg'},
  {title: 'Кроссовки Puma X Aka Boku Future Rider', 
  price: 8900, 
  imageUrl: '/img/sneakers/4.jpg'}
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
           
          {arr.map((obj) => (
              <Card 
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              />
            ))}

        </div>
      </div>
    </div>
  )
}

export default App;
