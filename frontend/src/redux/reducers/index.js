import { combineReducers } from 'redux';

// Ejemplo de un reducer simple
const sampleReducer = (state = { data: 'Hello Redux' }, action) => {
  switch (action.type) {
    case 'SAMPLE_ACTION':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  sample: sampleReducer,
});

export default rootReducer;
