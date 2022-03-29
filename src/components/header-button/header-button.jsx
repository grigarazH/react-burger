import styles from './header-button.module.css';

const HeaderButton = props => {
    const Icon = props.icon;
    return (
        <button className={styles.headerButton} onClick={props.onClick}>
            <span className={styles.headerButton__icon}><Icon type={props.isActive ? "primary" : "secondary"}/></span>
            <span className={`${styles.headerButton__title} ${!props.isActive && styles.headerButton__title_inactive}`}>{props.title}</span>
        </button>
    )
}

export default HeaderButton;