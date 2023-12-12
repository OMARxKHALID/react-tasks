function Card() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 129.99,
      description: 'Description 1',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 229.99,
      description: 'Description 2',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 339.99,
      description: 'Description 3',
    },
  ];

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
