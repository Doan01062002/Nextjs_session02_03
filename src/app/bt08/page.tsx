// MyPage.tsx
'use client';

import React, { useState } from 'react';
import Pagination from './Pagination';

const MyPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch data for the new page
  };

  return (
    <div>
      <Pagination
        totalPages={20}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MyPage;