import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profile: {
    name: '',
    age: 0,
    email: '',
    login: false,
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setLogin: (state, action) => {
      console.log('action', action)
      const { name, age, email } = action.payload
      if (action.payload && name !== '' && age !== '' && email !== '') {
        if (age > 100) {
          alert(`你確定你${age}歲?`)
        } else {
          if (
            !email.includes('@gmail.com') &&
            !email.includes('@yahoo.com.tw')
          ) {
            alert('email格式錯誤喔~')
          } else {
            state.profile = {
              name: action.payload.name,
              age: action.payload.age,
              email: action.payload.email,
              login: true,
            }
          }
        }
      } else {
        alert('請先填寫資料~')
      }
    },
    setLogOut: (state) => {
      state.profile = initialState.profile
    },
  },
})

export const { setLogin, setLogOut } = userSlice.actions
export default userSlice.reducer
