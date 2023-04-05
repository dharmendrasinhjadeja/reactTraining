import TweetsList from './components/tweetslist'
import UserTweetsList from './components/UserDetailsPage'
import LoginComp from './components/LoginComp'
import ProfileComp from './components/ProfileComp'
import UserTweet from './components/UserTweet'
import React from 'react'
import ProtectedRoute from './routing/ProtectedRoute'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'

export default function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<TweetsList />}></Route>
          </Route>
          <Route path="/login" element={<LoginComp />} />
          <Route path="/user-details/:id" element={<UserTweetsList />} />
          <Route path="/fweets/:id" element={<UserTweet />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/user-profile" element={<ProfileComp />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}
