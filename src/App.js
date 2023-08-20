//備份

import Profile from './components/Profile'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userSlice from './store/userSlice'
// import Test from './components/Test'

function App() {
  const store = configureStore({
    reducer: {
      user: userSlice,
    },
  })

  return (
    <>
      <Provider store={store}>
        <div className="container d-flex flex-column align-items-center">
          <Profile />
          {/* <Test /> */}
        </div>
      </Provider>
    </>
  )
}

export default App
