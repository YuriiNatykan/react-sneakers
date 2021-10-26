import styles from './Card.module.scss';

function Card(props) {
    const onClickButton = () => {
        alert(props.price)
    }
    return (
        <div class={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between alight-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price}</b>
                </div>
                <button className="button" onClick={onClickButton}>
                    <img width={11} height={11} src="/img/Vector.svg" />
                </button>
            </div>
        </div>
    )
}

export default Card;
