import './App.css'
import SubHeader from './Components/SubHeader/SubHeader.tsx'
import HeaderArea from "./Components/HeaderArea/HeaderArea.tsx";

function App() {

  return (
    <>
        <SubHeader
            email="info@company.com"
            address="Sunny Isles Beach, FL 33160"
            socialLinks={{
                facebook: "https://www.facebook.com/",
                twitter: "https://twitter.com/",
                linkedIn: "https://www.linkedin.com/",
                instagram: "https://www.instagram.com/",
            }}
        />
        <HeaderArea />
    </>
  )
}

export default App
