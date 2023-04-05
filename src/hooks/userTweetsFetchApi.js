import { useState, useEffect } from 'react'

const useFetchApiUserTweet = (id) => {
  const [data, setData] = useState(undefined)
  const fetchData = async () => {
    const response = await fetch(`http://localhost:5000/fweets/${id}`)
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return { data, fetchData }
}

export default useFetchApiUserTweet
