import {Logo} from "@ya.praktikum/react-developer-burger-ui-components";
import {BurgerIcon, MenuIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import HeaderButton from "../header-button/header-button";

const AppHeader = () => {
    return (
        <header className={styles.appHeader}>
            <nav className={styles.appHeader__nav}>
                <ul className={styles.appHeader__menuItems}>
                    <li>
                        <HeaderButton isActive={true} icon={BurgerIcon} title={"Конструктор"}/>
                    </li>
                    <li>
                        <HeaderButton isActive={false} icon={MenuIcon} title={"Лента заказов"}/>
                    </li>
                </ul>
                <Logo/>
                <HeaderButton isActive={false} icon={ProfileIcon} title={"Личный кабинет"}/>
            </nav>
        </header>
    )
}

export default AppHeader