import * as React from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
  label: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({ label }) => {
  return <button className={styles.button}>{label}</button>;
};

export default Button;
