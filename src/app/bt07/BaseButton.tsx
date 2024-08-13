// components/BaseButton.tsx
import React from 'react';
import styles from './BaseButton.module.scss';

interface BaseButtonProps {
  type: 'success' | 'warning' | 'danger' | 'primary';
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const BaseButton: React.FC<BaseButtonProps> = ({ type, children, className, onClick, ...props }) => {
  return (
    <button
      className={`${styles.baseButton} ${styles[type]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default BaseButton;