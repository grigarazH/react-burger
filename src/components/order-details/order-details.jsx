import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './order-details.module.css';
import orderDone from '../../images/done.svg';
import PropTypes from "prop-types";

const OrderDetails = ({onCloseClick}) => {
    return (
        <>
            <span className={styles.orderDetails__closeIcon}><CloseIcon type={'primary'} onClick={onCloseClick}/></span>
            <h3 className={styles.orderDetails__number}>034536</h3>
            <p className={styles.orderDetails__numberSubtitle}>идентификатор заказа</p>
            <img className={styles.orderDetails__doneIcon} src={orderDone} alt={`Иконка "готово"`}/>
            <p className={styles.orderDetails__doneSubtitle}>Ваш заказ начали готовить</p>
            <p className={styles.orderDetails__waitSubtitle}>Дождитесь готовности на орбитальной станции</p>
        </>
    )
}

OrderDetails.propTypes = {
    onCloseClick: PropTypes.func.isRequired,
}

export default OrderDetails;