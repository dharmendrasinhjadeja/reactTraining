import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

const ProfileComp = () => {
  const userInfo = JSON.parse(localStorage.getItem('userToken'))

  return (
    <Grid container sx={{ maxWidth: '400px', mx: 'auto' }} spacing={2}>
      <Grid item xs={12}>
        <Stack spacing={2} mt={3}>
          <div className="header-status">
            <h1>Welcome, {userInfo?.username} </h1>
            <h4>Name:{userInfo?.name}</h4>
            <h4>Email:{userInfo?.email}</h4>
          </div>
        </Stack>
      </Grid>
    </Grid>
  )
}
export default ProfileComp
