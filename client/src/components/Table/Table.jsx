import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRoutesThunk } from '../../redux/actions/getRoutesAction';
import usePagination from '../hooks/usePaginations';
import useSort from '../hooks/useSort';
import Pagination from '../Pagination/Pagination';
import Selector from '../Selector/Selector';
import styles from './Table.module.css';

// Компонент таблицы данных
function Table() {
  // Изначалная состояние данных, не изменяется при логике сортировки и фильтрации
  const routes = useSelector((store) => store.routes);

  // Динамическое состояние данных
  const [list, setList] = useState([]);

  const dispatch = useDispatch();

  // Хук отвечающий за отправку Thunk для запроса в БД
  useEffect(() => {
    dispatch(getRoutesThunk());
  }, []);

  // Хук отвечающий за назначения динамеского состояния данных из состояния routes
  useEffect(() => {
    if (routes.length) setList(routes);
  }, [routes]);

  // Хук отвечающий за логику сортировкм данных
  const { sortCheck, sortColumn } = useSort({ list, setList });

  // Хук отвечающий за логику пагинации таблицы
  const {
    firstIndex,
    lastIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    // Сколько данных на одной страницы
    contentPerPage: 10,
    // Длина динамического состояния данных
    count: list.length,
  });

  // Логика назначения динамеского состояния данных из состояния routes
  const allDataHandler = () => {
    setList(routes);
  };

  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.container}`}>
        <table className={`${styles.mainTable} table`}>
          <thead>
            <tr className={`${styles.thColor}`}>
              <th scope="col" className={`${styles.th}`}>Дата</th>
              <th scope="col" className={`${styles.th}`} value="name">Название
                <button onClick={sortColumn} type="button" className={`${styles.btnSort}`}>{sortCheck.name ? '↑' : '↓'}</button>
              </th>
              <th scope="col" className={`${styles.th}`} value="count">Количество
                <button onClick={sortColumn} type="button" className={`${styles.btnSort}`}>{sortCheck.count ? '↑' : '↓'}</button>
              </th>
              <th scope="col" className={`${styles.th}`} value="distance">Расстояние
                <button onClick={sortColumn} type="button" className={`${styles.btnSort}`}>{sortCheck.distance ? '↑' : '↓'}</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {list.length ? list.slice(firstIndex, lastIndex).map((obj) => (
              <tr key={obj.id} className={`${styles.tdColor}`}>
                <td className={`${styles.th}`}>{obj.date}</td>
                <td className={`${styles.th}`}>{obj.name}</td>
                <td className={`${styles.th}`}>{obj.count}</td>
                <td className={`${styles.th}`}>{obj.distance}</td>
              </tr>
            )) : <tr className={`${styles.tdColor}`}><td className={`${styles.th}`} colSpan="4" align="center">Данные по запросу не найденны</td></tr>}
          </tbody>
        </table>
        <button onClick={allDataHandler} type="button" className={`${styles.btnViewAll}`}>Показать всё</button>
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          setPage={setPage}
          totalPages={totalPages}
          page={page}
        />
      </div>
      <Selector routes={routes} setList={setList} setPage={setPage} />
    </div>
  );
}

export default Table;
