import { useState } from 'react';

const useSort = ({ list, setList }) => {
  // Состояния сортировки
  const [sortCheck, setSortCheck] = useState({
    name: false,
    count: false,
    distance: false,
  });

  // Логика сортировки
  const sortColumn = (e) => {
    const value = e.nativeEvent.path[1].attributes[2].textContent;
    if (value === 'name') {
      if (!sortCheck[value]) {
        setList(list.map((el) => el)
          .sort((x, y) => (x[value] > y[value] ? 1 : -1)));
      } else {
        setList(list.map((el) => el)
          .sort((x, y) => (x[value] < y[value] ? 1 : -1)));
      }
    } else if (!sortCheck[value]) {
      setList(list.map((el) => el).sort((x, y) => x[value] - y[value]));
    } else {
      setList(list.map((el) => el).sort((x, y) => y[value] - x[value]));
    }
    setSortCheck((prev) => (
      {
        ...prev,
        [value]: !prev[value]
      }
    ));
  };

  return {
    sortCheck,
    sortColumn
  };
};

export default useSort;
