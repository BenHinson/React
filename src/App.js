import React, { useState } from 'react';
import './CSS/App.css';

import Create from './Components/companyCreate';
import Data from './Components/companyData';
import Explore from './Components/explore';

// ==================

export default function App() {
  const [items, setItems] = useState([]);

  const addItems = (data, reset) => {reset ? setItems([...data]) : setItems([...items, ...data])}

  return (
    <div className="App">
      <Create addItems={addItems}/>
      <Explore addItems={addItems} items={items}/>
      <Data />
    </div>
  );
}



// context API
// send callback from controls to app.