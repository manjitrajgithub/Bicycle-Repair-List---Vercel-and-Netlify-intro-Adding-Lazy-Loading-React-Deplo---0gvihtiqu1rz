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

let nextRepairId = 1; // This variable will help in generating unique IDs for repairs

export const repairAdded = ({ owner, model, description }) => {
  return {
    type: 'repairAdded',
    payload: {
      id: nextRepairId++,
      owner,
      model,
      description,
      resolved: false
    }
  };
};

export const repairRemoved = (id) => {
  return {
    type: 'repairRemoved',
    payload: {
      id
    }
  };
};

export const repairResolved = (id) => {
  return {
    type: 'repairResolved',
    payload: {
      id
    }
  };
};

export const repairUpdated = ({ id, owner, model, description }) => {
  return {
    type: 'repairUpdated',
    payload: {
      id,
      owner,
      model,
      description
    }
  };
};

export const editTask = ({ id, owner, model, description }) => {
  return {
    type: 'editTask',
    payload: {
      id,
      owner,
      model,
      description
    }
  };
};

