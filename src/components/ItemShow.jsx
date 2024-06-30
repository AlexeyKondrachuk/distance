import ItemEdit from './ItemEdit';
import { useState } from 'react';
import EditIcon from '../img/edit.svg';
import DeleteIcon from '../img/delete.svg';

const ItemShow = ({ item, removeItem, changeItem }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = (e) => {
    removeItem(item.id);
  };

  const handleEdit = (e) => {
    setShowEdit(true);
  };

  const handleDoubleClick = (e) => {
    changeItem(item.id, item.dateState, item.distance);
  };

  const handleSubmit = (id, dateState, distance) => {
    changeItem(id, dateState, distance);
    setShowEdit(false);
  };
  
   
  if (showEdit) {
    return (
      <li className="item">
        <ItemEdit item={item} onSubmit={handleSubmit} />
      </li>
    );
  }

  return (
    <li className="item" onDoubleClick={handleDoubleClick}>
      <div className='values'>
        <p className='date'>{item.dateState}</p>
        <p className='distance'>{item.distance}</p>
      </div>
      

      <div className="actions">
        <button onClick={handleDelete}>
          <img src={DeleteIcon} title="Delete" />
        </button>
        <button onClick={handleEdit}>
          <img src={EditIcon} title="Edit" />
        </button>
      </div>
    </li>
  );
};

export default ItemShow;
