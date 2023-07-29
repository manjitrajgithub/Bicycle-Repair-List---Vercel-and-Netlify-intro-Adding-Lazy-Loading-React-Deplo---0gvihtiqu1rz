import { combineReducers } from 'redux';

// Initial state for the bicycle
const initialBicycleState = {
  items: [], // List of all repairs
  item: null, // Current value in the text-boxes for updates
  editMode: false, // To know if any list item is being updated
};

// Reducer function for bicycle
const bicycleReducer = (state = initialBicycleState, action) => {
  switch (action.type) {
    // Handle different action types here
    case 'repairAdded':
      // Add a new repair to the list
      // Return updated state
      ...state,
        items: [...state.items, action.payload],
        item: {
          owner: '',
          model: '',
          description: ''
        }
      };
    case 'repairRemoved':
      // Remove a repair from the list
      // Return updated state
  return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id)
      };
    case 'repairResolved':
      // Mark a repair as resolved or unresolved
      // Return updated state
  return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, resolved: !item.resolved }
            : item
        )
      };
    case 'repairUpdated':
      // Update details of a repair
      // Return updated state
  return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        editMode: false,
        item: {
          owner: '',
          model: '',
          description: ''
        }
      };
    case 'editTask':
      // Set the edit mode and item for a repair being updated
      // Return updated state
  return {
        ...state,
        editMode: true,
        item: {
          ...action.payload
        }
      };
    default:
      return state;
  }
};

// Combine all reducers if you have more than one reducer in your app
const rootReducer = combineReducers({
  bicycle: bicycleReducer,
});

export default rootReducer;
