import { createSlice, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import Profile from './Profile'

function Test() {
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
        // console.log('action', action)
        state.profile = {}
      },
      setLogOut: (state) => {
        state.profile = initialState
      },
    },
  })
  const { setLogin, setLogOut } = userSlice.actions
  console.log('why are actions from userSlice ?', userSlice)
  const store = configureStore({
    reducer: {
      user: userSlice.reducer,
    },
  })
  console.log('store:', store)
  // console.log('getState:', store.getState())

  return (
    <Provider store={store}>
      <Profile />
    </Provider>
  )
}

export default Test
