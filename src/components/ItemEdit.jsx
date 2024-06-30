import { useState } from 'react';
import CheckIcon from '../img/check.svg';

const ItemEdit = ({ item, onSubmit }) => {
  const [dateState, setDateState] = useState(item.dateState);
  const [distance, setDistance] = useState(item.distance)

  const handleChange = (e) => {
    setDateState(e.target.value);
  };

  const handleChangeDistance = (e) => {
    setDistance(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(item.id, dateState, distance);
  };

  return (
    <form className="todo-edit">
      <input type="date" value={dateState} onChange={handleChange} />
      <input type="number" value={distance} onChange={handleChangeDistance} />
      <button type="submit" onClick={handleSubmit}>
        <img src={CheckIcon} title="Сохранить" />
      </button>
    </form>
  );
};

export default ItemEdit;
