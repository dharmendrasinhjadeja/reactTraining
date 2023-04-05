import { useState, useEffect } from 'react'

const useFetchApi = () => {
  //const [posts, setPosts] = useState([])
  const [data, setData] = useState(undefined)
  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/fweets')
    const data = await response.json()
    setData(data.data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return { data, fetchData }
}

export default useFetchApi
