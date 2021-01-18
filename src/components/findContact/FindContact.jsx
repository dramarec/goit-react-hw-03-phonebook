import React from "react";
import styles from "./Find.module.css";

const FindContact = ({ filter, onChangeFilter }) => {
    return (
        <>
            <input
                type="text"
                className={styles.input}
                placeholder="Find contacts by name"
                value={filter}
                onChange={onChangeFilter}
            />
        </>
    );
};

export default FindContact;
