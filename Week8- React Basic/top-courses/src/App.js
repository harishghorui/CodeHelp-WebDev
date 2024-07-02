import './App.css';
// import './index.css'
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { filterData, apiUrl } from './data';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function App() {

  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(filterData[0].title)

  const getCourses = async() => {

    try {
      const response = await fetch(apiUrl)
      const output = await response.json()
      setCourses(output.data)
    }
    catch (error) {
      console.log("error");
    }
    
    setLoading(false)
  }

  useEffect(() => {
    getCourses()
  }, [])
  
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">

      <div>
        <Navbar/>
      </div>
      
      <div className="bg-bgDark2">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}/>
        </div>
        
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? <Spinner/> : <Cards courses={courses} category={category}/>
          }
        </div>
      </div>

    </div>
  );
}

export default App;
