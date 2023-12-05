import { useState } from 'react'
import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

function App() {

  const [data, setData] = useState({})

  async function getData() {
    // Use axios to fetch data from our web server
    try {
      let response = await axios.get(API);
      console.log(response);
      setData( response.data );
    } catch(e) {
      console.error(e.message);
    }
  }

  return (
    <>
      <h1>{data.message}</h1>
      <button onClick={getData}>CLick Me</button>
    </>
  )
}

export default App
