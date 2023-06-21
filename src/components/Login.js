import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setLogOut } from '../store/userSlice'

function Login() {
  const loginState = useSelector((state) => state.user)
  console.log(loginState)
  const dispatch = useDispatch()
  const handleSubmit = () => {
    console.log('Logout')
    dispatch(setLogOut())
  }
  return (
    <>
      <div className="login">
        <p>Name : {loginState.profile.name}</p>
        <p>Age : {loginState.profile.age}</p>
        <p>E-mail : {loginState.profile.email}</p>
        <button onClick={handleSubmit}>Logout</button>
      </div>
    </>
  )
}

export default Login
