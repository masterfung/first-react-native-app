import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
  places: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: {
            uri: 'https://picsum.photos/200/300/?random'
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => {
          return place.key !== action.placeKey; // if returns false, then item is removed
        })
      }
    default:
      return state;
  }
};

export default reducer;
