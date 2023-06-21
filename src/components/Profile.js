import Login from './Login'
import NotLogin from './NotLogin'
import { useSelector } from 'react-redux'

function Profile() {
  const myState = useSelector((state) => state.user)
  console.log('myState', myState)
  return (
    <>
      <h1>前端登入系統</h1>
      {myState.profile.login ? <Login /> : <NotLogin />}
    </>
  )
}

export default Profile
