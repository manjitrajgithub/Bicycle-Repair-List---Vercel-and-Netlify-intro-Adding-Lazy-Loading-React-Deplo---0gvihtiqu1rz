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
let nextId = 1;

export const repairAdded = (owner, model, description) => ({
  type: 'repairAdded',
  payload: {
    id: nextId++,
    owner,
    model,
    description,
    resolved: false,
  },
});

export const repairRemoved = (id) => ({
  type: 'repairRemoved',
  payload: { id },
});

export const repairResolved = (id) => ({
  type: 'repairResolved',
  payload: { id },
});

export const repairUpdated = (id, owner, model, description) => ({
  type: 'repairUpdated',
  payload: { id, owner, model, description },
});

export const editTask = (id, owner, model, description) => ({
  type: 'editTask',
  payload: { id, owner, model, description },
});
