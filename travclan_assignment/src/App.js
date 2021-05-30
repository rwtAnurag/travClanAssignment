import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import { useEffect, useState } from 'react'; 
import UserList from "./components/UserList.js";
export const UserContext = React.createContext();
function App() {

  const [page,setPage] = useState(1);
  const [userData,setUserData] = useState([]);
  const api = `https://intense-tor-76305.herokuapp.com/merchants?_page=${page}&_limit=${3}`;
  const loaddata=()=>{
    fetch(api).then((resp)=>{
      resp.json().then((result)=>{
        console.log(result);
        setUserData(result);
      })
     })
  }
  useEffect(()=>{
        loaddata();
  },[page]);
  return (
    <div className="App">
        <UserContext.Provider value={{userData,setPage}}>
              <UserList  setPage={setPage}/>
        </UserContext.Provider> 
    </div>
  );
}

export default App;
