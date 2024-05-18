import React from 'react';
// import './App.css';
import Products from './components/Products';
import NewProduct from './components/NewProduct';

const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 150,
      date: new Date(2021, 8, 10)
    },

    {
      id: 'p2',
      title: 'Surf-Excel',
      amount: 200,
      date: new Date(2021, 2, 10)
    },

    {
      id: 'p3',
      title: 'Tide',
      amount: 100,
      date: new Date(2021, 5, 10)
    },

    {
      id: 'p4',
      title: 'Ariel',
      amount: 250,
      date: new Date(2021, 7, 10)
    }
  ];

  // accessing from Child component-->> Lifting Up
  function printProductData(data) {
    console.log("Data Accessed from Child" , data);
    // console.log(data);
  }

  return (
    <div>
      <NewProduct child={printProductData} />
      <Products items={products} />
    </div>
  );
}

export default App;