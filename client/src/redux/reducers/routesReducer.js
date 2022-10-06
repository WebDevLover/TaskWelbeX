// Reducer который работает с состоянием routes и принимает Action c типом 'GET_ROUTES' и данными
const routesReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_ROUTES':
    return action.payload;
  default:
    return state;
  }
};

export default routesReducer;
