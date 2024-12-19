import React, { ChangeEventHandler } from 'react';
import styles from './textField.module.css';

interface textFieldProps {
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    placeholder: string,
    name: string,
}

export const TextField: React.FC<textFieldProps> = (props) => {

    return (
        <input type="text" className={styles.textField} {...props} />
    )
}