import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Tag() {

  const [tag, setTag] = useState('Cat')
  const {gif, loading, fetchData} = useGif(tag)

  return (
    <div className="bg-blue-500 w-10/12 mt-10 border-2 border-gray-700
    flex flex-col items-center rounded-lg">

      <h2 className="underline underline-offset-4 mb-10">
        RANDOM {tag} GIF
      </h2>

      {
        (loading) ? (<Spinner />) : (<img src={gif} width="450"/>)
      }
      
      <input
       type="text"
       onChange={(event) => setTag(event.target.value)}
       value={tag}
       className="text-lg py-2 rounded-lg mt-5 mb-[3px] text-center"

      />

      <button onClick={() => fetchData()}
        className="mt-5 w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">
        GENERATE
      </button>

    </div>
  );
}
