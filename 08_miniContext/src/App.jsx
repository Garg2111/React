
import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1> Hello to all</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
