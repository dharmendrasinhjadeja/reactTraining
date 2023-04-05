import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Moment from 'moment'

export default function CardComp({
  post: { index, content, user, createdAt },
}) {
  const formatDate = Moment(createdAt).format('DD-MM-YYYY h:mm A')
  return (
    <Card sx={{ minWidth: 275, p: 2 }} key={index}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user?.name || ''}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{formatDate}</Button>
      </CardActions>
    </Card>
  )
}
