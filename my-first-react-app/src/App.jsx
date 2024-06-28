import { useState } from 'react'
import General from './components/General.jsx'
import './App.css'

const initialProfile = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: ''

} 

function App() {
  const [profile, setProfile] = useState(initialProfile)
  const [counter, setCounter] = useState(0);

  setInterval(() => {
    setCounter(count => count + 1)
  }, 1000);

  function handleChange(e) {
    setProfile({
      ...profile, 
      [e.target.id]: e.target.value})
  }

  return (
    <>
      <General firstName={profile.firstName} lastName={profile.lastName} email={profile.email} phoneNumber={profile.phoneNumber} handleChange={handleChange}/>
      <h2>First Name</h2>
      <p>{profile.firstName}</p>

      <h2>Last Name</h2>
      <p>{profile.lastName}</p>

      <h2>Email</h2>
      <p>{profile.email}</p>

      <h2>Phone Number</h2>
      <p>{profile.phoneNumber}</p>

      <p>{counter} seconds have passed.</p>


    </>
  )
}

export default App
