import React from 'react';
import styles from './Pagination.module.css';

// Компонент пагинации
function Pagination({
  prevPage, totalPages, setPage, nextPage, page
}) {
  return (
    <div className={`${styles.mainPagination} pagination`}>
      <button onClick={prevPage} className={`${styles.btn} page-link`} type="button">
        &laquo;
      </button>
      {[...Array(totalPages).keys()].map((el) => (
        <>
          <button
            key={el}
            onClick={() => setPage(el + 1)}
            className={`${styles.btnPage} page-link`}
            value={page === el + 1}
            type="button"
          >
            {el + 1}
          </button>
        </>
      ))}
      <button onClick={nextPage} className={`${styles.btn} page-link`} type="button">
        &raquo;
      </button>
    </div>
  );
}

export default Pagination;
