import React, { useRef, useState } from 'react'
import Button from '@mui/material/Button'

function PostTweet() {
  const userInfo = JSON.parse(localStorage.getItem('userToken'))
  const baseURL = 'http://localhost:5000/fweets'

  const content = useRef(null)

  async function addTweet() {
    window.location.reload()
    const addTweet = {
      content: content.current.value,
      user: userInfo.id,
    }

    try {
      const res = await fetch(`${baseURL}`, {
        method: 'post',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': 'token-value',
        },
        body: JSON.stringify(addTweet),
      })
      console.log(userInfo.id)
      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`
        throw new Error(message)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            ref={content}
            placeholder="Title"
          />

          <Button
            variant="contained"
            onClick={addTweet}
            color="primary"
            sx={{ ml: 9.5 }}
          >
            Tweet
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PostTweet
