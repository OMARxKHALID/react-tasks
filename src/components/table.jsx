function Table() {
    const tableData = [
      { id: 1, firstName: 'Mark', lastName: 'Otto', handle: '@mdo' },
      { id: 2, firstName: 'Jacob', lastName: 'Thornton', handle: '@fat' },
      { id: 3, firstName: 'Larry', lastName: 'Bird', handle: '@twitter' }
    ];
  
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr key={data.id}>
              <td scope="row">{data.id}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.handle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default Table;