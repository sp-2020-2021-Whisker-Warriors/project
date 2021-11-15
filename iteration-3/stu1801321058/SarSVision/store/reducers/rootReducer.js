const initialState = {
  userData: {
    firstName: 'Petar',
    middleName: 'Ivanov',
    lastName: 'Malamov',
    hasPass: false,
  },
  cities: [],
  locations: [],
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;
