import ProfileCard from "./components/ProfileCard"
import profilePhotoImage from './assets/profile.jpg'


function App() {

  return (
    <>
      <div className="app">
        <ProfileCard 
        profilePhoto={profilePhotoImage} 
        name="John Doe" 
        about="Full-stack Javascript developer at Acme Inc." 
        phone="+5511987654321" 
        email="john.doe@email.com"
        />
      </div>
    </>
  )
}

export default App
