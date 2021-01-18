import React from "react";
import styles from "./ContactsItem.module.css";

const ContactsItem = ({
    dataId,
    name,
    number,
    onRemove,
    completed,
    onUpdate,
}) => {
    return (
        <li className={styles.item}>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={onUpdate}
                    data-id={dataId}
                />
            </label>

            <span className={styles.span}>√</span>
            <p className={styles.text}>{name}</p>
            <p className={styles.text}>{number}</p>

            <button
                data-id={dataId}
                type="button"
                className={styles.button}
                onClick={onRemove}
            >
                Delete
            </button>
        </li>
    );
};

export default ContactsItem;
