import React, { useState, useEffect } from 'react'
import '../index.css'
import useFetchApiUserTweet from '../hooks/userTweetsFetchApi'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import { red } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import Moment from 'moment'
import { useParams } from 'react-router-dom'

const UserTweet = () => {
  let { id } = useParams()
  const [posts, setPosts] = useState([])
  const { data } = useFetchApiUserTweet(id)
  const formatDate = Moment(data?.data?.createdAt).format('DD-MM-YYYY h:mm A')
  useEffect(() => {
    setPosts(data?.data)
  }, [data])

  return (
    <>
      <Grid container sx={{ maxWidth: '600px', mx: 'auto' }} spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ maxWidth: 600, mt: 5 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {posts?.user?.name.substring(0, 1)}
                </Avatar>
              }
              title={posts?.user?.name}
              subheader={formatDate}
            />
            <CardMedia
              component="img"
              height="194"
              image="/card_test_image.jpg"
              alt="Card test Image"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {posts?.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default UserTweet
