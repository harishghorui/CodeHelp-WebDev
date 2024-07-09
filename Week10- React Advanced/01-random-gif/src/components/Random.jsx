import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random() {

  const {gif, loading, fetchData} = useGif()

  return (
    <div className="bg-green-300 w-10/12 mt-10 border-2 border-gray-700
    flex flex-col items-center rounded-lg">

      <h2 className="underline underline-offset-4 mb-10">
        A RANDOM GIF
      </h2>

      {
        (loading) ? (<Spinner />) : (<img src={gif} width="450"/>)
      }
      

      <button onClick={() => fetchData()}
      className="mt-10 w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">
        GENERATE
      </button>

    </div>
  );
}
