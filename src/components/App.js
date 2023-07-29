import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  repairAdded,
  repairRemoved,
  repairResolved,
  repairUpdated,
  editTask
} from './actions';

const App = () => {
  const dispatch = useDispatch();
  const bicycle = useSelector((state) => state.bicycle);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { owner, model, description } = bicycle.item;

    if (!owner || !model || !description) {
      alert('Please fill in all fields');
      return;
    }

    if (bicycle.editMode) {
      dispatch(repairUpdated(bicycle.item));
    } else {
      dispatch(repairAdded(bicycle.item));
    }
  };

  const handleEdit = (id) => {
    const itemToEdit = bicycle.items.find((item) => item.id === id);
    dispatch(editTask(itemToEdit));
  };

  const handleDelete = (id) => {
    dispatch(repairRemoved(id));
  };

  const handleResolve = (id) => {
    dispatch(repairResolved(id));
  };

  return (
    <div>
      <h1>Bicycle Repair App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="owner-text-box">Owner:</label>
        <input
          type="text"
          id="owner-text-box"
          value={bicycle.item.owner}
          onChange={(e) =>
            dispatch({ type: 'editTask', payload: { ...bicycle.item, owner: e.target.value } })
          }
        />
        <label htmlFor="model-text-box">Model:</label>
        <input
          type="text"
          id="model-text-box"
          value={bicycle.item.model}
          onChange={(e) =>
            dispatch({ type: 'editTask', payload: { ...bicycle.item, model: e.target.value } })
          }
        />
        <label htmlFor="description-text-box">Description:</label>
        <input
          type="text"
          id="description-text-box"
          value={bicycle.item.description}
          onChange={(e) =>
            dispatch({ type: 'editTask', payload: { ...bicycle.item, description: e.target.value } })
          }
        />
        <button type="submit">+</button>
      </form>
      <ul>
        {bicycle.items.map((item) => (
          <li className="repair-item" key={item.id}>
            <span>{item.owner}</span>
            <span>{item.model}</span>
            <span>{item.description}</span>
            <button onClick={() => handleEdit(item.id)}>Update</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button onClick={() => handleResolve(item.id)}>
              {item.resolved ? 'Undo' : 'Done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
