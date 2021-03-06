import axios from "axios";
import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Orders() {
    const { onAddToFavorite, onAddToCart } = React.useContext(AppContext)
    const [orders, setOrders] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('https://617820779c328300175f5e2d.mockapi.io/orders')
                //console.log(data.map((obj) => obj.items).flat()); 2 способа, что б сделать массив массивов
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
            } catch (error) {
                alert('Ошибка при запросе заказов')
                console.log(error);
            }
        })();
    }, [])

    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Мои заказы</h1>
            </div>

            <div className="d-flex flex-wrap">
                { (
            isLoading
                ? [...Array(8)]
                : orders).map((item, index) => (
                    <Card
                        key={index}
                        loading={isLoading}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
}

export default Orders