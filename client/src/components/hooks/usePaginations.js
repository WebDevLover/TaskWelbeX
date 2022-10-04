import { useState } from 'react';

const usePagination = ({ contentPerPage, count }) => {
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(count / contentPerPage);

  const lastIndex = page * contentPerPage;

  const firstIndex = lastIndex - contentPerPage;

  const changePage = (direction) => {
    setPage((state) => {
      if (direction) {
        if (state === pageCount) {
          return state;
        }
        return state + 1;
      }
      if (state === 1) {
        return state;
      }
      return state - 1;
    });
  };

  const setPageSAFE = (num) => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    firstIndex,
    lastIndex,
    page,
  };
};

export default usePagination;
