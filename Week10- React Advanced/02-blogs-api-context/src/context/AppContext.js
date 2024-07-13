import React, { createContext, useContext, useEffect, useState } from 'react'
import { baseUrl } from '../baseUrl'
import axios from 'axios'

// Step1: Create Context
export const AppContext = createContext()

// Step2: Context Provider
export default function AppContextProvider({children}) {

    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [pageNum, setPageNum] = useState(1)
    const [totalPages, setTotalPages] = useState(null)
    
    async function fetchBlogPosts(page = 1) {
        
        setLoading(true)

        const url = `${baseUrl}?page=${page}`
        try {
            const data = await axios(url)
            .then(res => res.data)
            setPosts(data.posts)
            setPageNum(data.page)
            setTotalPages(data.totalPages)
        }
        catch {
            console.log();
        }
        
        setLoading(false)
    }

    function pageHandler(page) {
        fetchBlogPosts(page)
    }
    
    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        pageNum,
        setPageNum,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        pageHandler,
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}