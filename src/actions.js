/*
Here all the actions are defined.
Example of defining an actoin is as follows

export const repairAdded = (var1,va2) => {
  return {
    type: "actionType1",
    payload: {
      var1,
      var2
    }
  }
}

*/
// action.js

// Action to add a new repair
export const addRepair = (owner, model, description) => ({
  type: 'repairAdded',
  payload: {
    owner,
    model,
    description,
  },
});

// Action to remove a repair
export const removeRepair = (id) => ({
  type: 'repairRemoved',
  payload: {
    id,
  },
});

// Action to resolve/unresolve a repair
export const resolveRepair = (id) => ({
  type: 'repairResolved',
  payload: {
    id,
  },
});

// Action to update a repair
export const updateRepair = (id, owner, model, description) => ({
  type: 'repairUpdated',
  payload: {
    id,
    owner,
    model,
    description,
  },
});

// Action to handle the edit mode
export const editTask = (id, owner, model, description) => ({
  type: 'editTask',
  payload: {
    id,
    owner,
    model,
    description,
  },
});
