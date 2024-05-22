import './data';
import React, {useState} from 'react';

function App(data) {
  const [tours, setTours] = useState(data);

  return (
    <div className="App">
      <Tours tours={tours} />
    </div>
  );
}

export default App;
