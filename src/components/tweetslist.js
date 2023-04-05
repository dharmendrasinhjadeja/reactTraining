import React, { useState, useEffect } from 'react'
import '../index.css'
import Stack from '@mui/material/Stack'
import CardComp from './CardPosts'
import useFetchApi from '../hooks/useFetchApi'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import PostTweet from './PostTweet'

const TweetsList = () => {
  const [posts, setPosts] = useState([])
  const { data } = useFetchApi()

  useEffect(() => {
    setPosts(data)
  }, [data])

  return (
    <>
      <Grid container sx={{ maxWidth: '400px', mx: 'auto' }} spacing={2}>
        <Grid item xs={12}>
          <Stack spacing={2} mt={3}>
            <PostTweet />
            {posts &&
              posts.map((post, index) => (
                <>
                  <Link to={`/fweets/${post._id}`}>
                    <CardComp key={index} post={post} />{' '}
                  </Link>
                </>
              ))}
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

export default TweetsList
