import { useEffect, useState } from 'react';
import { bookSearch } from './api';
import './App.css';
import { isbnSearch } from './isbnapi';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState('');

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
    const params = {
      cert_key: process.env.REACT_APP_NL_API_KEY,
      result_style: 'json',
      page_no: 1,
      page_size: 10,
      isbn: '9791161571379',
    };

    const { data } = await isbnSearch(params);
    console.log(data.docs[0].PAGE);
    setPage(data.docs[0].PAGE);
  };

  useEffect(() => {
    searchHandler();
    searchISBN();
  }, []);
  return (
    <div className='App'>
      <h1>kakao book search api</h1>
      <ul>
        {data.map((book) => (
          <li key={book.isbn}>{book.title}</li>
        ))}
      </ul>
      <h1>page 정보</h1>
      <h2>{page}</h2>
    </div>
  );
}

export default App;
