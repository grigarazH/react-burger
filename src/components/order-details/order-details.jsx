import styles from './order-details.module.css';
import orderDone from '../../images/done.svg';
import {useSelector} from "react-redux";

const OrderDetails = () => {
    const orderData = useSelector(store => store.order);

    return (
        <>
            {orderData.postOrderRequest && (<p className={"text_type_main-medium mt-30 mb-30"}>Обработка...</p>)}
            {orderData.postOrderError && (<p className={"text_type_main-medium mt-30 mb-30"}>Ошибка: {orderData.error}</p>)}
            {orderData.order && (
                <>
                    <h3 className={styles.orderDetails__number}>{orderData.order.number}</h3>
                    <p className={styles.orderDetails__numberSubtitle}>идентификатор заказа</p>
                    <img className={styles.orderDetails__doneIcon} src={orderDone} alt={`Иконка "готово"`}/>
                    <p className={styles.orderDetails__doneSubtitle}>Ваш заказ начали готовить</p>
                    <p className={styles.orderDetails__waitSubtitle}>Дождитесь готовности на орбитальной станции</p>
                </>
            )}
        </>
    )
}

export default OrderDetails;