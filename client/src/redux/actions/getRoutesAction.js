// Action, который отправляется в reducer и меняет state(состояние)
export const getRoutesAC = (payload) => ({ type: 'GET_ROUTES', payload });

// Thunk, которая после успешного запроса отправляет Action, который меняет state(состояние)
export const getRoutesThunk = () => async (dispatch) => {
  try {
    const response = await fetch('/routes', { method: 'GET' });

    // Раскомментируйте код ниже что бы запустить локально, запрос выше закомментировать
    // const response = await fetch('http://localhost:3001/routes', { method: 'GET' });

    if (response.status === 200) {
      const result = await response.json();
      dispatch(getRoutesAC(result));
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
};
