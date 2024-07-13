import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {

  const {pageNum, totalPages, pageHandler} = useContext(AppContext)

  return (
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white'>

      <div className='flex justify-between items-center w-11/12 max-w-[670px] py-2'>

        <div className='flex gap-x-2'>
          {
            pageNum > 1 &&
            <button onClick={() => pageHandler(pageNum-1)}
            className='rounded-md border-2 px-4 py-1'>
              Previous
            </button>
          }
          
          {
            pageNum < totalPages &&
            <button onClick={() => pageHandler(pageNum+1)}
            className='rounded-md border-2 px-4 py-1'>
              Next
            </button>
          }
        </div>

        <p className='font-bold text-sm'>
          Page {pageNum} of {totalPages}
        </p>

      </div>

    </div>
  )
}

export default Pagination