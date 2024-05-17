import './App.css';
import Items from './components/Items';
import ItemsDOB from './components/ItemsDOB';
import Card from './components/Card';

// function App() {
//   return (
//     <div className="App">
//       <Items></Items>
//       <ItemsDOB></ItemsDOB>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Items name="Harish"></Items>
//       <ItemsDOB date="02" month="Jan" year="1996"></ItemsDOB>

//       <Items name="Love"></Items>
//       <ItemsDOB date="22" month="June" year="1999"></ItemsDOB>
//     </div>
//   );
// }

// function App() {
//   const response = [
//     {name:"Harish", date:"02", month:"Jan", year:"1996"},
//     {name:"Love", date:"22", month:"June", year:"2001"}
//   ];

//   return (
//     <div className="App">
//       <Items name={response[0].name}></Items>
//       <ItemsDOB date={response[0].date} month={response[0].month} year={response[0].year}></ItemsDOB>

//       <Items name={response[1].name}></Items>
//       <ItemsDOB date={response[1].date} month={response[1].month} year={response[1].year}></ItemsDOB>
//     </div>
//   );
// }

// // child element of a component
// function App() {
//   const response = [
//     {name:"Harish", date:"02", month:"Jan", year:"1996"},
//     {name:"Love", date:"22", month:"June", year:"2001"}
//   ];

//   return (
//     <div className="App">
//       <Items name={response[0].name}>
//         This is a child element of "Items" component
//       </Items>
//       <ItemsDOB date={response[0].date} month={response[0].month} year={response[0].year}></ItemsDOB>

//       <Items name={response[1].name}></Items>
//       <ItemsDOB date={response[1].date} month={response[1].month} year={response[1].year}></ItemsDOB>
//     </div>
//   );
// }

function App() {
  const response = [
    {name:"Harish", date:"02", month:"Jan", year:"1996"},
    {name:"Love", date:"22", month:"June", year:"2001"}
  ];

  return (
    <div className="App">
      <Card>
        <Items name={response[0].name}>
          This is a child element of "Items" component
        </Items>
        <ItemsDOB date={response[0].date} month={response[0].month} year={response[0].year}></ItemsDOB>

        <Items name={response[1].name}></Items>
        <ItemsDOB date={response[1].date} month={response[1].month} year={response[1].year}></ItemsDOB>
      </Card>
      
    </div>
  );
}

export default App;