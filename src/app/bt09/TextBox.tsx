import React from 'react';
import './textBox.scss';

interface TextBoxProps {
  type: 'success' | 'info' | 'warning' | 'error';
  text: string;
}

const TextBox: React.FC<TextBoxProps> = ({ type, text }) => {
  const getClassName = (): string => {
    switch (type) {
      case 'success':
        return 'text-box--success';
      case 'info':
        return 'text-box--info';
      case 'warning':
        return 'text-box--warning';
      case 'error':
        return 'text-box--error';
      default:
        return '';
    }
  };

  return (
    <div className={`text-box ${getClassName()}`}>
      <span>{text}</span>
    </div>
  );
};

export default TextBox;