import { setLogin } from '../store/userSlice'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'
import '../styles/LoginLogout.css'

function NotLogin() {
  const dispatch = useDispatch()
  const nameRef = useRef()
  const ageRef = useRef()
  const emailRef = useRef()

  const handleSubmit = () => {
    const nameValue = nameRef.current.value
    const ageValue = ageRef.current.value
    const emailValue = emailRef.current.value
    dispatch(
      setLogin({
        name: nameValue,
        age: ageValue,
        email: emailValue,
      })
    )
  }
  return (
    <>
      <div className="NotLogin">
        <span>Name :</span>
        <input type="text" name="name" placeholder="name" ref={nameRef} />
        <br />
        <span>Age :</span>
        <input type="text" name="age" placeholder="age" ref={ageRef} />
        <br />
        <span>E-mail :</span>
        <input type="text" name="email" placeholder="email" ref={emailRef} />
        <br />
        <button onClick={handleSubmit}>Login</button>
      </div>
    </>
  )
}
export default NotLogin
