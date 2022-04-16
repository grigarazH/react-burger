import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import {useEffect} from "react";
import PropTypes from "prop-types";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = ({onClose, children}) => {
    const handleEsc = e => {
        e.key === "Escape" && onClose();
    }
    useEffect(() => {
        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("keydown", handleEsc);
        }
    }, [onClose]);
    return ReactDOM.createPortal((
        <>
            <div className={styles.modal}>
                <span className={styles.modal__closeIcon}><CloseIcon type={'primary'} onClick={onClose}/></span>
                {children}
            </div>
            <ModalOverlay onClick={onClose}/>
        </>
    ), document.querySelector("#modals"));
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ])
}

export default Modal;