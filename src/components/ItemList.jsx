import { Link } from 'react-router-dom';

const ItemList = () => {
  const items = [
    { id: 1, name: 'Caneta' },
    { id: 2, name: 'Caderno' },
    { id: 3, name: 'Lápis' },
    { id: 4, name: 'Borracha'}
  ];

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link to={`/item/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
