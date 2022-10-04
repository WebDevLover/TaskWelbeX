import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRoutesThunk } from '../../redux/actions/getRoutesAction';
import usePagination from '../hooks/usePaginations';
import Pagination from '../Pagination/Pagination';
import styles from './Table.module.css';

function Table() {
  const routes = useSelector((store) => store.routes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoutesThunk());
  }, []);

  const {
    firstIndex,
    lastIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 4,
    count: routes.length,
  });

  return (
    <>
      <div className={`${styles.container}`}>
        <table className={`${styles.mainTable} table`}>
          <thead>
            <tr className={`${styles.thColor}`}>
              <th scope="col" className={`${styles.th}`}>Дата</th>
              <th scope="col" className={`${styles.th}`}>Название</th>
              <th scope="col" className={`${styles.th}`}>Количество</th>
              <th scope="col" className={`${styles.th}`}>Расстояние</th>
            </tr>
          </thead>
          <tbody>
            {routes.slice(firstIndex, lastIndex).map((obj) => (
              <tr key={obj.id} className={`${styles.tdColor}`}>
                <td className={`${styles.th}`}>{obj.date}</td>
                <td className={`${styles.th}`}>{obj.name}</td>
                <td className={`${styles.th}`}>{obj.count}</td>
                <td className={`${styles.th}`}>{obj.distance}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          setPage={setPage}
          totalPages={totalPages}
          page={page}
        />
      </div>
    </>
  );
}

export default Table;
