"use client"
import React, { useState } from 'react';
import Select from './Select';

const IndexPage: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <Select options={options} onChange={handleSelectChange} />
      <p>Selected value: {selectedValue}</p>
    </div>
  );
};

export default IndexPage;