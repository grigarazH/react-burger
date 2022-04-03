import styles from "./modal-overlay.module.css";
import {useEffect, useRef} from "react";
const ModalOverlay = ({onClick}) => {
    // Стейт не менялся через onClick, поэтому использовал реф.
    const overlayEl = useRef(null);
    useEffect(() => {
        if(overlayEl && overlayEl.current) {
            overlayEl.current.addEventListener("click", onClick);
        }
    })
    return (
        <div ref={overlayEl} className={styles.modalOverlay}>
        </div>
    )
}

export default ModalOverlay