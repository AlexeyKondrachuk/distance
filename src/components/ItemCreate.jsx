import { useState } from 'react';

const ItemCreate = ({ createItem}) => {
  const [dateState, setDateState] = useState('');
  const [distance, setDistance] = useState('')

 

  const handleChange = (e) => {
   
    setDateState(e.target.value);
  };

  const handleChangeDistance = (e) => {

    setDistance(e.target.value);
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (dateState !== '' && distance !== '')  {
    createItem(dateState, distance);
    setDateState('');
    setDistance('')
  }
    

};

  return (
    <form onSubmit={handleSubmit} className="form">
    <label htmlFor="date" className='label'>Дата (ДД.ММ.ГГ)
      <input
        className='input'
        type="date"
        name="date"
        id="date"
        placeholder="Введите дату"
        value={dateState}
        onChange={handleChange}
      />
      </label>
      <label htmlFor="distance" className='label'>Пройдено км.
        <input
        className='input'
        type="number"
        name="distance"
        id="date"
        placeholder="Введите число"
        value={distance}
        min="0"
        onChange={handleChangeDistance}
      />
      </label>
      <button className='button_create'>OK</button>
    </form>

  );
};

export default ItemCreate;
