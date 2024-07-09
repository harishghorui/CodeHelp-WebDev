import Random from './components/Random'
import Tag from './components/Tag';

export default function App() {

  return (
    <div className="w-full h-full flex flex-col items-center bg-blue-300 pb-10">
      
      <h1 className=' w-11/12 bg-white mt-10 rounded-lg px-10 py-5 font-bold text-3xl text-center'>
        RANDOM GIFS
      </h1>

      <Random/>

      <Tag/>
    </div>
  );
}
