import { useState } from 'react';

const usePagination = ({ contentPerPage, count }) => {
  // Состояния страницы на которой находится клиент
  const [page, setPage] = useState(1);

  // Логика расчета количества страниц
  const pageCount = Math.ceil(count / contentPerPage);

  // Последний индекс элемента массива который будет находится на одной странице
  const lastIndex = page * contentPerPage;

  // Начальный индекс элемента массива который будет находится на одной странице
  const firstIndex = lastIndex - contentPerPage;

  // Логика назначения страницы
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

  // Логика предотвращающая ошибки при назначении страницы
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
