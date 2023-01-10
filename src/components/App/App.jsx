import React from 'react';
import {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import axios from 'axios';


    function App() {

    const [itemName, setItemName] = useState('');
    const [itemQty, setItemQty] = useState('');
    const [itemUnit, setItemUnit] = useState('');
    const [itemArray, setItemArray] = useState([]);

    useEffect(() => {
        fetchList();
    }, []);

const fetchList = () => {
    axios
      .get("/list")
      .then((response) => {
        console.log("response from fetchList", response.data);
        setItemArray(response.data);
      })
      .catch((error) => {
        console.log("Cannot get list", error);
      });
  };



    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <ul>
                    {itemArray.map(item => (
                    <li key={item.id}>
                        {item.quantity} {item.unit} of {item.name}
                    </li>
                ))}
                </ul>
            </main>
        </div>
    );
}

export default App;

// Unordered list - PLURCHAsed, DELETE by id
//GET, PUT, DELETE, UPDATE
//clear and reset button
