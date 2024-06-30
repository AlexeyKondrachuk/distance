
import ItemShow from './ItemShow';
import '../App'

const ItemList = ({ items, removeItem, changeItem}) => {


const sortItem = items.sort((a, b) => new Date(b.dateState) - new Date(a.dateState))
console.log(sortItem.length)
  
  const renderedItems = sortItem.map((item) => {
    return (
      <ItemShow
        key={item.id}
        item={item}
        removeItem={removeItem}
        changeItem={changeItem}
        
      />
    );
  });

  if (sortItem.length === 0) {
    return <p>
    Введите значение
    </p>
  } else
  
  return (<div className='container'>
    <div className='header_list'>
      <div>Дата (ДД.ММ.ГГ)</div>
      <div>Пройдено км</div>
      <div>Действия</div>
    </div>

    <ul className="item-list">{renderedItems}</ul>
    
    </div>)
  
};

export default ItemList;