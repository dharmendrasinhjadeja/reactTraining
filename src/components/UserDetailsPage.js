import React, { useState, useEffect } from 'react'
import '../index.css'
import Stack from '@mui/material/Stack'
import CardComp from '../components/CardPosts'
import useFetchApiUserTweet from '../hooks/userTweetsFetchApi'
import Grid from '@mui/material/Grid'
import { useParams } from 'react-router-dom'

const UserTweetsList = () => {
  let { id } = useParams()
  const [posts, setPosts] = useState([])
  const { data } = useFetchApiUserTweet(id)

  useEffect(() => {
    setPosts(data?.data)
  }, [data])

  return (
    <>
      <Grid container sx={{ maxWidth: '400px', mx: 'auto' }} spacing={2}>
        <Grid item xs={12}>
          <Stack spacing={2} mt={3}>
            {posts && <CardComp key={posts.id} post={posts} />}
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

export default UserTweetsList
