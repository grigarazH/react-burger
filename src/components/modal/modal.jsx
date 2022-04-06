import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import {useEffect} from "react";
import PropTypes from "prop-types";

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

Modal.propTypes = {
    onEscPress: PropTypes.func.isRequired,
    onOverlayClick: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ])
}

export default Modal;