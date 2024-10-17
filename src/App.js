import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './comp/UserList';

function App() {
  const [user, setuser] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>setuser(res.data))
  }, [])
  
  return (
    <div className="App">
      <UserList user={user}/>
      
    </div>
  )
}

export default App;
