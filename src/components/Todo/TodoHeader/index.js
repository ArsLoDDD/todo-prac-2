import React from 'react';
import styles from "./TodoHeader.module.scss"
const TodoHeader = () => {
    return (
        <div className={styles.headerContainer}>
            <h2>To-Do List</h2>
        </div>
    );
}

export default TodoHeader;
