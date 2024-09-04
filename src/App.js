import React, { useState, useEffect } from "react";
import Button from "./Button";
 

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [data, setData] = useState([]);
  const [dataType, setDataType] = useState('users');
  
  const fetchData = async (type) =>{
    try{
      const response = await fetch(`${API_URL}${type}`);
      const result = await response.json();
      setData(result);
      setDataType(type);
    } catch(error) {
      console.error("Error fetching data:", error);

    }
  };
//fetch user data default

useEffect(() => {
  fetchData('users');
}, []);

  return (
    <div className="App">
      <Button fetchData={fetchData}
      />

      <h2>{dataType.charAt(0).toUpperCase() + dataType.slice(1)} Data</h2>
      <ul>
        {
          data.map((item) => (
            <li key={item.id}>{JSON.stringify(item)}</li>
          )
        )
        }
      </ul>
    </div>
    
  );
}

export default App;
