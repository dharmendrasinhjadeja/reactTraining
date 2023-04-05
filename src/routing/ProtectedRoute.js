import { NavLink, Outlet } from 'react-router-dom'
import Grid from '@mui/material/Grid'

const ProtectedRoute = () => {
  const userInfo = localStorage.getItem('userToken')

  if (!userInfo) {
    return (
      <Grid container sx={{ maxWidth: '400px', mx: 'auto' }} spacing={2}>
        <Grid item xs={12}>
          <div className="unauthorized">
            <h1>Unauthorized :(</h1>
            <span>
              <NavLink to="/login">Login</NavLink> to gain access
            </span>
          </div>
        </Grid>
      </Grid>
    )
  }
  return <Outlet />
}
export default ProtectedRoute
