import { useEffect, useState } from 'react';
import { bookSearch } from './api';
import './App.css';
import { isbnSearch } from './isbnapi';

function App() {
  const [data, setData] = useState([]);

  const searchHandler = async () => {
    const params = {
      query: '구축',
      sort: 'accuracy',
      page: 1,
      size: 10,
    };

    const { data } = await bookSearch(params);
    console.log(data.documents);
    setData(data.documents);
  };

  const searchISBN = async () => {
    const API_KEY =
      'afcfbefd5423867699f3fe3bedab3f696403f2e3a64c00a81b9d95cdaa9f929d';
    const params = {
      cert_key: API_KEY,
      result_style: 'json',
      page_no: 1,
      page_size: 10,
      isbn: '9791161571379',
    };

    const { data } = await isbnSearch(params);
    console.log(data.docs);
  };

  useEffect(() => {
    searchHandler();
    searchISBN();
  }, []);
  return (
    <div className='App'>
      <ul>
        {data.map((book) => (
          <li key={book.isbn}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
