import React, { useEffect, useState } from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from 'react-toastify'

function Card(props) {

    let course = props.course
    let likedCourses = props.likedCourses
    let setLikedCourses = props.setLikedCourses

    // description toggling
    const [desc, setDesc] = useState(false)
    let subString = ""

    if(desc === false) {
        subString = `${course.description.substring(0,100)}...`
    }
    else {
        subString = course.description
    }

    // like-dislike toggler
    function likeHandler() {
        
        if(likedCourses.includes(course.id) ) {
            // phele se like hua pada tha
            setLikedCourses((prev) => ( prev.filter((cid) => cid !== course.id) ) )
            toast.error("Like Removed")
        }

        else {
            // case 1 empty array
            if(likedCourses.length === 0) {
                setLikedCourses([course.id])
            }

            // case 2 non-empty array
            else {
                setLikedCourses((prev) => [...prev, course.id])
            }

            toast.success("Liked Successfully")

        }
    }

    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>

            <div className='relative'>
                <div>
                    <img src={course.image.url} alt={course.image.alt}/>
                </div>

                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
                grid place-items-center'>

                    <button onClick={likeHandler}>
                        {
                            likedCourses.includes(course.id) ? 
                            <FcLike fontSize="1.75rem"/> : <FcLikePlaceholder fontSize="1.75rem"/>
                        }
                        
                    </button>
                </div>
            </div>

            <div className='p-4 cursor-pointer' 
            onClick={() => setDesc(prevDesc => !prevDesc)}>

                <p className="text-white font-semibold text-lg leading-6">
                    {course.title}
                </p>

                <p className='mt-2 text-white'>
                    {subString}
                </p>
            </div>
            
        </div>
    )
}

export default Card