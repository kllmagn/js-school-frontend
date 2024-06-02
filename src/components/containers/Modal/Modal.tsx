import React from "react";
import styles from "./Modal.module.css";
import {ReactComponent as IconClose} from "icons/close.svg"
import Text from "components/base/Text";

type ModalProps = {
    title?: string;
    isOpen?: Boolean;
    children: React.ReactNode;
    onClose?: () => void;
};

const Modal = ({ title, isOpen = false, onClose, children }: ModalProps) => {
    if (!isOpen) return null;
    return (
      <div className={styles.modalContainer}>
        <div className={styles.modal}>
            <div className={styles.modalHeader}>
                {title && <Text>{title}</Text>}
                <button className={styles.closeButton} onClick={onClose}>
                    <IconClose/>
                </button>
            </div>
            {children}
        </div>
      </div>
    );
};

export default Modal;
