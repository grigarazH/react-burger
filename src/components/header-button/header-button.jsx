import styles from './header-button.module.css';
import PropTypes from "prop-types";

const HeaderButton = ({isActive, title, icon, onClick}) => {
    const Icon = icon;
    return (
        <button className={styles.headerButton} onClick={onClick}>
            <span className={styles.headerButton__icon}><Icon type={isActive ? "primary" : "secondary"}/></span>
            <span className={`${styles.headerButton__title} ${!isActive && styles.headerButton__title_inactive}`}>{title}</span>
        </button>
    )
}

HeaderButton.propTypes = {
    isActive: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.func.isRequired,
    onClick: PropTypes.func,
}

export default HeaderButton;