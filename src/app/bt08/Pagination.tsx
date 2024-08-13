// Pagination.tsx
import React, { useState } from 'react';
import styles from './Pagination.module.scss';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageClick = (page: number) => {
    setActivePage(page);
    onPageChange(page);
  };

  const handlePrevClick = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
      onPageChange(activePage - 1);
    }
  };

  const handleNextClick = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
      onPageChange(activePage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.prevButton}
        onClick={handlePrevClick}
        disabled={activePage === 1}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          className={`${styles.pageButton} ${
            activePage === page ? styles.active : ''
          }`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={styles.nextButton}
        onClick={handleNextClick}
        disabled={activePage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;