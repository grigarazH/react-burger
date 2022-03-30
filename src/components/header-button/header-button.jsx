import styles from './header-button.module.css';
import PropTypes from "prop-types";

const HeaderButton = props => {
    const Icon = props.icon;
    return (
        <button className={styles.headerButton} onClick={props.onClick}>
            <span className={styles.headerButton__icon}><Icon type={props.isActive ? "primary" : "secondary"}/></span>
            <span className={`${styles.headerButton__title} ${!props.isActive && styles.headerButton__title_inactive}`}>{props.title}</span>
        </button>
    )
}

HeaderButton.propTypes = {
    isActive: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.func.isRequired,
}

export default HeaderButton;