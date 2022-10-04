import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRoutesThunk } from '../../redux/actions/getRoutesAction';

function Table() {
  const routes = useSelector((store) => store.routes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoutesThunk());
  }, []);

  console.log(routes);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Дата</th>
            <th scope="col">Название</th>
            <th scope="col">Количество</th>
            <th scope="col">Расстояние</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((obj) => (
            <tr>
              <td>{obj.date}</td>
              <td>{obj.name}</td>
              <td>{obj.count}</td>
              <td>{obj.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
