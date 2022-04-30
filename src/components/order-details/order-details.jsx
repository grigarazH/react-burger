import styles from './order-details.module.css';
import orderDone from '../../images/done.svg';
import OrderContext from "../../services/order-context";
import {useContext} from "react";
import orderContext from "../../services/order-context";

const OrderDetails = () => {
    const orderData = useContext(orderContext);

    return (
        <>
            <h3 className={styles.orderDetails__number}>{orderData.number}</h3>
            <p className={styles.orderDetails__numberSubtitle}>идентификатор заказа</p>
            <img className={styles.orderDetails__doneIcon} src={orderDone} alt={`Иконка "готово"`}/>
            <p className={styles.orderDetails__doneSubtitle}>Ваш заказ начали готовить</p>
            <p className={styles.orderDetails__waitSubtitle}>Дождитесь готовности на орбитальной станции</p>
        </>
    )
}

export default OrderDetails;