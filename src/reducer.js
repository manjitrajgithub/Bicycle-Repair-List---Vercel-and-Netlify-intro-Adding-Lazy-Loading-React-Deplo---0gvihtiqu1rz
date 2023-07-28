const initialState = {
  items: [],
  item: {
    owner: '',
    model: '',
    description: '',
  },
  editMode: false,
};

const bicycleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'repairAdded':
      if (!action.payload.owner || !action.payload.model || !action.payload.description) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, action.payload],
        item: {
          owner: '',
          model: '',
          description: '',
        },
      };

    case 'repairRemoved':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    case 'repairResolved':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? { ...item, resolved: !item.resolved } : item
        ),
      };

    case 'repairUpdated':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                owner: action.payload.owner,
                model: action.payload.model,
                description: action.payload.description,
              }
            : item
        ),
        item: {
          owner: '',
          model: '',
          description: '',
        },
        editMode: false,
      };

    case 'editTask':
      return {
        ...state,
        item: {
          owner: action.payload.owner,
          model: action.payload.model,
          description: action.payload.description,
        },
        editMode: true,
      };

    default:
      return state;
  }
};

export default bicycleReducer;
