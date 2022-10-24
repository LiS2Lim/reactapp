import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState("Data Area");
  const onCLick = async () => {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setData(res.data)
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <div className="App">
      <header className='header-section'>
        <div className='header-text'>This is my react app</div>
      </header>
      <div className='button' onClick={onCLick}>click</div>
      <h4>data area</h4>
      {data && 
        <div>{JSON.stringify(data[0].title,null)}</div>
      }
      
    </div>
  );
}

export default App;
