import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import {useEffect} from "react";

const Modal = ({onEscPress, onOverlayClick, children}) => {
    useEffect(() => {
        document.addEventListener("keydown", onEscPress);
        return () => {
            document.removeEventListener("keydown", onEscPress);
        }
    });
    return ReactDOM.createPortal((
        <div className={styles.modal}>
            <div className={styles.modal__container}>
                {children}
            </div>
            <ModalOverlay onClick={onOverlayClick}/>
        </div>
    ), document.querySelector("#modals"));
}

export default Modal;