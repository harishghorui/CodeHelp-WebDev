import { useState } from "react"


function Card({id, name, info, image, price, removeTour}) {

    const [readMore, setReadMore] = useState(false)
    const description = (readMore) ? info : `${info.substring(0, 200)}....`

    const readMoreHandler = () => {
        setReadMore(!readMore)
    }

    return (
        <div>
            <img src={image} alt="" />

            <div>
                <h4>
                    {`₹ ${price}`}
                </h4>

                <h4>
                    {name}
                </h4>

                <div>
                    {description}

                    <a onClick={readMoreHandler}>
                        {
                            (readMore) ? ` Show Less` : `Read More`
                        }
                    </a>
                </div>
            </div>
            
            <button onClick={() => removeTour(id)}>
                Not Interested
            </button>

        </div>
    )
}

export default Card