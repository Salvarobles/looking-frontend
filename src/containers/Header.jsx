import NavbarHeader from "../components/Navbar/NavbarHeader"

const Header = (props) => {
  const {account, logout} = props;
  return (
    <header>
      <NavbarHeader account={account} logout={logout}/> 
    </header>
  )
}

export default Header
