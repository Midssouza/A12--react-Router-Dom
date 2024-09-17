import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const { itemId } = useParams();

  return (
    <div>
      <h2>Detalhes do Item</h2>
      <p>Item ID: {itemId}</p>
    </div>
  );
};

export default ItemDetail;
