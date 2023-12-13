function Card() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 129.99,
      description: 'Description 1',
      imageUrl: 'https://woolandprince.com/cdn/shop/products/20180511_Wool_Prince_00430-HR_800x800_crop_top.jpg?v=1591104415',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 229.99,
      description: 'Description 2',
      imageUrl: 'https://woolandprince.com/cdn/shop/products/20180511_Wool_Prince_00430-HR_800x800_crop_top.jpg?v=1591104415',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 339.99,
      description: 'Description 3',
      imageUrl: 'https://woolandprince.com/cdn/shop/products/20180511_Wool_Prince_00430-HR_800x800_crop_top.jpg?v=1591104415',
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-6">
            <div className="card" style={{ width: '18rem' }}>
              <img src={product.imageUrl} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
