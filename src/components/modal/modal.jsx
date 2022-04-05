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
    }, [onEscPress]);
    return ReactDOM.createPortal((
        <>
            <div className={styles.modal}>
                {children}
            </div>
            <ModalOverlay onClick={onOverlayClick}/>
        </>
    ), document.querySelector("#modals"));
}

export default Modal;