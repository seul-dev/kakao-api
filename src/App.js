import { useEffect, useState } from 'react';
import { bookSearch } from './api';
import './App.css';

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

  useEffect(() => {
    searchHandler();
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
