import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios'

const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

function useGif(tag) {
    
    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(false)

    async function fetchData() {
        setLoading(true)
        const {data} = await axios.get(
            tag ? `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}` : url
        )
        const imageSource = data.data.images.downsized.url
        setGif(imageSource)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {gif, loading, fetchData}
}

export default useGif