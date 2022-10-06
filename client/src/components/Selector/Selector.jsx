/* eslint-disable consistent-return */
import React, { useState } from 'react';
import useFilter from '../hooks/useFilter';
import styles from './Selector.module.css';

// Компонент выпадающих списков и поля ввода
function Selector({ routes, setList, setPage }) {
  // Состояния имени поля по котороому будет происходить фильтрация данных
  const [selectInput, setSelectInput] = useState('');

  // Хук отвечающий за логику фильтрации
  const {
    changeHandler, filterHandler,
    selectFilter, setSelectFilter
  } = useFilter({ routes, setList, selectInput, setPage });

  return (
    <div className={`${styles.container}`}>
      {selectInput ? (
        <>
          <select onChange={(e) => setSelectInput(e.target.value)} className={`${styles.selector} ${styles.inpSel}`}>
            <option selected disabled>Выбрать поле</option>
            <option value="name">Навзвание</option>
            <option value="count">Количество</option>
            <option value="distance">Расстояние</option>
          </select>
          <select
            onChange={
              ((e) => setSelectFilter({ ...selectFilter, name: e.target.value }))
            }
            className={`${styles.selector} ${styles.filSel}`}
          >
            <option selected disabled>Фильтрация по</option>
            <option value="equals">Равно</option>
            <option value="larger">Больше</option>
            <option value="less">Меньше</option>
            <option value="contains">Содержит</option>
          </select>
          {selectFilter.name ? (
            <form onSubmit={filterHandler} className={`${styles.form}`}>
              <input onChange={changeHandler} type="text" value={selectFilter.value} />
              <button type="submit" className={`${styles.btn}`}>Поиск</button>
            </form>
          ) : <p className={`${styles.alertInput}`}>Выберите способ фильтрации</p> }
        </>
      ) : (
        <select onChange={(e) => setSelectInput(e.target.value)} className={`${styles.selector}`}>
          <option selected disabled>Выбрать поле</option>
          <option value="name">Навзвание</option>
          <option value="count">Количество</option>
          <option value="distance">Расстояние</option>
        </select>
      )}
    </div>
  );
}

export default Selector;
