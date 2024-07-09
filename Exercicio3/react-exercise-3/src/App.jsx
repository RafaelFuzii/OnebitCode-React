import ProfileCard from "./components/ProfileCard"
import profilePhotoImage from './assets/profile.jpg'


function App() {

  return (
    <>
      <div className="app">
        <ProfileCard 
        profilePhoto={profilePhotoImage} 
        name="John Doe" 
        />
      </div>
    </>
  )
}

export default App
