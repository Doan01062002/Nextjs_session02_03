// pages/Home.tsx
import React from 'react';
import BaseButton from './BaseButton';

const Home: React.FC = () => {
  return (
    <div>
      <BaseButton type="success">Success</BaseButton>
      <BaseButton type="warning">Warning</BaseButton>
      <BaseButton type="danger">Danger</BaseButton>
      <BaseButton type="primary">Primary</BaseButton>
    </div>
  );
};

export default Home;