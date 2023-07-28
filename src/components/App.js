import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  repairAdded,
  repairRemoved,
  repairResolved,
  repairUpdated,
  editTask,
} from './action';

const App = () => {
  const dispatch = useDispatch();
  const { items, item, editMode } = useSelector((state) => state);

  const handleAddRepair = () => {
    const { owner, model, description } = item;
    dispatch(repairAdded(owner, model, description));
  };

  const handleRemoveRepair = (id) => {
    dispatch(repairRemoved(id));
  };

  const handleResolveRepair = (id) => {
    dispatch(repairResolved(id));
  };

  const handleUpdateRepair = () => {
    const { id, owner, model, description } = item;
    dispatch(repairUpdated(id, owner, model, description));
  };

  const handleEditTask = (id, owner, model, description) => {
    dispatch(editTask(id, owner, model, description));
  };

  return (
    <div>
      <h1>Bicycle Repair App</h1>
      <form>
        <label htmlFor="owner-text-box">Owner:</label>
        <input
          id="owner-text-box"
          type="text"
          value={item.owner}
          onChange={(e) => handleEditTask(item.id, e.target.value, item.model, item.description)}
        />

        <label htmlFor="model-text-box">Model:</label>
        <input
          id="model-text-box"
          type="text"
          value={item.model}
          onChange={(e) => handleEditTask(item.id, item.owner, e.target.value, item.description)}
        />

        <label htmlFor="description-text-box">Description:</label>
        <input
          id="description-text-box"
          type="text"
          value={item.description}
          onChange={(e) =>
            handleEditTask(item.id, item.owner, item.model, e.target.value)
          }
        />

        <button type="button" onClick={editMode ? handleUpdateRepair : handleAddRepair}>
          +
        </button>
      </form>

      <ul>
        {items.map((repair) => (
          <li key={repair.id} className="repair-item">
            <span>Owner: {repair.owner}</span>
            <span>Model: {repair.model}</span>
            <span>Description: {repair.description}</span>

            <button type="button" onClick={() => handleEditTask(repair.id, repair.owner, repair.model, repair.description)}>
              Update
            </button>
            <button type="button" onClick={() => handleRemoveRepair(repair.id)}>
              Delete
            </button>
            <button type="button" onClick={() => handleResolveRepair(repair.id)}>
              {repair.resolved ? 'Undo' : 'Done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
