import React, { useState } from 'react';
import styles from './Select.module.scss';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: SelectOption) => {
    setSelectedValue(option.value);
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className={styles.select}>
      <div className={styles.selectHeader} onClick={toggleOptions}>
        <span>{options.find((o) => o.value === selectedValue)?.label || 'Select'}</span>
        <div className={`${styles.expandIcon} ${isOpen ? styles.expandIcon__open : ''}`}>▼</div>
      </div>
      {isOpen && (
        <div className={styles.selectOptions}>
          {options.map((option, index) => (
            <div
              key={index}
              className={`${styles.selectOption} ${option.value === selectedValue ? styles.selectOption__active : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
              {option.value === selectedValue && <div className={styles.activeIcon}>✓</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;