/* eslint-disable consistent-return */
import { useState } from 'react';

const useFilter = ({ routes, setList, selectInput, setPage, pages }) => {
  // Состояние имени фильтра и значения поля ввода
  const [selectFilter, setSelectFilter] = useState({
    name: '',
    value: '',
  });

  // Логика управвления полем ввода
  const changeHandler = (e) => {
    setSelectFilter({
      ...selectFilter,
      value: e.target.value
    });
  };

  // Логика филтрации
  const filterHandler = (e) => {
    e.preventDefault();
    if (!selectFilter.name) return alert('выберите фильтр');
    switch (selectFilter.name) {
    case 'equals':
      if (selectInput === 'name') {
        setList(routes
          .filter((obj) => obj[selectInput].toLowerCase() === selectFilter.value.toLowerCase()));
      } else {
        setList(
          routes.filter((obj) => +obj[selectInput] === +selectFilter.value)
        );
      }
      break;
    case 'larger':
      if (selectInput === 'name') {
        setList(routes
          .filter((obj) => obj[selectInput].toLowerCase() > selectFilter.value.toLowerCase()));
      } else {
        setList(routes.filter((obj) => +obj[selectInput] > +selectFilter.value));
      }
      break;
    case 'less':
      if (selectInput === 'name') {
        setList(routes
          .filter((obj) => obj[selectInput].toLowerCase() < selectFilter.value.toLowerCase()));
      } else {
        setList(routes.filter((obj) => +obj[selectInput] < +selectFilter.value));
      }
      break;
    case 'contains':
      if (selectInput === 'name') {
        setList(routes
          .filter((obj) => obj[selectInput].toLowerCase()
            .includes(selectFilter.value.toLowerCase())));
      } else {
        setList(routes.filter((obj) => (+obj[selectInput] - +selectFilter.value) >= 0));
      }
      break;
    default:
      break;
    }
    if (pages) setPage(1);
  };

  return {
    changeHandler,
    filterHandler,
    selectFilter,
    setSelectFilter,
  };
};

export default useFilter;
