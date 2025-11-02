import HeaderMiddleBar from "./HeaderMiddleBar"
import HeaderTopBar from "./HeaderTopBar"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <>
      <HeaderTopBar />
      <HeaderMiddleBar />
      <Navbar/>
    </>
  )
}

export default Header