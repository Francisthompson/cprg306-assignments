const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li
      className="border p-4 mb-2 rounded shadow-sm cursor-pointer"
      onClick={() => onSelect({ name, quantity, category })}
    >
      <div className="font-bold">{name}</div>
      <div>Quantity: {quantity}</div>
      <div className="text-sm text-gray-500">Category: {category}</div>
    </li>
  );
};

export default Item;
