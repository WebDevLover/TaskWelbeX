export const getRoutesAC = (payload) => ({ type: 'GET_ROUTES', payload });

export const getRoutesThunk = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/routes', { method: 'GET' });

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
