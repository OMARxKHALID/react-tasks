import Faqs from './components/faqs';
import Dropdown from './components/dropdown';
import Table from './components/table';
import Card from './components/card';
import Form from './components/form';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="mb-4 mt-4">REACT TASKS</h1>
      <div className="row">
        <div className="col-lg-6">
          <h2 className="mb-4">1. FAQs</h2>
          <div className="accordion" id="faqAccordion">
            <Faqs />
          </div>
        </div>

        <div className="col-lg-6">
          <h2 className="mb-4">2. Table</h2>
          <Table />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <h2 className="mb-4">3. Dropdown</h2>
          <div className="dropdown">
            <Dropdown />
          </div>
        </div>

        <div className="col-lg-6">
          <h2 className="mb-4">4. Product Card</h2>
          <Card />
        </div>

      </div>
      <div className="row">
        <div className="col-lg-12">
          <h2 className="mb-4">5. Checkout Form</h2>
          <Form />
        </div>
      </div>

    </div>
  );
}

export default App;

