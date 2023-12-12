function Dropdown() {
    const dropdownOptions = ['Action', 'Action two', 'Action three'];

    return (
        <>
            <div>
                <div className="dropdown-center">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Dropdown Menu
                    </button>
                    <ul className="dropdown-menu">
                        {dropdownOptions.map((x, index) => (
                            <li key={index}>
                                <a className="dropdown-item" href="#">
                                    {x}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Dropdown;

